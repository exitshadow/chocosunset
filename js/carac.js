console.log("character constructor in");

var createCarac = function(name, skinPath){
    var self = {}; // Objet vide, c'est une fonction qui va renvoyer un objet
    var name = name; 
    var state = "idle"; //animation idle terme pour dire il n'y a pas de déplacement en jeu video
    var position = { x: 0, y: 0, z: 0 };
    var speed = { x: 0, y: 0, z: 0 };
    var skin = undefined

    var jumpFactor;
    var speedFactor;
    
    var init= function(){
        console.log("Character Successfully created.");
        db.carac.push(self);
        
        var img = new Image();
        img.src = skinPath;
        skin = img;
    }
    
    init()

    var getSkin = function(){
        return skin;
    }

    const charTex = new THREE.TextureLoader().load(skin.src);
    const charMaterial = new THREE.SpriteMaterial( {map: charTex});
    const charSprite = new THREE.Sprite(charMaterial);

    var getPosition = function(){
        return position;
    }

    var setPosition = function(setX, setY, setZ){
        charSprite.position.x += setX / 200;
        charSprite.position.y += setY / 200;
        charSprite.position.z += setZ / 200;
    }

    var getSpeed = function() {
        return speed;
    }

    var setSpeed = function(setX, setY, setZ) {
        speed.x = setX;
        speed.y = setY;
        speed.z = setZ;

    }

    var moveX = function(dispX){
        position.x += dispX;
    }

    var moveY = function(dispY){
        position.y += dispY;
    }

    self.setPosition = setPosition;
    self.getPosition = getPosition;

    self.getSpeed = getSpeed;
    self.setSpeed = setSpeed;

    self.moveX = moveX;
    self.moveY = moveY;

    self.speedFactor = speedFactor;
    self.jumpFactor = jumpFactor;

    self.getSkin = getSkin;

    self.charSprite = charSprite;
    
    return self;
}
