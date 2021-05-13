let cell = document.querySelectorAll('.index');
let modal = document.querySelector('.winner');
let player = document.querySelector('.player');
let contaienerIndex = document.querySelector('.contaiener__index');


let start = 0;
let simbol = '';


for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function () {
        if (cell[i].innerHTML == '') {
            start % 2 == 0 ? simbol = 'X' : simbol = 'O';
            cell[i].innerHTML = simbol;
            start++;
            logic();
            draw();
        }
    })
}


let crosses = 'крестики';
let zero = 'нолики';


function logic () {
    if (cell[0].innerHTML == 'X' && 
        cell[1].innerHTML == 'X' &&
        cell[2].innerHTML == 'X') {
        winner();
        player.innerHTML = crosses;
    }
    if (cell[3].innerHTML == 'X' && 
        cell[4].innerHTML == 'X' &&
        cell[5].innerHTML == 'X') {
        winner();
        player.innerHTML = crosses;
    }
    if (cell[6].innerHTML == 'X' && 
        cell[7].innerHTML == 'X' &&
        cell[8].innerHTML == 'X') {
        winner();
        player.innerHTML = crosses;
    }
    if (cell[0].innerHTML == 'X' && 
        cell[3].innerHTML == 'X' &&
        cell[6].innerHTML == 'X') {
        winner();
        player.innerHTML = crosses;
    }
    if (cell[1].innerHTML == 'X' && 
        cell[4].innerHTML == 'X' &&
        cell[7].innerHTML == 'X') {
        winner();
        player.innerHTML = crosses;
    }
    if (cell[2].innerHTML == 'X' && 
        cell[5].innerHTML == 'X' &&
        cell[8].innerHTML == 'X') {
        winner();
        player.innerHTML = crosses;
    }
    if (cell[0].innerHTML == 'X' && 
        cell[4].innerHTML == 'X' &&
        cell[8].innerHTML == 'X') {
        winner();
        player.innerHTML = crosses;
    }
    if (cell[2].innerHTML == 'X' && 
        cell[4].innerHTML == 'X' &&
        cell[6].innerHTML == 'X') {
        winner();
        player.innerHTML = crosses;
    }
    /* ***************************  */

    
    /* ***************************  */
    if (cell[0].innerHTML == 'O' && 
        cell[1].innerHTML == 'O' &&
        cell[2].innerHTML == 'O') {
        winner();
        player.innerHTML = zero;
    }
    if (cell[3].innerHTML == 'O' && 
        cell[4].innerHTML == 'O' &&
        cell[5].innerHTML == 'O') {
        winner();
        player.innerHTML = zero;
    }
    if (cell[6].innerHTML == 'O' && 
        cell[7].innerHTML == 'O' &&
        cell[8].innerHTML == 'O') {
        winner();
        player.innerHTML = zero;
    }
    if (cell[0].innerHTML == 'O' && 
        cell[3].innerHTML == 'O' &&
        cell[6].innerHTML == 'O') {
        winner();
        player.innerHTML = zero;
    }
    if (cell[1].innerHTML == 'O' && 
        cell[4].innerHTML == 'O' &&
        cell[7].innerHTML == 'O') {
        winner();
        player.innerHTML = zero;
    }
    if (cell[2].innerHTML == 'O' && 
        cell[5].innerHTML == 'O' &&
        cell[8].innerHTML == 'O') {
        winner();
        player.innerHTML = zero;
    }
    if (cell[0].innerHTML == 'O' && 
        cell[4].innerHTML == 'O' &&
        cell[8].innerHTML == 'O') {
        winner();
        player.innerHTML = zero;
    }
    if (cell[2].innerHTML == 'O' && 
        cell[4].innerHTML == 'O' &&
        cell[6].innerHTML == 'O') {
        winner();
        player.innerHTML = zero;
    }
}


function winner () {
    contaienerIndex.style.display = 'none';
    modal.style.display = 'block';
}