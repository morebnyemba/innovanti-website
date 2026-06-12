import Hero from '@/components/home/Hero'
import WhatWeDo from '@/components/home/WhatWeDo'
import Carousel from '@/components/home/Carousel'
import MissionBand from '@/components/home/MissionBand'
import Values from '@/components/home/Values'
import HomeCta from '@/components/home/HomeCta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Innovanti Solutions — IT, Cybersecurity & Trade in Zimbabwe',
  description:
    'Innovanti Solutions delivers IT consulting, cybersecurity, procurement and trade services across Zimbabwe and Africa.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Carousel />
      <MissionBand />
      <Values />
      <HomeCta />
    </>
  )
}
