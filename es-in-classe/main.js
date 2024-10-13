//crea un array di zucchine oggetto indicandone nome e peso e calcola la somma del loro peso

let arrZucchine = [

    {
        "nome": "zucchina 1",
        "peso": 30
    },

    {
        "nome": "zucchina 2",
        "peso": 40
    },

    {
        "nome": "zucchina 3",
        "peso": 60
    }
]




let somma = 0;

for (let i = 0; i < arrZucchine.length; i++) { //arrZucchine.length serve a garantire che il ciclo si ripeta esattamente per tutti gli elementi dell'array.
    const zucchina = arrZucchine[i];

    somma = somma + zucchina.peso
    
}

console.log(somma);
