document.addEventListener('DOMContentLoaded', () => {
    // Using the fetch API to make a GET request
    fetch('https://dummyjson.com/products')
        .then(response => {
            // Checking if the response status is OK (200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parsing the response as JSON
            return response.json();
        })
        .then(responseData => {
            // Displaying id and title for each product in the 'result' div
            const resultDiv = document.getElementById('result');
            const productsArray = responseData.products;
            
            // productsArray.forEach(product => {
            //     resultDiv.innerHTML += `
            //         <p>ID: ${product.id}, Title: ${product.title}</p>
            //     `;
            // });
            console.log(productsArray.sort()) ;
        })
        .catch(error => {
            // Handling any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });
});