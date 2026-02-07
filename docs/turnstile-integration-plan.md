# Add Cloudflare Turnstile Spam Prevention to Contact Form

## Context
The contact form was migrated from Web3Forms (which included hCaptcha) to Resend. The migration removed all spam protection, leaving the `/api/send` endpoint completely unguarded. Cloudflare Turnstile will restore spam prevention with a free, privacy-friendly CAPTCHA alternative.

## Steps

### 1. Install package
```bash
npm install @marsidev/react-turnstile
```

### 2. Add environment variables to `.env`
```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```
_(These are Cloudflare's test keys — always pass. Replace with real keys for production.)_

### 3. Modify `app/api/send/route.ts`
- Extract `turnstileToken` from the request body
- Add a guard rejecting requests with no token (400)
- Verify the token against `https://challenges.cloudflare.com/turnstile/v0/siteverify` before sending the email
- Return 400 if verification fails

### 4. Modify `components/contact-section.tsx`
- Add `turnstileToken` state and a `turnstileRef`
- Render `<Turnstile>` widget between the message field and submit button (`theme: "light"`, `size: "flexible"`)
- Include `turnstileToken` in the POST JSON body
- Disable submit button until token is present
- Reset widget + clear token on success and error

### Files modified
- `app/api/send/route.ts`
- `components/contact-section.tsx`
- `.env`

## Verification
1. Start dev server (`npm run dev`)
2. Submit form — should succeed (test keys always pass)
3. Swap to the "always fail" test site key (`2x00000000000000000000AB`) and confirm the button stays disabled / submission is blocked
4. Check submit button is disabled before Turnstile resolves
5. Confirm widget resets after successful submission
