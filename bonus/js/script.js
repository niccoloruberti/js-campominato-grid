'use strict';

//dichiaro le variabili
const grid = document.getElementById('grid');
const bottone = document.getElementById('generator');

//creo la funzione che mi permette di creare le celle
function createCell() {
    let cell = document.createElement('div');
    //assegno una classe per stilizzare la cella
    cell.classList.add('cell');
    return cell;
}

//creo il ciclo che aggiunge le celle alla griglia quado viene premuto il bottone
bottone.addEventListener('click', function() {
    let level = document.getElementById('levelSelection').value;
    console.log(level);
    switch (level) {
        case '1':
            //ciclo che crea 100 celle
            for (let counter = 1; counter <= 100; counter++) {
                console.log(counter)
                //creo una nuova cella
                let cell = createCell();
                //inserisco il testo nella cella
                cell.innerText = counter;
                //creo un evento relativo al click sulla singola cella che gli fa cambiare colore
                cell.addEventListener('click', function() {
                    this.classList.toggle('active');
                    console.log(this.innerText);
                })
                //inserisco la nuova cella nella griglia
                grid.append(cell);
            }
            break;
        case '2':
            //ciclo che crea 81 celle
            for (let counter = 1; counter <= 81; counter++) {
                console.log(counter)
                //creo una nuova cella
                let cell = createCell();
                //inserisco il testo nella cella
                cell.innerText = counter;
                //creo un evento relativo al click sulla singola cella che gli fa cambiare colore
                cell.addEventListener('click', function() {
                    this.classList.toggle('active');
                    console.log(this.innerText);
                })
                //inserisco la nuova cella nella griglia
                grid.append(cell);
            }
    }
})


