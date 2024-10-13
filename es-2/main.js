//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//Esempio senza parametri 

let arrSquadre = [

    {
        "nome": "milan",
        "punti fatti": 0,
        "falli subiti": 0,
    },

    {
        "nome": "inter",
        "punti fatti": 0,
        "falli subiti": 0,
    },

    {
        "nome": "juve",
        "punti fatti": 0,
        "falli subiti": 0,
    }
]

function generaDati() {
    for (let i = 0; i < arrSquadre.length; i++) {
        arrSquadre[i]["punti fatti"] = Math.ceil(Math.random() * 20);
        arrSquadre[i]["falli subiti"] = Math.ceil(Math.random() * 63);
    }
}

generaDati();

console.log(arrSquadre);


//Esempio con paraemtri

let arrSquadre = [
    {
        "nome": "milan",
        "punti fatti": 0,
        "falli subiti": 0,
    },
    {
        "nome": "inter",
        "punti fatti": 0,
        "falli subiti": 0,
    },
    {
        "nome": "juve",
        "punti fatti": 0,
        "falli subiti": 0,
    }
];

function generaDati(squadre) { //squadre è un parametro della funzione generaDati(). Non ha ancora un valore definito fino a quando la funzione non viene chiamata. è solo una definizione per riferirmi ai dati dell'array
    for (let i = 0; i < squadre.length; i++) {
        squadre[i]["punti fatti"] = Math.ceil(Math.random() * 20);
        squadre[i]["falli subiti"] = Math.ceil(Math.random() * 63);
    }
}


generaDati(arrSquadre); //sto chiamando la funzione (generaDati()) e sto facendo si che il parametro squadre assuma il valore dell'argomento che in questo caso è l'array arrSquadre.
console.log(arrSquadre); 
