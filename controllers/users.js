const User = require('../models/').User;
const sequelize = User.sequelize;

module.exports = {
    list(req, res) { //console.log(req); 
        return User
            .findAll({})
            .then((item) => res.status(200).send(item))
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    getById(req, res) {
        console.log(req.params.id); //.findOne({id:req.params.id})
        return User
            .findByPk(req.params.id)
            .then((item) => {
                console.log(item);
                if (!item) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return res.status(200).send(item);
            })
            .catch((error) => res.status(400).send(error));
    },
}