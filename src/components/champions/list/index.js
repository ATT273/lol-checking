import React, { Component } from 'react'
import { listChampions } from '../store/actions'
import { connect } from 'react-redux'
import ChampionDetail from '../../championDetail/index'
import { Link } from 'react-router-dom';
import { VERSION } from '../../../config/config';


class ChampionsList extends Component {
    constructor(props) {
        super()
        this.state = {
            ...this.state,
            champion: {},
            champions: {},
            showChampionDetail: false
        }
    }

    componentDidMount() {
        this.props.getAllChampions()
        this.setState({
            champions: this.props.champions
        }, () => console.log('ch', this.state.champions))
    }

    getChampionDetail = (championName) => {
        const { champions } = this.props
        const champion = champions[championName]
        this.setState({
            champion,
            showChampionDetail: true
        })
    }

    renderChampBlock = () => {
        const { champions } = this.props
        let champBlock = []
        if (champions) {
            for (let champ in champions) {
                champBlock.push(
                    <div
                        key={champions[champ].key}
                        className="item">

                        <Link to={'/champ/' + champions[champ].id}>
                            <img

                                onClick={() => this.getChampionDetail(champions[champ].id)}
                                className="champ-square-img"
                                src={`http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/${champions[champ].image.full}`}
                                alt={champions[champ].image.full} />
                        </Link>
                    </div>
                )
            }
            return champBlock
        }
    }
    render() {
        const { champion, showChampionDetail } = this.state
        return (
            <>
                <div className="champion-list">
                    {this.renderChampBlock()}
                </div>

            </>
        )
    }
}

const mapStateToProps = state => {
    const { champions } = state
    return {
        champions: champions.list
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllChampions: () => {
            return dispatch(listChampions())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsList)