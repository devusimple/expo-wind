# Input Otp

## Overview
A one-time password input component with separate digit slots for secure code entry.

## Installation
```bash
bunx rn-shadcn add input-otp
# or
npx rn-shadcn add input-otp
# or
pnpm rn-shadcn add input-otp
```

## Import
```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
```

## Usage
```tsx
<InputOTP maxLength={6} onComplete={(code) => console.log(code)} />
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

<InputOTP maxLength={6} onComplete={(code) => console.log(code)} />
```
