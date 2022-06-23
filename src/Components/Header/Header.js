import React, { Component } from 'react'
import "./Header.css"

export default class Header extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="Navbar-buttons">
                    <button className="Buttons">home</button>
                    <button className="Buttons">photoapp</button>
                    <button className="Buttons">design</button>
                    <button className="Buttons">download</button>
                </div>
            </div>
        )
    }
}