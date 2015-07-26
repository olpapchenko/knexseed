var Knex = require("knex"),
    Promise = require("bluebird"),
    knex;

module.exports = function(grunt){
    grunt.registerTask("knexseed", "knex seed task", function(action, name){
        var done = this.async();
        knex = Knex(grunt.config("knexseed.config").database);
        actions[action](grunt.config("knexseed.config"), name).then(function(message){
            grunt.log.oklns(message);
        }).catch(function(msg){grunt.log.errorlns(msg)})
        .finally(done);
    });
}

var actions = {
    make: function(config, name){
        if(name == null){
            return Promise.reject("Name can not be empty!");
        }
        return knex.seed.make(name,config).then(function(file){
            return "Seed file was generated: " + file;
        });
    },
    run: function(config){
       return knex.seed.run(config).then(function(msg){
            return "Seeds files applied, total: " + msg.length;
        });
    }
}