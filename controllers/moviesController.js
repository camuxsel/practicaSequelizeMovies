let db = require('../database/models');
const op = db.Sequelize.Op;

let moviesController = {
    index: function(req, res){
        db.Movie.findAll()
            .then(function(data) {
                return res.send(data);
            })
            .catch(function(error) {
                console.log(error);
            })
        // let movieList = ['Rocky', 'Batman', 'Barbie', 'Iron Man'];
        // return res.render('movies', { title: 'Movies', listaPelis: movieList});
    },
    show: function(req, res){
        let id = req.params.id;
        db.Movie.findByPk(id)
            .then(function (data) {
                return res.send(data);
            })
            .catch(function (error) {
                console.log(error);
            })
        // return res.send(`Estamos en el detalle de la película: ${req.params.id}`)
    },
    create: function(req, res){
        db.Movie.findAll({
            where: [
                {release_date: {[op.gte]:2004}}
            ]
        }) .then(function (data) {
                return res.send(data);
            })
            .catch(function (error) {
                console.log(error);
            })
        // return res.render('movieNew', {title: 'nueva película'} )
    },
    recommended: function (req, res) {
        db.Movie.findAll({
            where: [
                {rating: {[op.gte]:8.5}}
            ]
        }) .then(function (data) {
                return res.send(data);
            })
            .catch(function (error) {
                console.log(error);
            })
        // return res.render('movies');
    },
    search: function(req, res){
        let searchTerm = req.query.search
        return res.render('searchResults', { title: 'Resultados de búsqueda', searchTerm })
    },
    store: function(req, res){
        let info = req.body;
        req.session.lastMovie = info;

        res.cookie('lastMovie', info.title, { maxAge: 1000*60*5 })

        return res.redirect('/');
    }
}


module.exports = moviesController