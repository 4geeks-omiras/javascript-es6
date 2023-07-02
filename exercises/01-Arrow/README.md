# Arrow functions

Des de la versión ES6 de JavaScript, es posible escribir las funciones con una sintáxis denominada _arrow function_
Esto permite escribir funciones con menos código. Estas funciones se utilizan mucho en React en combinación con los métodos de array, con lo cuál es importante conocerlas.

Podemos escribir esta función que comprueba si un número es impar:

```js
function isOdd(num) {
    return num % 2 !== 0
}
```

De esta manera:

```js
const isOdd = (num) => num % 2 !== 0
```

Lo que hacemos es guardar una referencia a la función en la variable *isOdd*
Para invocarla simplemente escribimos:

```js
isOdd(7) // true
```

## 📝 Instrucciones:

1. Modifica la declaración de la función para convertirla en una _arrow function_
2. **BONUS** : Escribe la arrow function en una sola línea

## 💻 Resultado esperado:

```js
2
```

## 🔎 Más información:

[W3School - Arrow functions](https://www.w3schools.com/react/react_es6_arrow.asp)

