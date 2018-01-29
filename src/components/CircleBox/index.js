import React from 'react'
import styled from 'styled-components'
import { string, number, shape, arrayOf } from 'prop-types'
import Circle from '../../containers/Circle/index'

const CircleBoxDiv = styled.div`
    height: ${({height}) => height ? height : '100%'};
    width: ${({width}) => width ? width : '100%'};
`

const CircleBox = styled.svg`
    height: 100%;
    width: 100%;

    circle:hover {
        fill: yellow
    }
`

const CircleBoxComponent = props => (
    <CircleBoxDiv {...props}>
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
    </CircleBoxDiv>
)

CircleBoxComponent.propTypes = {
    id: string.isRequired,
    circles: arrayOf(shape({
        cx: number.isRequired,
        cy: number.isRequired,
        r: number.isRequired,
    })).isRequired
}

export default CircleBoxComponent
