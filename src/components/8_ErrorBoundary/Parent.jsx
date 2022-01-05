import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    state = {
        hasError: '' //子Componentのエラーを標識
    }

    // Parentの子コンポーネントがErrorを起きたときに実行される。
    // getDerivedStateFromErrorが実行されたときはerrorの情報も携帯しているので、パラメータとして受け取れる
    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: error } //ObjectをReturnして、Stateを更新
    }

    componentDidCatch(error, info){
        console.log(error, info);
    }
    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                {this.state.hasError ? <h2> Please try again</h2> : <Child />}
            </div>
        )
    }
}
