///<reference path="_reference.ts"/>
namespace core {

    // declare a reference to the Preloader
    export let assets: createjs.LoadQueue;

    // declare textureAtlas
    export let textureAtlas: createjs.SpriteSheet;

    export let canvas: HTMLElement = document.getElementById("canvas");
    export let stage: createjs.Stage;

    // score and lives
    export let score: number = 0;
    export let lives: number = 3;

    //scene tracking
    let currentScene: objects.Scene;
    export let scene: number;

    //Main title screen text labels/buttons
    let gameTitle: createjs.Text;
    let gameCredit: createjs.Text;
    let StartGame: objects.Button;
    let Instructions: objects.Button;
    let ExitGame: objects.Button;

        // asset manifest for images and sounds
    let assetData:objects.Asset[] = [
        { id: "starfield", src: "../../Assets/images/starfield.gif" }
    ];

    //Game Scenes
    let start: scenes.start;
    let play: scenes.play;
    let exit: scenes.exit;
    let help: scenes.help;
    let die: scenes.die;

    //?

    function preload(): void {
        assets = new createjs.LoadQueue(); // instantiates the loader
        assets.installPlugin(createjs.Sound);
        assets.loadManifest(assetData);
        assets.on("complete", init, this);

    }

    function init(): void {
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; //THE HUMAN EYE CAN'T PERCIEVE ALL THESE FRAMES!!111!1
        createjs.Ticker.on("tick", gameLoop);
        scene = config.scene.START;
        changeScene();
    }

    function gameLoop(): void {
        currentScene.Update();
        stage.update();
    }




    export function changeScene(): void {

        //Launch Various Scenes
        switch (scene) {
            // Show the MENU Scene
            case config.scene.START:
                stage.removeAllChildren();
                start = new scenes.start();
                currentScene = start;
                break;
            // Show the PLAY Scene
            case config.scene.PLAY:
                stage.removeAllChildren();
                play = new scenes.play();
                currentScene = play;
                break;
            // Show the GAME OVER Scene
            case config.scene.DIE:
                stage.removeAllChildren();
                die = new scenes.die();
                currentScene = die;
                break;
        }
    }


    window.addEventListener("load", preload);

}