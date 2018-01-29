import React from 'react'
import styled from 'styled-components'
import { number, shape, arrayOf } from 'prop-types'
import Circle from '../../containers/Circle/index'

const CircleBox = styled.svg`
    height: 200px;
    width: 100%;

    circle:hover {
        fill: yellow
    }
`

const CircleBoxComponent = props => (
    <CircleBox>
        {
            props.circles.map((circle, index) => (
                <Circle
                    key={index}
                    cx={circle.cx}
                    cy={circle.cy}
                    r={circle.r}
                />
            ))
        }
    </CircleBox>
)

CircleBoxComponent.propTypes = {
    circles: arrayOf(shape({
        cx: number,
        cy: number,
        r: number,
    })).isRequired
}

export default CircleBoxComponent
