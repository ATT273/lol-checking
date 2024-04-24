import React, { Component, useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { connect } from 'react-redux'
import { getDetailChampion } from '../champions/store/actions'
import ChampionStats from './components/ChampionStats'
import ChampionAbilities from './components/ChampionAbilities'
import { UisAngleLeft } from '@iconscout/react-unicons-solid'
import { DDRAGON_URL, VERSION } from '../../config/config'
import axios from 'axios'

function ChampionDetail() {
    const [champion, setChampion] = useState({})
    const history = useHistory()
    const params = useParams()


    useEffect(() => {
        console.log('useParams ', params)
        axios.get(`${DDRAGON_URL}/${VERSION}/data/en_US/champion/${params.id}.json`)
            .then(res => {
                // handle success
                const payload = res.data.data[params.id]
                console.log('payload', payload)
                setChampion(payload)
                // dispatch({type: CHAMPION_DETAIL, payload})
                // return res.data.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        return () => {

        }
    }, [])

    const handleClickBack = () => {

    }
    return (
        <main className='champion-detail__container'>
            <div className="champion-detail__hero">

                <div className='champion-detail__hero-info'>
                    <h1 className='champion-detail__hero-name'>
                        <UisAngleLeft
                            size="50"
                            color="#61DAFB"
                            className='backBtn'
                            onClick={handleClickBack} />
                        {champion.name}
                    </h1>
                    {
                        champion.name && champion.tags.map(tag => {
                            return (<i className='tag'>{tag}</i>)
                        })
                    }

                    <h1 className='champion-detail__hero-title'>{champion.title}</h1>
                </div>
                <img className='champion-detail__hero-img' src={`${DDRAGON_URL}/img/champion/splash/${champion.id}_0.jpg`} alt='champion_splash' />
            </div>
            <div className='champion-detail__main-content'>
                {/* <img className='page-bg' src='/images/lol-bg.jpg' /> */}
                {/* <div className='bg_img'></div> */}
                {champion.name &&
                    <>
                        <ChampionStats champion={champion} />
                        <ChampionAbilities championProps={champion} />
                    </>
                }
            </div>
        </main >
    )
}

export default ChampionDetail
// class ChampionDetail extends Component {
//     constructor(props) {
//         super()
//         this.state = {
//             ...this.state,
//             champion: {},
//             renderDone: false
//         }
//     }

//     componentDidMount() {
//         const id = this.props.match.params.id
//         this.props.getDetailChampion(id)
//     }


//     // Wait for props and set to state
//     static getDerivedStateFromProps(nextProps, prevState) {
//         if (nextProps.champion !== prevState.champion) {
//             return { champion: nextProps.champion };
//         }
//         else return null;
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.champion !== this.props.champion) {
//             //Perform some operation here
//             this.setState({ champion: this.props.champion, renderDone: true });
//         }
//     }
//     //  end

//     handleClickBack = () => {
//         // const history = useHistory();
//         this.props.history.goBack()
//     }
//     render() {
//         const { champion } = this.props
//         const { renderDone } = this.state
//         console.log('champ', champion)

//         return (
//             <main className='champion-detail__container'>
//                 {renderDone &&
//                     <>
//                         <div className="champion-detail__hero">

//                             <div className='champion-detail__hero-info'>
//                                 <h1 className='champion-detail__hero-name'>
//                                     <UisAngleLeft
//                                         size="50"
//                                         color="#61DAFB"
//                                         className='backBtn'
//                                         onClick={this.handleClickBack} />
//                                     {champion.name}
//                                 </h1>
//                                 <i className='tag'>Tank</i>
//                                 <h1 className='champion-detail__hero-title'>{champion.title}</h1>
//                             </div>
//                             <img className='champion-detail__hero-img' src={`${DDRAGON_URL}/img/champion/splash/${champion.id}_0.jpg`} alt='champion_splash' />
//                         </div>
//                         <div className='champion-detail__main-content'>
//                             {renderDone &&
//                                 <>
//                                     <ChampionStats champion={champion || {}} />
//                                     <ChampionAbilities championProps={champion || {}} />
//                                 </>}
//                         </div>
//                     </>
//                 }
//             </main>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     const { champions } = state
//     console.log('cac', champions)
//     return {
//         champion: champions.detail
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getDetailChampion: (id) => {
//             return dispatch(getDetailChampion(id))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ChampionDetail)
