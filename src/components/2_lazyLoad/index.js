//ルートコンポーネントでLazyLoadを使う場合が多いimport React, { Component } from 'react'
import React, { Component, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Loading from './Loading'
// import About from './About' // このImportのしかたはlazyLoadを利用していない
// import Home from './Home'


const Home = React.lazy(() => import('./Home'))
const About = React.lazy(() => import('./About'))

export default class Demo extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* Reactの中でRouterを使ってComponentを切り替える Routeを編集する*/}
              <NavLink className='list-group-item' to='/about'>About</NavLink>
              <NavLink className='list-group-item' to='/home'>Home</NavLink>

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<Loading />}>
                  {/* Routeを登録 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
