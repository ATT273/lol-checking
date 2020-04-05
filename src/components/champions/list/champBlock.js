import React, { Component } from 'react'

export default class ChampBlock extends Component {
    render() {
        const { champ } = this.props
        return (
            <div>
                {champ.name}
            </div>
        )
    }
}
