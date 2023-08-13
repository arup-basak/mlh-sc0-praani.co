import React from 'react'
import { Abril_Fatface } from 'next/font/google'

const font = Abril_Fatface({ subsets: ['latin'], weight: ['400'] })

interface Props {
    text: string
    className?: string
}

const Heading = ({text, className}: Props) => {
    return (
        <h1 className={`${font.className} text-7xl ${className} h-fit w-fit`}>
            {text}
        </h1>
    )
}

export default Heading