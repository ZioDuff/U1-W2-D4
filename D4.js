/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  const rectangle = (l1 * l2) / 2
  return rectangle
}
console.log(area(6, 3))
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  let result = n1 + n2
  if (n1 % 1 === 0 && n2 % 1 === 0) {
    if (n1 === n2) {
      result = result * 3
    } else {
      result = result
    }
  } else {
    console.log("I numeri inseriti non sono interi")
  }

  return result
}

console.log(crazySum(2, 2))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1) {
  let differenza = 19 - n1
  if (n1 > 0 && n1 < 19) {
    return differenza
  } else if (n1 > 19) {
    return differenza * 3
  } else {
    return "non ce differenza"
  }
}
console.log(crazyDiff(65))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (numInt) {
  if (numInt >= 20 && numInt <= 100) {
    return true
  } else if (numInt === 400) {
    return true
  } else {
    return false
  }
}
console.log(boundary(101))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (sentence) {
  if (sentence.startsWith("EPICODE")) {
    return sentence
  } else {
    return "EPICODE " + sentence
  }
}
console.log(epify("è molto bello"))
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (numero1) {
  if (numero1 % 3 === 0 && numero1 % 7 === 0) {
    return "è moltiplicabile per 3 e 7"
  } else {
    return "non lo è"
  }
}
console.log(check3and7(116))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (EPICODE) {
  return EPICODE.split("").reverse().join("")
}
reverseString("EPICODE")
console.log(reverseString("EPICODE"))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (str) {
  let nStr = str.split(" ")
  for (i = 0; i < nStr.length; i++) {
    nStr[i] = nStr[i][0].toUpperCase().concat(nStr[i].substring(1))
  }
  return nStr.join("")
}
console.log(upperFirst("ciao sono jacopo"))
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (str) {
  let tagliata = str.slice(1, -1)
  return tagliata
}

console.log(cutString("ciao"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
