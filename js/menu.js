let sun, cloud1, cloud2, cloud3, house, shop, park;
let menuState = {
    create: function(){
        game.townBackground = game.add.sprite(0, 0, 'town_background');
        sun = game.add.sprite(525, 150, 'town', 'sun.png');
        sun.anchor.setTo(0.5);
        cloud2 = game.add.sprite(800, 40, 'town', 'cloud2.png');
        cloud1 = game.add.sprite(1250, 15, 'town', 'cloud1.png');
        cloud3 = game.add.sprite(40, 60, 'town', 'cloud3.png');
        
        house = game.add.sprite(450, 698, 'town', 'house.png');
        house.inputEnabled = true;
        house.input.useHandCursor = true;
        house.events.onInputDown.add(this.enterRoom, this);
        
        shop = game.add.sprite(1000, 726, 'town', 'shop.png');
        shop.inputEnabled = true;
        shop.input.useHandCursor = true;
        shop.events.onInputDown.add(this.enterShop, this);
        
        park = game.add.sprite(285, 300, 'town', 'park.png');
        park.inputEnabled = true;
        park.input.useHandCursor = true;
        park.events.onInputDown.add(this.enterPark, this);
        
        game.fullButton = game.add.button(game.width - 100, 100, 'fullButton', this.changeFull, this, 1, 0, 2);
        game.fullButton.anchor.setTo(0.5); 
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
    },

    enterRoom: function(){
        game.state.start('room');
    },
    
    enterPark: function(){
        game.state.start('park');
    },
    
    enterShop: function(){
        game.state.start('shop');
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