//Create variables here
var dog, dogImg, happyDogImg, database, foodS, foodStock;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.35;

  foodstock = database.ref("Food");
  foodstock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    console.log(foodS);
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS = data.val();
  //console.log(foodS);
}

function writeStock(x){
  //console.log(x);
  if(x <= 0) {
    x = 0;
  } else{x--}
  database.ref("/").update({Food: x});

  
}