import { DDRAGON_URL, VERSION } from '../../../config/config'
import axios from 'axios'

export const CHAMPIONS_LIST = 'CHAMPIONS_LIST'
export const CHAMPION_DETAIL = 'CHAMPION_DETAIL'


export const  listChampions = () => {
    return (dispatch) => {
		return axios.get(`${DDRAGON_URL}/${VERSION}/data/en_US/champion.json`)
		.then(res => {
			// handle success
			const payload = res.data.data
			dispatch({type: CHAMPIONS_LIST, payload})
			// return res.data.data
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
    }
}

export const getDetailChampion = (id) => {
	return (dispatch) => {
		return axios.get(`${DDRAGON_URL}/${VERSION}/data/en_US/champion/${id}.json`)
		.then(res => {
			// handle success
			console.log('res', res)
			const payload = res.data.data[id]
			dispatch({type: CHAMPION_DETAIL, payload})
			// return res.data.data
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
	}
}