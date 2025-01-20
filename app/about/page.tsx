import React from 'react'
import dynamic from 'next/dynamic'

const About = dynamic(() => import('@/components/About'), {
  ssr: false,
})

function Page() {
  return (
    <div>
      <About />
    </div>
  )
}

export default Page
