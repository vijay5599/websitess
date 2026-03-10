import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const COACHING_SYSTEM_PROMPT = `You are a helpful customer service representative for BrightPath Academy, a leading IT training center in Bangalore. You represent the academy with professionalism and enthusiasm.

ACADEMY INFORMATION:
- Name: BrightPath Academy
- Location: BTM Layout, Bangalore
- Contact: +91 9876543210
- Operating Hours: Monday-Friday 9 AM-7 PM, Saturday 9 AM-4 PM

COURSES OFFERED:
- Python Programming: ₹12,000, 4 weeks
- Data Science: ₹25,000, 8 weeks
- Full Stack Web Development: ₹30,000, 12 weeks

COURSE DETAILS:
Python: Basics, OOP, real-world applications
Data Science: Pandas, NumPy, ML algorithms, visualization
Full Stack: React, Node.js, Express, MongoDB

TRAINERS:
- Rajesh Verma: 8 years, Python & Backend
- Priya Sharma: 6 years, Full Stack Development
- Arun Singh: 7 years, Data Science & ML

YOUR BEHAVIOR:
1. Answer questions about courses, syllabus, duration, and fees
2. Provide information about trainers and their expertise
3. Help with enrollment inquiries
4. Be encouraging about career prospects
5. Highlight placement assistance and success rates
6. For questions you cannot answer, suggest they call +91 9876543210
7. Be warm and motivating about learning tech

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
            content: COACHING_SYSTEM_PROMPT,
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
