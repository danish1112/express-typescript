import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const PORT = 3000;

app.get('/healtcheck', (req, res) => {
    res.json({message : "this is health check route"})
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})