import React, { Component } from 'react'
import './index.css'

// Contextを作成する
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext

export default class A extends Component {
    state = { username: 'tom', age: 18 }
    render() {
        const { username, age } = this.state
        return (
            <div className='parent'>
                <h3>A component</h3>
                <h4>My username is : {username}</h4>
                <MyContext.Provider value={{ username, age }}>
                    <B />
                </MyContext.Provider>

            </div>
        )
    }
}

class B extends Component {

    render() {
        console.log("b组件实例对象", this)
        return (
            <div className='child'>
                <h3>B component</h3>
                {/* <h4>Username from A is : ??? </h4> */}
                <C />
            </div>
        )
    }
}


// class C extends Component {
//     // Contextを利用するには受け取ることを声明する
//     static contextType = MyContext
//     render() {
//         console.log("c组件实例对象", this)
//         return (
//             <div className='grand'>
//                 <h3>C component</h3>
//                 <h4>Username from A is : {this.context.username}, age is: {this.context.age} </h4>
//             </div>
//         )
//     }
// }

function C() {
    return (
        <div className='grand'>
            <h3>C component</h3>
            <h4>Username from A is :
                <Consumer>
                    {
                        value => {
                            //   console.log(value)
                            return `${value.username}, age is ${value.age}`
                        }
                    }

                </Consumer>
            </h4>
        </div>
    )
}