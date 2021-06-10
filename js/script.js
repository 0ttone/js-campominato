/*
1)Il computer deve generare 16 numeri casuali tra 1 e 100.
2)I numeri non possono essere duplicati.
3)In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
      L’utente non può inserire più volte lo stesso numero.

4a)Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
4b)La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

5)Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

//1) fai generare  16 numeri casuali unici che vadano a popolare una lista di confronto per
//    le successive operazioni
//2)   while condiziona lunghezza array, push num in list condizionato da presenza dello stesso
// sequenza standard replicabile quindi function -> 


var outputElement = document.getElementById('output')


function randomNumber(min, max) {
      return  Math.floor(Math.random() * (max - min + 1) + min)
      }
      
var listNumCpu =[]
var listNumPlayer =[]
var maxNum = 100



while (listNumCpu.length < 16){
      var randomNumCpu =randomNumber(1, maxNum);
      if (!listNumCpu.includes(randomNumCpu)){
            listNumCpu.push(randomNumCpu)
      }

}
console.log(listNumCpu);
outputElement.innerText = '\n test 16 num cpu '+listNumCpu;

/*
3)ora per una condizione while inferiore a 84 volte chiedi inserimento numero
unico (prompt + check duplicato con alert dopo verifica notincludes + riproponi prompt)
inventarsi doppia condizione di verifica con listNumCpu->
     4a) se vera partita finita quindi è un || a partire dal confronto con listcpu
         ovvero parte dalla condizione che non conteggia il numero e fine
     4b) se ok doppio confronto (ovvero falso) va a popolare listNumPlayer 
         e ripropone prompt inserimento
         ....farlo
*/

while (listNumPlayer.length < 84){
      var numPlayer = parseInt(prompt("Inserisci un numero da 1 a 100"))

      // while (isNaN(numPlayer) || numPlayer < 1 || numPlayer > 100) {
      //       alert('Attenzione! devi inserire un numero da 1 a 100')
      //       numPlayer = parseInt(prompt("Inserisci un numero da 1 a 100"));
      // }
      
      if(!listNumCpu.includes(numPlayer)) {
            if (!listNumPlayer.includes(numPlayer)){
                  listNumPlayer.push(numPlayer);
            } else {
                  alert("hai perso");
                  break;
            }
                  else {
                  alert("inserisci un numero diverso sempre da 1 a 100");
            }



      }

}
console.log (listNumPlayer)

console.log(numPlayer)

        
      


      





