const cavas=document.getElementById("cavas");
const ctx=cavas.getContext("2d");
let point=document.getElementById("point");
let end=document.getElementById("end");
let eat_sound= new Audio();
eat_sound.src="eat.mp3";


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
    if (snake.hitWall()){        // console.log(snake.hitTail());
        end.innerHTML='<canvas height="200" width="200" style="background-color: #FFD433">'+" Your final score "+ snake.score+'</cavas>';
    }
    setTimeout(setup,200);
}
setup();


window.addEventListener("keydown",((event)=>{
    //console.log(event);
    const direction=event.key.replace("Arrow",'');
    snake.changeDirection(direction);
}));





