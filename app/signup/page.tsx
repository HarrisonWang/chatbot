import { auth } from '@/auth'
import SignupForm from '@/components/signup-form'
import { Session } from '@/lib/types'
import { redirect } from 'next/navigation'

export default async function SignupPage() {
  const session = (await auth()) as Session
  const enableRegistration = process.env.NEXT_PUBLIC_ENABLE_REGISTRATION === 'true'

  if (session) {
    redirect('/')
  }

  if (!enableRegistration) {
    redirect('/login')
  }

  return (
    <main className="flex flex-col p-4">
      <SignupForm />
    </main>
  )
}
