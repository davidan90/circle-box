import React from 'react'
import { string, number, arrayOf } from 'prop-types'
import CircleComponent from '../../components/Circle/index'

class Circle extends React.Component {

    static propTypes = {
        cx: number.isRequired,
        cy: number.isRequired,
        r: number.isRequired,
        colors: arrayOf(string),
    }

    constructor(){
        super()
        this.state = {
            fill: 'white'
        }
    }

    handleOnMouseOver = () => {
        const colors = this.props.colors ?
            this.props.colors :
            ['#f9f9f5', '#16a085', '#daf7a6', '#ffc300', '#c70039', '#900c3f', '#686afd', '#b869ff', '#6bffdd', '#f0fcc4', '#4d6784']
        const fill = colors[Math.floor(Math.random() * colors.length)]
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
