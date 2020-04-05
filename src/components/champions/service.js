import { DDRAGON_URL, VERSION } from '../../config/config'
import * as championsActions from './store/actions'
import axios from 'axios'

export function getAllChampions() {
	return dispatch => {
		new Promise((resolve, reject) => {
			axios.get(`${DDRAGON_URL}/${VERSION}/data/en_US/champion.json`)
			.then(res => {
				// handle success
				dispatch(championsActions.list(res.data.data))
				resolve(res.data.data)
				console.log(res);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
		})
		
	}
}
