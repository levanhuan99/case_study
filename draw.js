const cavas=document.getElementById("cavas");
const ctx=cavas.getContext("2d");


// const rows=cavas.height/10;
// const cols=cavas.width/10;

let snake=new Snake(10,10);
let food=new Food(7,7);
function setup() {
    ctx.clearRect(0,0,cavas.width,cavas.height);
    snake.update();
    snake.draw();
    food.draw();
    if (snake.eat(food)){
        food.pickLocation();
    }

    setTimeout(setup,200);
}
setup();

//chị giải thích cho e hàm bên dưới ạ.e tìm hiểu trên mạng nhưng đọc k hiểu j?
window.addEventListener("keydown",((event)=>{
    console.log(event);
    const direction=event.key.replace("Arrow",'');
    snake.changeDirection(direction);
}));
