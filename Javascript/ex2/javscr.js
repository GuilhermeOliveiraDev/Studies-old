/* function troca(){
    var x = document.getElementById("saldopn")
    if (x.innerHTML.toLowerCase() === "saldo"){
        x.innerHTML = "Saldo positivo"
    }
    else if (x.innerHTML.toLowerCase() === "saldo positivo"){
        x.innerHTML = "Saldo negativo"
    }
    else if (x.innerHTML.toLowerCase() === "saldo negativo"){
        x.innerHTML = "Saldo positivo"
    }
    else{
        x.innerHTML = "Saldo"
    }
} */

/* let rec = 0
let desp = 0
let sal = 0
let val = 0
let rd
let x


function addval(){
    val = document.getElementById("valor").value
    rd = document.querySelector('input[name="rd"]:checked').value
    val = Number(val)
    if (rd === "receita"){
        rec += val
        sal += val
        document.getElementById("vreceita").value = rec
        document.getElementById("vsaldo").value = sal
    }
    else if (rd === "despesa"){
        desp += val
        sal -= val
        document.getElementById("vdespesa").value = desp
        document.getElementById("vsaldo").value = sal
    }
    else{
    }
    x = document.getElementById("saldopn")
    if (sal >0){
        x.innerHTML = "Saldo positivo"
    }
    else if (sal<0){
        x.innerHTML = "Saldo negativo"
    }
    else{
        x.innerHTML = "Saldo"
    }
} */

let family = {
    rec: [0],
    desp:[0],
}
let sal = 0
let val = 0
let rd
let x


function addval(){
    val = document.getElementById("valor").value
    rd = document.querySelector('input[name="rd"]:checked').value
    val = Number(val)
    if (rd === "receita"){
        family.rec.push(val)
        sal += val
        document.getElementById("vreceita").value = family.rec.reduce((a,b)=> a + b,0)
        document.getElementById("vsaldo").value = sal
    }
    else if (rd === "despesa"){
        family.desp.push(val)
        sal -= val
        document.getElementById("vdespesa").value = family.desp.reduce((a,b)=> a + b,0)
        document.getElementById("vsaldo").value = sal
    }
    else{
        console.log("Erro na seleção Rec/Desp")
    }
    x = document.getElementById("saldopn")
    if (sal >0){
        x.innerHTML = "Saldo positivo"
    }
    else if (sal<0){
        x.innerHTML = "Saldo negativo"
    }
    else{
        x.innerHTML = "Saldo"
    }
}
