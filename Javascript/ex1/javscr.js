/* function Fazernota(){
    let notanum = document.getElementsByName("Nota")[0].value
    let resultachar = "Indefinido."
    let c1 = notanum>100 ? true : false
    let c2 = notanum<=100 && notanum>=90 ? true : false
    let c3 = notanum<=89 && notanum>=80 ? true : false
    let c4 = notanum<=79 && notanum>=70 ? true : false
    let c5 = notanum<=69 && notanum>=60 ? true : false
    let c6 = notanum<60 && notanum>=0 ? true : false
    let c7 = notanum<0 ? true : false
    switch(true){
        case c1:
            resultachar="Nota inválida!"
            break
        case c2:
            resultachar="A"
            break
        case c3:
            resultachar="B"
            break
        case c4:
            resultachar="C"
            break
        case c5:
            resultachar="D"
            break
        case c6:
            resultachar="F"
            break
        case c7:
            resultachar="Nota inválida!"
            break
    }
    document.getElementsByName("Resultado")[0].value = resultachar
} */
function Fazernota(){
    let notanum = document.getElementsByName("Nota")[0].value
    let resultachar = "Indefinido."
    resultachar = notanum>100 ? "Nota inválida!" : resultachar
    resultachar = notanum<=100 && notanum>=90 ? "A" : resultachar
    resultachar = notanum<=89 && notanum>=80 ? "B" : resultachar
    resultachar = notanum<=79 && notanum>=70 ? "C" : resultachar
    resultachar = notanum<=69 && notanum>=60 ? "D" : resultachar
    resultachar = notanum<60 && notanum>=0 ? "F" : resultachar
    resultachar = notanum<0 ? "Nota inválida!" : resultachar
    document.getElementsByName("Resultado")[0].value = resultachar}