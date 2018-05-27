let shopState = {
    create: function(){
        game.shop = game.add.sprite(0, 0, 'shop');

        game.boy1 = game.add.sprite(0, 340, 'boy1');
        
        game.backButton = game.add.button(100, 100, 'backButton', this.backToMenu, this, 1, 0, 2);
        game.backButton.anchor.setTo(0.5);

        game.fullButton = game.add.button(game.width - 100, 100, 'fullButton', this.changeFull, this, 1, 0, 2);
        game.fullButton.anchor.setTo(0.5); 

        game.star = game.add.sprite(game.width - 125, game.height - 125, 'star');
        game.star.anchor.setTo(0.5);
        game.pointsNumber = game.add.text(game.width - 125, game.height - 125, points, {font: "70px Tahoma", fill: "#7f6c27"});
        game.pointsNumber.anchor.setTo(0.5);

        this.walkAnimation(game.boy1, Phaser.Animation.generateFrameNames('boy', 2, 5, '.png', 3), 5);    
    },

    update: function(){
        this.moveCharacter(game.boy1, 1000, "right", 4);
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