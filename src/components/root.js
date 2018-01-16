import React from "react";

import { Header } from "../components/header";

export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className=" dsdsdds col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        {this.props.children}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        <hr />
                        <h1>Footer</h1>
                    </div>
                </div>
            </div>
        );
    }
};