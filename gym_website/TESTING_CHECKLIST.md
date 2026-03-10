# Testing Checklist - IronCore Fitness Website

## Initial Setup ✓
- [x] Project created with all required folders
- [x] Dependencies configured (Next.js, React, Tailwind, OpenAI)
- [x] TypeScript configuration
- [x] Environment variables setup

## Navigation & Layout
- [ ] Navigation bar works on all pages
- [ ] Mobile menu opens/closes correctly
- [ ] All links navigate to correct pages
- [ ] Logo links back to homepage
- [ ] Navigation styling consistent

## Homepage
- [ ] Hero section displays correctly
- [ ] CTA buttons redirect to Programs and Membership
- [ ] About section shows gym information
- [ ] Programs section shows all 6 programs
- [ ] Trainer cards display correctly
- [ ] Pricing cards show all plans
- [ ] Testimonials section loads reviews
- [ ] All images/emojis display

## Programs Page
- [ ] Page loads without errors
- [ ] All 6 programs display with details
- [ ] Program icons visible
- [ ] Benefits section shows 4 items
- [ ] Responsive on mobile
- [ ] Navigation works

## Trainers Page
- [ ] Trainer profiles display correctly
- [ ] Trainer information (name, experience, bio) visible
- [ ] Certifications listed
- [ ] Specialties shown as badges
- [ ] Benefits section displays 4 items
- [ ] CTA button visible
- [ ] Responsive on mobile

## Membership Page
- [ ] All 3 pricing cards visible
- [ ] Popular plan highlighted
- [ ] Pricing information correct
- [ ] Feature lists complete
- [ ] "Get Started" buttons present
- [ ] Comparison table displays correctly
- [ ] FAQ section shows 4 questions
- [ ] CTA button visible

## Contact Page
- [ ] Location information correct
- [ ] Phone number clickable (tel: link)
- [ ] Opening hours display
- [ ] Contact form fields present
- [ ] Form inputs accept data
- [ ] Map placeholder shows
- [ ] Why visit section shows 3 items
- [ ] All icons display

## Chatbot Widget
- [ ] Chat button visible in bottom-right corner
- [ ] Chat opens when button clicked
- [ ] Chat closes when X button clicked
- [ ] Initial greeting message displays
- [ ] Input field accepts text
- [ ] Send button works
- [ ] User messages display on right
- [ ] Bot messages display on left
- [ ] Typing indicator shows while waiting
- [ ] Messages scroll to bottom

## Chatbot Responses
Test these questions and verify responses:
- [ ] "What is the monthly membership price?" - Should mention ₹2000
- [ ] "Do you provide personal training?" - Should confirm ₹6000/month
- [ ] "Can I try before joining?" - Should mention trial sessions
- [ ] "What are your gym timings?" - Should say 5 AM to 10 PM
- [ ] "Who are your trainers?" - Should mention Rahul & Priya
- [ ] "What programs do you offer?" - Should list all 6 programs
- [ ] Random question - Should provide helpful response

## Mobile Responsiveness
- [ ] Navigation hamburger menu appears on mobile
- [ ] All text readable on small screens
- [ ] Images scale properly
- [ ] Forms work on mobile
- [ ] Chatbot accessible on mobile
- [ ] No horizontal overflow
- [ ] Touch interactions work

## Performance
- [ ] Page loads quickly
- [ ] Images optimized
- [ ] No console errors
- [ ] API responses fast
- [ ] Smooth animations

## API & Backend
- [ ] Chat API endpoint works
- [ ] OpenAI integration functioning
- [ ] API returns proper responses
- [ ] Error handling works
- [ ] Environment variables loaded

## Browser Compatibility
- [ ] Works on Chrome
- [ ] Works on Firefox
- [ ] Works on Safari
- [ ] Works on Edge
- [ ] Mobile Safari works
- [ ] Chrome Android works

## SEO & Meta Tags
- [ ] Page title: "IronCore Fitness - Best Gym in Indiranagar, Bangalore"
- [ ] Meta description present
- [ ] Keywords included
- [ ] Social media ready
- [ ] Favicon set

## Styling & Design
- [ ] Dark theme applied consistently
- [ ] Red accents used correctly
- [ ] Typography clean and readable
- [ ] Hover effects working
- [ ] Transitions smooth
- [ ] Color contrast good
- [ ] Brand colors consistent

## Functionality
- [ ] All buttons clickable
- [ ] All links work
- [ ] Forms submittable
- [ ] No infinite loops
- [ ] State management working
- [ ] No memory leaks

## Production Checklist
- [ ] Code committed to git
- [ ] .env.local not committed
- [ ] Build succeeds: `npm run build`
- [ ] No build warnings/errors
- [ ] Production build tested: `npm start`
- [ ] Ready for deployment

## Deployment Testing
- [ ] Deploy to Vercel (or preferred platform)
- [ ] Test all pages on live URL
- [ ] Chatbot works on live site
- [ ] API key configured correctly
- [ ] Environment variables set
- [ ] No CORS errors
- [ ] Performance acceptable

## Customer Journey
- [ ] Visitor finds gym info on homepage
- [ ] Can navigate to all sections
- [ ] Can ask chatbot questions
- [ ] Can view trainer profiles
- [ ] Can compare membership plans
- [ ] Can see contact information
- [ ] Can inquire via contact form

## Success Metrics
- [ ] Page load time < 3 seconds
- [ ] Chatbot response time < 5 seconds
- [ ] 0 console errors
- [ ] 0 build warnings
- [ ] All pages SEO optimized
- [ ] Mobile Lighthouse score > 80
- [ ] Performance Lighthouse > 80

---

**Notes:**
- Test using real network, not just localhost
- Test with different screen sizes (mobile, tablet, desktop)
- Clear browser cache between tests
- Test chatbot with various questions
- Check analytics setup if applicable

**Sign Off:**
- [ ] All tests passed
- [ ] Ready for client review
- [ ] Ready for deployment
- [ ] Ready for production launch

Date: ________________
Tested By: ________________
