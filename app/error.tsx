'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { FiRefreshCw, FiArrowRight } from 'react-icons/fi'
import ErrorScreen, { errorPrimaryBtn, errorSecondaryBtn } from '@/components/shared/ErrorScreen'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Surface the error for debugging / future logging integration.
    console.error(error)
  }, [error])

  return (
    <ErrorScreen
      code="500"
      tag="Error"
      title="Something went wrong."
      message="An unexpected error occurred on our end. You can try again, or head back home."
      actions={
        <>
          <button onClick={() => reset()} style={errorPrimaryBtn}>Try again <FiRefreshCw size={17} /></button>
          <Link href="/" style={errorSecondaryBtn}>Back to home <FiArrowRight size={17} /></Link>
        </>
      }
    />
  )
}
