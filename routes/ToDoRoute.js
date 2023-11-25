const { Router } = require('express')
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/ToDoController')
const router = Router()


router.get('/', getToDo)
router.post('/criar', saveToDo)
router.put('/atualizar', updateToDo)
router.delete('/deletar', deleteToDo)

module.exports = router