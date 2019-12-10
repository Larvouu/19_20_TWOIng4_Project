const User = require('../modele/usersModel.js');

//créer + sauvegarder un utilisateur
exports.create = (req,res) => {

    //créer un nouvel user
    const user = new User({
        location: req.body.location,
        personsInHouse: req.body.personsInHouse,
        houseSize: req.body.houseSize
    });
    
    //save user in the db
    user
        .save()
        .then(data => {
            res.send(data) // we wait for insertion to be complete and we send the newly user integrated
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'erreur creation user'
            });
        });
};

// trouver + return tous les users de la bdd
exports.findAll = (req,res) => {
    User.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'erreur au moment de trouver les users'
            });
        });
}

// retourne les users selon leur houseSize
exports.findAllByHouseSize = (req,res) => {
    User.find({houseSize : req.params.houseSize})
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'erreur au moment de trouver les users'
            });
        });
}

// code de la diapo du cours
//trouver un user avec son id
exports.findOne = (req,res) => {
    User.findById(req.params.userId)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: 'user non trouvé avec id '+ req.params.userId
                });
            }
            res.send(user);
        })
        .catch(err => {
            if (err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: 'user non trouvé avec id '+ req.params.userId
                });
            }
            return res.status(500).send({
                message: 'erreur trouver user avec id ' + req.params.userId
            });
        });
};

// mettre à jour un user via son id
exports.update = (req,res) => {
    User.findByIdAndUpdate(
        req.params.userId,
        {
            location: req.body.location,
            personsInHouse: req.body.personsInHouse,
            houseSize: req.body.houseSize
        },
        {new: true}
    )
        .then(user => {
            if(!user){
                return res.status(404).send({
                    message: 'user non trouvé avec id' + req.params.userId
                });
            }
            res.send(user);
        })
        .catch(err => {
            if (err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: 'user non trouvé avec id '+ req.params.userId
                });
            }
            return res.status(500).send({
                message: 'erreur trouver user avec id ' + req.params.userId
            });
        });
};

//delete user avec son id
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if(!user){
                return res.status(404).send({
                    message: 'user non trouvé avec id' + req.params.userId
                });
            }
            res.send({message: 'user supprimé correctement'});
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound'){
                return res.status(404).send({
                    message: 'user non trouvé avec id '+ req.params.userId
                });
            }
            return res.status(500).send({
                message: 'pas pu suppr le user avec le id : ' + req.params.userId
            });
        });
};
