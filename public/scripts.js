import { response } from "express";
async function Dining() {
  const request = await fetch('/api/dining');
  const getData = await request.json();
  const getTable = document.getElementById('container');
  
  .then(
    (response) => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${
          response.status}`);
        return;
      }

      // Examine the text in the response
      response.json().then((data) => {
        console.log(data);
      });
    }
  )
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });