// Guardar un valor en formato JSON

export const setLocalStorage = (array) => {
    const value = JSON.stringify(array);
    localStorage.setItem('chatrooms', value);
}

// Obtener el valor de una cadena guardada en formato JSON
export const getLocalStorage = (data) => {
    const jsonString = localStorage.getItem(data);
    const value = JSON.parse(jsonString);
    return value
}

// // Buscar elementos
// let keysArray = [];
// for (let i = 0; i < localStorage.length; ++i) {
//     keysArray.push(localStorage.key(i));
// }
// console.log(keysArray);