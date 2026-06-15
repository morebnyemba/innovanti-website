import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import ErrorScreen, { errorPrimaryBtn, errorSecondaryBtn } from '@/components/shared/ErrorScreen'

export const metadata: Metadata = {
  title: 'Access forbidden',
  description: 'You do not have permission to view this page.',
}

export default function Forbidden() {
  return (
    <ErrorScreen
      code="403"
      tag="Error 403"
      title="Access to this page is restricted."
      message="You don't have permission to view this page. If you believe this is a mistake, please get in touch."
      actions={
        <>
          <Link href="/" style={errorPrimaryBtn}>Back to home <FiArrowRight size={18} /></Link>
          <Link href="/contact" style={errorSecondaryBtn}>Contact us <FiArrowUpRight size={17} /></Link>
        </>
      }
    />
  )
}
