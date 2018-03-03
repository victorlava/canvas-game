class Program {
    constructor() {

        var grass = new Block(),
            player = new Player(),
            enemy = new Enemy();

        var controls = new Controls(player);

        player.dimensions.setSize(20, 100);
        engine.setTo(player, 100, 400)

        grass.dimensions.setSize(20, 20);
        engine.setTo(grass, 200, 400);

                // player.dimensions.moveTo(100, 100);
        console.log(registry);
        // var player = new Block();
        // console.log(player);
        // var asd = new Object('sdf');
    }
}
