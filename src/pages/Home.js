
import React, { useState } from 'react'
import Trail from './Trail'
import { useSpring, animated } from 'react-spring'
import { FormatUnderlined } from '@material-ui/icons'
export default function Home() {
    const [open, set] = useState(true)
    const h3props = useSpring({ from: { opacity: 0.5, marginLeft: -100 }, to: { opacity: 1, marginLeft: 0 } })
    const [Tagline, setTagline] = useState('Freelancer, react developer, Javascript developer.')
    return (
        <div style={{ textAlign: "center" }}>
            <h1>My Porfolio</h1>
            <Trail open={open} onClick={() => set((state) => !state)}>
                <span>Aemon</span>
                <span>Pervaiz</span>
                <span>Khan</span>
            </Trail>
            <br />
            <h3 className='myh3'>
                {Tagline}
            </h3>

            <animated.h4 style={h3props}><h4>Qulaification And Skills</h4>
                <ul><li>Matric</li>
                    <li>Inter</li>
                    <li>Bachelor in Commerce</li>
                </ul>
            </animated.h4>

        </div>
    )
}