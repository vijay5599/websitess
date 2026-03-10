export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const systemPrompt = `You are a helpful assistant for Glow Studio, a premium salon in Koramangala, Bangalore. 
    Help answer questions about:
    - Service prices: Haircut ₹400, Hair Coloring ₹2500, Facial ₹1500, Manicure ₹600, Pedicure ₹800, Bridal Makeup ₹8000
    - Operating hours: 10 AM to 9 PM daily
    - Location: Koramangala, Bangalore
    - Services: haircut, hair coloring, facial, manicure, pedicure, bridal makeup
    - Appointment booking recommendations
    - Hair and beauty tips
    Keep responses concise and friendly. If asked about something unrelated, politely redirect to salon services.`;

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
