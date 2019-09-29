const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const URL ='mongodb://isaacfigueroa:bf2a40d5@cluster0-shard-00-00-2kyrn.mongodb.net:27017,cluster0-shard-00-01-2kyrn.mongodb.net:27017,cluster0-shard-00-02-2kyrn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'


mongoose.connect( URL ,{ useNewUrlParser : true })
    .then( db =>{ console.log("database conectada")})
    .catch(err =>{ console.log(err)});
        

    module.exports = mongoose; 