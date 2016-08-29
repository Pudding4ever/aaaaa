var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var play3 = (function (_super) {
        __extends(play3, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function play3() {
            _super.call(this);
            this.destroyed = 0;
        }
        /**
         *
         */
        play3.prototype.Start = function () {
            this.destroyed = 0;
            this.asteroid_array = new Array();
            this.bullet_array = core.bullet_array;
            this._collision = new managers.Collision();
            this._Starfield = new objects.Starfield("starfield");
            this._PStarfield = new objects.PStarfield("pstarfield");
            this._player = new objects.Player("player");
            this.Player = this._player;
            this.addChild(this._Starfield);
            this.addChild(this._PStarfield);
            this.addChild(this._player);
            // Add Menu Labels
            this._liveslabel = new GUI.Label("LIVES: " + core.lives, "16px", "Impact", "#FFFFFF", 50, 520, true);
            this.addChild(this._liveslabel);
            this._scorelabel = new GUI.Label("BOSS LIFE: " + this.destroyed, "16px", "Impact", "#FFFFFF", 200, 520, true);
            this.addChild(this._scorelabel);
            // add this scene to the global scene container
            core.stage.addChild(this);
            //place player ship appropriately
            this._player.placeship(200, 300);
            //populate field with asteroids            
        };
        play3.prototype.Update = function () {
            // scene updates happen here...
            this._Starfield.update();
            this._PStarfield.update();
            this._player.update();
            if (this.levelboss != null) {
                this.levelboss.update;
            }
            this.checkbullets();
            this._collision.checkPlayerEnemy(this.asteroid_array, this._player);
            this._liveslabel.text = ("LIVES: " + core.lives);
            this._scorelabel.text = ("ENEMIES DESTROYED: " + this.destroyed);
        };
        play3.prototype.checkbullets = function () {
            if (core.bullet_array.length > 0) {
                for (var i = 0; i < core.bullet_array.length; i++) {
                    if (core.bullet_array[i] != null && core.bullet_array[i].position != null) {
                        this._collision.checkPlayerBullet(this._player, core.bullet_array[i]);
                        this._collision.checkBulletBoss(this.levelboss, core.bullet_array[i]);
                    }
                }
            }
        };
        // EVENT HANDLERS ++++++++++++++++
        play3.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.scene.PLAY;
            core.changeScene();
        };
        play3.prototype._startButtonShoot = function () {
            // Switch the scene\
            core.deactivateallbullets();
            core.drawbullets();
            core.scene = config.scene.PLAY;
            core.changeScene();
        };
        play3.prototype.CreateBoss = function () {
            console.log("create boss called");
            var asteroid;
            asteroid = new objects.boss("boss");
            this.levelboss = asteroid;
            this.addChild(asteroid);
            console.log("made new enemy");
        };
        return play3;
    }(objects.Scene));
    scenes.play3 = play3;
})(scenes || (scenes = {}));
//# sourceMappingURL=play3.js.map