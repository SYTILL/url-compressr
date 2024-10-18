import { NextResponse } from 'next/server';


export async function POST(request: Request) {
    const { amount, currency } = await request.json();
  
    // Process the payment here
    return NextResponse.json({ status: 'success', amount, currency });
  }