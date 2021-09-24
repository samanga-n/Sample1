    var background,backgroundImg
    var enemie,enemieImg
    var fighterplane,fighterplaneImg
    var laser1,laser1Img
    var invisiblewall1,invisiblewall2
    var enemiegroup

function preload(){
    backgroundImg=loadImage("47119.jpg")
    enemieImg=loadImage("enemie.png")
    fighterplaneImg=loadImage("fighterplane.png")
    laser1Img=loadImage("laser1.png")
   

}




function setup(){
 createCanvas(600,600)

enemiegroup = new Group()
lasergroup = new Group();


background=createSprite(300,250)
background.addImage("space",backgroundImg)
background.velocityY=5

fighterplane=createSprite(300,500,50,50)
fighterplane.addImage("plane",fighterplaneImg)
fighterplane.scale=0.2



invisiblewall1=createSprite(580,300,15,595)
invisiblewall1.visible=false

invisiblewall2=createSprite(20,300,15,595)
invisiblewall2.visible=false

}




function draw() {

 if(keyWentDown("space")){
    createlaser()
 }

if(background.y>400){
    background.y=height/2
        
 }

if(keyDown("right")){
fighterplane.x=fighterplane.x+10

}

if(keyDown("left")){
    fighterplane.x=fighterplane.x-10
    
    }




fighterplane.collide(invisiblewall1)
fighterplane.collide(invisiblewall2)

createenemie()



if(enemiegroup.isTouching(lasergroup)){
    enemiegroup.destroyEach()
    }

 drawSprites();
}

function createlaser(){

    laser1=createSprite(320,500,50,50)
    laser1.addImage("gun",laser1Img)
    laser1.scale=0.1
    
    laser1.debug=true;
   
    laser1.visible=true
   
    laser1.velocityY=-8
   

    laser1.x=fighterplane.x
    
 fighterplane.depth=laser1.depth
fighterplane.depth=fighterplane.depth+1

 lasergroup.add(laser1);



}

function createenemie(){


if(frameCount % 40 ==0){

    enemie=createSprite(300,50,50,50)
    enemie.addImage("badplane",enemieImg)
    enemie.scale=0.2
    enemie.velocityY=8

    enemie.x=Math.round(random(100,500))

    enemiegroup.add(enemie)

}

}





