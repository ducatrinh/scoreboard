import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Player extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render() {
        return (
            <li className="player">
                <p>{ this.props.name }</p>
                <p>{ this.props.score }</p>
            </li>
        )
    }
}