# IronCore Fitness - Gym Website

A modern, feature-rich website for IronCore Fitness gym in Indiranagar, Bangalore, built with Next.js, React, and Tailwind CSS.

## Features

✨ **Modern Design**
- Dark fitness theme with high contrast colors
- Fully responsive mobile design
- Smooth animations and transitions

🤖 **AI Chatbot**
- Powered by OpenAI GPT-3.5
- Answers membership questions automatically
- Collects trial session leads
- Reduces phone inquiries

📱 **Multiple Pages**
- **Home**: Hero section, about, programs preview, trainers, pricing, testimonials
- **Programs**: Detailed workout programs and benefits
- **Trainers**: Expert trainer profiles with specializations
- **Membership**: Pricing plans with comparison table and FAQ
- **Contact**: Location, hours, contact form, and inquiry options

💪 **Key Sections**
- Programs (Strength, Fat Loss, Cardio, Weight Training, Personal Training, Recovery)
- Trainer profiles (Rahul Sharma - Strength Trainer, Priya Nair - Weight Loss Coach)
- Membership plans (Monthly, Quarterly, Personal Training)
- Member testimonials
- Call-to-action sections

## Tech Stack

- **Framework**: Next.js 16.1.6
- **Frontend**: React 19.2.3, Tailwind CSS 4
- **API**: OpenAI GPT-3.5
- **Language**: TypeScript

## Project Structure

```
gym_website/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── programs/
│   │   │   └── page.tsx          # Programs page
│   │   ├── trainers/
│   │   │   └── page.tsx          # Trainers page
│   │   ├── membership/
│   │   │   └── page.tsx          # Membership page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   └── api/
│   │       └── chat/
│   │           └── route.ts      # Chatbot API endpoint
│   └── components/
│       ├── Navbar.tsx            # Navigation bar
│       ├── Hero.tsx              # Hero section
│       ├── ProgramsSection.tsx    # Programs display
│       ├── TrainersSection.tsx    # Trainers display
│       ├── PricingSection.tsx     # Pricing display
│       ├── TestimonialsSection.tsx # Testimonials
│       └── Chatbot.tsx           # AI Chatbot widget
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- OpenAI API key

### Installation

1. Navigate to the project directory:
```bash
cd gym_website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your OpenAI API key:
```bash
OPENAI_API_KEY=your_api_key_here
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
npm start
```

## Chatbot Features

### System Prompt
The chatbot is configured with detailed gym information:
- Membership details (Monthly ₹2000, Quarterly ₹5000, Personal Training ₹6000)
- Services offered (Strength training, Weight loss, Cardio, Personal training)
- Gym hours (5 AM to 10 PM)
- Trainer information

### Example Interactions
- "What is the monthly membership price?"
- "Do you provide personal training?"
- "Can I try before joining?"
- "What are your gym timings?"

## Business Information

**Gym**: IronCore Fitness  
**Location**: Indiranagar, Bangalore  
**Phone**: +91 9876543210  
**Hours**: 5 AM - 10 PM (Daily)

### Services
- Weight Training
- Personal Training
- Cardio Programs
- Fat Loss Training
- Strength Training

### Trainers
- **Rahul Sharma**: Strength Trainer (8 years)
- **Priya Nair**: Weight Loss Coach (6 years)

## Design System

### Colors
- Primary: Red (#DC2626) - Energy and fitness
- Background: Dark Gray (#111827) - Professional
- Text: White & Gray - High contrast

### Typography
- Bold, strong fonts for impact
- Clear hierarchy for readability
- Mobile-responsive sizing

## Features to Enhance

- [ ] Google Maps integration
- [ ] Online membership booking
- [ ] Class schedule display
- [ ] Trainer booking system
- [ ] Member testimonial submissions
- [ ] Email notifications
- [ ] Social media integration
- [ ] Blog/Fitness tips section

## Environment Variables

Create a `.env.local` file:
```
OPENAI_API_KEY=your_openai_api_key
```

## Deployment

Deploy easily to Vercel:
```bash
vercel
```

Or use any Node.js-compatible hosting platform.

## Support

For inquiries contact: +91 9876543210

---

Built with ❤️ for fitness enthusiasts in Bangalore.
