//hacer una funcion que busque por nombre

const baseURL = "https://pokeapi.co/";

const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};

let poke;

const pokemon = async (nombre) =>{
    try {
        const res = await axios.get(`${baseUrl}${nombre}`);
        poke=res.data;

    } catch (handleError);

}