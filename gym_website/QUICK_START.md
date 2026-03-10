# Quick Start Guide - IronCore Fitness Website

Get up and running in 5 minutes!

## 1. Install Dependencies

```bash
cd gym_website
npm install
```

## 2. Set Up Environment Variables

Create `.env.local` file in the root directory:

```
OPENAI_API_KEY=your_openai_api_key_here
```

Get your OpenAI API key from: https://platform.openai.com/api-keys

## 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 4. Build for Production

```bash
npm run build
npm start
```

## Key Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Main page with all sections |
| Programs | `/programs` | Detailed training programs |
| Trainers | `/trainers` | Trainer profiles |
| Membership | `/membership` | Pricing and plans |
| Contact | `/contact` | Location and inquiries |

## Features Overview

✨ **Chatbot** - Bottom right corner, click 💬 to chat
📱 **Mobile Responsive** - Works on all devices
🎨 **Modern Design** - Dark theme with red accents
🚀 **Fast Performance** - Optimized Next.js app

## Chatbot Testing

Try asking the bot:
- "What are your membership prices?"
- "Do you have personal training?"
- "What are your gym hours?"
- "Can I book a trial session?"

## File Structure

```
src/
├── app/                    # Pages && API routes
│   ├── page.tsx           # Homepage
│   ├── programs/
│   ├── trainers/
│   ├── membership/
│   ├── contact/
│   └── api/chat/          # Chatbot API
└── components/            # Reusable components
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── ProgramsSection.tsx
    ├── TrainersSection.tsx
    ├── PricingSection.tsx
    ├── TestimonialsSection.tsx
    └── Chatbot.tsx
```

## Customization

### Change Gym Name
Edit `src/components/Navbar.tsx` and `src/app/layout.tsx`

### Update Gym Details
Edit gym info in:
- `src/components/Hero.tsx` - Hero section
- `src/app/api/chat/route.ts` - Chatbot system prompt
- `src/app/contact/page.tsx` - Contact information

### Modify Trainers
Edit `src/components/TrainersSection.tsx` and `/trainers/page.tsx`

### Update Pricing
Edit `src/components/PricingSection.tsx` and `/membership/page.tsx`

### Change Colors
Modify Tailwind classes (from-red-600, bg-gray-900, etc.) in components

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Works with any Node.js hosting (Netlify, AWS, GCP, etc.)

## Troubleshooting

### Chatbot not responding?
- Check OPENAI_API_KEY is set correctly
- Verify you have OpenAI credit
- Check browser console for errors

### Styles not loading?
- Clear browser cache
- Run `npm run build` again
- Check Tailwind CSS configuration

### Build errors?
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Run `npm run build`

## Support

Contact: +91 9876543210

---

Ready to launch? 🚀 Happy coding!
