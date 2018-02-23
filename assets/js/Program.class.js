class Program {
    constructor() {

        var grass = new Block(),
            player = new Player(),
            enemy = new Enemy();

        player.dimensions.setSize(20, 100);
        player.moveTo(30, 100);
        player.gravitate(); // turns on gravity

        var controls = new Controls(player);

        // grass.dimensions.setSize(20, 20);
        // grass.setTo(20, 20);

                // player.dimensions.moveTo(100, 100);
        console.log(registry);
        // var player = new Block();
        // console.log(player);
        // var asd = new Object('sdf');
    }
}
