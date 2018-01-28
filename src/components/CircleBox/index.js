import React from 'react'
import Circle from '../Circle'

const CircleBoxComponent = props => (
    <svg width="100%" height="200px">
        { 
            props.circles.map(circle => (
                <Circle
                    cx={circle.cx}
                    cy={circle.cy}
                    r={circle.r}
                />
            ))
        }
    </svg> 
)

// CircleBoxComponent.propTypes = {
//     circles: React.PropTypes.arrayOf(
//         React.propTypes.object
//     ).isRequired
// }

export default CircleBoxComponent
