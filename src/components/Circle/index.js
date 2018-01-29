import React from 'react'

const CircleComponent = props => (
    <circle
        cx={props.cx}
        cy={props.cy}
        r={props.r}
        stroke="black"
        strokeWidth="3"
        fill={props.fill}
        onMouseOver={props.handleOnMouseOver}
    />
)

export default CircleComponent
