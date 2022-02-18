
const init = (nome) => {
    console.log(nome);
}
init("Juareis");

const pessoa = {
    "olhos":"Castanhos",
    "altura":"1,80",
    "profissao":"Advogado",
    "faleDeVoce": (nome) =>{
        console.log("Olá eu sou" +nome);
    }
}
pessoa.faleDeVoce("Juana");
pessoa.faleDeVoce("Juana");