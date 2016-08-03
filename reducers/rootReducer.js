import { combineReducers } from 'redux'
import { ADD,MINUS } from '../constants/actionTypes/index'


function counting(state = {times:0}, action) {
	switch(action.type){
		case ADD :
			return Object.assign({},state,{times:state.times+1})
		case MINUS :
			return Object.assign({},state,{times:state.times-1})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	counting
})

export default rootReducer