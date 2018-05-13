let loadState = {
    preload: function(){
        game.load.spritesheet('backButton', 'assets/images/back_button.png', 180, 180);
        game.load.spritesheet('fullButton', 'assets/images/full_button.png', 180, 180);
        
        game.load.image('town_background', 'assets/images/town/town_background.png');
        game.load.atlasJSONHash('town', 'assets/images/town/town.png', 'assets/images/town/town.json');
        
        game.load.image('roomBackground', 'assets/images/house/room_background.png');
        game.load.image('furniture', 'assets/images/house/furniture.png');
        game.load.atlasJSONHash('boy1', 'assets/images/characters/boy1.png', 'assets/images/characters/boy1.json');

        game.load.image('park', 'assets/images/park/park.png');

        game.load.image('shop', 'assets/images/shop/shop.png');
        
        game.emptyBar = game.add.sprite(game.width * 0.5, 350, 'loadingBars');
        game.emptyBar.anchor.setTo(0.5);
        game.fullBar = game.add.sprite(game.emptyBar.x - 588, game.emptyBar.y, 'loadingBars', 1);
        game.fullBar.anchor.setTo(0, 0.5);

        game.text = game.add.text(game.width * 0.5, 200, 'wczytywanie gry', textStyle);
        game.text.anchor.setTo(0.5);
        
        game.load.setPreloadSprite(game.fullBar);
    },

    create: function(){
        game.playButton = game.add.button(game.width * 0.5, 700, 'playButton', this.startMenu, this, 1, 0, 2);
        game.playButton.anchor.setTo(0.5);     
    },

    startMenu: function(){
        game.state.start('menu');
    }
};