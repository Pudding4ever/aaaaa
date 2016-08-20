var config;
(function (config) {
    var scene = (function () {
        function scene() {
        }
        scene.START = 0;
        scene.PLAY = 1;
        scene.HELP = 2;
        scene.EXIT = 3;
        scene.DIE = 4;
        return scene;
    }());
    config.scene = scene;
})(config || (config = {}));
//# sourceMappingURL=scene.js.map