const ulText = document.querySelector("#ul-text");
const buttonText = document.querySelector("#button-text");
const ulImage = document.querySelector("#ul-image");
const buttonImage = document.querySelector("#button-image");

//Awal Joke Text
const addJokeText = async () => {
  const joke = await getJokeText();
  const liBaru = document.createElement("li");

  liBaru.textContent = joke;
  liBaru.classList.add("add-element");
  ulText.append(liBaru);
  setTimeout(() => {
    liBaru.classList.add("show");
  }, 10);
};

const getJokeText = async () => {
  const config = {
    headers: "application/json",
  };

  try {
    const response = await axios.get(
      "https://candaan-api.vercel.app/api/text/random",
      config
    );
    return response.data.data;
  } catch (error) {
    return "Not Avalibe Jokes";
  }
};

buttonText.addEventListener("click", () => {
  addJokeText();
});

//Akhir Joke Text

//Awal Joke Image
const addJokeImage = async () => {
  const joke = await getJokeImage();
  const imgBaru = document.createElement("img");

  imgBaru.src = joke;
  imgBaru.classList.add("add-element");
  ulImage.append(imgBaru);
  setTimeout(() => {
    imgBaru.classList.add("show");
  }, 1800);
};

const getJokeImage = async () => {
  const config = {
    headers: "application/json",
  };

  try {
    const response = await axios.get(
      "https://candaan-api.vercel.app/api/image/random",
      config
    );
    console.info(response.data.data.url);
    return response.data.data.url;
  } catch (error) {
    return "Not Avalibe Jokes";
  }
};

buttonImage.addEventListener("click", () => {
  addJokeImage();
});
//Akhir Joke Image
