/******w**************
    
    Assignment 4 Javascript
    Name:Finn Stuchbery 
    Date: June 28th 2024
    Description: fetching an API

*********************/
function handleSubmit(event) {

    event.preventDefault();

    let nameyy = document.getElementById('WardInput').value;
    let wonn = document.getElementById('wonElectionInput').value;
    let Typee = document.getElementById('Type').value;
    let areaa = document.getElementById('Area').value;
   
    const apIURL = `https://data.winnipeg.ca/resource/7753-3fjc.json?` +
    `$where=ward='${nameyy}' AND won='${wonn}' `  +
    `AND type='${Typee}'` +
    `AND area='${areaa}'` +
    `&$order=date DESC` +
    `&$limit=100`;

    const encodedUrl = encodeURI(apIURL);
    fetch(encodedUrl)

    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
    })

    .then(data => {
        const length = data.length;
        const container = document.getElementById('firstDiv');
        container.innerHTML = '';

            for(let i = 1; i < data.length-1;i++) {
                let items = data[i];

                let dateStr = items.date;
                let formattDate = dateStr.slice(0, 10);

                console.log(items.candidate);
                console.log(items.won);
                console.log(items.type);
                console.log(items.date);
                console.log(items.area);
                const itemElement = document.createElement('div');
                itemElement.innerHTML = `<li>Date: ${formattDate} , ${items.candidate}.</li>`; // Update DOM with data
                container.appendChild(itemElement);
            }})
    
    .catch(error => {
        console.error('Fetch error:', error);
        // Handle and display specific error messages for different scenarios
    });
}
