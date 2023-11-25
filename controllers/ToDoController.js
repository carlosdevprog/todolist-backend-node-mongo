const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (request, response) => {
    const toDo = await ToDoModel.find()
    response.send(toDo)
}

module.exports.saveToDo = async (request, response) => {

    const { text } = request.body

    ToDoModel.create({ text }).then((data) => {
        console.log("Criado com sucesso!😊");
        response.send(data)
    }).catch((error) => console.log(error))
}

module.exports.updateToDo = async (request, response) => {
    const { _id, text } = request.body
    ToDoModel.findByIdAndUpdate(_id, { text }).then(() => {
        console.log("Atualizado!✅");
        response.send("Atualizado!")
    }).catch((error) => console.log(error))
}

module.exports.deleteToDo = async (request, response) => {
    const { _id } = request.body
    ToDoModel.findByIdAndDelete(_id).then(() => {
        console.log("Deletado!❌");
        response.send("Deletado!")
    }).catch((error) => console.log(error))
}



