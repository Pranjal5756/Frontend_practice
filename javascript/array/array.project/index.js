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
            // Displaying detailed information for each product in the 'result' div
            const resultDiv = document.getElementById('result');
            const productsArray = responseData.products;
            
            productsArray.forEach(product => {
                resultDiv.innerHTML += `
                    <div>
                        <p>ID: ${product.id}</p>
                        <p>Title: ${product.title}</p>
                        <p>Description: ${product.description}</p>
                        <p>Brand: ${product.brand}</p>
                        <p>Category: ${product.category}</p>
                        <p>Price: $${product.price}</p>
                        <p>Discount Percentage: ${product.discountPercentage}%</p>
                        <p>Rating: ${product.rating}</p>
                        <p>Stock: ${product.stock}</p>
                        <p>Thumbnail: <img src="${product.thumbnail}" alt="Thumbnail"></p>
                        <div>Images:</div>
                        <ul>
                            ${product.images.map(image => `<li><img src="${image}" alt="Product Image"></li>`).join('')}
                        </ul>
                    </div>
                    <hr>
                `;
            });
        })
        .catch(error => {
            // Handling any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });
});