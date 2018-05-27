let blocksOrder = [];
let currentOrder = 1;
let hasWon = false;

let blocksState = {
    create: function(){
        game.clickSound = game.add.audio('clickSound');
        game.winSound = game.add.audio('winSound');
        game.putSound = game.add.audio('putSound');
        
        game.blocksBackground = game.add.sprite(0, 0, 'blocksBackground');
        game.boySitting = game.add.sprite(450, -50, 'boySitting');
        game.blocksPicture = game.add.sprite(game.width - 400, (game.height/2) - 250, 'blocksPicture');

        game.blockG1Place = game.add.sprite(700, 720, 'blocks', 'block1.png');
        game.blockG1Place.alpha = 0.4;
        game.physics.enable(game.blockG1Place, Phaser.Physics.ARCADE);
        
        game.blockY1Place = game.add.sprite(700, 556, 'blocks', 'block5.png');
        game.blockY1Place.visible = false;
        game.physics.enable(game.blockY1Place, Phaser.Physics.ARCADE);
        
        game.blockY2Place = game.add.sprite(1029, 556, 'blocks', 'block5.png');
        game.blockY2Place.visible = false;
        game.physics.enable(game.blockY2Place, Phaser.Physics.ARCADE);
        
        game.blockG2Place = game.add.sprite(700, 392, 'blocks', 'block2.png');
        game.blockG2Place.visible = false;
        game.physics.enable(game.blockG2Place, Phaser.Physics.ARCADE);

        game.blockG3Place = game.add.sprite(1029, 392, 'blocks', 'block2.png');
        game.blockG3Place.visible = false;
        game.physics.enable(game.blockG3Place, Phaser.Physics.ARCADE);

        game.blockY3Place = game.add.sprite(700, 228, 'blocks', 'block4.png');
        game.blockY3Place.visible = false;
        game.physics.enable(game.blockY3Place, Phaser.Physics.ARCADE);
 
        game.blockG4Place = game.add.sprite(700, 28, 'blocks', 'block3.png');
        game.blockG4Place.visible = false;
        game.physics.enable(game.blockG4Place, Phaser.Physics.ARCADE);


        game.blockG1 = game.add.sprite(50, 900, 'blocks', 'block1.png');
        game.blockG1.originalPosition = {x: 50, y: 900};
        game.physics.enable(game.blockG1, Phaser.Physics.ARCADE);
        game.blockG1.inputEnabled = true;
        game.blockG1.input.enableDrag(true);
        game.blockG1.events.onDragStop.add(function(currentSprite){
            this.stopDrag(currentSprite, [game.blockG1Place]);
          }, this);

        game.blockG2 = game.add.sprite(650, 900, 'blocks', 'block2.png');
        game.blockG2.originalPosition = {x: 650, y: 900};
        game.physics.enable(game.blockG2, Phaser.Physics.ARCADE);
        game.blockG2.inputEnabled = true;
        game.blockG2.input.enableDrag(true);
        game.blockG2.events.onDragStop.add(function(currentSprite){
            this.stopDrag(currentSprite, [game.blockG2Place, game.blockG3Place]);
        }, this);

        game.blockG3 = game.add.sprite(950, 900, 'blocks', 'block2.png');
        game.blockG3.originalPosition = {x: 950, y: 900};
        game.physics.enable(game.blockG3, Phaser.Physics.ARCADE);
        game.blockG3.inputEnabled = true;
        game.blockG3.input.enableDrag(true);
        game.blockG3.events.onDragStop.add(function(currentSprite){
            this.stopDrag(currentSprite, [game.blockG2Place, game.blockG3Place]);
        }, this);

        game.blockG4 = game.add.sprite(1200, 860, 'blocks', 'block3.png');
        game.blockG4.originalPosition = {x: 1200, y: 860};
        game.physics.enable(game.blockG4, Phaser.Physics.ARCADE);
        game.blockG4.inputEnabled = true;
        game.blockG4.input.enableDrag(true);
        game.blockG4.events.onDragStop.add(function(currentSprite){
            this.stopDrag(currentSprite, [game.blockG4Place]);
        }, this);

        blocksOrder = [
            {order: 1, player: 'green', blocks: [game.blockG1]},
            {order: 2, player: 'yellow', blocks: [game.blockY1Place, game.blockY2Place]},
            {order: 3, player: 'green', blocks: [game.blockG2, game.blockG3]},
            {order: 4, player: 'yellow', blocks: [game.blockY3Place]},
            {order: 5, player: 'green', blocks: [game.blockG4]}
        ];


        game.stars = game.add.physicsGroup();
        for (let i = 0; i < 100; i++){
            game.stars.create(game.world.randomX, game.world.randomX-600, 'star2');
        }
        game.stars.visible = false;
        game.stars.forEach(function(star){
            star.anchor.setTo(0.5);
        });


        game.backButton = game.add.button(100, 100, 'backButton', this.backToRoom, this, 1, 0, 2);
        game.backButton.anchor.setTo(0.5);

        game.fullButton = game.add.button(game.width - 100, 100, 'fullButton', this.changeFull, this, 1, 0, 2);
        game.fullButton.anchor.setTo(0.5);

        game.star = game.add.sprite(game.width - 125, game.height - 125, 'star');
        game.star.anchor.setTo(0.5);
        game.pointsNumber = game.add.text(game.width - 125, game.height - 125, points, {font: "70px Tahoma", fill: "#7f6c27"});
        game.pointsNumber.anchor.setTo(0.5);    
        
    },

    update: function(){
        if(hasWon){
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
   
    stopDrag: function(currentSprite, endSprite){
        for(let i=0; i < blocksOrder.length; i++){
            
            if(blocksOrder[i].blocks.includes(currentSprite) && blocksOrder[i].order <= currentOrder){
                game.boySitting.frame = 0;

                endSprite.forEach(element => {
                    if(!element.blockDragging && game.physics.arcade.overlap(currentSprite, element)){
                        currentSprite.input.draggable = false;
                        currentSprite.position.copyFrom(element.position);
                        game.putSound.play();
                        element.blockDragging = true;
                        points++;
                        game.pointsNumber.setText(points);
                        game.add.tween(game.star).to( { angle: 360 }, 1000, Phaser.Easing.Linear.None, true);

                        let index = blocksOrder[i].blocks.indexOf(currentSprite);
                        if (index > -1) {
                            blocksOrder[i].blocks.splice(index, 1);
                        }
                    }
                });

                if(blocksOrder[i].blocks.length == 0 ){
                        
                    if(blocksOrder[i+1]){
                        for(let j=0; j < blocksOrder[i+1].blocks.length; j++){
                        
                            setTimeout(function(){
                                game.boySitting.frame = 1;
                            }, (j+1)*1000);
                            setTimeout(function(){
                                blocksOrder[i+1].blocks[j].visible = true;
                                game.putSound.play();
                            }, (j+1)*1000);
                            setTimeout(function(){
                                game.boySitting.frame = 0;
                            }, (j+1)*1500);
                           
                        }
                        setTimeout(function(){
                            currentOrder +=2;
                        }, blocksOrder[i+1].blocks.length*1500);
                    }else{
                        game.boySitting.frame = 0;
                        hasWon = true;
                        game.winSound.play();
                        game.stars.visible = true;                        
                    }
                }        
            }else if(blocksOrder[i].blocks.includes(currentSprite)){
                game.boySitting.frame = 2;
                currentSprite.position.copyFrom(currentSprite.originalPosition);
            }
        }
             
    },

    backToRoom: function(){
        currentOrder = 1;
        hasWon = false;
        game.clickSound.play();
        game.state.start('room');
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