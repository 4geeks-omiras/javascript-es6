# Map 

El método map() permite *transformar* cada elemento del array en otra valor diferente. Cada elemento del array es pasádo como parámetro a una función de *callback*. 

El método .map() siempre devuelve un array con el mismo número de elementos que el array original (genera una cópia nueva)

```js
const names = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nameSizes = names.map((name) => name.length);

nameSizes; // Devuelve [3, 5, 5, 9, 9]
}
```


## 📝 Instrucciones:

1. Tenemos un array de precios. Usa la función map() adecuadamente para aplicar un 21% de IVA a cada precio
2. Asigna el valor del nuevo array a la variable _preciosIva_

## 💻 Resultado esperado:

```js
[121, 242, 363]
```

## 🔎 Más información:

[W3School - Map Function](https://www.w3schools.com/jsref/jsref_map.asp)

