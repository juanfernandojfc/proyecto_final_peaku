const mongoose = require('mongoose')
const urlDB = "mongodb://juanfernandojfc:<password>@ac-yte08du-shard-00-00.mjcmukf.mongodb.net:27017,ac-yte08du-shard-00-01.mjcmukf.mongodb.net:27017,ac-yte08du-shard-00-02.mjcmukf.mongodb.net:27017/?ssl=true&replicaSet=atlas-2t6v12-shard-0&authSource=admin&retryWrites=true&w=majority"
const urlDB2 = "mongodb+srv://juanfernandojfc:<password>@cluster-node.mjcmukf.mongodb.net/?retryWrites=true&w=majority  "
const urlDB3 = "mongodb://juanfernandojfc:<password>@ac-yte08du-shard-00-00.mjcmukf.mongodb.net:27017,ac-yte08du-shard-00-01.mjcmukf.mongodb.net:27017,ac-yte08du-shard-00-02.mjcmukf.mongodb.net:27017/proyecto_pecku?ssl=true&replicaSet=atlas-2t6v12-shard-0&authSource=admin&retryWrites=true&w=majority"
class conectDB {
    constructor() {
        this.conection();
    }

    async conection() {
        this.conn = await mongoose.connect(urlDB3);
    }
}

module.exports = conectDB;