module scenes {
    export class die extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _Starfield: objects.Starfield;
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        /**
         * 
         */
        public Start():void {
            // Add Ocean Background
            this._Starfield = new objects.Starfield("starfield");
            this.addChild(this._Starfield);

            // Add Menu Label
            this._menuLabel = new objects.Label(
                "MAIL PILOT", "60px","Dock51", "#FFFF00",
                320, 240, true
                );
            this.addChild(this._menuLabel);

            // add the start button
            this._startButton = new objects.Button(
                "startButton", 320, 420, true
            )
            
            this.addChild(this._startButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
            this._Starfield.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.scene.PLAY;
            core.changeScene();
        }
    }
}