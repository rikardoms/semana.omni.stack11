const express = require("express")

const app = express();
app.get('/',(request,response) => {
    return response.json({
        evento:"OMINI STACK 11",
        aluno: "Ricardo Miranda Santos"
    })
})
app.listen(3333);