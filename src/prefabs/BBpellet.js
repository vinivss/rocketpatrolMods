// Rocket prefab
class BBpellet extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame)
     {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      this.isFiring = false;
      this.MoveSpeed = 7;
      this.ammo = 5;
      this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update()
    {
      if(!this.isFiring)
      {

            if(keyRIGHT.isDown && this.x >= borderUISize + this.width)
            {
                this.x -= this.MoveSpeed;
            }

            else if(keyLEFT.isDown && this.x <= game.config.width - borderUISize - this.width)
            {
                this.x += this.MoveSpeed;
            }
        }
        
        

            
    if(Phaser.Input.Keyboard.JustDown(keyA)&& this.ammo > 0)
    {
        this.ammo --;
        this.isFiring = true;
        this.sfxRocket.play();  // play sfx
    }

    if(this.isFiring && this.y >=borderUISize * 3 + borderPadding )
    {
        this.y -= this.MoveSpeed;
        
    }

        if(this.y <= borderUISize * 3 + borderPadding)
        {
           this.reset();
        }
    }

    reset()
    {
        this.isFiring = false;
        this.y = game.config.height - borderUISize -borderPadding;
    }
    

}