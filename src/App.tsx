import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes'
import DefaultLayout from './layouts/DefaultLayout'
import './assets/css/grid.css'
import 'antd/dist/antd.css'
import './assets/css/style.css'

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    {routes.map((r, index) => {
                        let Component = r.component
                        let Layout = DefaultLayout
                        if (r.layout) Layout = r.layout
                        let Content = (
                            <Layout>
                                <Component />
                            </Layout>
                        )
                        return (
                            <Route
                                key={index}
                                path={r.path}
                                element={Content}
                            />
                        )
                    })}
                </Routes>
            </Router>
        </div>
    )
}

export default App
