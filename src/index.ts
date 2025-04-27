function add(x: number, y: number) {
  return x + y;
}

const calculator = {
  add,
};

const result = calculator.add(1, 2);

console.log(result);
