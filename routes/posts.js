const express = require('express');
const router = express.Router();
const postList = require('../data/posts')

// Implementare le logiche delle nostre CRUD:
// Index dovrà restituire la lista dei post in formato JSON
router.get('/', (req, res) => {
    res.status(200)
    res.json(postList)
})


// Show dovrà restituire un singolo post in formato JSON
router.get('/:id', (req, res) => {
    
    const id = req.params.id - 1;
    const listLength = postList.length;
    
    if(id >= listLength){
        res.status(404)
        res.send('The post does not exist')
    }

    res.status(200)
    res.json(postList[id])
})

// Destroy dovrà eliminare un singolo post dalla lista, 
// stampare nel terminale (console.log) la lista aggiornata, 
// e rispondere con uno stato 204 e nessun contenuto.




// Bonus
// 1. Implementare un filtro di ricerca nella index 
// che mostri solo i post che hanno un determinato Tag


// 2. In Show e Destroy, controllare se il parametro si riferisce 
// ad un post esistente, in caso contrario, rispondere con uno stato 404 
// e un messaggio d’errore, sempre in formato JSON.


// 3. Creiamo un controller per i nostri post, in una cartella controllers. 
// All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna l
// a logica delle funzioni che attualmente si trovano nel router. 

// Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate 
// nel controller e le associamo alle varie rotte, come visto in classe. 
// Testiamo su postman se chiamando gli endpoint riceviamo effettivamente 
// le stesse risposte che avevamo prima.
module.exports = router;