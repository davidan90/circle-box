import React from 'react'
import { string, number } from 'prop-types'
import CircleBoxComponent from '../../components/CircleBox/index'

class CircleBox extends React.Component {
    static propTypes = {
        id: string.isRequired,
        circles: number,
        height: string,
        width: string,
    }

    constructor(props){
        super(props)
        this.state = {
            numberOfCircles: props.circles || 100,
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
        const radios = [40, 37, 33, 28, 24, 19, 15, 10, 7, 4]
        return radios[Math.floor(Math.random() * 10)]
    }
    
    getPosition = (axis, radius) => {
        const cordinate = Math.floor((Math.random() * axis)) - radius
        return  cordinate >= radius ? cordinate : radius
    }

    render() {
        const { circles } = this.state
        const { id, height, width } = this.props
        return (
            <CircleBoxComponent  {...{id, height, width, circles}} />
        )
    }
}

export default CircleBox
