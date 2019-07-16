import React, { Component } from "react"
import Player from "./Player"
import "./Scoreboard.css"
import AddPlayer from "./AddPlayer"

export default class Scoreboard extends Component {
    state = {
        players: [
            { id: 1, name: "Duc", score: 5 },
            { id: 2, name: "Nam", score: 8 }, 
            { id: 3, name: "Cun", score: 6 }
        ]
    }
    
    render() {
        const players_copy = [...this.state.players]
        players_copy.sort((a, b) => b.score - a.score)

        return (
            <div className="scoreboard">
                <h1>Scoreboard</h1>
                <ul>
                {players_copy.map(this.renderPlayer)}
                </ul>
                <AddPlayer addPlayer={this.addPlayer} />
            </div>
        )
    }

    renderPlayer = (player) => {
        return (
            <Player 
            id = {player.id}
            name = {player.name}
            score = {player.score}
            key = {player.id}
            incrementScore={this.incrementScoreOfPlayer}
            />
        )
    }

    incrementScoreOfPlayer = (id) => {
        const updatedPlayers = this.state.players.map(player => {
            if (player.id === id) {
                return { ...player, score: player.score + 1}
            }
            else {
                return player
            }
        })

        this.setState({ players: updatedPlayers })
    }

    addPlayer = (name) => {
        const player = {
            id: Math.round(Math.random()*100000),
            name,
            score: 0
        }

        this.setState({
            players: this.state.players.concat(player)
        })
    }
}