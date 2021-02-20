let palabras = ['café', 'croissant', 'tostada', 'zumo'];
let palabrasParesModificadas = modificaPares(palabras, elemento => elemento.charAt(0).toUpperCase() + elemento.slice(1));
console.log(palabrasParesModificadas);

function modificaPares(palabras, fn) {
    let palabrasParesModificadas = [];
    for (const indice in palabras) {
        if (indice % 2 !== 0) {
            palabrasParesModificadas.push(fn(palabras[indice]));
        } else {
            palabrasParesModificadas.push(palabras[indice]);
        }

    }
    return palabrasParesModificadas;
}