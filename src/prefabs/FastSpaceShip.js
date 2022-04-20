//fastSpaceShip[[refab]]

//lets hope that his fixes the github

class FastSpaceShip extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame, pointValue)
    {
        super(scene, x, y, texture, frame);


        
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = (game.settings.spaceshipSpeed * 2);

    }

    update()
    {
        this.x -= this.moveSpeed;

        if(this.x <= 0 - this.width)
        {
            this.reset();
        }
    }

    reset()
    {
        this.x = game.config.width;
    }
}