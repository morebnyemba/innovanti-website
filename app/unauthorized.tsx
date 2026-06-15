import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import ErrorScreen, { errorPrimaryBtn, errorSecondaryBtn } from '@/components/shared/ErrorScreen'

export const metadata: Metadata = {
  title: 'Authorization required',
  description: 'You need to be authorized to view this page.',
}

export default function Unauthorized() {
  return (
    <ErrorScreen
      code="401"
      tag="Error 401"
      title="You're not authorized to view this page."
      message="This page requires authorization. Please sign in or get in touch if you need access."
      actions={
        <>
          <Link href="/" style={errorPrimaryBtn}>Back to home <FiArrowRight size={18} /></Link>
          <Link href="/contact" style={errorSecondaryBtn}>Contact us <FiArrowUpRight size={17} /></Link>
        </>
      }
    />
  )
}
