import React from 'react'
import { Golos_Text } from 'next/font/google'

const font = Golos_Text({ subsets: ['latin'], weight: ['400'] })

interface Props {
  className?: string
  children: React.ReactNode
}

const P = (props: Props) => {
  return (
    <div className={`${props.className} ${font.className}`}>
      {props.children}
    </div>
  )
}

export default P