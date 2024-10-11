const apiKey = 'ibD1ZlUgBtfofAyfbJZ9eA==L5785jyQdiErIWdF';

        document.getElementById("fetchRecipe").addEventListener("click", () => {
            const apiUrl = 'https://api.api-ninjas.com/v1/recipe?query=pasta'; 

            fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Parse response as JSON
                } else {
                    throw new Error(`Error: ${response.status} ${response.statusText}`); // Handle errors
                }
            })
            .then(data => {
                // Check if there are recipes
                if (data.length === 0) {
                    document.getElementById("recipeContent").innerHTML = "<p>No recipes found.</p>";
                    return;
                }
                
                // Select a random recipe
                const randomIndex = Math.floor(Math.random() * data.length);
                const recipe = data[randomIndex];
                
                // Display the random recipe
                const recipeContent = document.getElementById("recipeContent");
                recipeContent.innerHTML = `
                    <h1>${recipe.title}</h1>
                    <h3>Ingredients:</h3>
                    <p>${recipe.ingredients}</p>
                    <h3>Servings:</h3>
                    <p>${recipe.servings}</p>
                    <h3>Cooking Instructions:</h3>
                    <p>${recipe.instructions}</p>
                `;
            })
            .catch(error => {
                console.error(error); // Log any errors
                const recipeContent = document.getElementById("recipeContent");
                recipeContent.innerHTML = `<p>${error.message}</p>`; // Display error message
            });
        });