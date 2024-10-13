//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.



 let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let a = 4.42;

let b = 7.61;


function estimateNum(arrNumbers, a, b) {


    for (let i = 0; i < arrNumbers.length; i++) {
     
        if (i >= a && i < b) { //controlla che ogni indice dell'array sia tra a e b

            console.log(arrNumbers[i]); 
        }
    }
}


estimateNum(arrNumbers, a, b);