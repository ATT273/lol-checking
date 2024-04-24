import React, { Component } from 'react'

class ChampionStats extends Component {
    constructor(props) {
        super()
    }
    render() {
        const { champion } = this.props
        const { stats } = this.props.champion

        return (
            <div className='base-stats'>
                <h2 className='title'>Base Stats:</h2>
                <p><b className='stat_title'>Health: </b>{stats.hp} - {(stats.hpperlevel * 17 + stats.hp).toFixed(2)} ({`${stats.hp} + ${stats.hpperlevel} * 17`})</p>
                <p><b className='stat_title'>Health regen. : </b>{stats.hpregen} - {(stats.hpregenperlevel * 17 + stats.hpregen).toFixed(2)} ({`${stats.hpregen} + ${stats.hpregenperlevel} * 17`})</p>
                <p><b className='stat_title'>Mana: </b>{stats.mp} - {(stats.mp + stats.mpperlevel * 17).toFixed(2)} ({`${stats.mp} + ${stats.mpperlevel} * 17`})</p>
                <p><b className='stat_title'>Mana regen. : </b>{stats.mpregen} - {(stats.mpregen + stats.mpregenperlevel * 17).toFixed(2)} ({`${stats.mpregen} + ${stats.mpregenperlevel} * 17`})</p>
                <p><b className='stat_title'>Armor: </b>{stats.armor} - {(stats.armor + stats.armorperlevel * 17).toFixed(2)} ({`${stats.armor} + ${stats.armorperlevel} * 17`})</p>
                <p><b className='stat_title'>Magic resist.: </b>{stats.spellblock} - {(stats.spellblock + stats.spellblockperlevel * 17).toFixed(2)} ({`${stats.spellblock} + ${stats.spellblockperlevel} * 17`})</p>
                <p><b className='stat_title'>Movement speed: </b>{stats.movespeed.toFixed(2)}</p>
            </div>
        )
    }
}

export default ChampionStats;