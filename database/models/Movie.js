module.exports = function (sequelize, dataTypes) {
    let alias = 'Movie';

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title:{
            type: dataTypes.STRING
        },
        rating:{
            type: dataTypes.DECIMAL
        },
        awards:{
            type: dataTypes.INTEGER
        },
        release_date:{
            type: dataTypes.DATE
        },
        genre_id:{
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "movies",
        timestamps: true,
        underscored: true
    };

    let Movie = sequelize.define(alias, cols, config);
    return Movie;
};