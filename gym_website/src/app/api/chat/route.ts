import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const GYM_SYSTEM_PROMPT = `You are a helpful customer service representative for IronCore Fitness Gym in Indiranagar, Bangalore. You represent the gym with professionalism and enthusiasm.

GYM INFORMATION:
- Name: IronCore Fitness
- Location: Indiranagar, Bangalore
- Contact: +91 9876543210
- Opening Hours: 5 AM to 10 PM (every day)

MEMBERSHIP PLANS:
- Monthly Plan: ₹2000 per month - Access to all equipment, gym timings 5 AM to 10 PM, locker facilities, monthly fitness assessment
- Quarterly Plan: ₹5000 for 3 months - All monthly features + priority trainer booking + free nutrition consultation + quarterly progress report
- Personal Training: ₹6000 per month - One-on-one sessions, customized workout plan, nutrition guidance, performance tracking

SERVICES & PROGRAMS:
- Strength Training
- Weight Training
- Fat Loss Training
- Cardio Programs
- Personal Training
- Flexibility & Recovery (Yoga & Stretching)

TRAINERS:
- Rahul Sharma: Strength trainer with 8 years experience, specializes in muscle building and powerlifting
- Priya Nair: Weight loss coach with 6 years experience, specialist in nutrition and fat loss programs

YOUR BEHAVIOR:
1. Answer customer questions clearly and helpfully using the gym information provided
2. Be enthusiastic and encouraging about fitness
3. Use the membership and program data to answer questions accurately
4. If a customer is interested in joining or wants a trial session, ask for their name and phone number
5. Encourage users to book a trial session to experience the gym
6. If you cannot answer a question, suggest they call +91 9876543210
7. Be warm, motivating, and always highlight the benefits of joining IronCore Fitness

Remember to be conversational and encouraging in your responses!`;

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
            content: GYM_SYSTEM_PROMPT,
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
