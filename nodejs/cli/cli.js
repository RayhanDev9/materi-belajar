// const yargs = require("yargs");

// const { require } = require("yargs");

// const { argv } = yargs(process.argv);

const inquirer = require("inquirer");

const printFiveMovies = async (namePokemon = "charmander") => {
  const pokemonName = namePokemon.trim().toLowerCase();
  if (!pokemonName) {
    throw new Error("Nama Pokémon tidak boleh kosong.");
  }

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );

  if (!response.ok) {
    throw new Error(`Pokémon "${pokemonName}" tidak ditemukan.`);
  }

  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);

  console.info(moves.slice(0, 5));
};

const prompt = inquirer.createPromptModule();
prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a Pokémon name to view its first 5 moves",
  },
])
  .then(({ pokemon }) => printFiveMovies(pokemon))
  .catch((error) => console.error("Gagal mengambil data Pokémon:", error));

// const yargs = require("yargs");

// const { argv } = yargs(process.argv);

// const printFiveMovies = async (namePokemon = "charmander") => {
//   const response = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/${namePokemon}`,
//   );

//   const pokemon = await response.json();
//   const movie = pokemon.moves.map(({ move }) => move.name);

//   console.info(movie.slice(0, 5));
// };

// printFiveMovies(argv.pokemon);
