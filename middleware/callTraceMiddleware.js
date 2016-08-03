export default ({dispatch, getState}) => next => action => {
	console.trace();
	return next(action);
} 