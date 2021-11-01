import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { selectAuthentication } from '../utils/selectors'
import GlobalStyle from '../utils/style/GlobalStyle'
import HomePage from '../pages/HomePage'
import EmployeesPage from '../pages/EmployeesPage'
import Header from './Header'
import Footer from './Footer'

export default function App() {
    // const authentication = useSelector(selectAuthentication)

    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/employees">
                    <EmployeesPage />
                </Route>
                <Redirect from="*" to={'/'} />
            </Switch>
            <Footer />
        </Router>
    )
}
