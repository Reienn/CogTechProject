let i = 0;
let hasFound = false;

let parkState = {
    create: function(){
        game.clickSound = game.add.audio('clickSound');
        game.sadSound = game.add.audio('sadSound');
        game.winSound = game.add.audio('winSound');

        game.park = game.add.sprite(0, 0, 'park');
        
        game.dogHidden1 = game.add.sprite(200, 580, 'dog');
        game.dogHidden1.scale.setTo(0.5);
        game.dogHidden1.visible = false;

        game.dogHidden3 = game.add.sprite(700, 500, 'dog');
        game.dogHidden3.scale.setTo(0.2);
        game.dogHidden3.visible = false;

        game.dogHidden4 = game.add.sprite(700, 600, 'dog', 3);
        game.dogHidden4.scale.setTo(0.6);
        game.dogHidden4.visible = false;

        game.parkObjects = game.add.sprite(0, 0, 'parkObjects');

        game.dogHidden2 = game.add.sprite(1650, 600, 'dog', 3);
        game.dogHidden2.scale.setTo(0.7);
        game.dogHidden2.visible = false;

        game.dogs = [game.dogHidden1, game.dogHidden2, game.dogHidden3, game.dogHidden4];

        game.sun = game.add.sprite(525, 150, 'town', 'sun.png');
        game.sun.anchor.setTo(0.5);
        game.cloud2 = game.add.sprite(800, 40, 'town', 'cloud2.png');
        game.cloud1 = game.add.sprite(1250, 15, 'town', 'cloud1.png');
        game.cloud3 = game.add.sprite(40, 60, 'town', 'cloud3.png');

        game.dog = game.add.sprite(-480, 630, 'dog');        
        game.dog.scale.setTo(0.9);
        game.boy1 = game.add.sprite(0, 340, 'boy1');
        game.boy1.scale.setTo(0.9);
        /*game.girl1 = game.add.sprite(-300, 340, 'girl1');
        game.girl1.scale.setTo(0.9);
        game.girl2 = game.add.sprite(-600, 340, 'girl2');
        game.girl2.scale.setTo(0.9);
        game.hideBubble = game.add.sprite(1200, 140, 'hideBubble');
        game.hideBubble.visible = false;        

        game.yesButton = game.add.button((game.width/2)-150, game.height - 350, 'yesPCS', this.playHide, this, 1, 0, 1);
        game.yesButton.visible = false;*/

        game.stars = game.add.physicsGroup();

        game.backButton = game.add.button(100, 100, 'backButton', this.backToMenu, this, 1, 0, 2);
        game.backButton.anchor.setTo(0.5);

        game.fullButton = game.add.button(game.width - 100, 100, 'fullButton', this.changeFull, this, 1, 0, 2);
        game.fullButton.anchor.setTo(0.5);

        game.star = game.add.sprite(game.width - 125, game.height - 125, 'star');
        game.star.anchor.setTo(0.5);
        game.pointsNumber = game.add.text(game.width - 125, game.height - 125, points, {font: "70px Tahoma", fill: "#7f6c27"});
        game.pointsNumber.anchor.setTo(0.5);

        this.walkAnimation(game.boy1, Phaser.Animation.generateFrameNames('boy', 2, 5, '.png', 3), 5);
        //this.walkAnimation(game.girl1, Phaser.Animation.generateFrameNames('girl', 2, 5, '.png', 3), 6);
        //this.walkAnimation(game.girl2, Phaser.Animation.generateFrameNames('girl', 2, 5, '.png', 3), 5);
        game.dog.animations.add('dogWalkAnimation', [0, 1, 0, 2], 6, true);
        game.dog.animations.play('dogWalkAnimation'); 
        
        game.boy1.walkEnd = false;
        //game.girl1.walkEnd = false;
        //game.girl2.walkEnd = false;
        game.dog.walkEnd = false;
        
    },

    update: function(){
        game.sun.angle += 0.7;

        game.cloud1.x += 0.5;
        if(game.cloud1.x > game.width){
            game.cloud1.x = -500;
        }

        game.cloud2.x += 0.4;
        if(game.cloud2.x > game.width){
            game.cloud2.x = -200;
        }

        game.cloud3.x += 0.6;
        if(game.cloud3.x > game.width){
            game.cloud3.x = -500;
        }
        
        if(!game.boy1.walkEnd){
            this.moveCharacter(game.boy1, 1000, "right", 4);
        }
        /*if(!game.girl1.walkEnd){
            this.moveCharacter(game.girl1, 700, "right", 4);
        }
        if(!game.girl2.walkEnd){
            this.moveCharacter(game.girl2, 400, "right", 4);
        }*/
        if(!game.dog.walkEnd){
            this.moveCharacter(game.dog, 500, "right", 4);
        }
        
        if(hasFound){
            game.stars.forEachAlive(function(star){
                if(star.body.y < game.height+50){
                    star.body.y += Math.random() * 10;
                    star.angle += Math.random() * 10;
                }else{
                    game.stars.remove(star);
                }                
            });
        }
    },

    
    walkAnimation: function(character, frames, speed){
        character.animations.add('walk', frames, speed, true, false);
        character.animations.play('walk');
    },
    
    moveCharacter: function (character, destination, direction, speed){
        
        if(direction=="right"){
           if(character.x < destination){
                character.x += speed;
            }else{
                character.animations.stop(true, false);
                character.frame = 0;
                character.walkEnd = true;
                if(game.dog.walkEnd && game.boy1.walkEnd){
                    this.hideDog();
                }
                /*if(game.boy1.walkEnd){
                    game.hideBubble.visible = true;
                    game.yesButton.visible = true;
                }*/
            }
        }else{
            if(character.x > destination){
                character.x -= speed;
            }else{
                character.animations.stop(true, false);
                character.frame = 0;
                character.walkEnd = true;
                if(game.dog.walkEnd && game.boy1.walkEnd){
                    this.hideDog();
                }
                /*if(game.boy1.walkEnd){
                    game.hideBubble.visible = true;
                    game.yesButton.visible = true;
                }*/
            }
        } 
    },

    hideDog: function(){
        game.dog.visible = false;
        game.boy1.frame = 9;
        game.sadSound.play();
        game.dogs[i].visible = true;
        game.dogs[i].inputEnabled = true;
        game.dogs[i].events.onInputDown.add(this.showDog, this);
    },

    showDog: function(){
        game.dogs[i].visible = false;
        game.dogs[i].inputEnabled = false;
        game.dog.visible = true;
        game.boy1.frame = 0;
        points++;
        game.pointsNumber.setText(points);
        game.add.tween(game.star).to( { angle: 360 }, 1000, Phaser.Easing.Linear.None, true);
        if(game.dogs.length > i+1){    
            i++;
            game.time.events.add(1300, this.hideDog, this);
         }else{     
            game.time.events.add(1000, ()=>{
                game.winSound.play();
                hasFound = true;
                for (let i = 0; i < 100; i++){
                    game.stars.create(game.world.randomX, game.world.randomX-600, 'star2');
                }
                game.stars.forEach(function(star){
                    star.anchor.setTo(0.5);
                });
            });
         }
    },

    /*playHide: function(){
        game.clickSound.play();
        game.yesButton.visible = false;
        game.hideBubble.visible = false;
        game.boy1.frame = 10;
    },*/

    backToMenu: function(){
        game.clickSound.play();
        game.state.start('menu');
        hasFound = false;
        i = 0;
    },
    
    changeFull: function(){
        game.clickSound.play();
        if(game.scale.isFullScreen){
            game.scale.stopFullScreen();
        }
        else{
            game.scale.startFullScreen(false);
        }
    }
};