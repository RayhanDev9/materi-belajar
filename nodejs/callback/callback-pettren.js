function greet(name) {
  console.info("Hello nama saya", name);
}

function highOrderFunction(callbackFn) {
  const name = "Rayhan";

  callbackFn(name);
}

highOrderFunction(greet);
