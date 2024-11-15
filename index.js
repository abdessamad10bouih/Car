document.addEventListener('DOMContentLoaded', () => {
    const road = document.querySelector('.road');
    const red = document.querySelector('.red');
    const green = document.querySelector('.green');
    const orange = document.querySelector('.orange');
    const music = document.getElementById('music');
    const car2 = document.querySelector('.car2');
    const car = document.querySelector('.car');
    const wheel1 = document.querySelector('.wheel1');
    const wheel2 = document.querySelector('.wheel2');
    const wheel3 = document.querySelector('.wheel3');
    const wheel4 = document.querySelector('.wheel4');

    setTimeout(() => {
        red.style.visibility = 'visible';
        red.style.opacity = '1';
        car2.style.animationPlayState = 'paused';
        car.style.animationPlayState = 'paused';
        wheel1.style.animationPlayState = 'paused';
        wheel2.style.animationPlayState = 'paused';
        wheel3.style.animationPlayState = 'paused';
        wheel4.style.animationPlayState = 'paused';
    }, 5000);

    setTimeout(() => {
        red.style.visibility = 'hidden';
        red.style.opacity = '0';
    }, 8000);

    setTimeout(() => {
        red.style.display = 'none';
        green.style.visibility = 'visible';
        green.style.opacity = '1';
        car2.style.animationPlayState = 'running';
        car.style.animationPlayState = 'running';
        wheel1.style.animationPlayState = 'running';
        wheel2.style.animationPlayState = 'running';
        wheel3.style.animationPlayState = 'running';
        wheel4.style.animationPlayState = 'running';
    }, 9000);

    setTimeout(() => {
        green.style.display = 'none';
        orange.style.visibility = 'visible';
        orange.style.opacity = '1'; 
    }, 15000);
});
