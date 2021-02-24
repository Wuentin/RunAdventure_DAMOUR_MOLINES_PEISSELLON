// CLasse NIVEAU 3 : GRAVITE INVERSEE, JETPACK, TIRS
class niveau3 extends Phaser.Scene {
  constructor() {
    super({ key: "niveau3" });
  }

  preload() {
    this.load.audio("SonCoupsDeFeu", "sons/tir.wav");

    this.load.audio("MusicNiveau3", "sons/MusicNiveau3.mp3");
    this.load.spritesheet("dude", "perso/spritesheet.png", {
      frameWidth: 300,
      frameHeight: 610
    });

    this.load.spritesheet("dude_inverse", "perso/spritesheet_inverse.png", {
      frameWidth: 300,
      frameHeight: 610
    });
    this.load.image("2Jetpack_000", "perso/Jetpack_000.png");
    this.load.image("2Jetpack_001", "perso/Jetpack_001.png");
    this.load.image("2Jetpack_002", "perso/Jetpack_002.png");
    this.load.image("2Jetpack_003", "perso/Jetpack_003.png");
    this.load.image("2Jetpack_004", "perso/Jetpack_004.png");
    this.load.image("2Jetpack_005", "perso/Jetpack_005.png");
    this.load.image("2Jetpack_006", "perso/Jetpack_006.png");
    this.load.image("2Jetpack_007", "perso/Jetpack_007.png");

    this.load.image("Run_inverse_000", "perso/Run_inverse_000.png");
    this.load.image("Run_inverse_001", "perso/Run_inverse_001.png");
    this.load.image("Run_inverse_002", "perso/Run_inverse_002.png");
    this.load.image("Run_inverse_003", "perso/Run_inverse_003.png");
    this.load.image("Run_inverse_004", "perso/Run_inverse_004.png");
    this.load.image("Run_inverse_005", "perso/Run_inverse_005.png");
    this.load.image("Run_inverse_006", "perso/Run_inverse_006.png");
    this.load.image("Run_inverse_007", "perso/Run_inverse_007.png");

    this.load.image("Jump_000", "perso/Jump_000.png");
    this.load.image("Jump_001", "perso/Jump_001.png");
    this.load.image("Jump_002", "perso/Jump_002.png");
    this.load.image("Jump_003", "perso/Jump_003.png");
    this.load.image("Jump_004", "perso/Jump_004.png");
    this.load.image("Jump_005", "perso/Jump_005.png");

    this.load.image("Jump_inverse_000", "perso/Jump_inverse_000.png");
    this.load.image("Jump_inverse_001", "perso/Jump_inverse_001.png");
    this.load.image("Jump_inverse_002", "perso/Jump_inverse_002.png");
    this.load.image("Jump_inverse_003", "perso/Jump_inverse_003.png");
    this.load.image("Jump_inverse_004", "perso/Jump_inverse_004.png");
    this.load.image("Jump_inverse_005", "perso/Jump_inverse_005.png");

    this.load.image("2RWG0", "perso/RWG0.png");
    this.load.image("2RWG1", "perso/RWG1.png");
    this.load.image("2RWG2", "perso/RWG2.png");
    this.load.image("2RWG3", "perso/RWG3.png");
    this.load.image("2RWG4", "perso/RWG4.png");
    this.load.image("2RWG5", "perso/RWG5.png");
    this.load.image("2RWG6", "perso/RWG6.png");
    this.load.image("2RWG7", "perso/RWG7.png");
    this.load.image("2RWG8", "perso/RWG8.png");
    this.load.image("2RWG9", "perso/RWG9.png");

    this.load.image("RWG_inverse_000", "perso/RWG_inverse_000.png");
    this.load.image("RWG_inverse_001", "perso/RWG_inverse_001.png");
    this.load.image("RWG_inverse_002", "perso/RWG_inverse_002.png");
    this.load.image("RWG_inverse_003", "perso/RWG_inverse_003.png");
    this.load.image("RWG_inverse_004", "perso/RWG_inverse_004.png");
    this.load.image("RWG_inverse_005", "perso/RWG_inverse_005.png");
    this.load.image("RWG_inverse_006", "perso/RWG_inverse_006.png");
    this.load.image("RWG_inverse_007", "perso/RWG_inverse_007.png");
    this.load.image("RWG_inverse_008", "perso/RWG_inverse_008.png");
    this.load.image("RWG_inverse_009", "perso/RWG_inverse_009.png");

    this.load.image("2Roll_000", "perso/Roll_000.png");
    this.load.image("2Roll_001", "perso/Roll_001.png");
    this.load.image("2Roll_002", "perso/Roll_002.png");
    this.load.image("2Roll_003", "perso/Roll_003.png");
    this.load.image("2Roll_004", "perso/Roll_004.png");
    this.load.image("2Roll_005", "perso/Roll_005.png");
    this.load.image("2Roll_006", "perso/Roll_006.png");
    this.load.image("2Roll_007", "perso/Roll_007.png");

    this.load.image("Roll_inverse_000", "perso/Roll_inverse_000.png");
    this.load.image("Roll_inverse_001", "perso/Roll_inverse_001.png");
    this.load.image("Roll_inverse_002", "perso/Roll_inverse_002.png");
    this.load.image("Roll_inverse_003", "perso/Roll_inverse_003.png");
    this.load.image("Roll_inverse_004", "perso/Roll_inverse_004.png");
    this.load.image("Roll_inverse_005", "perso/Roll_inverse_005.png");
    this.load.image("Roll_inverse_006", "perso/Roll_inverse_006.png");
    this.load.image("Roll_inverse_007", "perso/Roll_inverse_007.png");

    this.load.image("background", "TilesetMenu/set1_background.png");
    this.load.image("background2", "TilesetMenu/set1_hills.png");
    this.load.image("background3", "TilesetMenu/set1_tiles.png");
    this.load.tilemapTiledJSON("map3", "tiledMap/Niveau3.json");
    this.load.image("tiles", "tilesheet_complete.png");
    this.load.image("tiles_reverse", "tilesheet_complete_reverse.png");

    this.load.image("bullet", "assets/Bullet-1.png");
    this.load.image("n3blockBrown", "images/blockBrown.png");

    this.load.image("IEF1", "images/enemyFlyingAlt_1.png");
    this.load.image("IEF2", "images/enemyFlyingAlt_2.png");
    this.load.image("IEF3", "images/enemyFlyingAlt_3.png");
  }
  create() {
    keyObj = this.input.keyboard.addKey("SPACE"); // Bouton espace

    //  AJOUT TILED (Monde)
    const map = this.make.tilemap({ key: "map3" });
    // ajout des tileset (nom tiled su set, image correspondante preload)
    const tileset = map.addTilesetImage("tilesheet_complete", "tiles");
    const tileset2 = map.addTilesetImage(
      "tilesheet_complete_reverse",
      "tiles_reverse"
    );
    const tileset3 = map.addTilesetImage("Background1", "background");
    const tileset4 = map.addTilesetImage("BackGround2", "background2");
    const tileset5 = map.addTilesetImage("BackGround3", "background3");

    // ajout layer (nom layer tiled, nom set ref)

    const zone_droite = map.createDynamicLayer("Detect_droit", tileset, 0, 0);
    const zone_inverse = map.createDynamicLayer(
      "Detect_inverse",
      tileset,
      0,
      0
    );
    const zone_jetpack = map.createDynamicLayer(
      "Detect_jetpack",
      tileset,
      0,
      0
    );
    const zone_niveau1 = map.createDynamicLayer(
      "Detect_niveau1",
      tileset,
      0,
      0
    );
    const zone_fin = map.createDynamicLayer("fin", tileset, 0, 0);

    const Background1 = map.createStaticLayer("BackGround", tileset3, 0, 0);
    const Background2 = map.createStaticLayer("BackGround2", tileset4, 0, -400);
    const Background3 = map.createStaticLayer("BackGround3", tileset5, 0, -400);
    const backLayer = map.createStaticLayer("Couche 0", tileset, 0, 0);
    const frontLayer = map.createStaticLayer("Couche 1", tileset, 0, 0);
    const frontLayer_inverse = map.createStaticLayer(
      "Couche 1 reverse",
      tileset2,
      0,
      0
    );

    const Danger = map.createStaticLayer("Danger", tileset, 0, 0);
    const Danger_inverse = map.createStaticLayer(
      "Danger reverse",
      tileset2,
      0,
      0
    );

    const Decoration = map.createStaticLayer("Decoration", tileset, 0, 0);
    const Decoration_reverse = map.createStaticLayer(
      "Decoration reverse",
      tileset2,
      0,
      0
    );

    //Ajout des différents spawnpoint
    const spawnpoint1 = map.findObject(
      "object",
      obj => obj.name === "Spawnpoint1"
    );
    const spawnpoint2 = map.findObject(
      "object",
      obj => obj.name === "Spawnpoint2"
    );
    const spawnpoint3 = map.findObject(
      "object",
      obj => obj.name === "Spawnpoint3"
    );
    const spawnpoint4 = map.findObject(
      "object",
      obj => obj.name === "Spawnpoint4"
    );
    const spawnpoint_finale = map.findObject(
      "object",
      obj => obj.name === "fin_du_niveau"
    );

    //Spawn Bloc Destructible
    const bD1 = map.findObject("BlockDestructible", obj => obj.name === "BD1");
    const bD2 = map.findObject("BlockDestructible", obj => obj.name === "BD2");
    const bD3 = map.findObject("BlockDestructible", obj => obj.name === "BD3");
    const bD4 = map.findObject("BlockDestructible", obj => obj.name === "BD4");
    const bD5 = map.findObject("BlockDestructible", obj => obj.name === "BD5");
    const bD7 = map.findObject("BlockDestructible", obj => obj.name === "BD7");
    const bD8 = map.findObject("BlockDestructible", obj => obj.name === "BD8");
    const bD9 = map.findObject("BlockDestructible", obj => obj.name === "BD9");
    const bD10 = map.findObject(
      "BlockDestructible",
      obj => obj.name === "BD10"
    );
    const bD11 = map.findObject(
      "BlockDestructible",
      obj => obj.name === "BD11"
    );
    const bD12 = map.findObject(
      "BlockDestructible",
      obj => obj.name === "BD12"
    );
    const bD13 = map.findObject(
      "BlockDestructible",
      obj => obj.name === "BD13"
    );
    const bD14 = map.findObject(
      "BlockDestructible",
      obj => obj.name === "BD14"
    );
    const bD15 = map.findObject(
      "BlockDestructible",
      obj => obj.name === "BD15"
    );
    const bD16 = map.findObject(
      "BlockDestructible",
      obj => obj.name === "BD16"
    );
    const bD17 = map.findObject(
      "BlockDestructible",
      obj => obj.name === "BD17"
    );
    const bD18 = map.findObject(
      "BlockDestructible",
      obj => obj.name === "BD18"
    );

    // Importation de ennemis
    this.EF1 = map.findObject("EnemyFlying", obj => obj.name === "EF1");
    this.EF2 = map.findObject("EnemyFlying", obj => obj.name === "EF2");
    this.EF3 = map.findObject("EnemyFlying", obj => obj.name === "EF3");
    this.EF4 = map.findObject("EnemyFlying", obj => obj.name === "EF4");
    this.EF5 = map.findObject("EnemyFlying", obj => obj.name === "EF5");
    this.EF6 = map.findObject("EnemyFlying", obj => obj.name === "EF6");
    this.EF8 = map.findObject("EnemyFlying", obj => obj.name === "EF8");
    this.EF9 = map.findObject("EnemyFlying", obj => obj.name === "EF9");
    this.EF10 = map.findObject("EnemyFlying", obj => obj.name === "EF10");
    this.EF11 = map.findObject("EnemyFlying", obj => obj.name === "EF11");
    this.EF12 = map.findObject("EnemyFlying", obj => obj.name === "EF12");
    this.EF13 = map.findObject("EnemyFlying", obj => obj.name === "EF13");
    this.EF14 = map.findObject("EnemyFlying", obj => obj.name === "EF14");
    this.EF15 = map.findObject("EnemyFlying", obj => obj.name === "EF15");
    this.EF16 = map.findObject("EnemyFlying", obj => obj.name === "EF16");
    this.EF17 = map.findObject("EnemyFlying", obj => obj.name === "EF17");
    this.EF18 = map.findObject("EnemyFlying", obj => obj.name === "EF18");
    this.EF19 = map.findObject("EnemyFlying", obj => obj.name === "EF19");
    this.EF20 = map.findObject("EnemyFlying", obj => obj.name === "EF20");
    this.EF21 = map.findObject("EnemyFlying", obj => obj.name === "EF21");
    this.EF22 = map.findObject("EnemyFlying", obj => obj.name === "EF22");
    this.EF23 = map.findObject("EnemyFlying", obj => obj.name === "EF23");
    this.EF24 = map.findObject("EnemyFlying", obj => obj.name === "EF24");
    this.EF26 = map.findObject("EnemyFlying", obj => obj.name === "EF26");
    this.EF27 = map.findObject("EnemyFlying", obj => obj.name === "EF27");
    this.EF28 = map.findObject("EnemyFlying", obj => obj.name === "EF28");
    this.EF29 = map.findObject("EnemyFlying", obj => obj.name === "EF29");
    this.EF30 = map.findObject("EnemyFlying", obj => obj.name === "EF30");
    this.EF31 = map.findObject("EnemyFlying", obj => obj.name === "EF31");

    groupeEnemyFlying = this.physics.add.group({ setVelocityY: 0 });

    this.EF1 = groupeEnemyFlying.create(this.EF1.x, this.EF1.y, "IEF1");
    this.EF2 = groupeEnemyFlying.create(this.EF2.x, this.EF2.y, "IEF1");
    this.EF3 = groupeEnemyFlying.create(this.EF3.x, this.EF3.y, "IEF1");
    this.EF4 = groupeEnemyFlying.create(this.EF4.x, this.EF4.y, "IEF1");
    this.EF5 = groupeEnemyFlying.create(this.EF5.x, this.EF5.y, "IEF1");
    this.EF6 = groupeEnemyFlying.create(this.EF6.x, this.EF6.y, "IEF1");
    this.EF8 = groupeEnemyFlying.create(this.EF8.x, this.EF8.y, "IEF1");
    this.EF9 = groupeEnemyFlying.create(this.EF9.x, this.EF9.y, "IEF1");
    this.EF10 = groupeEnemyFlying.create(this.EF10.x, this.EF10.y, "IEF1");
    this.EF11 = groupeEnemyFlying.create(this.EF11.x, this.EF11.y, "IEF1");
    this.EF12 = groupeEnemyFlying.create(this.EF12.x, this.EF12.y, "IEF1");
    this.EF13 = groupeEnemyFlying.create(this.EF13.x, this.EF13.y, "IEF1");
    this.EF14 = groupeEnemyFlying.create(this.EF14.x, this.EF14.y, "IEF1");
    this.EF15 = groupeEnemyFlying.create(this.EF15.x, this.EF15.y, "IEF1");
    this.EF16 = groupeEnemyFlying.create(this.EF16.x, this.EF16.y, "IEF1");
    this.EF17 = groupeEnemyFlying.create(this.EF17.x, this.EF17.y, "IEF1");
    this.EF18 = groupeEnemyFlying.create(this.EF18.x, this.EF18.y, "IEF1");
    this.EF19 = groupeEnemyFlying.create(this.EF19.x, this.EF19.y, "IEF1");
    this.EF20 = groupeEnemyFlying.create(this.EF20.x, this.EF20.y, "IEF1");
    this.EF21 = groupeEnemyFlying.create(this.EF21.x, this.EF21.y, "IEF1");
    this.EF22 = groupeEnemyFlying.create(this.EF22.x, this.EF22.y, "IEF1");
    this.EF23 = groupeEnemyFlying.create(this.EF23.x, this.EF23.y, "IEF1");
    this.EF24 = groupeEnemyFlying.create(this.EF24.x, this.EF24.y, "IEF1");
    this.EF26 = groupeEnemyFlying.create(this.EF26.x, this.EF26.y, "IEF1");
    this.EF27 = groupeEnemyFlying.create(this.EF27.x, this.EF27.y, "IEF1");
    this.EF28 = groupeEnemyFlying.create(this.EF28.x, this.EF28.y, "IEF1");
    this.EF29 = groupeEnemyFlying.create(this.EF29.x, this.EF29.y, "IEF1");
    this.EF30 = groupeEnemyFlying.create(this.EF30.x, this.EF30.y, "IEF1");
    this.EF31 = groupeEnemyFlying.create(this.EF31.x, this.EF31.y, "IEF1");

    //animation ennemies
    this.anims.create({
      key: "EnemyFlying",
      frames: [
        { key: "IEF1" },
        { key: "IEF2" },
        { key: "IEF3" },
        { key: "IEF2" }
      ],
      frameRate: 12,
      repeat: -1
    });

    groupeEnemyFlying.children.iterate(function(groupeEnemyFlying) {
      groupeEnemyFlying.play("EnemyFlying", true); //appliquer animation
      groupeEnemyFlying.body.allowGravity = false; //enlever la gravité au groupeEnemyFlying
    });

    const text = map.findObject("object", obj => obj.name === "text1");
    text1x = text.x;
    text1y = text.y;
    //Ajout du personnage au spawn
    player = this.physics.add.sprite(spawnpoint1.x, spawnpoint1.y, "dude");

    //Déclaration des différentes coordonnées des différents spawnpoint
    spawn1x = spawnpoint1.x;
    spawn1y = spawnpoint1.y;
    spawn2x = spawnpoint2.x;
    spawn2y = spawnpoint2.y;
    spawn3x = spawnpoint3.x;
    spawn3y = spawnpoint3.y;
    spawn4x = spawnpoint4.x;
    spawn4y = spawnpoint4.y;

    //Définition de la taille de notre joueur
    player.setScale(1 / 8);
    player.setOffset(8, 12);

    //Ajout des collisions entre les différentes couches
    player.setCollideWorldBounds(true);

    //Zone de detection du joueur : zone droite : zone numéro 1
    this.physics.add.collider(player, zone_droite);
    zone_droite.setTileLocationCallback(
      1, // coordoonnées x
      0, // coordonnees y
      9, // taille largeur
      100, // taille hauteur
      function() {
        this.dansLaZone = 1;
        checkpoint0 = true;
      },
      this
    );
    //Zone de detection du joueur : zone à l'envers : zone numéro 2
    this.physics.add.collider(player, zone_inverse);
    zone_inverse.setTileLocationCallback(
      31, // coordoonnées x
      5, // coordonnees y
      2, // taille largeur
      5, // taille hauteur
      function() {
        player.setVelocityY(-400);
        this.dansLaZone = 2;
      },
      this
    );
    //Zone de detection du joueur : zone où la gravité s'inverse : zone numéro 3
    zone_inverse.setTileLocationCallback(
      128, // coordoonnées x
      2, // coordonnees y
      4, // taille largeur
      5, // taille hauteur
      function() {
        player.setVelocityY(-400);
        this.dansLaZone = 3;
        checkpoint1 = true; //Le premier checkpoint est activé
      },
      this
    );
    //Zone de detection du joueur : zone jetpack : zone numéro 4
    this.physics.add.collider(player, zone_jetpack);
    zone_jetpack.setTileLocationCallback(
      226, // coordoonnées x
      3, // coordonnees y
      4, // taille largeur
      5, // taille hauteur
      function() {
        this.dansLaZone = 4;
        checkpoint2 = true; //Le deuxième checkpoint est activé
      },
      this
    );
    //Zone de detection du joueur : zone droite : zone numéro 5
    this.physics.add.collider(player, zone_niveau1);
    zone_niveau1.setTileLocationCallback(
      300, // coordoonnées x
      3, // coordonnees y
      3, // taille largeur
      5, // taille hauteur
      function() {
        this.dansLaZone = 5;
        checkpoint3 = true; //Le troisième checkpoint est activé
      },
      this
    );
    //Zone de detection du joueur : zone fin : zone numéro 6
    this.physics.add.collider(player, zone_fin);
    var zoneatester = zone_fin.setTileLocationCallback(
      485, // coordoonnées x
      3, // coordonnees y
      2, // taille largeur
      4, // taille hauteur
      function() {
        this.dansLaZone = 6;
      },
      this
    );
    //AJOUT COLLISIONS
    this.physics.add.collider(player, frontLayer);
    this.physics.add.collider(
      player,
      Danger,
      function() {
        player.setVelocityX(0);
        player.setVelocityY(0);
        mort = 1;
      },
      null
    );
    frontLayer.setCollisionByProperty({ collides: true });
    Danger.setCollisionByProperty({ collides: true });
    frontLayer_inverse.setCollisionByProperty({ collides: true });
    this.physics.add.collider(player, frontLayer_inverse);
    Danger_inverse.setCollisionByProperty({ collides: true });
    this.physics.add.collider(
      player,
      Danger_inverse,
      function() {
        player.setVelocityX(0);
        mort = 1;
      },
      null
    );

    //Ajout d'une caméra qui suit le joueur
    const camera = this.cameras.main;
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(player);
    this.physics.world.setBounds(0, 0, 40000, 1200);
    camera.setViewport(0, 0, 1280, 570);

    //ANIMATION DU JOUEUR
    //Course à pied avec une arme à l'endroit
    this.anims.create({
      key: "RWG3",
      frames: [
        { key: "2RWG0" },
        { key: "2RWG1" },
        { key: "2RWG2" },
        { key: "2RWG3" },
        { key: "2RWG4" },
        { key: "2RWG5" },
        { key: "2RWG6" },
        { key: "2RWG7" },
        { key: "2RWG8" },
        { key: "2RWG9" }
      ],
      frameRate: 10,
      repeat: -1
    });
    //Course à pied avec une arme à l'envers
    this.anims.create({
      key: "RWG_inverse",
      frames: [
        { key: "RWG_inverse_000" },
        { key: "RWG_inverse_001" },
        { key: "RWG_inverse_002" },
        { key: "RWG_inverse_003" },
        { key: "RWG_inverse_004" },
        { key: "RWG_inverse_005" },
        { key: "RWG_inverse_006" },
        { key: "RWG_inverse_007" },
        { key: "RWG_inverse_008" },
        { key: "RWG_inverse_009" }
      ],
      frameRate: 10,
      repeat: -1
    });
    //Personnage au repos à l'endroit
    this.anims.create({
      key: "turn",
      frames: this.anims.generateFrameNumbers("dude", {
        start: 0,
        end: 7
      }),
      frameRate: 10,
      repeat: -1
    });
    //Personnage au repos à l'envers
    this.anims.create({
      key: "turn_inverse",
      frames: this.anims.generateFrameNumbers("dude_inverse", {
        start: 7,
        end: 3
      }),
      frameRate: 5,
      repeat: -1
    });
    //Personnage en mode jetpack
    this.anims.create({
      key: "Jetpack3",
      frames: [
        { key: "2Jetpack_000" },
        { key: "2Jetpack_001" },
        { key: "2Jetpack_002" },
        { key: "2Jetpack_003" },
        { key: "2Jetpack_004" },
        { key: "2Jetpack_005" },
        { key: "2Jetpack_006" }
      ],
      frameRate: 7,
      repeat: -1
    });

    //Personnage qui effectue un saut à l'endroit
    this.anims.create({
      key: "Jump3",
      frames: [
        { key: "Jump_000" },
        { key: "Jump_001" },
        { key: "Jump_002" },
        { key: "Jump_003" },
        { key: "Jump_004" },
        { key: "Jump_005" },
        { key: "2Roll_000" },
        { key: "2Roll_001" },
        { key: "2Roll_002" },
        { key: "2Roll_003" },
        { key: "2Roll_004" },
        { key: "2Roll_005" },
        { key: "2Roll_006" },
        { key: "2Roll_007" }
      ],
      frameRate: 24,
      repeat: -1
    });
    //Personnage qui effectue un saut à l'envers
    this.anims.create({
      key: "Jump_inverse",
      frames: [
        { key: "Jump_inverse_000" },
        { key: "Jump_inverse_001" },
        { key: "Jump_inverse_002" },
        { key: "Jump_inverse_003" },
        { key: "Jump_inverse_004" },
        { key: "Jump_inverse_005" },
        { key: "Roll_inverse_000" },
        { key: "Roll_inverse_001" },
        { key: "Roll_inverse_002" },
        { key: "Roll_inverse_003" },
        { key: "Roll_inverse_004" },
        { key: "Roll_inverse_005" },
        { key: "Roll_inverse_006" },
        { key: "Roll_inverse_007" }
      ],
      frameRate: 24,
      repeat: -1
    });
    //Variable pour récupèrer les touches du clavier
    this.cursors = this.input.keyboard.createCursorKeys();

    //Zones de textes
    this.add.text(spawn1x - 180, spawn1y - 60, "Press Space to Start", {
      fontSize: "32px",
      fill: "#ff0044"
    });
    this.add.text(text1x - 150, text1y, "Press Space to reverse Gravity", {
      fontSize: "32px",
      fill: "#ff0044"
    });
    //Affichage des compteurs de morts
    compteur = this.add.text(
      spawn1x - 150,
      spawn1y - 100,
      "Deaths count : " + compteur_de_mort,
      {
        fontSize: "32px",
        fill: "#ff0044"
      }
    );
    compteur1 = this.add.text(
      spawn2x + 50,
      spawn2y - 50,
      "Deaths count : " + compteur_de_mort,
      {
        fontSize: "32px",
        fill: "#ff0044"
      }
    );
    compteur2 = this.add.text(
      spawn3x - 150,
      spawn3y - 50,
      "Deaths count : " + compteur_de_mort,
      {
        fontSize: "32px",
        fill: "#ff0044"
      }
    );
    compteur3 = this.add.text(
      spawn4x - 150,
      spawn4y - 50,
      "Deaths count : " + compteur_de_mort,
      {
        fontSize: "32px",
        fill: "#ff0044"
      }
    );
    groupeBullets = this.physics.add.group();
    var groupeCaisses = this.physics.add.group(); //groupes des caisses destructibles

    //Spawn des blocs destructibles aux coordonnes des spawnpoints blocs
    var Bloc1 = groupeCaisses.create(bD1.x, bD1.y, "n3blockBrown");
    //var Bloc2 = groupeCaisses.create(bD2.x, bD2.y, "n3blockBrown");
    //var Bloc3 = groupeCaisses.create(bD3.x, bD3.y, "n3blockBrown");
    var Bloc4 = groupeCaisses.create(bD4.x, bD4.y, "n3blockBrown");
    var Bloc5 = groupeCaisses.create(bD5.x, bD5.y, "n3blockBrown");
    var Bloc7 = groupeCaisses.create(bD7.x, bD7.y, "n3blockBrown");
    var Bloc8 = groupeCaisses.create(bD8.x, bD8.y, "n3blockBrown");
    var Bloc9 = groupeCaisses.create(bD9.x, bD9.y, "n3blockBrown");
    var Bloc10 = groupeCaisses.create(bD10.x, bD10.y, "n3blockBrown");
    var Bloc11 = groupeCaisses.create(bD11.x, bD11.y, "n3blockBrown");
    var Bloc12 = groupeCaisses.create(bD12.x, bD12.y, "n3blockBrown");
    var Bloc13 = groupeCaisses.create(bD13.x, bD13.y, "n3blockBrown");
    var Bloc14 = groupeCaisses.create(bD14.x, bD14.y, "n3blockBrown");
    var Bloc15 = groupeCaisses.create(bD15.x, bD15.y, "n3blockBrown");
    var Bloc16 = groupeCaisses.create(bD16.x, bD16.y, "n3blockBrown");
    var Bloc17 = groupeCaisses.create(bD17.x, bD17.y, "n3blockBrown");
    var Bloc18 = groupeCaisses.create(bD18.x, bD18.y, "n3blockBrown");

    this.physics.add.overlap(player, groupeCaisses, this.dead, null, this);

    //Rendre les caisse destructible avec 2 points de vie

    this.physics.add.overlap(
      groupeBullets,
      groupeCaisses,
      this.destruction_caisse,
      null,
      this
    );

    groupeCaisses.children.iterate(function(groupeCaisses) {
      groupeCaisses.pointsVie = 2; //attribuer 2 points de vie à toutes les caisses
      groupeCaisses.setScale(1);
      groupeCaisses.setGravity(0, 0);
    });

    // Apparition instructions tutoriel
    const TabObjects = map.getObjectLayer("Instructions");
    TabObjects.objects.forEach(element => {
      var texte = element.text;
      this.add.text(element.x, element.y, texte["text"], {
        fontSize: "24px",
        color: "black",
        fontFamily: texte["fontfamily"]
      });
    });

    //TIRER

    this.physics.add.collider(
      groupeBullets,
      frontLayer,
      this.destruction_balle,
      null,
      this
    );
    this.physics.add.collider(
      groupeBullets,
      frontLayer_inverse,
      this.destruction_balle,
      null,
      this
    );
    //Destruction ennemy si on tire dessus
    this.physics.add.overlap(
      groupeBullets,
      groupeEnemyFlying,
      this.destruction_enemy,
      null,
      this
    );
    //Rendre les ennemis  tueurs : retour checkpoint si le player touche un ennemy ou bloc
    this.physics.add.overlap(player, groupeEnemyFlying, this.dead, null, this);

    player.setGravity(0, gravite);
    boutonFeu = this.input.keyboard.addKey("S"); //touche S pour tirer

    mute = this.input.keyboard.addKey("M"); //bouton M pour  mute musique
    playmusic = this.input.keyboard.addKey("L"); //bouton L pour relancer musique
    boutonpause = this.input.keyboard.addKey("P"); //P pour mettre pause
    son_Niveau3 = this.sound.add("MusicNiveau3"); //son du niveau3
    son_Niveau3.play(); //lancer immediatement le son du niveau3
    son_Niveau3.setLoop(true); //joeuer le son en boucle
    this.SonCoupsDeFeu = this.sound.add("SonCoupsDeFeu"); //son quand player tire
  }
  update() {
    // PARAMETRES DE MUSIQUE
    if (Phaser.Input.Keyboard.JustDown(mute)) {
      //METTRE MUTE
      son_Niveau3.setMute(true);
      console.log("je mute");
      soncoupé = true;
    }
    if (Phaser.Input.Keyboard.JustDown(playmusic)) {
      son_Niveau3.setMute(false); //RELANCER LA MUSIQUE
      soncoupé = false;
    }

    //mettre le niveau 3 en pause
    if (Phaser.Input.Keyboard.JustDown(boutonpause)) {
      this.scene.launch("pause3"); //lancer la scene pause2
      this.scene.pause(); //mettre niveau3 en pause
    }
    //Si je joueur arrive à la fin du niveau
    if (this.dansLaZone == 6) {
      //player.setTint("0xff0000");
      //this.dansLaZone = 0;
      this.scene.start("menuPrincipal");
      check3 = true; //check passe à true car a gagné
      //console.log(this.dansLaZone);
    }

    //Si le joueur appuie sur espace pour respawn ou lancer le niveau
    if (this.cursors.space.isDown) {
      start = 1;
    }

    //Si le joueur est mort
    if (mort) {
      //On lui réattribue la gravité normale
      player.setGravity(0, 2000);
      //On incrémente une mort, et on actualise tous les compteurs
      compteur_de_mort++;
      compteur.setText("Deaths count : " + compteur_de_mort);
      compteur1.setText("Deaths count : " + compteur_de_mort);
      compteur2.setText("Deaths count : " + compteur_de_mort);
      compteur3.setText("Deaths count : " + compteur_de_mort);
      //Si le joueur est arrivé au checkpoint 3
      if (checkpoint3) {
        //On lui défini son nouveau spawn et on désactive son ancier spawn
        player.x = spawn4x;
        player.y = spawn4y;
        spawnjoueurx = player.x;
        spawnjoueury = player.y - 100;
        checkpoint2 = false;

        player.setOffset(0, 0);
        player.anims.play("turn");
      }
      //Si le joueur est arrivé au checkpoint 2
      if (checkpoint2) {
        //On lui défini son nouveau spawn et on désactive son ancier spawn
        player.x = spawn3x;
        player.y = spawn3y;

        spawnjoueurx = player.x;
        spawnjoueury = player.y - 200;
        player.setVelocity(0, 0);
        checkpoint1 = false;
        player.setOffset(0, 0);
        player.anims.play("turn");
      }
      //Si le joueur est arrivé au checkpoint 2
      if (checkpoint1) {
        //On lui défini son nouveau spawn et on désactive son ancier spawn
        inversion_gravity = 1; //On fait respawn le joueur à l'envers
        player.anims.play("turn_inverse", true);
        player.x = spawn2x;
        player.y = spawn2y;
        spawnjoueurx = player.x;
        spawnjoueury = player.y;
        checkpoint0 = false;
      }
      //Si le joueur est arrivé au checkpoint 0 (le spawn)
      if (checkpoint0) {
        player.x = spawn1x;
        player.y = spawn1y + 10;
        spawnjoueurx = player.x;
        spawnjoueury = player.y;
        player.setOffset(0, 0);
        player.anims.play("turn");
      }
      mort = 0;
      start = 0; //Le joueur doit réappuyer sur espace pour relancer le jeu
    }
    //Si le joueur a appuyé sur espace
    if (start == 1) {
      //Si le joueur est dans l'une des zones droites
      if (this.dansLaZone == 1 || this.dansLaZone == 5) {
        //Il peut tirer en appuyer sur le boutonFeu
        if (Phaser.Input.Keyboard.JustDown(boutonFeu)) {
          this.tirer(player, direction); //appel de la fonction tirer
        }
        //Gravité normale
        player.setGravity(0, 2000);
        player.setVelocityX(400);
        //si le joueur est au sol il court avec une arme
        if (player.body.blocked.down) {
          player.anims.play("RWG3", true);
          player.setSize(300, 610);
          player.setOffset(0, 0);
        }
        //si le joueur est saute
        if (this.cursors.space.isDown && player.body.blocked.down) {
          player.setVelocityY(-600);
          player.anims.play("Jump3", true);
          player.setSize(300, 500);
          player.setOffset(30, 12);
        }
        //Si le joueur rendre en collision avec un objet (bloqué à droite) il meurt
        if (player.body.blocked.right) {
          player.body.reset(spawnjoueurx, spawnjoueury);
          mort = 1;
        }
        //Si le joueur rendre en collision avec un objet au plafond il meurt (bloqué au dessus)
        if (player.body.blocked.up) {
          player.body.reset(spawnjoueurx, spawnjoueury);
          mort = 1;
        }
      }
      //Si le joueur est dans la zone à l'envers
      if (this.dansLaZone == 2) {
        player.setGravity(0, -2000); //On lui affecte une gravité inversé
        player.setVelocityX(400);
        if (Phaser.Input.Keyboard.JustDown(boutonFeu)) {
          this.tirer(player, direction); //appel de la fonction tirer
        }
        //Si le joueur marche sur le plafond, on le fait courir avec une arme
        if (player.body.blocked.up) {
          player.anims.play("RWG_inverse", true);
          player.setSize(300, 610);
          player.setOffset(250, 50);
        }
        //Si le joueur marche sur le plafond, et saute :
        if (this.cursors.space.isDown && player.body.blocked.up) {
          player.setVelocityY(600);
          player.anims.play("Jump_inverse", true);
          player.setSize(300, 600);
          player.setOffset(120, 12);
        }
        //Si le joueur rendre en collision avec un objet (bloqué à droite) il meurt
        if (player.body.blocked.right) {
          player.body.reset(spawnjoueurx, spawnjoueury);
          mort = 1;
        }
        //Si le joueur rendre en collision avec un objet au sol il meurt (bloqué en dessous)
        if (player.body.blocked.down) {
          player.body.reset(spawnjoueurx, spawnjoueury);
          mort = 1;
        }
      }
      //Si le joueur est dans la zone inversion gravité
      if (this.dansLaZone == 3) {
        //Il peut tirer en appuyer sur le boutonFeu
        if (Phaser.Input.Keyboard.JustDown(boutonFeu)) {
          this.tirer(player, direction); //appel de la fonction tirer
        }
        //On incrémente lorsque le joueur appuie sur espace pour lui affecter une gravité
        if (Phaser.Input.Keyboard.JustDown(keyObj)) {
          inversion_gravity++;
        }

        //Si nous avons un nombre pair alors nous serons dans le cas d'une gravité inversé
        if (inversion_gravity % 2 == 0) {
          player.setGravity(0, -2000);
          player.setVelocityX(400);
          player.anims.play("RWG_inverse", true);
          player.setSize(300, 600);
          player.setOffset(240, 60);
        }
        //Sinon nous sommes dans le cas d'une gravité normale
        else {
          player.setGravity(0, 2000);
          player.setVelocityX(400);
          player.anims.play("RWG3", true);
          player.setSize(300, 610);
          player.setOffset(0, 0);
        }
        //Si le joueur rendre en collision avec un objet (bloqué à droite) il meurt
        if (player.body.blocked.right) {
          player.body.reset(spawnjoueurx, spawnjoueury);
          mort = 1;
        }
      }
      //Si le joueur est dans la zone jetpack
      if (this.dansLaZone == 4) {
        player.setVelocityX(400);
        //Si le joueur touche le sol, on lui affecte l'animation où le player court, et on redimenssione sa hitbox
        if (player.body.blocked.down) {
          player.anims.play("RWG3", true);
          player.setSize(300, 610);
          //player.setOffset(230, 12);
          player.setOffset(0, 12);
        }
        //Si le joueur appuie sur la touche espace, on lui affecte l'animation où le player est en Jetpack,on redimenssione sa hitbox et on lui affecte une vitesse Y (pour qu'il saute)
        if (this.cursors.space.isDown) {
          player.setVelocityY(-330);
          player.anims.play("Jetpack3", true);
          //player.setSize(300, 425);
          player.setSize(300, 450);
          player.setOffset(290, 0);
        }

        //Si le player est bloqué sur la droite (si il ne peut plus se déplacer sur la droit), il est mort et et on lui rajoute une mort
        if (player.body.blocked.right) {
          mort = 1;
          player.setVelocity(0, 0);
          player.setOffset(0, 0);
          player.setSize(300, 610);
        }

        //Si le player est bloqué au dessus de lui (si il ne peut plus se déplacer sur l'axe Y vers le haut), il est mort et et on lui rajoute une mort
        if (player.body.blocked.up) {
          mort = 1;
        }
      }
    }
  }
  tirer(player, direction) {
    var coefDir;

    coefDir = 1;
    var bullet = groupeBullets.create(
      //CREATION BALLE A COTE PLAYER
      player.x + 25 * coefDir, //a gauche ou droite en fonction du coeff
      player.y - 4,
      "bullet"
    );
    bullet.setScale(1 / 10); //diminuer taille bullet
    bullet.body.allowGravity = false; //ENLEVER GRAVITE POUR BALLE
    bullet.setVelocity(1000 * coefDir, 0); //VITESSE DE LA BALLE

    setTimeout(function() {
      bullet.destroy();
    }, 1000);
    if (soncoupé == false) {
      this.SonCoupsDeFeu.play(); //si le son n'est pas coupé, lancer le son coup de feu
    }
  }

  destruction_enemy(bullet, enemy) {
    bullet.destroy(); //detruire balle et ennemi detruit quand touché
    enemy.destroy();
  }

  destruction_balle(bullet, xd) {
    //  if (bullet.body.blocked.right) {
    bullet.destroy();
    //  bullet.x = this.Spawnpoint.x - 200;
    // bullet.y = this.Spawnpoint.y;
  }

  dead(x, y) {
    mort = 1;
    player.setVelocity(0, 0);
    player.setSize(300, 600);
    player.setOffset(0, 0);
  }
  destruction_caisse(bullet, caisse) {
    caisse.pointsVie--; //decrement point de vie caisse
    if (caisse.pointsVie === 0) {
      caisse.destroy(); //detruire la caisse
      // this.son_caisse.play(); //lancer le son de destruction caisse
      // this.son_caisse.setVolume(7); //augmentation du volume
    }
    bullet.destroy(); //detruire la balle
  }
}
