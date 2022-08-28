const express = require('express');
const app = express()

app.set("view engine", "ejs");

const demais = [
{
    title: "D",
    message: "esenvolver aplicações/serviços de forma fácil."
},
{
    title: "E",
    message: "JS usa JavaScript para renderizar HTML."
},
{
    title: "M",
    message: "uito fácil de usar."
},
{
    title: "A",
    message: "ssíncrono."
},
{
    title: "I",
    message: "nstall EJS."
},
{
    title: "S",
    message: "intaxe simples."
},
];
const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript";

app.get("/", function (req, res){
    res.render("pages/index",
    {
        qualitys: demais,
        subtitle: subtitle,
    });
});

app.get("/sobre", function (req, res){
    res.render("pages/about");
});

app.listen(8080);
console.log("Executando");