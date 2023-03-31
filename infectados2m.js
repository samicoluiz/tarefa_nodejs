const express = require("express");
const fetch = (...args) => import('node-fetch')
  .then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 4001;
const url = 'https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true';


app.get('/api/infectados2m', async (req, res) => {
  try {
    const apiResponse = await fetch(url);
    const apiResponseJson = await apiResponse.json();
    const relevantData = apiResponseJson.infectedByRegion;
    const infectados2m = relevantData.filter(relevantData => relevantData.count > 2000000);

    console.log(apiResponseJson);
    res.json(infectados2m);
  } catch (err) {
    console.log(err);
    res.status(500).send('Algo deu errado');
  }
});

app.listen(PORT, () => {
  console.log(`O servidor está escutando na porta ${PORT}`);
});
