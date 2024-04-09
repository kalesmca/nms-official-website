import React, { useState, useEffect } from "react";
import Header from "./header";
import "./header.scss";
import { Outlet, Link } from "react-router-dom";


const LayoutContainer = () => {
    const [navigationPath, setNavigationPath] = useState("");
    useEffect(() => {
        console.log('layout container calling');
    })
    return (
        <div>

                    <div className="header-container">
                        <Header />
                    </div>
                    <div className="body-container">
                        <Outlet />
                        </div>
                  

        </div>
    )
}

export default LayoutContainer;