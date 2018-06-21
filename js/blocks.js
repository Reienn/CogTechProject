let currentLevel = 0;
let currentOrder = 0;
let hasWon = false;

let levels = [
    {
        blocksPicture: 'blocksPicture1',
        placesAttr: [
            {player: 'G', x: 700, y: 720, source: 'block1.png'},
            {player: 'Y', x: 700, y: 556, source: 'block5.png'},
            {player: 'Y', x: 1029, y: 556, source: 'block5.png'},
            {player: 'G', x: 700, y: 392, source: 'block2.png'},
            {player: 'G', x: 1029, y: 392, source: 'block2.png'},
            {player: 'Y', x: 700, y: 228, source: 'block4.png'},
            {player: 'G', x: 700, y: 28, source: 'block3.png'}
        ],
        blocksAttr: [
            {id: 0, x: 50, y: 900, source: 'block1.png', matchingPlaces: [0]},
            {id: 3, x: 650, y: 900, source: 'block2.png', matchingPlaces: [3, 4]},
            {id: 4, x: 950, y: 900, source: 'block2.png', matchingPlaces: [3, 4]},
            {id: 6, x: 1200, y: 860, source: 'block3.png', matchingPlaces: [6]}
        ],
        blocksOrder: [
            {order: 0, player: 'green', number: 1, blocks: [0], orderPlaces: [0]},
            {order: 1, player: 'yellow', number: 2, blocks: [1, 2], orderPlaces: [1, 2]},
            {order: 2, player: 'green', number: 2, blocks: [3, 4], orderPlaces: [3, 4]},
            {order: 3, player: 'yellow', number: 1, blocks: [5], orderPlaces: [5]},
            {order: 4, player: 'green', number: 1, blocks: [6], orderPlaces: [6]}
        ],
        
    },
    {
        blocksPicture: 'blocksPicture2',
        placesAttr: [
            {player: 'G', x: 680, y: 720, source: 'block2.png'},
            {player: 'G', x: 900, y: 720, source: 'block2.png'},
            {player: 'G', x: 1120, y: 720, source: 'block2.png'},
            {player: 'Y', x: 735, y: 556, source: 'block4.png'},
            {player: 'G', x: 790, y: 392, source: 'block2.png'},
            {player: 'G', x: 1010, y: 392, source: 'block2.png'},
            {player: 'Y', x: 900, y: 228, source: 'block5.png'},
            {player: 'G', x: 900, y: 64, source: 'block2.png'}
        ],
        blocksAttr: [
            {id: 0, x: 150, y: 900, source: 'block2.png', matchingPlaces: [0, 1, 2, 4, 5, 7]},
            {id: 1, x: 375, y: 900, source: 'block2.png', matchingPlaces: [0, 1, 2, 4, 5, 7]},
            {id: 2, x: 600, y: 900, source: 'block2.png', matchingPlaces: [0, 1, 2, 4, 5, 7]},
            {id: 4, x: 825, y: 900, source: 'block2.png', matchingPlaces: [0, 1, 2, 4, 5, 7]},            
            {id: 5, x: 1050, y: 900, source: 'block2.png', matchingPlaces: [0, 1, 2, 4, 5, 7]},
            {id: 7, x: 1275, y: 900, source: 'block2.png', matchingPlaces: [0, 1, 2, 4, 5, 7]}
        ],
        blocksOrder: [
            {order: 0, player: 'green', number: 3, blocks: [0, 1, 2, 4, 5, 7], orderPlaces: [0, 1, 2]},
            {order: 1, player: 'yellow', number: 1, blocks: [3], orderPlaces: [3]},
            {order: 2, player: 'green', number: 2, blocks: [0, 1, 2, 4, 5, 7], orderPlaces: [4, 5]},
            {order: 3, player: 'yellow', number: 1, blocks: [6], orderPlaces: [6]},
            {order: 4, player: 'green', number: 1, blocks: [0, 1, 2, 4, 5, 7], orderPlaces: [7]}
        ],
        
    },
    {
        blocksPicture: 'blocksPicture3',
        placesAttr: [
            {player: 'G', x: 800, y: 720, source: 'block7.png'},
            {player: 'Y', x: 642, y: 725, source: 'block15.png'},
            {player: 'Y', x: 1128, y: 725, source: 'block14.png'},
            {player: 'Y', x: 800, y: 556, source: 'block11.png'},
            {player: 'G', x: 800, y: 392, source: 'block8.png'},
            {player: 'Y', x: 882, y: 228, source: 'block5.png'},
            {player: 'G', x: 805, y: 69, source: 'block13.png'},
            {player: 'G', x: 965, y: 69, source: 'block12.png'}
        ],
        blocksAttr: [
            {id: 0, x: 1100, y: 900, source: 'block7.png', matchingPlaces: [0]},
            {id: 4, x: 400, y: 900, source: 'block8.png', matchingPlaces: [4]},
            {id: 6, x: 150, y: 905, source: 'block13.png', matchingPlaces: [6]},
            {id: 7, x: 825, y: 905, source: 'block12.png', matchingPlaces: [7]}
        ],
        blocksOrder: [
            {order: 0, player: 'green', number: 1, blocks: [0], orderPlaces: [0]},
            {order: 1, player: 'yellow', number: 3, blocks: [1, 2, 3], orderPlaces: [1, 2, 3]},
            {order: 2, player: 'green', number: 1, blocks: [4], orderPlaces: [4]},
            {order: 3, player: 'yellow', number: 1, blocks: [5], orderPlaces: [5]},
            {order: 4, player: 'green', number: 2, blocks: [6, 7], orderPlaces: [6, 7]}
        ],
        
    },
    {
        blocksPicture: 'blocksPicture4',
        placesAttr: [
            {player: 'G', x: 650, y: 720, source: 'block7.png'},
            {player: 'G', x: 978, y: 720, source: 'block7.png'},
            {player: 'Y', x: 814, y: 392, source: 'block9.png'},
            {player: 'Y', x: 650, y: 556, source: 'block5.png'},
            {player: 'Y', x: 1142, y: 556, source: 'block5.png'},
            {player: 'G', x: 650, y: 392, source: 'block2.png'},
            {player: 'G', x: 1142, y: 392, source: 'block2.png'},
            {player: 'Y', x: 650, y: 228, source: 'block11.png'},
            {player: 'Y', x: 978, y: 228, source: 'block11.png'},
            {player: 'G', x: 650, y: 64, source: 'block2.png'},
            {player: 'G', x: 896, y: 64, source: 'block2.png'},
            {player: 'G', x: 1142, y: 64, source: 'block2.png'}
        ],
        blocksAttr: [
            {id: 0, x: 1410, y: 900, source: 'block7.png', matchingPlaces: [0, 1]},
            {id: 1, x: 1050, y: 900, source: 'block7.png', matchingPlaces: [0, 1]},
            {id: 5, x: 450, y: 900, source: 'block2.png', matchingPlaces: [5, 6, 9, 10, 11]},
            {id: 6, x: 250, y: 900, source: 'block2.png', matchingPlaces: [5, 6, 9, 10, 11]},
            {id: 9, x: 50, y: 900, source: 'block2.png', matchingPlaces: [5, 6, 9, 10, 11]},
            {id: 10, x: 650, y: 900, source: 'block2.png', matchingPlaces: [5, 6, 9, 10, 11]},
            {id: 11, x: 850, y: 900, source: 'block2.png', matchingPlaces: [5, 6, 9, 10, 11]}
        ],
        blocksOrder: [
            {order: 0, player: 'green', number: 2, blocks: [0, 1], orderPlaces: [0, 1]},
            {order: 1, player: 'yellow', number: 3, blocks: [2, 3, 4], orderPlaces: [2, 3, 4]},
            {order: 2, player: 'green', number: 2, blocks: [5, 6, 9, 10, 11], orderPlaces: [5, 6]},
            {order: 3, player: 'yellow', number: 2, blocks: [7, 8], orderPlaces: [7, 8]},
            {order: 4, player: 'green', number: 3, blocks: [5, 6, 9, 10, 11], orderPlaces: [9, 10, 11]}
        ],
        
    }
];

let blocksState = {
    create: function(){        
        
        game.clickSound = game.add.audio('clickSound');
        game.winSound = game.add.audio('winSound');
        game.putSound = game.add.audio('putSound');
        game.sadSound = game.add.audio('sadSound');
        game.pointSound = game.add.audio('pointSound');

        game.blocksBackground = game.add.sprite(0, 0, 'blocksBackground');
        game.boySitting = game.add.sprite(450, -50, 'boySitting');

        game.blocksPicture = game.add.sprite(game.width - 400, (game.height/2) - 250, levels[currentLevel].blocksPicture);
        game.levelNumber = game.add.text(game.width - 340, (game.height/2) - 210, currentLevel+1+'/'+levels.length, {font: "50px Tahoma", fill: "#7f6c27"});
        game.levelNumber.anchor.setTo(0.5); 

        game.places = game.add.group();
        levels[currentLevel].placesAttr.forEach(place => {
            game.places.create(place.x, place.y, 'blocks', place.source);
        });
        game.physics.enable(game.places, Phaser.Physics.ARCADE);
        game.places.children.forEach((child, i) => {
            if(i < levels[currentLevel].blocksOrder[0].number){
                child.alpha = 0.4;
            }else{
                child.visible = false;
            }
        });


        game.playBlocks = game.add.group();
        levels[currentLevel].blocksAttr.forEach(block => {
            game.playBlocks.create(block.x, block.y, 'blocks', block.source);
        });
        game.physics.enable(game.playBlocks, Phaser.Physics.ARCADE);
        game.playBlocks.children.forEach((child, i) => {            
            child.matchingPlaces = levels[currentLevel].blocksAttr[i].matchingPlaces;
            child.originalPosition = {x: child.x, y: child.y};
            child.id = levels[currentLevel].blocksAttr[i].id;
            child.inputEnabled = true;
            child.input.enableDrag(true);
            child.events.onDragStop.add(function(currentSprite){
                this.stopDrag(currentSprite, child.matchingPlaces);
            }, this);            

        });


        game.stars = game.add.physicsGroup();

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
        let blocksOrder = levels[currentLevel].blocksOrder;
            if(blocksOrder[currentOrder].player == 'green' && blocksOrder[currentOrder].blocks.includes(currentSprite.id)){
                game.boySitting.frame = 0;
                endSprite.forEach(id => {
                    if(blocksOrder[currentOrder].orderPlaces.includes(id) && blocksOrder[currentOrder].number != 0 && !game.places.children[id].used && game.physics.arcade.overlap(currentSprite, game.places.children[id])){
                        currentSprite.position.copyFrom(game.places.children[id].position);
                        if(currentSprite.x == game.places.children[id].position.x && currentSprite.y == game.places.children[id].position.y) {
                            currentSprite.input.draggable = false;                        
                            game.places.children[id].used = true;
                            game.putSound.play();                            
                            points++;
                            game.pointsNumber.setText(points);
                            game.pointSound.play();
                            game.add.tween(game.star).to( { angle: 360 }, 1000, Phaser.Easing.Linear.None, true);
                            blocksOrder[currentOrder].number--;
                        }                    
                    }
                });

                if(blocksOrder[currentOrder].number == 0 ){
                    currentOrder++;
                    if(blocksOrder[currentOrder]){
                        blocksOrder[currentOrder].blocks.forEach((nextBlock, j) => {
                            
                            setTimeout(function(){
                                game.boySitting.frame = 1;
                            }, (j+1)*1000);
                            setTimeout(function(){
                                let placeId = nextBlock;                                
                                game.places.children[placeId].visible = true;
                                game.putSound.play();
                            }, (j+1)*1000);
                            setTimeout(function(){
                                game.boySitting.frame = 0;
                            }, (j+1)*1500);
                           
                        });
                        setTimeout(function(){
                            currentOrder++;
                        }, blocksOrder[currentOrder].number*1500);
                    }else{
                        game.boySitting.frame = 0;
                        hasWon = true;
                        game.winSound.play();
                        
                        for (let i = 0; i < 100; i++){
                            game.stars.create(game.world.randomX, game.world.randomX-600, 'star2');
                        }
                        game.stars.forEach(function(star){
                            star.anchor.setTo(0.5);
                        });

                        setTimeout(function(){
                            if(levels[currentLevel+1]){
                                currentLevel++;
                                currentOrder = 0;
                                game.state.start(game.state.current);
                            }                            
                        }, 5000);                       
                    }
                }        
            }else if(blocksOrder[currentOrder].player == 'green' && !blocksOrder[currentOrder].blocks.includes(currentSprite.id)){
                currentSprite.position.copyFrom(currentSprite.originalPosition);
            }else if(blocksOrder[currentOrder].player == 'yellow'){
                game.boySitting.frame = 2;
                game.sadSound.play();
                currentSprite.position.copyFrom(currentSprite.originalPosition);
            }
        
             
    },

    backToRoom: function(){
        currentOrder = 0;
        currentLevel = 0;
        hasWon = false;
        
        levels.forEach(level => {
            level.blocksOrder.forEach( order => {
                order.number = order.orderPlaces.length;
            });
        });
        
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