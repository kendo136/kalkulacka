function secti() {
    let hodnota1 = document.getElementById("id_prvni").value;
    alert(hodnota1);
    let hodnota2 = document.getElementById("id_druhy").value;
    let vysledek = hodnota1 + hodnota2;
    document.getElementById("id_vysledek").value = vysledek;
}

function odecti() {
    let hodnota1 = document.getElementById("id_prvni").value;
    let hodnota2 = document.getElementById("id_druhy").value;
    let vysledek = hodnota1 - hodnota2;
    document.getElementById("id_vysledek").value = vysledek;
}

function nasob() {
    let hodnota1 = document.getElementById("id_prvni").value;
    let hodnota2 = document.getElementById("id_druhy").value;
    let vysledek = hodnota1 * hodnota2;
    document.getElementById("id_vysledek").value = vysledek;
}

function del() {
    let hodnota1 = document.getElementById("id_prvni").value;
    let hodnota2 = document.getElementById("id_druhy").value;
    let vysledek = hodnota1 / hodnota2;
    document.getElementById("id_vysledek").value = vysledek;
}