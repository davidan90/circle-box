import React from 'react'
import { number } from 'prop-types'
import CircleComponent from '../../components/Circle/index'

class Circle extends React.Component {

    static propTypes = {
        cx: number.isRequired,
        cy: number.isRequired,
        r: number.isRequired,
    }

    constructor(){
        super()
        this.state = {
            fill: 'white'
        }
    }

    handleOnMouseOver = () => {
        const colors = ['#f9f9f5', '#16a085', '#daf7a6', '#ffc300', '#c70039', '#900c3f', '#686afd', '#b869ff', '#6bffdd', '#f0fcc4', '#4d6784']
        const fill = colors[Math.floor(Math.random() * 11)]
        this.setState({fill})
    }

    render() {
        const { fill } = this.state
        const { cx, cy, r } = this.props
        return (
            <CircleComponent
                {...{cx, cy, r, fill}}
                handleOnMouseOver={this.handleOnMouseOver}
            />)
    }

}

export default Circle
