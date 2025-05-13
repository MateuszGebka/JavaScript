fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data.abilities))
    .catch(error => console.error(error));



async function fetchData() {     
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/zorua");

        if(!response.ok){
            throw new Error("Could not fetch");
        }

            const data = await response.json();
            console.log(data);
    }
    catch(error){
        console.error(error);
    
    }
}

fetchData();