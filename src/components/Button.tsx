import React from 'react'

interface Props {
    text: string,
    onClick: () => void
    className?: string
}

const Button = (props: Props) => {
    return (
        <button onClick={props.onClick} className={`${props.className} p-2 px-4`}>
            {props.text}
        </button>
    )
}

export default Button