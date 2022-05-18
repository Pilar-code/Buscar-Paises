const paises = [
    {nombre: 'Argentina', capital: "Buenos Aires", nativo: "Argentina", moneda: "ARS", emoji: "🇦🇷", telefono: "54", idioma: "Español" , Continente:"America"},
    {nombre: 'Brasil', capital: "Brasília", nativo: "Brasil", moneda: "BRL", emoji: "🇧🇷", telefono: "55",idioma: "Portugues", Continente:"America"},
    {nombre: 'Chile', capital: "Santiago", nativo: "Chile", moneda: "CLF,CLP", emoji: "🇨🇱", telefono: "56",idioma: "Español", Continente:"America"},
    {nombre: 'China', capital: "Beijing", nativo: "中国", moneda: "CNY", emoji: "🇨🇳", telefono: "86",idioma: "Chino", Continente:"Asia"},
    {nombre: 'Colombia', capital: "Bogotá", nativo: "Colombia", moneda: "COP", emoji: "🇨🇴", telefono: "57",idioma: "Español", Continente:"America"},
    {nombre: 'Puerto Rico', capital: "San Juan", nativo: "Puerto Rico", moneda: "USD", emoji: "🇵🇷", telefono: "1787,1939",idioma: "Español", Continente:"America"},
    {nombre: 'Bolivia', capital: "Sucre", nativo: "Bolivia", moneda: "BOB,BOV", emoji: "🇧🇴", telefono: "591",idioma: "Español", Continente:"America"},

]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = ()=>{
    //console.log(formulario.value);
    resultado.innerHTML = ''; 
    const texto = formulario.value.toLowerCase();
    for (let pais of paises){
        let nombre = pais.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
             <li>${pais.nombre} 
             <p>Capital:</p>  ${pais.capital}   
             <p>Nativo:</p>  ${pais.nativo}   
             <p>Moneda:</p>  ${pais.moneda}   
             <p>Emoji: </p> ${pais.emoji}   
             <p>Telefono:</p>  ${pais.telefono}</li>
            `
        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
        <li>Pais no encontrado...</li>
        `
    }
    
}
formulario.addEventListener('keyUp', filtrar);
boton.addEventListener('click', filtrar);

filtrar();



///Codigo para filtrar la busqueda de los paises 

/* 
const Continentes = document.querySelector('#continentes');

let filtrado = paises.filter((Continente)=> {
    if (Continente == "America"){
        console.log("Paises encontrados");
    }
})

Continentes.addEventListener('click', filtrado) */