//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


let arrSquadre = [

    {
        "nome": "milan",
        "punti fatti": 30,
        "falli subiti": 15,
    },

    {
        "nome": "inter",
        "punti fatti": 10,
        "falli subiti": 10,
    },

    {
        "nome": "juve",
        "punti fatti": 3,
        "falli subiti": 5,
    }
]

//console.log(arrSquadre);


for (let i = 0; i < arrSquadre.length; i++) {
    console.log(`Nome: ${arrSquadre[i].nome}, Punti fatti: ${arrSquadre[i]["punti fatti"]}, Falli subiti: ${arrSquadre[i]["falli subiti"]}`);
}
