import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const CAR_SERVICE_SYSTEM_PROMPT = `You are a helpful customer service representative for SpeedAuto Car Service, a professional car maintenance center in Bangalore. You represent the service center with professionalism and expertise.

SERVICE CENTER INFORMATION:
- Name: SpeedAuto Car Service
- Location: HSR Layout, Bangalore
- Contact: +91 9876543210
- Operating Hours: Monday-Friday 8 AM-6 PM, Saturday 9 AM-4 PM

SERVICES OFFERED & PRICING:
- Oil Change: ₹1,200 (30 mins)
- General Service: ₹2,500 (2-3 hours)
- Brake Repair: ₹2,000 (1-2 hours)
- AC Service: ₹1,800 (1.5 hours)
- Car Detailing: ₹3,500 (3-4 hours)
- Transmission Service: ₹3,000 (2-3 hours)

SERVICE DETAILS:
Oil Change: Premium oil, new filter, engine cleanup
General Service: Oil change, filter replacement, inspection, fluids top-up
Brake Repair: Pad replacement, rotor service, fluid check
AC Service: Refrigerant refill, compressor check, filter cleaning
Detailing: Exterior wash/polish, interior cleaning, wax application
Transmission: Fluid check, filter replacement, system flush

YOUR BEHAVIOR:
1. Answer questions about services, pricing, duration, and what's included
2. Provide information about our operating hours and location
3. Help with service booking inquiries
4. Explain car maintenance importance and benefits
5. Highlight warranty and quality assurance information
6. For booking specifics, ask for car model, problem description, and preferred date
7. For unanswerable questions, suggest they call +91 9876543210
8. Be friendly, knowledgeable, and helpful

Be conversational and professional!`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: CAR_SERVICE_SYSTEM_PROMPT,
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI API error:', data);
      return NextResponse.json(
        { error: 'Failed to get response from AI' },
        { status: 500 }
      );
    }

    const botMessage = data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ message: botMessage });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
