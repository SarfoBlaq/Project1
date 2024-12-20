const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./Router/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 

app.use("/app/v1", routes)


app.listen(4000, ()=>{
    console.log(`server is running on port: ` + 4000)
});
