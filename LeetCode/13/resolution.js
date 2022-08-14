function romanToInt(s) {
    if (1 <= s.length <= 15){
    let result = 0
    let char = s.split('')
    let index = 0
    char.forEach(function(n){
        switch(n){
            case "I":
                if (char[index + 1] == "V" || char[index + 1] == "X"){
                    result -= 1
                }
                else{
                    result += 1
                }
                break
            case "V":
                result += 5
                break
            case "X":
                if (char[index + 1] == "L" || char[index + 1] == "C"){
                    result -= 10
                }
                else{
                    result += 10
                }
                break
            case "L":
                    result += 50
                break
            case "C":
                    if (char[index + 1] == "D" || char[index + 1] == "M"){
                    result -= 100
                }
                else{
                    result += 100
                }
                break
            case "D":
                    result += 500
                break
            case "M":
                    result += 1000
                break
        }
        index += 1
    })
    return result
    
    }
};

console.log(romanToInt("MCMXCIV"))