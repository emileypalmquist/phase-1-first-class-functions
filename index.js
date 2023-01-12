function receivesAFunction(funct) {
  funct();
}

function returnsANamedFunction() {
  function sayHello() {
    return "hello world";
  }

  return sayHello;
  //   return receivesAFunction
}
