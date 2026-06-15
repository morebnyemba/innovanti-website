import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import ErrorScreen, { errorPrimaryBtn, errorSecondaryBtn } from '@/components/shared/ErrorScreen'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <ErrorScreen
      code="404"
      tag="Error 404"
      title="This page took a different route."
      message="The page you're looking for doesn't exist or may have moved. Let's get you back on track."
      actions={
        <>
          <Link href="/" style={errorPrimaryBtn}>Back to home <FiArrowRight size={18} /></Link>
          <Link href="/services" style={errorSecondaryBtn}>Explore services <FiArrowUpRight size={17} /></Link>
        </>
      }
    />
  )
}
