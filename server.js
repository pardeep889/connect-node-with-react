const express = require('express');
const app = express();

app.get('/api/users', (req,res)=>{
    res.json([
        {
            id: 1,
            name: 'pardeep'
        },
        {
            id:2,
            name:'john'
        }
    ])
})


app.get('/api/cars', (req,res)=>{
    res.json([
        {
            id: 1,
            brand: 'nissan'
        },
        {
            id:2,
            brand:'ford'
        }
    ])
})


const port = process.env.PORT || 3001;

app.listen(port);
