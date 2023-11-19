const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
app.use(cors())
const port = process.env.PORT || 3000

app.get('/', async (req,res)=>{
    try{
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6da2f5960d036177d9d4d6720c21301e')
        const data = response.data
        res.json({data})
    }catch(error){
        res.status(461).json({message: "Acabaram os Filmes :("})
    }
})


app.listen(port,()=>{
    console.log(`servidor escutando na porta: ${port}`)
})
