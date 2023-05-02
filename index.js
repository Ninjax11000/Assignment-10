const express = require('express')
const app = express()
const  cors = require('cors')
const port = process.env.PORT || 5000;


const chefs =require('./data/chefs.json');
const recipes=require('./data/recipes.json');
app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is running!!')
});
app.get('/chefs', (req, res) => {
  res.send(chefs);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  
    const chefRecipe = recipes.filter((n) => n.chef_id== id);
    res.send(chefRecipe);
  
});
app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  
    const chef1 = chefs.find((n) => n.id== id);
    res.send(chef1);
  
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})