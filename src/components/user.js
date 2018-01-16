import React from "react";

export const User = ({match}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                    <h1>User</h1>
                    <h5>User ID : {match.params.id}</h5>
                </div>
            </div>
        </div>
    );
};