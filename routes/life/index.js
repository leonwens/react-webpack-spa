module.exports = {
    path: 'life',
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
            	require('./entry')
            ])
        })
    }
}

