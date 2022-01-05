import React from 'react'
import ReactDOM from 'react-dom'


// クラス型コンポーネント
// class Demo extends React.Component {
//     state = { count: 0 }
//     myRef = React.createRef()

//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 1000)
//     }

//     show = (params) => {
//         alert(this.myRef.current.value)
//     }

//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//                 <h2>Current Sum: {this.state.count}</h2>
//                 <button onClick={this.add}>click +1</button>
//                 <button onClick={this.show}>click show input</button>
//                 <button onClick={this.unmount}>unmount component</button>
//             </div>
//         )
//     }
// }

// 関数型コンポーネント
function Demo() {
    //  console.log("Demo"); // この関数コンポーネントの実行回数は1+n回

    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('tom')
    const myRef = React.useRef()

    //  componentDidMountとcomponentWillUnmountに相当する
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount((count) => { return count + 1 })
        }, 1000)
        // useEffectがreturnした関数がwillUnmountに相当する
        return () => {
            console.log("####")
            clearInterval(timer)
        }
    }, [])

    // 足すのCallback
    function add() {
        setCount(count + 1) // 書き方一個目 直接値を書く方法
        setCount((count) => { return count + 1 })
    }

    function changeName() {
        setName('jack') // 書き方一個目 直接値を書く方法
        setCount((count) => { return count + 1 })
    }

    function show() {
        alert(myRef.current.value)
    }
    // componentをunmountするためにCallback関数
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>Current Sum: {count}</h2>
            <h2>My name is: {name} </h2>
            <button onClick={add}>click +1</button>
            <button onClick={changeName}>click change name</button>
            <button onClick={show}>click show input</button>
            <button onClick={unmount}>unmount component</button>
        </div>
    )
}

export default Demo