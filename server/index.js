const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000
const mongoDB = require('./db')
mongoDB();

app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use('/api',(req,res)=>{
//     console.log("yooo");
//     res.json({})
// });

app.use('/api',require('./Routes/CreateUser'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})