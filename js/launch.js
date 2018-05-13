let boy1;
let textStyle = {font: "70px Tahoma", fill: "#72c6ff"};

let launchState = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;  
        game.input.maxPointers = 1;
        game.stage.disableVisibilityChange = true;
        game.renderer.renderSession.roundPixels = true;
        game.stage.backgroundColor = "#fff";
    },

    preload: function(){
        game.load.spritesheet('loadingBars', 'assets/images/loadingBars.png', 1176, 131);
        game.load.spritesheet('playButton', 'assets/images/play_button.png', 360, 360);
    },

    create: function(){
        game.state.start('load');
    }
};