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
// sequenza standard replicabile? quindi function -> 

//aggiunta bonus con livelli - cambia il range di numeri casuali: 
//con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50


var outputElement = document.getElementById('output')


function randomNumber(min, max) {
      return  Math.floor(Math.random() * (max - min + 1) + min)
      }
      
var listNumCpu =[]
var listNumPlayer =[]
var maxNum = 100
var qtyNumRnd = 16




/*con switch faccio scegliere livello all utente creando le opzioni che in sostanza cambiano la maxNum
e quindi anche i tentativi    TODO tentativi player che sarà maxNum-qtyNumRnd

prompt richiesta livello con check correttezza inserimento dati ???????? fare function del ciclo while check???

*/
var level = prompt ('Inserisci il NUMERO per il livello di difficoltà: 0 Facile, 1 Medio, 2 Difficile');

//check inserimento
while (isNaN(level) || level < 0 || level > 3){
      alert('ATTENZIONE! Devi inserire un numero da 0 a 3');
      level = prompt ('Inserisci il NUMERO per il livello di difficoltà: 0 Facile, 1 Medio, 2 Difficile');
      
}


var playerAttempts = maxNum - qtyNumRnd;
console.log('tentativi', playerAttempts)

switch (level){
      
      case "0":
            var maxNum = 100;
            break;

      case "1":
            var maxNum = 80;
            break;

      case "2":
            var maxNum = 50;
            break;
      
      }


//creazione dell array da 16 numeri condizionati dalla presenza nella lista
while (listNumCpu.length < qtyNumRnd){
      var randomNumCpu =randomNumber(1, maxNum);
      //se il numero generato non è già incluso
      if (!listNumCpu.includes(randomNumCpu)){
      //allora push nella lista, chiudi e torna su fino alla condizione del while(in questo caso 16)
            listNumCpu.push(randomNumCpu)
      }

}
console.log(listNumCpu);
outputElement.innerText = '\n test 16 num cpu '+listNumCpu;

/*
3)ora per una condizione while inferiore a maxNum meno 16 volte chiedi inserimento numero
unico (prompt + check duplicato con alert dopo verifica notincludes + riproponi prompt)
inventarsi doppia condizione di verifica con listNumCpu->
     4a) se vera partita finita quindi BREAK che fai prima esci a WHILE
         
     4b) se ok doppio confronto (ovvero falso) va a popolare listNumPlayer 
         e ripropone prompt inserimento
         ....farlo
*/


 //messo 5 per facilitare 
while (listNumPlayer.length < 5  ){
      var numPlayer = parseInt(prompt("Inserisci un numero tra 1 e " + maxNum))
     
      //ora verifico correttezza valori
      while (isNaN(numPlayer) || numPlayer < 1 || numPlayer > maxNum) {
            alert("Attenzione! devi inserire un numero da 1 e" + maxNum)
            numPlayer = parseInt(prompt("Inserisci un numero tra 1 e " + maxNum));
      }
     
      //se è nella lista cpu esco dal while con break e alla fine stampo
      if (listNumCpu.includes(numPlayer)){
            break;
      
            //se è nella lista lo comunico e vado avanti il numero non viene preso
            //in considerazione nel octno
      } else if (listNumPlayer.includes(numPlayer)){
            alert("Hai già inserito il numero"),numPlayer;
      
            //se non è nella lista/array player pusho
      } else if (!listNumPlayer.includes(numPlayer)){
            listNumPlayer.push(numPlayer);
            console.log ('lista player' + listNumPlayer)
      
      }
           
}
//risultati
if (listNumPlayer.length === 5){
      alert("Complimenti! Il tuo punteggio è "+ (listNumPlayer.length))
}else {
      alert("BOOOOOOOM! il tuo punteggio è " + (listNumPlayer.lenght)) 
}

console.log (listNumPlayer)

console.log(numPlayer)

      









        
      


      





