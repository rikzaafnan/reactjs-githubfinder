import React, { Component } from 'react'

export class Navbar extends Component {
    render () {

        return (
            <nav className="navbar bg-primary">
                <h2>
                    <i className="fab fa-github"/> {this.props.title}
                </h2>
            </nav>
        )
    }
}

export default Navbar