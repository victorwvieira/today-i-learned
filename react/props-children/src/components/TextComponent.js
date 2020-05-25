import React from 'react'

const TextComponent = ({ children }) => {
    return (
        <div>
            {
                children && children.map((item, index) => {
                    return <div key={index}>{item.props.children}</div>
                })
            }
        </div>
    )
}

export const TextComponentItem = ({ children }) => {
    return (
        <p>{children}</p>
    )
}

export default TextComponent