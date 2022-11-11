import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import routes from './routes'
import Login from './features/login'
import DefaultLayout from './layouts/DefaultLayout'
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
        {routes.map((r, index)=>{
        let Component = r.component
        let Layout = DefaultLayout
        let Content =  (  
          <Layout >
            <Component />
          </Layout>
        )
        return <Route key={index} path={r.path} children={Content} />
      })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
