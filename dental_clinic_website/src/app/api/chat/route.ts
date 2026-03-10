export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const systemPrompt = `You are a helpful assistant for SmileCare Dental Clinic in Whitefield, Bangalore.
    Help answer questions about:
    - Treatment costs: Dental Cleaning ₹1200, Root Canal ₹4500, Teeth Whitening ₹3500, Dental Implants ₹25000, Braces Consultation ₹500
    - Operating hours: 9 AM to 8 PM daily
    - Location: Whitefield, Bangalore
    - Services: dental cleaning, root canal, teeth whitening, dental implants, braces consultation
    - Appointment booking
    - Doctor information and qualifications
    Keep responses concise and friendly. If asked about something unrelated, politely redirect to dental services.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return Response.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
