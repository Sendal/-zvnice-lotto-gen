function generate() {
  var numbers = [];

  for(var i=0; i<6; i++) {
    numbers.push(Math.floor(Math.random() * 45)+1);
  }

  return numbers;
}

/*배열 안에 number가 포함되어 있는지 확인*/
