const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers')

// Implementare le logiche delle nostre CRUD:
// Index dovrà restituire la lista dei post in formato JSON
router.get('/', postController.index)

// Show dovrà restituire un singolo post in formato JSON
router.get('/:id', postController.show)

// Store
router.post('/', postController.store)

// Update
router.put('/:id', postController.update)

// Modify


// Destroy dovrà eliminare un singolo post dalla lista, 
// stampare nel terminale (console.log) la lista aggiornata, 
// e rispondere con uno stato 204 e nessun contenuto.
router.delete('/:id', postController.destroy)



module.exports = router;