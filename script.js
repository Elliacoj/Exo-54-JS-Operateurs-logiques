let x = 1;
let y = 4;
let z = -1;

if (x < 2)  {
    document.getElementById('monDiv').innerHTML = "La variable x est inférieur à 2";
}

if (y > 3)  {
    document.getElementById('monDiv2').innerHTML = "La variable y est supérieur à 3";
}

if (z <= 0)  {
    document.getElementById('monDiv3').innerHTML = "La variable z est inférieur ou égal à 0";
}

if (x < 2 && y > 3 && z <= 0) {
    document.getElementById('monDiv4').innerHTML = "La variable x est inférieur à 2, la variable y est supérieur à 3 et la variable z est inférieur ou égal à 0";
}

if (x < 2 && y > 3 || z <= 0) {
    document.getElementById('monDiv5').innerHTML = "La variable x est inférieur à 2, la variable y est supérieur à 3 ou la variable z est inférieur ou égal à 0";
}