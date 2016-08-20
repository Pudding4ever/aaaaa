///<reference path="_reference.ts"/>
var core;
(function (core) {
    core.canvas = document.getElementById("canvas");
    // score and lives
    core.score = 0;
    core.lives = 3;
    //scene tracking
    var currentScene;
    //Main title screen text labels/buttons
    var gameTitle;
    var gameCredit;
    var StartGame;
    var Instructions;
    var ExitGame;
    // asset manifest for images and sounds
    var assetData = [
        { id: "starfield", src: "../../Assets/images/starfield.gif" }
    ];
    //Game Scenes
    var start;
    var play;
    var exit;
    var help;
    var die;
    //?
    function preload() {
        core.assets = new createjs.LoadQueue(); // instantiates the loader
        core.assets.installPlugin(createjs.Sound);
        core.assets.loadManifest(assetData);
        core.assets.on("complete", init, this);
    }
    function init() {
        core.stage = new createjs.Stage(core.canvas);
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; //THE HUMAN EYE CAN'T PERCIEVE ALL THESE FRAMES!!111!1
        createjs.Ticker.on("tick", gameLoop);
        core.scene = config.scene.START;
        changeScene();
    }
    function gameLoop() {
        currentScene.Update();
        core.stage.update();
    }
    function changeScene() {
        //Launch Various Scenes
        switch (core.scene) {
            // Show the MENU Scene
            case config.scene.START:
                core.stage.removeAllChildren();
                start = new scenes.start();
                currentScene = start;
                break;
            // Show the PLAY Scene
            case config.scene.PLAY:
                core.stage.removeAllChildren();
                play = new scenes.play();
                currentScene = play;
                break;
            // Show the GAME OVER Scene
            case config.scene.DIE:
                core.stage.removeAllChildren();
                die = new scenes.die();
                currentScene = die;
                break;
        }
    }
    core.changeScene = changeScene;
    window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.js.map