let parkState = {
    create: function(){
        game.park = game.add.sprite(0, 0, 'park');
        sun = game.add.sprite(525, 150, 'town', 'sun.png');
        sun.anchor.setTo(0.5);
        cloud2 = game.add.sprite(800, 40, 'town', 'cloud2.png');
        cloud1 = game.add.sprite(1250, 15, 'town', 'cloud1.png');
        cloud3 = game.add.sprite(40, 60, 'town', 'cloud3.png');

        game.backButton = game.add.button(100, 100, 'backButton', this.backToMenu, this, 1, 0, 2);
        game.backButton.anchor.setTo(0.5);

        game.fullButton = game.add.button(game.width - 100, 100, 'fullButton', this.changeFull, this, 1, 0, 2);
        game.fullButton.anchor.setTo(0.5); 

        boy1 = game.add.sprite(0, 340, 'boy1');

        this.walkAnimation(boy1, Phaser.Animation.generateFrameNames('boy', 2, 5, '.png', 3), 5);    
    },

    update: function(){
        sun.angle += 0.7;

        cloud1.x += 0.5;
        if(cloud1.x > game.width){
            cloud1.x = -500;
        }

        cloud2.x += 0.4;
        if(cloud2.x > game.width){
            cloud2.x = -200;
        }

        cloud3.x += 0.6;
        if(cloud3.x > game.width){
            cloud3.x = -500;
        }
        
        this.moveCharacter(boy1, 1000, "right", 4);
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
            }
        }else{
            if(character.x > destination){
                character.x -= speed;
            }else{
                character.animations.stop(true, false);
                character.frame = 0;
            }
        } 
    },

    backToMenu: function(){
        game.state.start('menu');
    },
    
    changeFull: function(){
        if(game.scale.isFullScreen){
            game.scale.stopFullScreen();
        }
        else{
            game.scale.startFullScreen(false);
        }
    }
};