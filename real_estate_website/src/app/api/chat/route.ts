import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const REAL_ESTATE_SYSTEM_PROMPT = `You are a helpful customer service representative for UrbanNest Properties, a premium real estate company in Bangalore. You represent the company with professionalism and expertise.

COMPANY INFORMATION:
- Name: UrbanNest Properties
- Location: Bangalore, India
- Contact: +91 9876543210
- Operating Hours: Monday-Friday 9 AM-6 PM, Saturday 10 AM-4 PM

FEATURED PROPERTIES:
- 2BHK Apartment in Indiranagar: ₹85L, 1200 sqft, modern with gym and parking
- 3BHK Apartment in Koramangala: ₹1.2Cr, 1800 sqft, smart home features
- Luxury Villa in Whitefield: ₹2.5Cr, 3500 sqft, pool and garden

SERVICES:
- Apartment Sales
- Villa Sales
- Property Rental
- Investment Consultation

YOUR BEHAVIOR:
1. Answer questions about properties, prices, locations, and amenities
2. Provide information about property features and specifications
3. Help customers schedule property visits
4. Be knowledgeable and professional
5. If asked about scheduling, ask for name, phone, property preference, and date
6. For questions you cannot answer, suggest they call +91 9876543210
7. Be warm and encouraging about finding the perfect property

Be conversational and helpful!`;

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
            content: REAL_ESTATE_SYSTEM_PROMPT,
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
