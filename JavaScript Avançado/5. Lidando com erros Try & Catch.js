const express = require('express')
const uuid = require('uuid')

const port = 3000
const app = express()
app.use(express.json())

const users = []

app.post('/users', (request, response) => {
    try {
        const { name, age } = request.body

        if(age < 18) throw new Error()

        const user = { id: uuid.v4(), name, age }

        users.push(user)
        return response.status(201).json(user)
    } catch(err){
        return response.status(400).json({error:err.message})

    }
})