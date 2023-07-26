const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const connDB = require('./DB/conectDB')
const carta = require('./models/cartaModel')
const app = express()

class Server {
    constructor() {
        
        this.connectionDB = new connDB();
        this.app = express();
        this.#config();
    }

    #config() {
        //morgan para monitoreo de las peticiones http
        this.app.use(morgan());
        //permitir conexiones de origen cruzado
        this.app.use(cors());

        // usar datos en formato json
        this.app.use(express.json());


        //puerto del enviroment o por defecto 
        this.app.set('PORT', process.env.PORT || 3001);

        //ruta GET
        this.app.get('/', function (req, res) {
            res.send('Hello World')
        })

        this.app.get('/cartas', function (req, res) {
            carta.find().then((data)=>{
                res.status(200).json({data})
                console.log("data:",data)
            });
        })

        //servidor a la escucha
        this.app.listen(this.app.get('PORT'), () => {
            console.log("servidor escuchando por el puerto: ", this.app.get('PORT'))
        });
    }
}
new Server();