import rewire from "rewire";

test('La variable "pesosDoblados" debería valer [2, 4, 6]', () => {
  const file = rewire("./app.js");
  const name = file.__get__("pesosDoblados");
  expect(name).toEqual([2, 4, 6]);
});
