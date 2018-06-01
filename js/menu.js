let menuState = {
    create: function(){
        game.clickSound = game.add.audio('clickSound');
        game.menuSound = game.add.audio('menuSound');        

        game.townBackground = game.add.sprite(0, 0, 'town_background');
        game.sun = game.add.sprite(525, 150, 'town', 'sun.png');
        game.sun.anchor.setTo(0.5);
        game.cloud2 = game.add.sprite(800, 40, 'town', 'cloud2.png');
        game.cloud1 = game.add.sprite(1250, 15, 'town', 'cloud1.png');
        game.cloud3 = game.add.sprite(40, 60, 'town', 'cloud3.png');
        
        game.house = game.add.sprite(450, 698, 'town', 'house.png');
        game.house.inputEnabled = true;
        game.house.input.useHandCursor = true;
        game.house.events.onInputDown.add(this.enterRoom, this);
        
        game.shop = game.add.sprite(1000, 726, 'town', 'shop.png');
        game.shop.inputEnabled = true;
        game.shop.input.useHandCursor = true;
        game.shop.events.onInputDown.add(this.enterShop, this);
        
        game.park = game.add.sprite(285, 300, 'town', 'park.png');
        game.park.inputEnabled = true;
        game.park.input.useHandCursor = true;
        game.park.events.onInputDown.add(this.enterPark, this);
        
        game.fullButton = game.add.button(game.width - 100, 100, 'fullButton', this.changeFull, this, 1, 0, 2);
        game.fullButton.anchor.setTo(0.5);
        
        game.star = game.add.sprite(game.width - 125, game.height - 125, 'star');
        game.star.anchor.setTo(0.5);
        game.pointsNumber = game.add.text(game.width - 125, game.height - 125, points, {font: "70px Tahoma", fill: "#7f6c27"});
        game.pointsNumber.anchor.setTo(0.5);
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
    },

    enterRoom: function(){
        game.menuSound.play();
        game.state.start('room');
    },
    
    enterPark: function(){
        game.menuSound.play();
        game.state.start('park');
    },
    
    enterShop: function(){
        game.menuSound.play();
        game.state.start('shop');
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