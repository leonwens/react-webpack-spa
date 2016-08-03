module.exports = {
    path: 'entry',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../containers/life/EntryContainer'))
        })
    }
}
