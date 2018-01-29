import React from 'react'
import CircleBoxComponent from '../../components/CircleBox/index'

class CircleBox extends React.Component {

    constructor(){
        super()
        this.state = {
            numberOfCircles: 100,
            circles: [],
        }
    }

    componentWillMount() {
        const { numberOfCircles } = this.state
        const circles = this.getCirclesArray(numberOfCircles)
        this.setState({circles})
    }

    getCirclesArray = (numberOfCircles) => Array(numberOfCircles).fill().map(e => this.getRandomCircle())

    getRandomCircle = () => {
        // TODO get container width and height
        return this.getCordenates(787, 200)
    }
        
    getCordenates = (width, height) => {
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
    
    getPosition = (max, min) => {
        return Math.floor((Math.random() * max) + min)
    }

    render() {
        const { circles } = this.state
        return (
            <CircleBoxComponent circles={circles} />
        )
    }
}

export default CircleBox
