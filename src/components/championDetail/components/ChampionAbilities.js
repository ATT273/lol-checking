import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ChampionAbilities = (props) => {

    const [champion, setChampion] = useState({})
    const abilityURL = 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/'
    const passiveURL = 'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/passive/'

    useEffect(() => {
        console.log('championProps', props)

        return () => {

        }
    }, [])

    useEffect(() => {
        if (props.championProps.name) {
            setChampion(props.championProps)
            console.log('champion abilities', champion)
        }


    }, [props.championProps])


    return (
        <div className='champ-abilities'>
            <h2 className='title'>Abilities</h2>
            {/* {props.championProps.name} */}
            {champion.name &&
                <>
                    <div className='passive'>
                        <img className='ability_img' src={`${passiveURL}${champion.passive.image.full}`} />
                        <div className='detail'>
                            <h3 className='title'>{champion.passive.name}</h3>
                            <p className='desc'>{champion.passive.description}</p>
                        </div>

                    </div>
                    {
                        champion.spells.map(ability => {
                            return (
                                <div className='ability'>
                                    <img className='ability_img' src={`${abilityURL}${ability.image.full}`} alt={ability.name} />
                                    <div className='detail'>
                                        <h3 className='title'>{ability.name}</h3>
                                        <div className='overview'>
                                            <i className='title'>Cooldown: </i><i className='desc'>{ability.cooldownBurn}</i>
                                        </div>
                                        <p className='desc'>{ability.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )
}

export default ChampionAbilities