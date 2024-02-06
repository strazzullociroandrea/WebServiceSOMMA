const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use("/", express.static(path.join(__dirname, "public")));

/**
 * Servizio per la somma di due numeri, restituisce poi la somma
 */
app.post("/sum",(req,res)=>{
    const body = req.body;
    const primoNumero = (typeof body.primoNumero !== "number") ? parseInt(body.primoNumero) : body.primoNumero;
    const secondoNumero = (typeof body.secondoNumero !== "number") ?  parseInt(body.secondoNumero) :body.secondoNumero;
    res.json({result: (primoNumero+secondoNumero)});
});

/**3
 * Creazione del server
 */
const server = http.createServer(app);
server.listen(80, () => {
  console.log("-> server running");
});