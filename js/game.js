const game = new Phaser.Game(1920, 1080, Phaser.CANVAS, 'game');

game.state.add('launch', launchState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('room', roomState);
game.state.add('park', parkState);
game.state.add('shop', shopState);

game.state.start('launch');