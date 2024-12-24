import express from 'express'
import  mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './src/routes/userRoutes.js';


const app = express(); 
const PORT = 3000;

// bodyparser setup 
mongoose.connect('mongodb+srv://akpevweessi1:vNZBAYrz3J2hwkII@cluster0.zgiwv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Db connected')).catch((err) => console.log(err));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


routes(app); 

app.get('/', (req, res) => {
    res.send(`Node and express server is running on port ${PORT}`);
}); 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

