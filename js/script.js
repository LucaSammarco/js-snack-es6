// // SNACK 1
// // Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// // Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

// // [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']


// // Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:


// // nome del tavolo (tableName),
// // nome dell'ospite (guestName),
// // posto occupato (place),

// // Generiamo e stampiamo in console la lista per i segnaposto.






// //* Snack 1

// const tavoloVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']


// nuovaLista = tavoloVip.map((x, index) => {
//     return ({tableName: "tavoloVip", guestName: x, place:index+1 })
// });


// console.log(nuovaLista)


// // SNACK 2
// // Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...

// // 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);

// // 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

// // 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// // Buon pomeriggio e buon lavoro !!! :faccia_nerd:


// // Id  Name                Grades
// // 213 Giuseppina della Rovere 78
// // 110 Paola Cortellessa       96
// // 250 Andrea Mantegna         48
// // 145 Gaia Borromini          74
// // 196 Luigi Grimaldello       68
// // 102 Piero della Francesca   50
// // 120 Francesca da Polenta    84


// //! Creazione lista studenti
// const studenti = [
//     { id: 213, name: 'Giuseppina della Rovere', grades: 78 },
//     { id: 110, name: 'Paola Cortellessa', grades: 96 },
//     { id: 250, name: 'Andrea Mantegna', grades: 48 },
//     { id: 145, name: 'Gaia Borromini', grades: 74 },
//     { id: 196, name: 'Luigi Grimaldello', grades: 68 },
//     { id: 102, name: 'Piero della Francesca', grades: 50 },
//     { id: 120, name: 'Francesca da Polenta', grades: 84 }
// ];


// //TODO Uppercase list
// const targhe = studenti.map(y => {
//     return { name: y.name.toUpperCase()};
// });

// console.log(targhe);

// //? Over 70

// goodGrades = studenti.filter(studente => studente.grades >= 70)

// console.log(goodGrades)

// idAndGrades = studenti.filter(studente => studente.grades >= 70 && studente.id >= 120)

// console.log(idAndGrades)


// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal


//     HC
//     *   / Creare arrey di oggetti
//     *   / Scegliere un modo per determinare la piu leggera e stamparla in console

const biciclette = [
    { nome: 'Bianchi Oltre XR4', peso: 7.5 },
    { nome: 'Cannondale SuperSix EVO', peso: 7.8 },
    { nome: 'Trek Emonda', peso: 7.2 },
    { nome: 'Specialized Tarmac SL7', peso: 7.6 },
    { nome: 'Pinarello Dogma F12', peso: 7.3 }
  ];
  
  console.log(biciclette);

  let pesoMinimo = Infinity;

  biciclette.forEach(element => {
    if (element.peso < pesoMinimo) {
      pesoMinimo = element.peso;
    }
  });

  console.log(pesoMinimo);

  biciclettaLeggera = biciclette.filter(bicicletta => bicicletta.peso === pesoMinimo);

  console.log(biciclettaLeggera)

  const[{nome, peso}] = biciclettaLeggera;

  console.log(`La bicicletta piu' leggera e'${nome} con un peso di ${peso} kg`)



  const squadreCalcio = [
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0 }
];

console.log(squadreCalcio);

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  }


  nuovaLista = squadreCalcio.map((squadra, index) => {

   return ({squadra.nome: nome, squadra.puntiFatti: getRandomInt(100), squadra.falliSubiti:getRandomInt(500)})

});
