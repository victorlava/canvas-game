class Program {
    constructor() {

        var ground = new Block(),
            block = new Block,
            player = new Player(),
            enemy = new Enemy();

        var controls = new Controls(player);

        player.dimensions.setSize(20, 100);
        engine.setTo(player, 100, 380)

        ground.dimensions.setSize(600, 20);
        engine.setTo(ground, 0, 480);

        block.dimensions.setSize(40, 40);
        engine.setTo(block, 300, 420);


        registry.drop('id', 3);
                // player.dimensions.moveTo(100, 100);
        console.log(registry);


        // var player = new Block();
        // console.log(player);
        // var asd = new Object('sdf');
    }
}
