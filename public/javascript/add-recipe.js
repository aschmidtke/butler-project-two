async function newRecipe(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="recipe-title"]').value; //check these inputs
    const recipe_url = document.querySelector('input[name="recipe_url"]').value; //check these inputs

    const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            recipe_url
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/'); //check location
    } else {
        alert(response.statusText);
    }
}

//check these values
document.querySelector('.new-recipe-form').addEventListener('submit', newRecipe);