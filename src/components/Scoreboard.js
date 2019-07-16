import React, { Component } from "react";
import Player from "./Player";

export default class Scoreboard extends Component {
    render() {
        return (
            <div className="scoreboard">
                <h1>Scoreboard</h1>
                <ul>
                    <Player name="Arien" />
                    <Player name="David" />
                    <Player name="Mimi" />
                </ul>
            </div>
        )
    }
}