
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.


let arrbici = [

    {
        "nome": "bici 0",
        "peso": 30
    },

    {
        "nome": "bici 1",
        "peso": 40
    },

    {
        "nome": "bici 2",
        "peso": 60
    }
]


let bicileggera = arrbici[0]; //Ha 3 scopi: 1- Serve da scheda di memoria come bici con peso minore.
                                           //2- Subisce un aggiornamento ogni volta 
                                           //che viene rilevata una bici con peso minore.
                                           //3- Inizializzare una variabile con il primo elemento dell'array (arrbici[0]) 
                                           //serve per avere un punto di partenza nel processo di confronto dei pesi.



for (let i = 0; i < arrbici.length; i++) { //ciclo for che serve solo per iterare
    let bicidaconfrontare = arrbici[i]; // mi permette di accedere ad ogni nuovo elemento dell'array durante ogni nuova iterazione. Quindi biciAttuale rappresenta la bici (oggetto) con cui dovrò in seguito fare un confronto.

    if (bicidaconfrontare.peso < biciLeggera.peso) {
        biciLeggera = bicidaconfrontare; // Aggiorno la biciLeggera se trova una bici più leggera
    }
}

