// const yargs = require("yargs");

// const { require } = require("yargs");

// const { argv } = yargs(process.argv);

const inquirer = require("inquirer");

const printFiveMovies = async (namePokemon = "charmander") => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${namePokemon}`,
  );

  const pokemon = await response.json();
  const movie = pokemon.moves.map(({ move }) => move.name);

  console.info(movie.slice(0, 5));
};

const promt = inquirer.createPromptModule();
promt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view it's frist 5 movie",
  },
]).thne((answer) => {
  const pokemon = answer.pokemon;
  printFiveMovies(pokemon);
});
