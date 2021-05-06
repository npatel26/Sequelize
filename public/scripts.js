async function fetchInfo() {
  const response = await fetch('./api/dining.json')
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