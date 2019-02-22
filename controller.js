module.exports = {
    getPlanes(req, res, next) {
        req.app.get('db')
            .get_planes({ passengerCount: 25 })
            .then(planes => {
                res.send(planes);
            })
            .catch(err => {
                res.status(500).send({ message: 'something went wrong' });
            });
    }
}