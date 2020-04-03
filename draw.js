//khai báo các biến 
const cavas=document.getElementById("cavas");
const ctx=cavas.getContext("2d");
let point=document.getElementById("point");
let end=document.getElementById("end");
let eat_sound= new Audio();
eat_sound.src="eat.mp3";

//thực hiện vẽ game
let snake=new Snake(10,10);
let food=new Food(10,10);
function setup() {
    ctx.clearRect(0,0,cavas.width,cavas.height);
    snake.update();
    snake.draw();
    food.draw();
    if (snake.eat(food)){
        food.pickNewLocation();
        point.innerHTML="Your score "+snake.score;
        eat_sound.play();
    }
    if (snake.hitWall()){

        end.innerHTML="Your final score "+  snake.score;
    }
    setTimeout(setup,200);
}
setup();

//lấy giá trị key để thực hiện sự kiên bàn phím
window.addEventListener("keydown",((event)=>{
    //console.log(event);
    const direction=event.key.replace("Arrow",'');
    snake.changeDirection(direction);
}));





