const spaceship = document.querySelector('.spaceship');
let xPos = 0;
let speed = 1;

function ship_move(){
    spaceship.style.transform = `translateX(${xPos}px)`;
    xPos += speed;

    ddd = requestAnimationFrame(ship_move);
    console.log('space ship speed: ' + speed);   
}

ship_move();

// -----------------------------------------------------

function ship_stop(){
    console.log('stop button clicked!');
    cancelAnimationFrame(ddd);
}
