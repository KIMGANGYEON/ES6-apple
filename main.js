var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// ctx.fillStyle = 'green'
// ctx.fillRect(10,10, 100,100);

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var img = new Image();
img1.src = 'cactus.png';



class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(img1, this.x, this.y)
    }
}


var timer = 0;
var cactuss = [];
var jumptimer = 0;
var animation;

function frame(){
    animation = requestAnimationFrame(frame)
    timer++;
    ctx.clearRect(0,0, canvas.width, canvas.height)
    
    if (timer % 120 === 0) {
        var cactus = new Cactus();
        cactuss.push(cactus);
    }
    cactuss.forEach((a, i, o)=>{
        if (a.x < 0){
            o.splice(i,1)
        }

        crush(dino, a);
        a.x -= 1.5;
        a.draw();
    })
    if (jumping == true){
        dino.y -= 1;
        jumptimer++
    }
    if (jumping == false){
        if (dino.y < 200) {

            dino.y++;
        }
    }
    if (jumptimer > 100){
        jumping = false
        jumptimer = 0
    }
    dino.draw()
}



frame();


function crush(dino, cactus){
    var xMius = cactus.x - (dino.x + dino.width);
    var yMius = cactus.y - (dino.y + dino.height);
    if(xMius < 0 && yMius < 0) {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        cancelAnimationFrame(animation)
    }
}

var jumping = false
document.addEventListener('keydown', function(e){
    if (e.code === 'Space'){
        jumping = true;
    }
})