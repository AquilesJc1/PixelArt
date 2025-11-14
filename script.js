let color = "white";
let lastId = "white";

function restart() {
    for (let i = 0; i < 5000; i++) {
        document.getElementById(`cell-${i}`).style.backgroundColor = "white";        
    }
}

function selectColor(id) {
    document.getElementById(lastId).style.border = "1px solid black";
    let btn = document.getElementById(id);

    btn.style.border = "6px solid black";
    color = id;
    lastId = id;

    let btn_restart = document.getElementById("btn-restart");
    btn_restart.style.backgroundColor = id;

    if (id == "black") {
        btn_restart.style.color = "white";
    }
}

function paint(id) {
    let cor = `1px solid ${id}`;
    let cell = document.getElementById(id);
    cell.style.backgroundColor = color;
    cell.style.border = cor;
}

function addCell() {
    let all = document.getElementById('all');

    for (let i = 0; i < 5000; i++) {
        let element = document.createElement("div");
        element.className = "cell";
        element.setAttribute("title", "Adicionar cor");
        element.id = `cell-${i}`;
        element.setAttribute("onclick", `paint('cell-${i}')`)
        all.appendChild(element);   
    }
}

window.onload = function(){
    this.addCell();
}