

let name1 = document.getElementById("name1")
let name2 = document.getElementById("name2")
let click = document.getElementById("button")




function sorting(){
    if (isNaN(name1.value) || isNaN(name2.value) )
    {
        alert("Введите число");
        return;
    }
    let inp = document.querySelectorAll("input");
    mas = [];
    for (let i = 0; i < inp.length; i++) {
        mas[i] = inp[i].value;
    }
    console.log(mas);

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    }

    mas.sort(compareNumeric);
    alert(mas);

}

document.querySelector("#button").addEventListener('click', sorting);


