import React from 'react'

const Circle = props => (
    <circle
        cx={props.cx}
        cy={props.cy}
        r={props.r}
        stroke="green"
        stroke-width="4"
        fill="yellow" />
)

export default Circle
