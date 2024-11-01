if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require("express"); 
const PORT = process.env.PORT || 1555; 
const app = express();  
const router = require('./routes/routes');
 
app.use(express.json()); 
app.use(router);
 
// router.get('/getAll', (req , res) => {
//     res.send('Gettting All The Data')
// })

app.listen(PORT, (req,res)=>{ 
    console.log(`Server run in PORT :`,PORT);
}) 
  

module.exports = app;
