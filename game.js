
 //import './score.js'
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
  //var kaboom = require('kaboom')
 // initialize kaboom context
 kaboom({
    width: 800,
    height:400,
    background: [ 255, 255, 255, ],
    canvas: document.querySelector("#mycanvas"),
    scale: 2,
    logMax: 5,
});

const FLOOR_HEIGHT = 0;//48;
var IOS = false;



if(/iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
    // run your code here
    IOS = true
   }

//debug.log(IOS)
/*
loadSprite("man", "assets/runmananime100.png", {
    sliceX: 16,
    sliceY: 1,
    anims:{
        "fall":{
            from: 16,
            to:16,
        },
        "jump":{
            from: 8,
            to: 15,
        },
        "run":{
            from:0,
            to:7,
            loop: true,
        },
    }
});
*/

loadSprite("man", "assets/runmananime.png", {
    sliceX: 24,
    sliceY: 1,
    anims:{
        "jump":{
            from: 4,
        to: 4,
        },
        "run":{
            from:0,
            to:22,
            loop: true,
            //speed: 30,
        },
    }
});

loadSprite("female", "assets/runfemaleanime.png", {
    sliceX: 24,
    sliceY: 1,
    anims:{
        "jump":{
            from: 4,
           to: 4,
        },
        "run":{
            from:0,
            to:22,
            loop: true,
            //speed: 30,
        },
    }
});

/*
loadSprite("man", "assets/trimmed_runmananime_200.png", {
    sliceX: 16,
    sliceY: 1,
    anims:{
        "jump":{
            from: 8,
            to: 15,
        },
        "run":{
            from:0,
            to:7,
            loop: true,
        },
    }
});
*/
loadSprite("bag1", "assets/bags/bag1.png");
loadSprite("bag2", "assets/bags/bag2.png");
loadSprite("bag3", "assets/bags/bag3.png");



//loadSprite("train", "assets/train.png");
loadSprite("train", "assets/game file 2.png");

loadSprite("city", "assets/evening.jpg");
//loadSprite("city", "assets/BG/city.png");
loadSprite("BGday", "assets/BG/day.jpg");
loadSprite("BGevening", "assets/BG/evening.jpg");
loadSprite("BGnight", "assets/BG/night.jpg");

loadSprite("coin", "assets/coin.png");
/*
loadSprite("coin", "assets/coin_sprite.png", {
    sliceX: 10,
    sliceY: 1,
    anims:{
        "rot":{
            from: 0,
            to:5,
            loop: true,
        },
        "explo":{
            from:6,
            to:9,
        }
    }
});
*/
//Booster();
loadSprite("boost", "assets/booster.png");
loadSprite("BoostAnim", "assets/BoosterAnim.png", {
    sliceX: 20,
    sliceY: 1,
    anims:{
        "Boost":{
            from: 0,
            to:19,
            loop: true,
            speed:20,
        },
        "Stop":{
            from:0,
            to:0,
        }
    }
});

//For station assets
//loadSprite("StationBack", "assets/station/stallbg.png");
loadSprite("vadapav", "assets/station/stalls/vada pav.png");
loadSprite("nimbu", "assets/station/stalls/nimbu paani.png");
loadSprite("chai", "assets/station/stalls/tea stall.png");
loadSprite("bhel", "assets/station/stalls/bhel puri.png");
loadSprite("dabeli", "assets/station/stalls/dabeli.png");
loadSprite("dosa", "assets/station/stalls/dosa stall.png");
loadSprite("panipuri", "assets/station/stalls/panipuri.png");
loadSprite("pavbhaji", "assets/station/stalls/pav bhaji.png");
loadSprite("poha", "assets/station/stalls/poha.png");
loadSprite("sandwich", "assets/station/stalls/sandwich.png");
//loadSprite("BGFront", "assets/station/BGStallFront.png");
//New station assets
loadSprite("BG1", "assets/station/bonus 1.jpg");
loadSprite("BG2", "assets/station/bonus 2.jpg");
loadSprite("BG3", "assets/station/bonus 3.jpg");
loadSprite("BG4", "assets/station/bonus 4.jpg");
loadSprite("BG5", "assets/station/bonus 5.jpg");
loadSprite("BonusBG", "assets/station/bonus BG 2.png");

//loadSprite("CharBack", "assets/station/charback.png");
loadSprite("Plus", "assets/station/plus.png");
loadSprite("TapRech", "assets/station/TapToRecharge.png");
loadSprite("RunBut", "assets/station/RunButton.png");
loadSprite("DisRunBut", "assets/station/DisRunButton.png");

//For sound
loadSound("coinsound", "./assets/audio/Pick Coin.mp3");
loadSound("TryAgain", "./assets/audio/Try Again.mp3");
loadSound("BagAud", "./assets/audio/BagColAud.mp3");
loadSound("BoostAud", "./assets/audio/energy power up.mp3");
loadSound("MCReg", "./assets/audio/MCReg.mp3");
loadSound("AudBG", "./assets/audio/BGAudio.mp3");

loadSprite("MuteBut", "assets/mutebutton.png");

//For ingame text 
/*
loadSprite("CoinsLabel", "assets/coins_text.png");
loadSprite("ScoreLabel", "assets/score_text.png");
loadSprite("StaminaLabel", "assets/stamina_text.png");
*/
/*
loadSprite("CoinsLabel", "assets/coins.png");
loadSprite("ScoreLabel", "assets/score.png");
loadSprite("StaminaLabel", "assets/stamina.png");
*/

//New icon assets
loadSprite("CoinsLabel", "assets/coin_icon.png");
loadSprite("ScoreLabel", "assets/XP_icon.png");
loadSprite("StaminaLabel", "assets/stamina_icon.png");


//For menu assets 
loadSprite("MainPage", "assets/Pages/MainPage.jpg");
loadSprite("Play", "assets/playbutton.png");

//For char choose assets 
loadSprite("Male", "assets/Pages/MaleChar.jpg");
loadSprite("Female", "assets/Pages/FemaleChar.jpg");

//For try again page
loadSprite("TryAgain", "assets/Pages/tryagain_page.jpg");
loadSprite("TryButton", "assets/Pages/try_again_button.png");
loadSprite("HomeBut", "assets/homebutton.png");

//
loadSprite("BoundBox", "assets/boundingbox.png");
// loadSprite("Door", "assets/Test/Door.jpg");
//loadSprite("LeftDoor", "assets/Test/LeftDoor.jpg");
//loadSprite("RightDoor", "assets/Test/RightDoor.jpg");

loadSprite("LeftDoor", "assets/level.png");
loadSprite("RightDoor", "assets/up.png");

//load("video", "assets/lego surface 2.mp4")


let SPEED = 300;    
let score = 0; 
let currency = 0;
let stamina = 51;
let JUMP_FORCE = 600;
//if Male then Gender 0, and if FeMale then Gender 1
let Gender = 0;

//defining temp variable for currency to show as many plus signs as currency (no more)
let currencyActual = 0;
var dispButton = false;
var Mute = false; 
let BGAud = play("AudBG", {
    volume: 0.4,
    loop: true,
});

scene("game", (stamina, score, currency, SPEED, Gender) => {
    let Damage = 0;
    let BagCollide = true; 

        layers([
            "bot",
            "mid",
            "top",
            "overTop"
        ], "top");

        gravity(1800);

        var charSprite = "man"

        if(Gender == 1)
            charSprite = "female"
        
        

        const player = add([
            sprite(charSprite, {
                anims: "run",   
                animSpeed: 3+SPEED/1000,          
            }),
            pos(50, height()),
            origin("botleft"),
            layer("top"),
            scale(0.93), 
            //scale(0.8), 
            //scale(0.5),//for 1080
            area(),
            body(),
        ]);

       

/*
        const player = add([
            sprite("man", {
                anims: "run",
                animSpeed:SPEED/300 + 2,
            }),
            pos(50, height()),
            origin("botleft"),
            layer("top"),
            scale(0.5), 
            area(),
            body(),
        ]);
*/

        //For jump
        function jump(){
            if (player.grounded()){
                player.jump(JUMP_FORCE);
                player.play("jump");
                //fullscreen(BagCollide);
            };
            
        };

        //keyPress("space", jump); 
          
        mouseClick(jump)
        mouseIsReleased(player.play("run"));

        mouseRelease(() => {
                player.play("run");
        });


        //for platform
        add([
            rect(width(), FLOOR_HEIGHT),
            pos(0, height()),
            outline(4),
            origin("botleft"),
            area(),
            layer("top"),
            solid(),
            color(127, 200, 255),
        ]);



        //add background city

    var BackCity = choose(["BGday", "BGnight", "BGday"])

    const BackCity1 = add([
        sprite(BackCity),
        pos(0,-10),
        origin("topleft"),
        area(),
        scale(0.3, 0.35),
        move(LEFT, SPEED*0.1),
        layer("bot"),
        "BackCity1"
    ]);


    const BackCity2 = add([
        sprite(BackCity),
        pos(1200,-10),
        origin("topleft"),
        area(),
        scale(0.3, 0.35),
        move(LEFT, SPEED*0.1),
        layer("bot"),
        "BackCity2"  
    ]);

    onUpdate(()=>{
        console.log(BackCity1.pos.x);
        if(BackCity1.pos.x<=-1200)
        {
            //alert("negative position of train")
            BackCity1.moveTo(0,-10);
            BackCity2.moveTo(1200,-10);
        }
    })

    /*
    for(let j=0; j<10; j++){
        add([
            sprite("city"),
            pos(0,0),
            origin("topleft"),
            area(),
            scale(0.3),
            move(LEFT, SPEED*0.01),
            layer("bot"),
            "BackCity"
        ]);

    };

    for(let j=0; j<10; j++){
        add([
            sprite(BackCity),
            pos(1200*j,-10),
            origin("topleft"),
            area(),
            //scale(0.28),
            scale(0.3),
            move(LEFT, SPEED*0.2),
            layer("bot"),
            "BackCity"
        ]);

    };
*/

       //add background train
       /*
        add([
            sprite("train"),
            pos(0, 0),
            origin("topleft"),
            area(),
            scale(0.9),
            move(LEFT, SPEED),
            layer("mid"),
            area(),
            cleanup(2),
            "train"
        ]);

    

        //add background train loop
        for(let i=0;i<50;i+=2){
            add([
                sprite("train"),
                pos((850)*i, 0),
                origin("topleft"),
                area(),
                scale(0.9),
                move(LEFT, SPEED),
                layer("mid"),
                area(),
                "train"
            ]);
        };   
*/

        const train1 = add([
            sprite("train"),
            //pos(0, 0),
            pos(0, 0),
            origin("topleft"),
            area(),
            scale(1, 0.9),
            move(LEFT, SPEED),
            layer("mid"),
            area(),
            "train"  
        ]);

        const train2 = add([
            sprite("train"),
            //pos(1700, 0),
            pos(1771, 0),
            origin("topleft"),
            area(),
            scale(1, 0.9),
            move(LEFT, SPEED),
            layer("mid"),
            area(),
            "train"  
        ]);


        onUpdate(()=>{
            console.log(train1.pos.x);
            //if(train1.pos.x<=-1700)
            if(train1.pos.x<=-1771)
            {
                //alert("negative position of train")
                train1.moveTo(0,0);
                //train2.moveTo(1700,0);
                train2.moveTo(1771,0);
            }
        })
                    
        
        // For spawning bags in loop
        function spawnBags(){
                    //add bags 
            add([
                    sprite(choose(["bag1", "bag2", "bag3"])),
                    pos(width()+rand(1200, 1400), height()),
                    area(),
                    origin("botleft"),
                    layer("top"),
                    scale(0.55),
                    move(LEFT, SPEED),
                    "bag", // add a tag here
                ]);
                
                
            // wait a random amount of time to spawn next bag
            wait(rand(3, 5), (spawnBags));
        }

        //start spawning bags
        spawnBags();

        function handleoutCoin(){
            return{
                id: "handleoutCoin",
                require: ["pos"],
                update(){
                    const spos = this.screenPos()
                    if(
                        spos.x<0 ||
                        spos.x>width() ||
                        spos.y<0 ||
                        spos.y>height()
                    ){
                        this.trigger("out")
                    }
                }
            }
        }

        function AnimCoin(loc){
            const center = vec2(loc)
            const staminapos = vec2(710, 40)
                //currency+=5;
                let SendCoin = add([
                    pos(center),
                    sprite("coin"),
                    origin("center"),
                    handleoutCoin(),
                    scale(0.4),
                    layer("mid"),
                    "SendCoin",
                    {dir: staminapos.sub(center).unit(), },
                ])
        };

        onUpdate("SendCoin", (m) => {
            m.move(m.dir.scale(100))
        })

        on("out", "SendCoin", (m) => {
            destroy(m)   
        })

        var CoinPos = 0
        //For adding coins
        function spawnCoins(){
                    //add coins  
                
                let coin = add([
                    sprite("coin", {
                        //anims: "rot",
                    }),
                    pos(width() + rand(400, 600), height()- rand(200, 300)),
                    area(),
                    origin("botleft"),
                    layer("top"),
                    scale(0.6),
                    move(LEFT, SPEED),
                    "coin", // add a tag here
                ]);


                //coin.play("rot");
                //add score for every coin
                CoinPos = coin.pos
                var coinHeight = coin.pos.y
                player.collides("coin", () => {
                    coin.destroy();
                });
            
            coin.action(()=>{
                coin.pos.y = wave(coinHeight, coinHeight-20, time()*5);
            })
                
            // wait a random amount of time to spawn next coin
            wait(rand(2, 3), (spawnCoins));
        }

         //start spawning coins
        spawnCoins();
    
    var Coin2Pos = 0
    //to spawn multiple coins together 
    function spawnMulCoins(){
            //add coins  
            
            let coin2 = add([
                sprite("coin", {
                    //anims: "rot",
                }),
                pos(width() + rand(100, 300), height()- rand(200, 300)),
                area(),
                origin("botleft"),
                layer("top"),
                scale(0.6),
                move(LEFT, SPEED),
                "coin2", // add a tag here
            ]);


            //coin.play("rot");
            //add score for every coin
            Coin2Pos = coin2.pos
            var coin2Height = coin2.pos.y
            player.collides("coin2", () => {
                coin2.destroy();
            });
        
        coin2.action(()=>{
            coin2.pos.y = wave(coin2Height, coin2Height-20, time()*5);
        })
            
        // wait a random amount of time to spawn next coin
        wait(rand(5,7), (spawnMulCoins));
    }

    //start spawning coins
    spawnMulCoins();


        //For spawning boosters
        function spawnBoost(){
                //add coins 
            const Boost = add([
                sprite("boost"),
                pos(width() + rand(2000, 2500), height() - 150),
                area(),
                origin("botleft"),
                layer("top"),
                scale(0.4),
                move(LEFT, SPEED),
                "boost", // add a tag here
            ]);
                player.collides("boost", () => {
                    Boost.destroy();
                });
            // wait a random amount of time to spawn next boost
            wait(rand(12, 15), (spawnBoost));
            
        }

        //start spawning trees
       // spawnBoost();

    
        //add scores
        /*
        add([
            sprite("ScoreLabel"),
            pos(50, 24),
            scale(0.12),
            layer("top"),
        ])
        
        let scoreLabel = add([
            text(score, {
                font:"apl386",
                size: 80,
            }),
            pos(170, 24),
            scale(0.4),
            layer("top"),
        ])
        */
        add([
            sprite("ScoreLabel"),
            //pos(50, 24),
           // pos(83, 10),
            pos(40  , 5),
            scale(0.18),
            layer("top"),
        ])
    
        add([
            text(" | ",{
                font: "apl386",
                //size: 80,
                size: 70,
            }),
            //pos(50, 24),
           // pos(83, 10),
            origin("topleft"),
            pos(60, 5),
            scale(0.6),
            layer("top"),
        ])
        
        const scoreLabel = add([
            text(score,{
                font: "apl386",
                //size: 80,
                size: 70,
            }),
            //pos(170, 24),
            //pos(203, 10),
            //pos(220, 10),
            pos(120, 10),
            origin("topleft"),
            scale(0.4),
            layer("top"),
        ])
        
        //add stamina label
        /*
        add([

            sprite("StaminaLabel"),
            pos(300, 24),
            scale(0.12),
            layer("top"),
            
        ])
        const staminaLabel = add([
            text(stamina, {
                font:"apl386",
                size: 80,
            }),
            pos(450, 24),
            scale(0.4),
            layer("top"),
        ])
        */
       
    add([

        sprite("StaminaLabel"),
        //pos(300, 24),
        //pos(300, 10),
        pos(360, 5),
        scale(0.14),
        area(),
        layer("top"),
        
    ])

    add([
        text(" | ",{
            font: "apl386",
            //size: 80,
            size: 70,
        }),
        //pos(50, 24),
       // pos(83, 10),
        origin("topleft"),
        pos(380, 5),
        scale(0.6),
        layer("top"),
    ])

    let staminaLabel = add([
        text(stamina, {
            font:"apl386",
             //size: 80,
             size: 70,
        }),
        //pos(450, 24),
        //pos(450, 10),

        //pos(470, 10),
        pos(440, 10),
        scale(0.4),
        layer("top"),
    ])

        
        //add currency label    
        /*
        add([
            sprite("CoinsLabel"),
            pos(570, 24),
            scale(0.12),
            layer("top"),
        ])
        const currencyLabel = add([
            text(currency, {
                font:"apl386",
                size: 80,
            }),
            pos(700, 24),
            scale(0.4),
            layer("top"),
        ])
        */
        add([
            sprite("CoinsLabel"),
            //pos(570, 24),
            //pos(570, 10),
            pos(640, 5),
            scale(0.14),
            layer("top"),
        ])
    
        add([
            text(" | ",{
                font: "apl386",
                //size: 80,
                size: 70,
            }),
            //pos(50, 24),
           // pos(83, 10),
            origin("topleft"),
            pos(650, 5),
            scale(0.6),
            layer("top"),
        ])
        const currencyLabel = add([
            text(currency, {
                font:"apl386",
                //size: 80,
                 //size: 80,
                 size: 70,
            }),
            //pos(700, 24),
            origin("topleft"),
            pos(700, 10),
            scale(0.4),
            layer("top"),
        ])

        let BoostAnim = add([
            sprite("BoostAnim", {
                anims: "Boost",
            }),
            pos(50, height()),
            origin("botleft"),
            layer("top"),
            scale(0.8), //for 100x100
            //scale(0.5),//for 1080
            area(),
            "BoostAnim"
        ]);

        function follow(loc){
            BoostAnim.pos = loc;
        }

        BoostAnim.action(() =>{
            follow(player.pos);
        })

        //after colliding with boosters
        player.collides("boost", () => {
            BagCollide = false; 
            //SPEED = SPEED + 100;
            JUMP_FORCE += 200;
            BoostAnim.play("Boost");
            if(!Mute){
                play("BoostAud", {
                    volume: 1
                });
            }
            setTimeout(Boostfunc, 7000);
        });

        function Boostfunc(){
            //SPEED = SPEED - 100;
            BagCollide = true;
            JUMP_FORCE -= 200;
            BoostAnim.play("Stop");
            //debug.log("stop")
        };

       
        
         // lose if player collides with any game obj with tag "bag"
        if(BagCollide){
                player.collides("bag", () => {
                    //staminaLabel.color = hsl2rgb(wave(0, 0.2*Damage , time(1)), 0.5, 0.5);
                    Damage+=1;
                    shake(10);
                    stamina-=10;
                    if(!IOS)
                        navigator.vibrate(200)
                    if(!Mute){
                        play("BagAud", {
                            volume: 1
                        });
                    }

                   
                    /*
                    if(Damage==3){
                        shake();
                        destroy(player);
                        go("lose", Math.floor(score), Gender);// go to "lose" scene here
                        burp();
                        shake(10);
                        Damage = 0;
                    };
                    
                    if(Damage>0 && stamina<=10 && currency){
                        shake();
                        //destroy(player);
                        //go("lose", Math.floor(score), Gender);// go to "lose" scene here
                        //burp();
                        go("station",Math.floor(stamina), Math.floor(score), currency, SPEED, Gender);// go to "station
                        shake(10);
                        Damage = 0;
                    };
                    */
                });
        };

        player.collides("coin", () => {
            currency = currency + 5;
            //AnimCoin(CoinPos);
            CoinPos = vec2(710, 100)
            AnimCoin(CoinPos);
            if(!Mute){
                //play("coinsound", {
                play("MCReg", {
                    volume: 0.5
                });
            }
        });

        player.collides("coin2", () => {
            currency = currency + 5;
            //AnimCoin(CoinPos);
            Coin2Pos = vec2(710, 100)
            AnimCoin(Coin2Pos);
            if(!Mute){
               //play("coinsound", {
                play("MCReg", {
                    volume: 0.5
                });
            }
        });

        let MuteButton = add([
            sprite("MuteBut"),
            pos(width() - 100, height()/2-200),
            origin("topleft"),
            scale(0.12), //for 100x100
            area(),
            layer("top"),
            "MuteButton"
        ])
    
        let MuteButtonCont = add([
            sprite("BoundBox"),
            pos(width()/2-100, height()/2-200),
            origin("topleft"),
            scale(2), //for 100x100
            area(),
            layer("top"),
            "MuteButtonCont"
        ])

        // increment score every frame
        action(() => {

            /*
            if(Math.floor(Train.pos.x)==200){
                debug.log("ss");
                spawnTrain();
            };
            */
            //debug.log(SPEED);

            onClick("MuteButtonCont", ()  => {
                if(Mute){
                    Mute = false;
                    volume(1)
                }else{
                    Mute = true
                    volume(0)
                }
                
            })

            if(Mute){
                BGAud.pause();
            }else{
                BGAud.play();
            }
        

            //debug.log(Mute)

            score+=0.2;
            scoreLabel.text = Math.floor(score) ;
            //scoreLabel.color = rgb(255, 255, 255);

            currencyLabel.text = currency;
            //currencyLabel.color = rgb(255, 215, 0);
            //stamina calc
            stamina = stamina - (0.01);
            staminaLabel.text = Math.floor(stamina); 
            //staminaLabel.color = rgb( 255*Damage, 255 - 155*Damage, 0);
            //staminaLabel.color = rgb( 255-Math.floor(1.5*stamina), 4*Math.floor(stamina), 0);
            
            if(stamina < 1){
                if(currency>=5){
                    go("station", stamina=0, Math.floor(score), currency, SPEED, Gender, Mute, BackCity);// go to "station
                    //DoorAnim("station", stamina=0, Math.floor(score), currency, SPEED, Gender);// go to "station
                    Damage = 0;
                    //destroyAll("BackCity")
                }else{
                    go("lose", Math.floor(score), Gender, Mute);// go to "lose
                    BGAud.pause();
                    //DoorAnim("lose", Math.floor(score), Gender);// go to "lose
                    Damage = 0;
                    destroyAll("BackCity")
                    if(!Mute){
                        play("TryAgain", {
                            volume: 1
                        });
                    }
                };
                
            };
        });        

});

scene("station", (stamina, score, currency, SPEED, Gender, Mute, BackCity) => {
    gravity(2000);
     //storing currency in currencyActual to match the plus signs
   currencyActual = currency;
   var showRunBut = true;

    var StationBG = choose(["BG1", "BG2", "BG3", "BG4", "BG5"]);
    var FirstStall = choose(["vadapav", "nimbu", "chai", "bhel", "dabeli"]);
    var SecondStall = choose(["dosa", "panipuri", "pavbhaji", "poha", "sandwich"]);

    if(StationBG=="BG1"){
        FirstStall = choose(["sandwich", "nimbu", "dosa"]);
        SecondStall = choose([ "pavbhaji", "chai", "sandwich"]);

    }else if(StationBG=="BG2"){
        FirstStall = choose(["vadapav", "nimbu", "poha", "dabeli"]);
        SecondStall = choose([ "panipuri", "chai", "sandwich"]);

    }else if(StationBG=="BG3"){
        FirstStall = choose(["vadapav", "nimbu",  "dabeli"]);
        SecondStall = choose([ "panipuri", "chai", "sandwich"]);

    }
    else if(StationBG=="BG4"){
        FirstStall = choose(["vadapav", "nimbu", "poha", "dabeli"]);
        SecondStall = choose([ "panipuri", "chai", "sandwich"]);

    }
    else if(StationBG=="BG5"){
        FirstStall = choose(["vadapav", "nimbu", "poha", "dabeli"]);
        SecondStall = choose([ "panipuri", "chai", "sandwich"]);

    }
    
    var CoinLimit = false
    layers([
        "bot",
        "bot-mid",
        "mid",
        "top"
    ], "top");
    
    action(() =>{
        //staminaLabel.color = rgb( 255-Math.floor(1.5*stamina), 4*Math.floor(stamina), 0);
    })
       
    /*
    const VadaPav = add([
        sprite(FirstStall),
        pos(width()-450, height()-80),
        origin("center"),
        layer("mid"),
        area(),
        scale(0.3),
        "VadaPav"
    ]);

    VadaPav.action(() => {
        //VadaPav.scale = wave(0.23, 0.25, time()*4.1);
        VadaPav.pos.y = wave(height()-80, height()-90, time()*4.5);
    });

*/

    const NimbuPani = add([
        sprite(FirstStall),
        pos(width()-600, height()-80),
        origin("center"),
        layer("mid"),
        area(),
        scale(0.3),
        "NimbuPani"
    ]);



    NimbuPani.action(() => {
        NimbuPani.pos.y = wave(height()-80, height()-90, time()*4.3);
    });

    const Chai = add([
        sprite(SecondStall),
        pos(width()-300, height()-80),
        origin("center"),
        layer("mid"),
        area(),
        scale(0.3),
        "Chai"
    ]);

    Chai.action(() => {
        //Chai.scale = wave(0.25, 0.27, time()*4.9);
        Chai.pos.y = wave(height()-80, height()-90, time()*4.1);
    });

    //for background/
    add([
        //sprite("StationBack"),
        sprite(StationBG),
        //sprite("BG1"),
        pos(0, 0),
        origin("topleft"),
        area(),
        //scale(0.42, 0.33),
        layer("bot"),
    ]);

    add([
        //sprite(BackCity),
        //sprite("BGFront"),
        sprite("BonusBG"),
        pos(0, 0),
        origin("topleft"),
        area(),
        scale(0.8, 0.75),
        layer("bot-mid"),
    ]);


     //for character 
     /*
     const PlayerBack = add([
        sprite("CharBack"),
        pos(width()-500, height()),
        origin("botleft"),
        area(),
        scale(0.8),
        layer("top")
    ]);
    */
     //for platform
     add([
        rect(width(), FLOOR_HEIGHT),
        pos(0, height()),
        outline(4),
        origin("botleft"),
        area(),
        solid(),
    ]);

    
       //add scores
       /*
    add([
        sprite("ScoreLabel"),
        //pos(50, 24),
       // pos(83, 10),
        pos(30, 10),
        scale(0.12),
        layer("top"),
    ])
    */
    add([
        sprite("ScoreLabel"),
        //pos(50, 24),
       // pos(83, 10),
        pos(40  , 5),
        scale(0.18),
        layer("top"),
    ])

    add([
        text(" | ",{
            font: "apl386",
            //size: 80,
            size: 70,
        }),
        //pos(50, 24),
       // pos(83, 10),
        origin("topleft"),
        pos(60, 5),
        scale(0.6),
        layer("top"),
    ])
    
    const scoreLabel = add([
        text(score,{
            font: "apl386",
            //size: 80,
            size: 70,
        }),
        //pos(170, 24),
        //pos(203, 10),
        //pos(220, 10),
        pos(120, 10),
        origin("topleft"),
        scale(0.4),
        layer("top"),
    ])
    
    //add stamina label
    /*
    add([

        sprite("StaminaLabel"),
        //pos(300, 24),
        //pos(300, 10),
        pos(320, 10),
        scale(0.12),
        area(),
        layer("top"),
        
    ])
    */

    add([

        sprite("StaminaLabel"),
        //pos(300, 24),
        //pos(300, 10),
        pos(360, 5),
        scale(0.14),
        area(),
        layer("top"),
        
    ])

    add([
        text(" | ",{
            font: "apl386",
            //size: 80,
            size: 70,
        }),
        //pos(50, 24),
       // pos(83, 10),
        origin("topleft"),
        pos(380, 5),
        scale(0.6),
        layer("top"),
    ])

    let staminaLabel = add([
        text(stamina, {
            font:"apl386",
             //size: 80,
             size: 70,
        }),
        //pos(450, 24),
        //pos(450, 10),

        //pos(470, 10),
        pos(440, 10),
        scale(0.4),
        layer("top"),
    ])

    
    //add currency label    
    /*
    add([
        sprite("CoinsLabel"),
        //pos(570, 24),
        //pos(570, 10),
        pos(620, 10),
        scale(0.12),
        layer("top"),
    ])
    */

    add([
        sprite("CoinsLabel"),
        //pos(570, 24),
        //pos(570, 10),
        pos(670, 5),
        scale(0.14),
        layer("top"),
    ])

    add([
        text(" | ",{
            font: "apl386",
            //size: 80,
            size: 70,
        }),
        //pos(50, 24),
       // pos(83, 10),
        origin("topleft"),
        pos(680, 5),
        scale(0.6),
        layer("top"),
    ])
    const currencyLabel = add([
        text(currency, {
            font:"apl386",
            //size: 80,
             //size: 80,
             size: 70,
        }),
        //pos(700, 24),
        origin("topleft"),
        pos(730, 10),
        scale(0.4),
        layer("top"),
    ])
    //currencyLabel.color = rgb(255, 215, 0);

     //add instruction text label    
     add([
        sprite("TapRech"),
        //pos(180, 50),
        pos(width()/2, 73),
       // scale(0.4),
       origin("center"),
        scale(0.15, 0.13),
        layer("top"),
    ])

    
    var RunButStatus = "DisRunBut";

    if(stamina<5){
        dispButton = false
    }
    
    if(stamina>=5){
        dispButton = true
        RunButStatus = "RunBut";
    }

    let RunButton = add([
        sprite(RunButStatus),
        //pos(620, 140),
        //pos(630, 340),
        pos(680, 340),
        scale(0.13),
        area(),
        layer("top"),
        "RunBut"
    ])

    function RunBut(){
        //add run button 
            if(showRunBut){
                
                    RunButton = add([
                        sprite(RunButStatus),
                         //pos(620, 140),
                         //pos(630, 340),
                        pos(680, 340),
                        scale(0.13),
                        area(),
                        //layer("top"),
                        cleanup(2),
                        "RunBut"
                    ])
                    
                if(dispButton){    
                    let RunButtonCont = add([
                        sprite("BoundBox"),
                        //pos(width()-300, height()-330),
                        //pos(width()-310, height()-130),
                        pos(width()-260, height()-130),
                        origin("center"),
                        layer("top"),
                        scale(3), //for 100x100
                        area(),
                        "RunButtonCont"
                    ])
                };


                onClick("RunButtonCont", ()=>{
                    //go("game", stamina+1, score, currency, SPEED+30, Gender);// go to "game
                    
                    DoorAnim();
                    wait(2, ()=>{
                        go("game", stamina+1, score, currency, SPEED+30, Gender);// go to "game
                    })
                    if(!Mute){
                        play("MCReg", {
                            volume: 1
                        });
                    }
                    
                  // debug.log("see")
                })
                showRunBut = false
            };
    };
      
        function handleout(){
            return{
                id: "handleout",
                require: ["pos"],
                update(){
                    
                    const spos = this.screenPos()
                    if(
                        spos.x<0 ||
                        spos.x>width() ||
                        spos.y<0 ||
                        spos.y>height()
                    ){
                        //debug.log(stamina)
                        staminaLabel.text +=5;
                        currencyLabel.text -=5;
                        
                        this.trigger("out");
                    
                    }
                }
            }
        }

        function heal(loc){
            const center = vec2(loc)
            const staminapos = vec2(450, 24)
            
                let Plus = add([
                    pos(center),
                    sprite("Plus"),
                    origin("center"),
                    handleout(),
                    area(),
                    scale(0.5),
                    "Plus",
                    {dir: staminapos.sub(center).unit(), },
                ])
                
        };
/*   
        let VadaPavButCont = add([
            sprite("BoundBox"),
            pos(width()-550, height()-200),
            origin("center"),
            scale(1.5, 4), //for 100x100
            area(),
            "VadaPavButCont"
        ])
*/
        let NimbuPaniButCont = add([
            sprite("BoundBox"),
            pos(width()-650, height()-200),
            origin("center"),
            scale(1.5, 4), //for 100x100
            area(),
            "NimbuPaniButCont"
        ])

        let ChaiButCont = add([
            sprite("BoundBox"),
            pos(width()-520, height()-200),
            origin("center"),
            scale(1.5, 4), //for 100x100
            area(),
            "ChaiButCont"
        ])
        
/*
        onClick("VadaPavButCont", ()=>{
            if(currencyActual>=5){
                currencyActual-=5;
                heal(VadaPav.pos);
            }     
        })
*/
        onClick("NimbuPaniButCont", ()=>{
            if(currencyActual>=5){
                currencyActual-=5;
                heal(NimbuPani.pos);
            }    
        })

        onClick("ChaiButCont", ()=>{
            if(currencyActual>=5){
                currencyActual-=5;
                heal(Chai.pos);
            }    
        })

        
        onUpdate("Plus", (m) => {

            if(currency>=5){
                m.move(m.dir.scale(SPEED/2))
            }else{
                destroy(m);
            }                
        })

 

        on("out", "Plus", (m) => {
            destroy(m);
            stamina +=5;
            currency -= 5;
            if(currency<=0){
                //go("game", stamina+1, score, currency=0, SPEED+30, Gender);// go to "game
                DoorAnim();
                wait(2, ()=>{
                    go("game", stamina+1, score, currency=0, SPEED+30, Gender, Mute);// go to "game
                })
                if(!Mute){
                    play("MCReg", {
                        volume: 1
                    });
                }
            };
            if(stamina>=5){
                RunButStatus = "RunBut";
            }
            dispButton = true;
            RunBut()
            /*
            go("game", stamina, score, currency, SPEED+30, Gender);// go to "game
            */ 
        })
})

//For Highscores
var val00 = [0,0,0];


//Scene after lost colliding with the bag
scene("lose",  (score, Gender) => {
    //debug.log(Gender)

    layers([
        "bot",
        "mid",
        "top"
    ], "top");

    add([
        sprite("TryAgain"),
        pos(0, 0),
        origin("topleft"),
        area(),
        layer("bot"),
        "TryAgain"
    ]);

    let TryButton = add([
        sprite("TryButton"),
        pos(width()/4 - 155, height()/2+40),
        origin("topleft"),
        area(),
        scale(0.8),
        layer("top"),
        "TryButton"
    ]);

    let HomeButton = add([
        sprite("HomeBut"),
        pos(width()/2+200, height()/2-200),
        origin("topleft"),
        scale(0.2), //for 100x100
        area(),
        "HomeButton"
    ])

    let HomeButtonCont = add([
        sprite("BoundBox"),
        pos(width()/2-100, height()/2-200),
        origin("topleft"),
        scale(2), //for 100x100
        area(),
        "HomeButtonCont"
    ])

    let TryButtonCont = add([
        sprite("BoundBox"),
        pos(width()/4-200, height()/2-100),
        origin("topleft"),
        scale(3), //for 100x100
        area(),
        "TryButtonCont"
    ])

    add([
       
        text(score, {
            font:"apl386",
            size: 80,
        }),
        pos(width()/4 - 40, height()/2),
        scale(0.65),
        origin("center"),
    ]);

    //submit score and display leaderboard
    submit(score);

    // go back to game with space is pressed
    //keyPress("ButtonCont", "space", () => DoorAnim("game", stamina, score=0, currency, SPEED, Gender));
    onClick("TryButtonCont", () => go("game", stamina, score=0, currency, SPEED, Gender, Mute));
    onClick("HomeButtonCont", () => go("menu"));
    //onClick("ButtonCont", () => DoorAnim("game", stamina, score=0, currency, SPEED, Gender));
   
});


scene("menu", () => {
    layers([
        "bot",
        "mid",
        "top"
    ], "top");

    const Male = add([
        sprite("Male"),
        pos(0, 0),
        origin("topleft"),
        layer("bot"),
        scale(0.4), //for 100x100
        area(),
        "Male"
    ])

    const Female = add([
        sprite("Female"),
        pos(width()/2, 0),
        origin("topleft"),
        scale(0.4), //for 100x100
        area(),
        layer("bot"),
        "Female"
    ])

    let MaleButtonCont = add([
        sprite("BoundBox"),
        //pos(-100, 0),
        pos(0, 0),
        origin("topleft"),
        scale(2,5), //for 100x100
        area(),
        layer("top"),
        "MaleButtonCont"
    ])

    let FemaleButtonCont = add([
        sprite("BoundBox"),
        //pos(width()/4, 0),
        pos(width()/2-150, 0),
        origin("topleft"),
        scale(2,5), //for 100x100
        area(),
        layer("top"),
        "FemaleButtonCont"
    ])

    onClick("MaleButtonCont", ()=>{
        //go("game", stamina = 51, score = 0, currency = 0, SPEED = 600, Gender = 0);
        //fullscreen(true);   
        //DoorAnim();
        //wait(3, ()=>{
           go("game", stamina = 51, score = 0, currency = 0, SPEED = 600, Gender = 0, Mute);
        //debug.log("male")
        //})
    })

   onClick("FemaleButtonCont", ()=>{
        //DoorAnim();
        //wait(3, ()=>{
            go("game", stamina = 51, score = 0, currency = 0, SPEED = 600, Gender = 1, Mute);
         //   debug.log("female")
        //})
        
        //go("game", stamina = 51, score = 0, currency = 0, SPEED = 600, Gender = 1);
        //fullscreen(true);
    })
})

scene("main", () => {
    
    //let BagCollide = true;
    //fullscreen(BagCollide);

    add([
        sprite("MainPage"),
        pos(0, 0),
        origin("topleft"),
        //scale(1.5), //for 100x100
        scale(0.4), //for 1920x1080
        area(),
        "MainPage"
    ])

/*
    const Play = add([
        sprite("Play"),
        pos(width()/2-100, height()/2+80),
        origin("topleft"),
        scale(0.7), //for 100x100
        area(),
        "Play"
    ])
*/

    let ButtonCont = add([
        sprite("BoundBox"),
        pos(width()/2-250, height()/2-150),
        origin("topleft"),
        scale(5), //for 100x100
        area(),
        "ButtonCont"
    ])


    onClick("ButtonCont", ()=>{
        //DoorAnim("menu", stamina = 51, score = 0, currency = 0, SPEED = 600, Gender = 1);
        go("menu");
        BGAud.play();
        //fullscreen(true);
    })

})

function DoorAnim(){


    //debug.log(Status);
    let Screencenter = vec2(width()/2, 0);
    let Leftwallpos = vec2(0, 80);
    let Rightwallpos = vec2(width(), -80);

    function Doorhandleout(){
        return{
            id: "Doorhandleout",
            require: ["pos"],
            update(){
                
                const spos = this.screenPos()
                if(
                    //spos.x<0 ||
                    spos.x>width()/2 ||
                    //spos.y<0 ||
                    spos.y>height()/2
                ){
                    //debug.log(stamina)
                        this.trigger("Doorout");
                }
            }
        }
    }

    function LeftDoorAnim(loc){
        const center = vec2(loc)
        const staminapos = Screencenter
            add([
                sprite("LeftDoor"),
                pos(center),
                origin("topright"),
                scale(0.38, 0.38), //for 100x100
                area(),
                Doorhandleout(),
                "doorLeft",
                {dir: staminapos.sub(center).unit(), },
            ])
        
    };
    
    function RightDoorAnim(loc){
        const center = vec2(loc)
        const staminapos = Screencenter
        add([
            sprite("RightDoor"),
            pos(center),
            origin("topleft"),
            scale(0.4, 0.4), //for 100x100
            area(),
            Doorhandleout(),
            "doorRight",
            {dir: staminapos.sub(center).unit(), },
        ])
        
    };

    LeftDoorAnim(Leftwallpos);
    RightDoorAnim(Rightwallpos);
 
    onUpdate("doorLeft", (m) => {
        m.move(m.dir.scale(300))
    })

    onUpdate("doorRight",  (m) => {
        m.move(m.dir.scale(300))
    })

    on("Doorout", "doorLeft", (m) => {
        /*
        destroyAll(m);
        wait(0.5, ()=>{
            go(Status, stamina , score, currency , SPEED , Gender);
        })
        */
    
        onUpdate("doorLeft", (m) => {
            m.move(m.dir.scale(10))
        })
    
        onUpdate("doorRight",  (m) => {
            m.move(m.dir.scale(10))
        })
        
    })

    //for platform
    add([
        rect(width(), FLOOR_HEIGHT),
        pos(0, height()),
        outline(4),
        origin("botleft"),
        area(),
        layer("top"),
        solid(),
        color(127, 200, 255),
    ]);

}


//go("station");
//go("game", stamina, score, currency, SPEED=550,);
//go("main");
//go("station", stamina=0, score, currency=50, SPEED=550, Gender = 0);

//go("station", stamina=5, score, currency=50, SPEED=550, Gender = 0);
//go("lose", score=5000);
//go("menu");

//go("lose", score=10);

go("main");



async function submit(score){
    await submitfetchscore(score);
    console.log("output from submit function is: ",val00);
    val00 = val00.split('  ');
    console.log("fetched value of val is: ",val00);

    //display leader board
    add([
        text(val00[0], {
            font:"apl386",
            size: 80,
        }),
        pos(width() - 200, height()/2+15),
        scale(0.35),
        layer("top"),
        origin("center"),
        ]);

    add([
        text(val00[1], {
            font:"apl386",
            size: 80,
        }),
        pos(width() - 200, height()/2+45),
        scale(0.35),
        layer("top"),
        origin("center"),
        ]);

    add([
        text(val00[2], {
            font:"apl386",
            size: 80,
        }),
        pos(width() - 200, height()/2+75),
        scale(0.35),
        layer("top"),
        origin("center"),
        ]);       
}

function submitfetchscore(score){
    console.log("User score is: ", score);
    let myPromise = new Promise(function(resolve){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            val00 = this.responseText;
            console.log(val00);
            resolve();
        } 
    };
    var formData = new FormData();
    formData.append('score', score);
    xhttp.open("POST", "server.php",true); 
    xhttp.send(formData);
    })
    return myPromise;        
}
