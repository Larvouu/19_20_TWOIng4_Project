const Sensor = require('../modele/sensorsModel.js');

//créer + sauvegarder un utilisateur
exports.create = (req, res) => {

    //créer un nouvel sensor
    const sensor = new Sensor({
        creationDate: req.body.creationDate,
        location: req.body.location
    });

    //save sensor in the db
    sensor
        .save()
        .then(data => {
            res.send(data) // we wait for insertion to be complete and we send the newly sensor integrated
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'erreur creation sensor'
            });
        });
};

// trouver + return tous les sensors de la bdd
exports.findAll = (req, res) => {
    Sensor.find()
        .then(sensors => {
            res.send(sensors);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'erreur au moment de trouver les sensors'
            });
        });
}


//trouver un sensor avec son id
exports.findOne = (req, res) => {
    Sensor.findById(req.params.sensorId)
        .then(sensor => {
            if (!sensor) {
                return res.status(404).send({
                    message: 'sensor non trouvé avec id ' + req.params.sensorId
                });
            }
            res.send(sensor);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'sensor non trouvé avec id ' + req.params.sensorId
                });
            }
            return res.status(500).send({
                message: 'erreur trouver sensor avec id ' + req.params.sensorId
            });
        });
};

// mettre à jour un sensor via son id
exports.update = (req, res) => {
    Sensor.findByIdAndUpdate(
        req.params.sensorId,
        {
            creationDate: req.body.creationDate,
            location: req.body.location
        },
        { new: true }
    )
        .then(sensor => {
            if (!sensor) {
                return res.status(404).send({
                    message: 'sensor non trouvé avec id' + req.params.sensorId
                });
            }
            res.send(sensor);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'sensor non trouvé avec id ' + req.params.sensorId
                });
            }
            return res.status(500).send({
                message: 'erreur trouver sensor avec id ' + req.params.sensorId
            });
        });
};

//delete sensor avec son id
exports.delete = (req, res) => {
    Sensor.findByIdAndRemove(req.params.sensorId)
        .then(sensor => {
            if (!sensor) {
                return res.status(404).send({
                    message: 'sensor non trouvé avec id' + req.params.sensorId
                });
            }
            res.send({ message: 'sensor supprimé correctement' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'sensor non trouvé avec id ' + req.params.sensorId
                });
            }
            return res.status(500).send({
                message: 'pas pu suppr le sensor avec le id : ' + req.params.sensorId
            });
        });
};
