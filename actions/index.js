import { ADD,MINUS } from '../constants/actionTypes/index';

export let addAction = () => ({
	type: ADD
});
export let minusAction = () => ({
	type: MINUS
});

//export let dispatchCounting = () => (dispatch, getState) => dispatch(countingAction());



