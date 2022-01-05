import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>I am Parent Component</h3>
                <A render={(name) => { return <B name={name} /> }} />

                <A>
                    <B />
                </A>

            </div>
        )
    }
}

class A extends Component {
    state = { name: 'tom' }
    render() {
        console.log(this.props);
        const { name } = this.state
        return (
            <div className='a'>
                <h3>I am A Component</h3>
                {this.props.render(name)}
            </div>
        )
    }
}


class B extends Component {
    render() {
        console.log("b::render");
        return (
            <div className='b'>
                <h3>I am B Component</h3>
                <span>{this.props.name}</span>
            </div>
        )
    }
}
