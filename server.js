const express = require("express")
const productos = require("./routes/productos")
const PORT = 8080
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api',productos);

// app.set('view engine', 'html')

// app.get('/',(req,res) => {
//     res.render('index')
// })

const server = app.listen(PORT, () => console.log(`Servidor listo en el puerto ${PORT} ...`))

server.on('error', error => console.log(`Error en el servidor... Error: ${error}`));
