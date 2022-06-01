console.log("inter js")

var keydownInteraction = function(evt){
    console.log(evt);

    pc.speedFactor = 1;
    pc.jumpFactor = 20;

    if(evt.key == "s") {
        var currentSpeed = pc.getSpeed();
        pc.setSpeed(currentSpeed.x + pc.speedFactor, currentSpeed.y, currentSpeed.z);
        console.log(currentSpeed);
    }

    if (evt.key == "c") {
        var currentSpeed = pc.getSpeed();
        pc.setSpeed(currentSpeed.x - pc.speedFactor, currentSpeed.y, currentSpeed.z);
        console.log(currentSpeed);
    }

    if (evt.key == "t") {
        console.log("jump!");
        var currentSpeed = pc.getSpeed();
        pc.setSpeed(currentSpeed.x, currentSpeed.y + pc.jumpFactor, currentSpeed.z);
    }

    if(evt.key == "q"){
        // var currentPosition = pc.getPosition()
        // pc.setPosition(currentPosition.x - dispValue, currentPosition.y)
        var currentSpeed = pc.getSpeed()
        console.log(currentSpeed);
    }

}

document.addEventListener('keydown', keydownInteraction) // Type d'evenement key down

// Ajouter un déplacement vers la gauche
// Ajouter un déplace en y avec un saut, et un retour vers le sol une fois qu'une certaine hauteur est atteinte
