//Ejercicio1
const texto = "EsteEsUnTextoDePruebaParaSaberSiFunciona";
const resultadoTexto = {
  snakeCase: "",
  palabras: 0,
};

const palabras = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      if (i !== 0) {
        text = text.replace(text[i], "_" + text[i].toLowerCase());
      } else {
        text = text.replace(text[i], text[i].toLowerCase());
      }
      resultadoTexto.palabras++;
    }
  }
  resultadoTexto.snakeCase = text;
  console.log("Resultado Ejercicio 1");
  console.log(resultadoTexto);
};

//Ejercicio2
const numeros = [1, 2, 3];

const combinaciones = (array) => {
  let resultado = [];
  resultado.push([]);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0, len = resultado.length; j < len; j++) {
      if (resultado[j] !== []) {
        resultado.push(resultado[j].concat(array[i]));
      } else {
        resultado.push(array[i]);
      }
    }
  }
  console.log("Resultado Ejercicio 2");
  console.log(resultado);
};


//Ejercicio3
const resultados = [];
const rickAndMortyUrl = "https://rickandmortyapi.com/api/character";
async function rickAndMorty() {
  const response = await fetch(rickAndMortyUrl);
  const data = await response.json();
  console.log("Resultado Ejercicio 3");
  console.log(data);

  const idPar=data.results.filter((item) => item.id % 2 == 0);
  console.log("Resultado Ejercicio 3 Parte 1");
  console.log(idPar);

  idPar.map((item) => {
    const resulItem = {
      personaje: "",
      episodios: "",
      masDeCincoEpisodios: "",
    }

    if (item.type === "") {
      item.type = "Programación Móvil";
    }

    resulItem.personaje = item.name;
    resulItem.episodios = item.episode.length;
    resulItem.masDeCincoEpisodios = item.episode.length > 5 ? "Si" : "No";
    resultados.push(resulItem);

  });
  console.log("Resultado Ejercicio 3 Parte 2");
  console.log(idPar);
  console.log("Resultado Ejercicio 3 Parte 3");
  console.log(resultados);

}

palabras(texto);
combinaciones(numeros);
rickAndMorty();

