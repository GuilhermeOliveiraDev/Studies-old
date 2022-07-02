let val = 0
let res = 0
let cf


function convert(){
    val = document.getElementById("valor").value
    cf = document.querySelector('input[name="cf"]:checked').value
    val = Number(val)
    if (cf === "F"){
        document.getElementById("res").value = ((val - 32) * 5/9).toFixed(2).replace(/[.,]00$/, "")
    }
    else if (cf === "C"){
        document.getElementById("res").value = (val * 9/5 + 32).toFixed(2).replace(/[.,]00$/, "")

    }
    else{
        console.log("Erro na seleção de C/F")
    }
}