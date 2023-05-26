CONSEGNA: L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

- creo un bottone che permette all'utente di generare la griglia;
- creo un contenitore nel DOM che andrà a contenere la griglia (div);
- creo una funzione che mi crei un nuvo elemento div che saranno le celle di cui verrà composta la griglia;
- creo un ciclo di 100 iterazioni (numero di celle da creare);
- ad ogni ciclata utilizzando la funzione che mi genera una nuova cella la vado ad aggiungere al contenitore della griglia;
- creo un eventlistener di tipo click relativo alla cella che viene clickata (this);
- aggiungo una classe che fa cambiare colore alla cella quando viene clickata;