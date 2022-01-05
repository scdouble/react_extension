import React, { Component } from 'react'

export default class Demo extends Component {
    state = { count: 0 }

    add = () => {
        // //  etStateの一個目の書き方 オブジェクト式のSetStateの使い方
        // const { count } = this.state

        // // setStateは同期型のFunction,プログラムで実行になればメインスレッドで実行される。
        // // ただし、Reactが後続処理をするのは非同期で実行される
        // // setStateはコールバック関数も受けるとことができ、render後に実行される
        // this.setState({ count: count + 1 }, () => {
        //     console.log(this.state.count);
        // })
        // //   console.log(this.state.count); //0
        this.setState((state, props) => {
            console.log(state, props);
            return { count: state.count + 1 }
        })

        // 簡潔の書き方
        //  this.setState(state => ({ count: state.count + 1 }))
    }

    render() {
        return (
            <div>
                <h1>Current Sum: {this.state.count}</h1>
                <button onClick={this.add}>Click + 1</button>
            </div>
        )
    }
}
