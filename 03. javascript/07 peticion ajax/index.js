let traer = document.getElementById("traer");
let info = document.getElementById("info");

traer.onclick = function (evt) {
    //console.log("hola");
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./json.json',true);

    //que se va hacer con la respuesta
    xhr.addEventListener('load',e => {
        //console.log(e.target.responseText);
        //parseando texto a formato JSON
        let data = JSON.parse(e.target.responseText);        
        draw(data);
        //info.innerHTML = e.target.responseText;
    })

    xhr.send();
}

function draw(data) {
    let tr = "";
    data.forEach(element => {
        console.log(element);
        tr = tr + `
        <tr>
            <td class="borde">${element.id}</td>
            <td class="borde">${element.nombre}</td>
        </tr>
        `;
    });
    let table = `
    <table>
        <tr>
            <th>id</th>
            <th>nombre</th>
        </tr>
        ${tr}
    </table>
    `;
    info.innerHTML = table;
}