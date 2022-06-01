function physics() {
    //Recuperer le personnage
    //verifier sa vitesse
    var currentSpeed = pc.getSpeed();
    var currentPosition = pc.getPosition();

    if (currentSpeed.x != 0) {
        pc.setPosition(currentPosition.x + currentSpeed.x, currentPosition.y, currentPosition.z)
    }

    if (currentSpeed.y != 0) {
        pc.setPosition(currentPosition.x, currentPosition.y + currentSpeed.y, currentPosition.z);
    }

    if (pc.charSprite.position.y > 5) {
        currentSpeed.y = currentSpeed.y - pc.jumpFactor * 2;
    }

    if (pc.charSprite.position.y <= 0) {
        currentSpeed.y = 0;
        pc.jumpFactor = 0;
        pc.setPosition(currentPosition.x, 0, currentPosition.z);
    }
      
  }
