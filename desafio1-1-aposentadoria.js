const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if (sexo == "F"){
    if (idade + contribuicao >= 85 && contribuicao >= 30){
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    if (idade + contribuicao >= 95 && contribuicao >= 35){
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}