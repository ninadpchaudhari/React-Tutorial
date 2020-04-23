let MovieModel = require('../models/movie')



let create = function create(name,isFav, callback) {
   
    let aMovie = new MovieModel({
        name: name,
        isFav : isFav
    });

        aMovie.save()
        .then(res => {
            console.log(res);
            callback(res);
        })
        .catch(err => {
            console.error(err);
        });

}

let findOneByName = function findOneByName(name, callback){

        MovieModel.findOne({'name' : name}, 'name isFav', function(err, movie){
            console.log(movie);
            callback(movie);
        })
}

exports.create = create;
exports.findOneByName = findOneByName;