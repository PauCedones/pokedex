//hacer una funcion que busque por nombre

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const handleError = err =>{
    console.log(`Hubo un error. ${err}`);
};

let poke;

const getPokemon = async (id) =>{
    try {
        const res = await axios.get(`${baseURL}${id}`);
        poke=res.data;
        console.log(poke);
        mostrarPoke();
    } catch (err){
        handleError()
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
    <p>${poke.name}</p>
    <p>${poke.types[0].type.name}</p>
    <img src ='${poke.sprites.front_default}'/>
    `;
}