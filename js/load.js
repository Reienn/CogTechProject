let points = 0;
let loadState = {
    preload: function(){
        game.load.audio('winSound', 'assets/audio/win.mp3');
        game.load.audio('putSound', 'assets/audio/put.mp3');
        game.load.audio('clickSound', 'assets/audio/click.mp3');
        game.load.audio('sadSound', 'assets/audio/sad.mp3');

        game.load.spritesheet('backButton', 'assets/images/back_button.png', 180, 180);
        game.load.spritesheet('fullButton', 'assets/images/full_button.png', 180, 180);
        game.load.image('star', 'assets/images/star.png');
        game.load.image('star2', 'assets/images/star2.png');
        
        game.load.image('town_background', 'assets/images/town/town_background.png');
        game.load.atlasJSONHash('town', 'assets/images/town/town.png', 'assets/images/town/town.json');
        
        game.load.image('roomBackground', 'assets/images/house/room_background.png');
        game.load.image('furniture', 'assets/images/house/furniture.png');
        game.load.atlasJSONHash('boy1', 'assets/images/characters/boy1.png', 'assets/images/characters/boy1.json');
        
        game.load.image('blocksBackground', 'assets/images/house/blocks_background.png');
        game.load.image('blocksPicture', 'assets/images/house/blocks_picture.png');
        game.load.atlasJSONHash('blocks', 'assets/images/house/blocks.png', 'assets/images/house/blocks.json');
        game.load.spritesheet('boySitting', 'assets/images/house/boy_sitting.png', 389, 752);
        
        game.load.image('playBubble', 'assets/images/house/play_bubble.png');
        game.load.spritesheet('yesPCS', 'assets/images/yes_PCS.png', 300, 300);
        
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
        game.scale.startFullScreen(false);
        game.state.start('menu');
    }
};