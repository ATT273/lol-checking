import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDetailChampion } from '../champions/store/actions'

class  ChampionDetail extends Component {
    constructor(props) {
        super()
        this.state = {
            ...this.state,
            champion: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getDetailChampion(id)
    }


    // Wait for props and set to state 
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.champion!==prevState.champion){
            return { champion: nextProps.champion};
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.champion !== this.props.champion){
            //Perform some operation here
            this.setState({champion: this.props.champion});
        }
    }
    //  end
    
    render() {
        const { champion } = this.props
        console.log('champ', champion)
        // const name = champions[id].name
        return (
            <main className='champion-detail__container'>
                <div className="champion-detail__hero">
                    <div className='champion-detail__hero-info'>
                        <h1 className='champion-detail__hero-name'>{champion.name}</h1>
                        <h1 className='champion-detail__hero-title'>{champion.title}</h1>
                    </div>
                    
                    <img className='champion-detail__hero-img' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} alt='champion_splash' />
                </div>
                
            </main>
        )
    }
    
}

const mapStateToProps = (state) => {
    const { champions } = state
    return {
        champion: champions.detail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailChampion: (id) => {
            return dispatch(getDetailChampion(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionDetail)
