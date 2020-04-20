import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const HomePage = ({ children }) => {
    const themeColor = useContext(ThemeContext)

    return (
        <div className={themeColor}>
            <h1>Jesus is alive!</h1>
            <div>
                {children}
            </div>
        </div>
    )
}

export default HomePage