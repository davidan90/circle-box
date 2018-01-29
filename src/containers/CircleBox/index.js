import React from 'react'
import { string, number, arrayOf } from 'prop-types'
import CircleBoxComponent from '../../components/CircleBox/index'

class CircleBox extends React.Component {
    static propTypes = {
        id: string.isRequired,
        numberOfCircles: number,
        height: string,
        width: string,
        colors: arrayOf(string),
        circlesRadius: arrayOf(number),
    }

    constructor(props){
        super(props)
        this.state = {
            numberOfCircles: props.numberOfCircles || 100,
            circlesRadius: props.circlesRadius || [40, 37, 33, 28, 24, 19, 15, 10, 7, 4],
            circles: [],
        }
    }

    componentDidMount() {
        const { numberOfCircles } = this.state
        const parent = document.getElementById(this.props.id)
        const circles = this.getCirclesArray(parent, numberOfCircles)
        this.setState({circles})
    }

    getCirclesArray = (parent, numberOfCircles) => Array(numberOfCircles)
        .fill()
        .map(e => this.getRandomCircle(parent.offsetWidth, parent.offsetHeight))
        
    getRandomCircle = (width, height) => {
        const r = this.getR()
        return {
            cx: this.getPosition(width, r),
            cy: this.getPosition(height, r),
            r,
        }
    }

    getR = () => {
        const { circlesRadius } = this.state
        return circlesRadius[Math.floor(Math.random() * circlesRadius.length)]
    }
    
    getPosition = (axis, radius) => {
        const cordinate = Math.floor((Math.random() * axis)) - radius
        return  cordinate >= radius ? cordinate : radius
    }

    render() {
        const { circles } = this.state
        const { id, height, width, colors } = this.props
        return (
            <CircleBoxComponent  {...{id, height, width, colors, circles}} />
        )
    }
}

export default CircleBox
