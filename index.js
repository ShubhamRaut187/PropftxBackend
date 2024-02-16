const express = require('express');
const cors = require('cors');
const {connection} = require('./Configuration/db')
// Router
const {UserRouter} = require('./Routes/UserRoutes');
const {MovieRouter} = require('./Routes/MovieRoutes')

const app = express();

// Middlewares
app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to backend server of Propftxt Movies');
});

// Routes
app.use('/users',UserRouter);
app.use('/movies',MovieRouter);

// Server Connection
app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log('Server started on port 8000 and connection to database established');
    } catch (error) {
        console.log('Error connecting database and server',error);
    }
})
