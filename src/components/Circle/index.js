import React from 'react'

const Circle = props => (
    <circle
        cx={props.cx}
        cy={props.cy}
        r={props.r}
        stroke="black"
        stroke-width="3"
        fill="white" />
)

export default Circle
