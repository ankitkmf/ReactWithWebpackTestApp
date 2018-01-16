import React from "react";
import { ReactDOM, render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Header } from "../components/header";
import { Home } from "../components/home";
import { User } from "../components/user";
import { Aboutus } from "../components/aboutus";

const BaseLayout = () => (
    <div className="container">
        <div className="row">
            <Header />
        </div>
        <div className="row">
            <Route path="/" exact component={Home} />
            <Route path="/user" component={User} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/user/:id" component={User} />
        </div>
        <footer>
            Demo application to test React Routing Example with React v4.
      </footer>
    </div>
)

class App extends React.Component {
    render() {
        return (
            <Router>
                <BaseLayout />
            </Router>
        );
    }
};

render(<App />, window.document.getElementById('app'));