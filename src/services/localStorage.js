// Guardar un valor en formato JSON
const value = JSON.stringify({"key1": true, "key2": 42, "key3": "Hello World!"});
localStorage.setItem('key', value);

// Obtener el valor de una cadena guardada en formato JSON
const string = localStorage.getItem('key');
value = JSON.parse(string);

// Buscar elementos
let keysArray = [];
for (let i = 0; i < localStorage.length; ++i) {
    keysArray.push(localStorage.key(i));
}
console.log(keysArray);