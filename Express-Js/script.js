import express from 'express';
const app = express();

const port = 8000;


app.get('/', (req, res) => {
    res.status(200).send("This is my Home page")
})

app.get('/about', (req, res) => {
    res.status(200).send("This is my About page")
})

app.get('/country', (req, res) => {
    res.status(200).json({
        name: "Pakistan",
        province: 5,
        capital: "Islamabad",
        financialHub: "Karachi"
    })
})

app.post('/country', (req, res) => {
    res.status(200).send("Yai country add kardo")
})

app.delete('/country', (req, res) => {
    res.status(200).send("Yai country remove kardo")
})

app.put('/country', (req, res) => {
    res.status(200).send("Yai country update kardo")
})

app.listen(port, () => {
    console.log(`Server is running in port no ${port}`);
})