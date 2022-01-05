import React, { Component, PureComponent } from 'react'
import './index.css'

export default class Parent extends Component {

    state = { carName: "bentz" }

    changeCar = (params) => {
        this.setState({ carName: "honda" })

    }

    // shouldComponentUpdateは二つのパラメータを受け取る
    // shouldComponentUpdate(nextProps, nextState){
    //     return 
    // }
    render() {
        console.log('parent::render');

        return (
            <div className='parent'>
                <h3>Parent Component</h3>
                <span>my car is {this.state.carName}</span>
                <br />
                <button onClick={this.changeCar}>click change car</button>
                <Child />
            </div>
        )
    }
}


class Child extends PureComponent {

    // childは親ComponentがRenderされると自分もRenderされる。
    // たとえ子コンポーネントが親子ポーネンのデータを使っていない場合でもRenderされる
    render() {
        console.log('child::render');
        return (
            <div className='child'>
                <h3>Child Component</h3>
                {/* <span>props from parent Component: {this.props.carName}</span> */}
            </div>
        )
    }
}
