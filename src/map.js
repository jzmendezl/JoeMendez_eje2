let game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'mapVampire')

let map;
let button;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let button9;
let button10;
let button11;
let button12;
let button13;
let button14;
let button15;
let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let image7;
let image8;
let image9;
let image10;
let image11;
let image12;
let image13;
let image14;
let image15;
let arrowUp;
let arrowDown;
let arrowLeft;
let arrowRight;


const played = {
    preload: function() {
        game.load.image('map', '../assets/images/map/Map.png');
        game.load.image('clan1', '../assets/images/map/clan1.png');
        game.load.image('clan2', '../assets/images/map/Recurso_16.png');
        game.load.image('clan3', '../assets/images/map/Recurso_17.png');
        game.load.image('clan4', '../assets/images/map/Recurso_18.png');
        game.load.image('clan5', '../assets/images/map/Recurso_19.png');
        game.load.image('clan6', '../assets/images/map/Recurso_20.png');
        game.load.image('clan7', '../assets/images/map/Recurso_21.png');
        game.load.image('clan8', '../assets/images/map/Recurso_22.png');
        game.load.image('clan9', '../assets/images/map/Recurso_23.png');
        game.load.image('clan10', '../assets/images/map/Recurso_24.png');
        game.load.image('clan11', '../assets/images/map/Recurso_25.png');
        game.load.image('clan12', '../assets/images/map/Recurso_26.png');
        game.load.image('clan13', '../assets/images/map/Recurso_27.png');
        game.load.image('clan14', '../assets/images/map/Recurso_28.png');
        game.load.image('clan15', '../assets/images/map/Recurso_29.png');
        game.load.image('image1', '../assets/images/Tzimisce.webp');
        game.load.image('image2', '../assets/images/SalubriLarge.png');
        game.load.image('image3', '../assets/images/Toreador.webp');
        game.load.image('image4', '../assets/images/Brujah.webp');
        game.load.image('image5', '../assets/images/Tremere.webp');
        game.load.image('image6', '../assets/images/Nosferatu.webp');
        game.load.image('image7', '../assets/images/Ravnos.png');
        game.load.image('image8', '../assets/images/Ventrue.webp');
        game.load.image('image9', '../assets/images/LogoClanFollowersofSet.png');
        game.load.image('image10', '../assets/images/Assamite.png');
        game.load.image('image11', '../assets/images/Giovanni.png');
        game.load.image('image12', '../assets/images/LogoClanLasombra.png');
        game.load.image('image13', '../assets/images/Gangrel.webp');
        game.load.image('image14', '../assets/images/Cappadocian.png');
        game.load.image('image15', '../assets/images/Malkavian.webp');       

    },

    create: function() {
        map = game.add.sprite(0, 0, 'map');

        button = game.add.button(700, 380, 'clan1');
        button.anchor.setTo(0, 0);
        button.scale.setTo(0.5, 0.5);
        button.events.onInputOver.add(function() {button.scale.setTo(0.6, 0.6);});
        button.events.onInputOut.add(function() {button.scale.setTo(0.5, 0.5);});
        button.events.onInputDown.add(function() {image1.visible = true;});
        button.events.onInputUp.add(function() {image1.visible = false;});

        button2 = game.add.button(700, 200, 'clan2');
        button2.anchor.setTo(0.5, 0.5);
        button2.scale.setTo(0.5, 0.5);
        button2.events.onInputOver.add(function() {button2.scale.setTo(0.6, 0.6);});
        button2.events.onInputOut.add(function() {button2.scale.setTo(0.5, 0.5);});
        button2.events.onInputDown.add(function() {image2.visible = true;});
        button2.events.onInputUp.add(function() {image2.visible = false;});

        button3 = game.add.button(600, 480, 'clan3');
        button3.anchor.setTo(0.5, 0.5);
        button3.scale.setTo(0.5, 0.5);
        button3.events.onInputOver.add(function() {button3.scale.setTo(0.6, 0.6);});
        button3.events.onInputOut.add(function() {button3.scale.setTo(0.5, 0.5);});
        button3.events.onInputDown.add(function() {image3.visible = true;});
        button3.events.onInputUp.add(function() {image3.visible = false;});

        button4 = game.add.button(1200, 100, 'clan4');
        button4.anchor.setTo(1, 1);
        button4.scale.setTo(0.5, 0.5);
        button4.events.onInputOver.add(function() {button4.scale.setTo(0.6, 0.6);});
        button4.events.onInputOut.add(function() {button4.scale.setTo(0.5, 0.5);});
        button4.events.onInputDown.add(function() {image4.visible = true;});
        button4.events.onInputUp.add(function() {image4.visible = false;});

        button5 = game.add.button(1000, 200, 'clan5');
        button5.anchor.setTo(1, 1);
        button5.scale.setTo(0.5, 0.5);
        button5.events.onInputOver.add(function() {button5.scale.setTo(0.6, 0.6);});
        button5.events.onInputOut.add(function() {button5.scale.setTo(0.5, 0.5);});
        button5.events.onInputDown.add(function() {image5.visible = true;});
        button5.events.onInputUp.add(function() {image5.visible = false;});

        button6 = game.add.button(800, 450, 'clan6');
        button6.anchor.setTo(0.5, 0.5);
        button6.scale.setTo(0.5, 0.5);
        button6.events.onInputOver.add(function() {button6.scale.setTo(0.6, 0.6);});
        button6.events.onInputOut.add(function() {button6.scale.setTo(0.5, 0.5);});
        button6.events.onInputDown.add(function() {image6.visible = true;});
        button6.events.onInputUp.add(function() {image6.visible = false;});

        button7 = game.add.button(1000, 400, 'clan7');
        button7.anchor.setTo(0.5, 0.5);
        button7.scale.setTo(0.5, 0.5);
        button7.events.onInputOver.add(function() {button7.scale.setTo(0.6, 0.6);});
        button7.events.onInputOut.add(function() {button7.scale.setTo(0.5, 0.5);});
        button7.events.onInputDown.add(function() {image7.visible = true;});
        button7.events.onInputUp.add(function() {image7.visible = false;});

        button8 = game.add.button(1200, 300, 'clan8');
        button8.anchor.setTo(0.5, 0.5);
        button8.scale.setTo(0.5, 0.5);
        button8.events.onInputOver.add(function() {button8.scale.setTo(0.6, 0.6);});
        button8.events.onInputOut.add(function() {button8.scale.setTo(0.5, 0.5);});
        button8.events.onInputDown.add(function() {image8.visible = true;});
        button8.events.onInputUp.add(function() {image8.visible = false;});

        button9 = game.add.button(500, 600, 'clan9');
        button9.anchor.setTo(1, 1);
        button9.scale.setTo(0.5, 0.5);
        button9.events.onInputOver.add(function() {button9.scale.setTo(0.6, 0.6);});
        button9.events.onInputOut.add(function() {button9.scale.setTo(0.5, 0.5);});
        button9.events.onInputDown.add(function() {image9.visible = true;});
        button9.events.onInputUp.add(function() {image9.visible = false;});

        button10 = game.add.button(1200, 200, 'clan10');
        button10.anchor.setTo(1, 1);
        button10.scale.setTo(0.5, 0.5);
        button10.events.onInputOver.add(function() {button10.scale.setTo(0.6, 0.6);});
        button10.events.onInputOut.add(function() {button10.scale.setTo(0.5, 0.5);});
        button10.events.onInputDown.add(function() {image10.visible = true;});
        button10.events.onInputUp.add(function() {image10.visible = false;});

        button11 = game.add.button(800, 200, 'clan11');
        button11.anchor.setTo(1, 1);
        button11.scale.setTo(0.5, 0.5);
        button11.events.onInputOver.add(function() {button11.scale.setTo(0.6, 0.6);});
        button11.events.onInputOut.add(function() {button11.scale.setTo(0.5, 0.5);});
        button11.events.onInputDown.add(function() {image11.visible = true;});
        button11.events.onInputUp.add(function() {image11.visible = false;});

        button12 = game.add.button(600, 600, 'clan12');
        button12.anchor.setTo(0.5, 0.5);
        button12.scale.setTo(0.5, 0.5);
        button12.events.onInputOver.add(function() {button12.scale.setTo(0.6, 0.6);});
        button12.events.onInputOut.add(function() {button12.scale.setTo(0.5, 0.5);});
        button12.events.onInputDown.add(function() {image12.visible = true;});
        button12.events.onInputUp.add(function() {image12.visible = false;});

        button13 = game.add.button(860, 600, 'clan13');
        button13.anchor.setTo(0.5, 0.5);
        button13.scale.setTo(0.5, 0.5);
        button13.events.onInputOver.add(function() {button13.scale.setTo(0.6, 0.6);});
        button13.events.onInputOut.add(function() {button13.scale.setTo(0.5, 0.5);});
        button13.events.onInputDown.add(function() {image13.visible = true;});
        button13.events.onInputUp.add(function() {image13.visible = false;});

        button14 = game.add.button(1000, 600, 'clan14');
        button14.anchor.setTo(0.5, 0.5);
        button14.scale.setTo(0.5, 0.5);
        button14.events.onInputOver.add(function() {button14.scale.setTo(0.6, 0.6);});
        button14.events.onInputOut.add(function() {button14.scale.setTo(0.5, 0.5);});
        button14.events.onInputDown.add(function() {image14.visible = true;});
        button14.events.onInputUp.add(function() {image14.visible = false;});

        button15 = game.add.button(1230, 400, 'clan15');
        button15.anchor.setTo(0.5, 0.5);
        button15.scale.setTo(0.5, 0.5);
        button15.events.onInputOver.add(function() {button15.scale.setTo(0.6, 0.6);});
        button15.events.onInputOut.add(function() {button15.scale.setTo(0.5, 0.5);});
        button15.events.onInputDown.add(function() {image15.visible = true;});
        button15.events.onInputUp.add(function() {image15.visible = false;});


        image1 = game.add.sprite(500, 100, 'image1');
        image1.scale.setTo(0.2);
        image1.visible = false;

        image2 = game.add.sprite(500, 100, 'image2');
        image2.scale.setTo(0.2);
        image2.visible = false;

        image3 = game.add.sprite(500, 100, 'image3');
        image3.scale.setTo(0.2);
        image3.visible = false;

        image4 = game.add.sprite(500, 100, 'image4');
        image4.scale.setTo(0.2);
        image4.visible = false;

        image5 = game.add.sprite(500, 100, 'image5');
        image5.scale.setTo(0.2);
        image5.visible = false;

        image6 = game.add.sprite(500, 100, 'image6');
        image6.scale.setTo(0.2);
        image6.visible = false;

        image7 = game.add.sprite(500, 100, 'image7');
        image7.scale.setTo(0.2);
        image7.visible = false;

        image8 = game.add.sprite(500, 100, 'image8');
        image8.scale.setTo(0.2);
        image8.visible = false;

        image9 = game.add.sprite(500, 100, 'image9');
        image9.scale.setTo(0.2);
        image9.visible = false;

        image10 = game.add.sprite(500, 100, 'image10');
        image10.scale.setTo(0.2);
        image10.visible = false;

        image11 = game.add.sprite(500, 100, 'image11');
        image11.scale.setTo(0.2);
        image11.visible = false;

        image12 = game.add.sprite(500, 100, 'image12');
        image12.scale.setTo(0.2);
        image12.visible = false;

        image13 = game.add.sprite(500, 100, 'image13');
        image13.scale.setTo(0.2);
        image13.visible = false;

        image14 = game.add.sprite(500, 100, 'image14');
        image14.scale.setTo(0.2);
        image14.visible = false;

        image15 = game.add.sprite(500, 100, 'image15');
        image15.scale.setTo(0.2);
        image15.visible = false;

        arrowRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        arrowLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        arrowUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        arrowDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    },

}

game.state.add('played', played);
game.state.start('played');
