// Vinicius Vella Sarlo Sanchez, Rocket Patrol Mods, 4/18/2021 , about 10-11 hours(mostly asset creation)
//20 for the create a new ship thats smaller moves faster and is worth more points (pretty obvious on play)
//20 for create new assets for rocket spaseships and explosion
//20 for Implement a new timing/scoring mechanism that adds time to the clock for successful hits. it is not super obvious but you gain a second every succesful shot
// 20 for implementing a new weapon (the BB pellet is very similar to the normal rocket, however its behaviour differs in its horizontal controls being inverted, it cannot be controled after firing, it has a limited amount of shots, and finally it is significantly faster)
// 10 for Displaying the time in seconds on the top left of the screen
// 5 for creating a new scrolling tile sprite for the background
// 5 for allowing the player to control the rocket after it is fired.

let config = 
{
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

let keyF, keyR, keyA, keyLEFT, keyRIGHT;
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;