//hacer una funcion que busque por nombre


const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const handleError = err =>{
    console.log(`Hubo un error. ${err}`);
};

// variable donde vamos a almacenar al pokemon y su data
let poke;

//funcion para llamar a la API
const getPokemon = async (id) =>{
    try {
        const res = await axios.get(`${baseURL}${id}`);
        poke=res.data;
        //funcion que muestra el DOM
        mostrarPoke();
    } catch (err){
        handleError();
    
    }

}

const botonBuscar = document.querySelector("#buscarId");
const pokeId = document.querySelector("#pokeId");

botonBuscar.addEventListener("click",()=>{
  
    getPokemon(pokeId.value);
});

const mostrarPoke = () =>{
    let infoPoke = document.querySelector("#infoPoke");
    infoPoke.innerHTML=`
    <img src ='${poke.sprites.front_default}'/>
    <p class="nombrePoke">${poke.name}</p>
    <p class="tipoPoke">${poke.types[0].type.name}</p>
    `;
}