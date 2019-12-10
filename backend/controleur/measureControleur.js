const Measure = require('../modele/measuresModel');

//créer + sauvegarder un utilisateur
exports.create = (req, res) => {

    //créer un nouvel measure
    const measure = new Measure({
        creationDate: req.body.creationDate,
        sensorId: req.body.sensorId,
        value: req.body.value,
    });

    //save measure in the db
    measure
        .save()
        .then(data => {
            res.send(data) // we wait for insertion to be complete and we send the newly measure integrated
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'erreur creation measure'
            });
        });
};

// trouver + return tous les measures de la bdd
exports.findAll = (req, res) => {
    Measure.find()
        .then(measures => {
            res.send(measures);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'erreur au moment de trouver les measures'
            });
        });
}

//Les trois fonctions pour return le type de mesure
exports.getTypeHumidity = (req, res) => {

    Measure.find({ type: 'humidity' })
        .then(measures => {
            res.send(measures);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'erreur au moment de trouver les measures'
            });
        });
}

exports.getTypeTemperature = (req, res) => {

    Measure.find({ type: 'temperature' })
        .then(measures => {
            res.send(measures);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'erreur au moment de trouver les measures'
            });
        });
}

exports.getTypeAirPollution = (req, res) => {

    Measure.find({ type: 'airPollution' })
        .then(measures => {
            res.send(measures);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'erreur au moment de trouver les measures'
            });
        });
}

//return la température max parmis toutes les measures
exports.getTempSuperieurOuEgalesAVingt = (req, res) => {

    Measure.find({
        type: 'temperature',
        value: { $gte: 30 }
    })
        .then(measures => {
            res.send(measures);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'erreur au moment de trouver les measures'
            });
        });
}

//trouver un measure avec son id
exports.findOne = (req, res) => {
    Measure.findById(req.params.measureId)
        .then(measure => {
            if (!measure) {
                return res.status(404).send({
                    message: 'measure non trouvé avec id ' + req.params.measureId
                });
            }
            res.send(measure);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'measure non trouvé avec id ' + req.params.measureId
                });
            }
            return res.status(500).send({
                message: 'erreur trouver measure avec id ' + req.params.measureId
            });
        });
};

// mettre à jour un measure via son id
exports.update = (req, res) => {
    Measure.findByIdAndUpdate(
        req.params.measureId,
        {
            creationDate: req.body.creationDate,
            sensorId: req.body.sensorId,
            value: req.body.value,
        },
        { new: true }
    )
        .then(measure => {
            if (!measure) {
                return res.status(404).send({
                    message: 'measure non trouvé avec id' + req.params.measureId
                });
            }
            res.send(measure);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'measure non trouvé avec id ' + req.params.measureId
                });
            }
            return res.status(500).send({
                message: 'erreur trouver measure avec id ' + req.params.measureId
            });
        });
};

//delete measure avec son id
exports.delete = (req, res) => {
    Measure.findByIdAndRemove(req.params.measureId)
        .then(measure => {
            if (!measure) {
                return res.status(404).send({
                    message: 'measure non trouvé avec id' + req.params.measureId
                });
            }
            res.send({ message: 'measure supprimé correctement' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'measure non trouvé avec id ' + req.params.measureId
                });
            }
            return res.status(500).send({
                message: 'pas pu suppr le measure avec le id : ' + req.params.measureId
            });
        });
};
