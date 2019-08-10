//objetos de javascript
let info = document.getElementById("info");

let persona = {
    nombre: "Reiner",
    apellido: "Vaca",
    direccion: {
        pais: "Bolivia",
        Ciudad: "Santa Cruz"
    }
};

console.log(persona);

//acceso de las propiedades del objeto

console.log(persona.nombre);
console.log(persona.apellido);
//accediendo a la propiedad pais
console.log(persona.direccion.pais);

//funcion para mostrar los datos en una tabla
function draw(data) {
    let table = `<table>
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>direccion</th>
    </tr>
    <tr>
        <td> ${data.nombre} </td>
        <td> ${data.apellido} </td>
        <td> ${data.direccion.Ciudad} - ${data.direccion.pais}</td>
    </tr>
</table>`;

info.innerHTML = table;

}
//ejecutamos la funcion
draw(persona);
