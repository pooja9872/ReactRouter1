import Navbar from './components/Navbar';
import HomePage from "./components/HomePage"
import { Switch, Route } from "react-router-dom"
import Login from './components/Login';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';




function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Navbar />
                <HomePage />
            </Route>
            <Route exact path="/contact">
                <Navbar />
                <Contact />
            </Route>
            <Route exact path="/about">
                <Navbar />
                <About />
            </Route>
            <Route exact path="/services">
                <Navbar />
                <Service />
            </Route>
            <Route exact path="/login">
                <Navbar />
                <Login />
            </Route>
        </Switch>




    );
}

export default App;
