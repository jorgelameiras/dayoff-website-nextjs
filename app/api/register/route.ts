import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

interface LeadPayload {
  full_name: string
  email: string
  phone: string
  property_address: string
  service_type: string
  frequency: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as Partial<LeadPayload>

    // Validate required fields
    const required: Array<keyof LeadPayload> = [
      'full_name',
      'email',
      'phone',
      'property_address',
      'service_type',
      'frequency',
    ]

    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === '') {
        return NextResponse.json(
          { error: `Missing required field: ${field.replace(/_/g, ' ')}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email ?? '')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const supabaseAdmin = getSupabaseAdmin()

    // If Supabase is not configured, log and return success (dev mode)
    if (!supabaseAdmin) {
      console.log('[CasaFresh] Supabase not configured. Lead data received:', {
        full_name: body.full_name,
        email: body.email,
        phone: body.phone,
        property_address: body.property_address,
        service_type: body.service_type,
        frequency: body.frequency,
      })
      return NextResponse.json({
        success: true,
        message: 'Received (Supabase not yet configured — connect your DB to save leads)',
      })
    }

    // Insert into Supabase
    const { error: dbError } = await supabaseAdmin.from('leads').insert([
      {
        full_name: String(body.full_name).trim(),
        email: String(body.email).trim().toLowerCase(),
        phone: String(body.phone).trim(),
        property_address: String(body.property_address).trim(),
        service_type: String(body.service_type).trim(),
        frequency: String(body.frequency).trim(),
        message: body.message ? String(body.message).trim() : null,
        status: 'new',
      },
    ])

    if (dbError) {
      console.error('[CasaFresh] Supabase insert error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save your request. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[CasaFresh] API error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
