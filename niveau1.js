// CLasse NIVEAU 1 : CLASSIQUE AVEC TIRS
class niveau1 extends Phaser.Scene {
  constructor() {
    super({ key: "niveau1" });
  }

  preload() {
    //Importation des images et banque d'image
    this.load.audio("son_caisse", "sons/explosion caisse.ogg");
    this.load.image("enemyWalking_1", "images/enemyWalking_1.png");
    this.load.image("enemyWalking_2", "images/enemyWalking_2.png");
    this.load.image("enemyWalking_3", "images/enemyWalking_3.png");
    this.load.image("enemyFloating_1", "images/enemyFloating_1.png");
    this.load.image("enemyFloating_2", "images/enemyFloating_2.png");
    this.load.image("enemyFloating_3", "images/enemyFloating_3.png");
    this.load.image("enemyFlying_1", "images/enemy1.png");
    this.load.image("enemyFlying_2", "images/enemy2.png");
    this.load.image("enemyFlying_3", "images/enemy3.png");
    this.load.image("enemySwimming_1", "images/enemySwimming_1.png");
    this.load.image("enemySwimming_2", "images/enemySwimming_2.png");
    this.load.image("enemySwimming_3", "images/enemySwimming_3.png");
    this.load.image("set4_tiles", "TilesetPause/set4_tiles.png");
    this.load.image("set4_hills", "TilesetPause/set4_hills.png");
    this.load.image("set4_background", "TilesetPause/set4_background.png");
    this.load.image("RWG0", "perso/RWG0.png");
    this.load.image("RWG1", "perso/RWG1.png");
    this.load.image("RWG3", "perso/RWG3.png");
    this.load.image("RWG4", "perso/RWG4.png");
    this.load.image("RWG5", "perso/RWG5.png");
    this.load.image("RWG6", "perso/RWG6.png");
    this.load.image("RWG7", "perso/RWG7.png");
    this.load.image("RWG8", "perso/RWG8.png");
    this.load.image("RWG9", "perso/RWG9.png");
    this.load.image("Roll_000", "perso/Roll_000.png");
    this.load.image("Roll_001", "perso/Roll_001.png");
    this.load.image("Roll_002", "perso/Roll_002.png");
    this.load.image("Roll_003", "perso/Roll_003.png");
    this.load.image("Roll_004", "perso/Roll_004.png");
    this.load.image("Roll_005", "perso/Roll_005.png");
    this.load.image("Roll_006", "perso/Roll_006.png");
    this.load.image("Roll_007", "perso/Roll_007.png");
    this.load.image("Idle000", "perso/Idle000.png");
    this.load.image("Idle001", "perso/Idle001.png");
    this.load.image("Idle002", "perso/Idle002.png");
    this.load.image("Idle003", "perso/Idle003.png");
    this.load.image("Idle004", "perso/Idle004.png");
    this.load.image("Idle005", "perso/Idle005.png");
    this.load.image("Idle006", "perso/Idle006.png");
    this.load.image("Idle007", "perso/Idle007.png");
    this.load.image("Idle008", "perso/Idle008.png");
    this.load.image("Idle009", "perso/Idle009.png");
    this.load.image("Idle010", "perso/Idle010.png");
    this.load.image("Idle011", "perso/Idle011.png");
    this.load.image("Bullet-2_2", "images/Bullet-2_2.png");
    this.load.image("blockBrown_broken", "images/blockBrown_broken.png");
    this.load.image("blockBrown", "images/blockBrown.png");
    this.load.image("tilesheet_complete", "tilesheet_complete.png");
    this.load.tilemapTiledJSON("map1", "tiledMap/Niveau1BroCube.json");
    this.load.audio("MusicNiveau1", "sons/MusicNiveau1bis.m4a");
    this.load.audio("SonPorte", "sons/SonPorte.m4a");
    this.load.audio("SonCoupsDeFeu", "sons/tir.wav");

    //Fin preload
  }
  create() {
    //Création de la map tiled
    const map = this.make.tilemap({ key: "map1" });

    //Ajout Tileset
    const tileset1 = map.addTilesetImage("Frontground1", "tilesheet_complete");
    const tileset2 = map.addTilesetImage("Background1", "set4_background");
    const tileset3 = map.addTilesetImage("Background2", "set4_hills");
    const tileset4 = map.addTilesetImage("Background3", "set4_tiles");

    //Affichage de la map tiled
    const Background1 = map.createStaticLayer("Background1", tileset2, 0, 0);
    const Background2 = map.createStaticLayer("Background2", tileset3, 0, -400);
    const Background3 = map.createStaticLayer("Background3", tileset4, 0, -400);
    const Eau = map.createStaticLayer("Eau", tileset1, 0, 0);
    const DecoPrincipale = map.createStaticLayer(
      "DecoPrincipale",
      tileset1,
      0,
      0
    );
    const Sol = map.createStaticLayer("Sol", tileset1, 0, 0);
    const DecoDansSol = map.createStaticLayer("DecoDansSol", tileset1, 0, 0);
    const Pics = map.createStaticLayer("Pics", tileset1, 0, 0);

    const fin = map.createDynamicLayer("Fin", tileset1, 0, 0);

    //Spawn Bloc Destructible
    const bD1 = map.findObject("BlocDestructible", obj => obj.name === "BD1");
    const bD2 = map.findObject("BlocDestructible", obj => obj.name === "BD2");
    const bD3 = map.findObject("BlocDestructible", obj => obj.name === "BD3");
    const bD4 = map.findObject("BlocDestructible", obj => obj.name === "BD4");
    const bD5 = map.findObject("BlocDestructible", obj => obj.name === "BD5");
    const bD7 = map.findObject("BlocDestructible", obj => obj.name === "BD7");
    const bD8 = map.findObject("BlocDestructible", obj => obj.name === "BD8");
    const bD9 = map.findObject("BlocDestructible", obj => obj.name === "BD9");
    const bD91 = map.findObject("BlocDestructible", obj => obj.name === "BD91");
    const bD92 = map.findObject("BlocDestructible", obj => obj.name === "BD92");
    const bD93 = map.findObject("BlocDestructible", obj => obj.name === "BD93");
    const bD94 = map.findObject("BlocDestructible", obj => obj.name === "BD94");
    const bD95 = map.findObject("BlocDestructible", obj => obj.name === "BD95");

    //Spawn player "AAA"
    this.Spawnpoint = map.findObject(
      "Spawnpoint",
      obj => obj.name === "Spawnpoint" //SPAWNPOINT debut du niveau
    );
    this.Spawnpoint1 = map.findObject(
      "Spawnpoint",
      obj => obj.name === "Spawnpoint3" //Spawnpoint fin du niveau
    );

    //Spawn Ennemy1 (ennemies floating)
    this.SPE11 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE11"
    );
    this.SPE12 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE12"
    );
    this.SPE13 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE13"
    );
    this.SPE14 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE14"
    );
    this.SPE15 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE15"
    );
    this.SPE16 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE16"
    );
    this.SPE17 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE17"
    );
    this.SPE18 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE18"
    );
    this.SPE19 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE19"
    );
    this.SPE1910 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE1910"
    );
    this.SPE1911 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE1911"
    );
    this.SPE1912 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE1912"
    );
    this.SPE1913 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE1913"
    );
    this.SPE1914 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE1914"
    );
    this.SPE1915 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE1915"
    );
    this.SPE1916 = map.findObject(
      "SpawnpointEnemy1",
      obj => obj.name === "SPE1916"
    );

    //Spawn Ennemy2 : ennemis flying

    this.SPE2 = map.findObject("SpawnpointEnemy2", obj => obj.name === "SPE2");
    this.SPE3 = map.findObject("SpawnpointEnemy2", obj => obj.name === "SPE3");
    this.SPE4 = map.findObject("SpawnpointEnemy2", obj => obj.name === "SPE4");
    this.SPE5 = map.findObject("SpawnpointEnemy2", obj => obj.name === "SPE5");
    this.SPE6 = map.findObject("SpawnpointEnemy2", obj => obj.name === "SPE6");
    this.SPE7 = map.findObject("SpawnpointEnemy2", obj => obj.name === "SPE7");
    this.SPE8 = map.findObject("SpawnpointEnemy2", obj => obj.name === "SPE8");
    this.SPE9 = map.findObject("SpawnpointEnemy2", obj => obj.name === "SPE9");
    this.SPE910 = map.findObject(
      "SpawnpointEnemy2",
      obj => obj.name === "SPE910"
    );
    this.SPE911 = map.findObject(
      "SpawnpointEnemy2",
      obj => obj.name === "SPE911"
    );
    this.SPE912 = map.findObject(
      "SpawnpointEnemy2",
      obj => obj.name === "SPE912"
    );
    this.SPE913 = map.findObject(
      "SpawnpointEnemy2",
      obj => obj.name === "SPE913"
    );
    this.SPE914 = map.findObject(
      "SpawnpointEnemy2",
      obj => obj.name === "SPE914"
    );
    this.SPE915 = map.findObject(
      "SpawnpointEnemy2",
      obj => obj.name === "SPE915"
    );
    this.SPE916 = map.findObject(
      "SpawnpointEnemy2",
      obj => obj.name === "SPE916"
    );

    //Spawn Ennemy4 : ennemies walking
    this.SPE21 = map.findObject(
      "SpawnpointEnemy4",
      obj => obj.name === "SPE21"
    );
    this.SPE22 = map.findObject(
      "SpawnpointEnemy4",
      obj => obj.name === "SPE22"
    );
    this.SPE23 = map.findObject(
      "SpawnpointEnemy4",
      obj => obj.name === "SPE23"
    );
    this.SPE24 = map.findObject(
      "SpawnpointEnemy4",
      obj => obj.name === "SPE24"
    );
    this.SPE25 = map.findObject(
      "SpawnpointEnemy4",
      obj => obj.name === "SPE25"
    );
    this.SPE26 = map.findObject(
      "SpawnpointEnemy4",
      obj => obj.name === "SPE26"
    );
    this.SPE27 = map.findObject(
      "SpawnpointEnemy4",
      obj => obj.name === "SPE27"
    );
    this.SPE28 = map.findObject(
      "SpawnpointEnemy4",
      obj => obj.name === "SPE28"
    );
    this.SPE29 = map.findObject(
      "SpawnpointEnemy4",
      obj => obj.name === "SPE29"
    );
    this.SPE30 = map.findObject(
      "SpawnpointEnemy4",
      obj => obj.name === "SPE30"
    );

    //Spawnpoint Ennemies swimming

    this.SPE31 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE31"
    );
    this.SPE32 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE32"
    );
    this.SPE33 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE33"
    );
    this.SPE34 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE34"
    );
    this.SPE35 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE35"
    );
    this.SPE36 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE36"
    );
    this.SPE37 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE37"
    );
    this.SPE38 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE38"
    );
    this.SPE39 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE39"
    );
    this.SPE3910 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE3910"
    );
    this.SPE3911 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE3911"
    );
    this.SPE3912 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE3912"
    );
    this.SPE3913 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE3913"
    );
    this.SPE3914 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE3914"
    );
    this.SPE3915 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE3915"
    );
    this.SPE3916 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE3916"
    );
    this.SPE3917 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE3917"
    );
    this.SPE3918 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE3918"
    );
    this.SPE3919 = map.findObject(
      "SpawnpointEnemy3",
      obj => obj.name === "SPE3919"
    );

    //Création groupes

    groupeEnemy1 = this.physics.add.group({ setVelocityY: 0 }); //groupe ennemy 1 floating
    groupeEnemy4 = this.physics.add.group({ setVelocityY: 0 }); //groupe enemy 4 walking
    groupeEnemy3 = this.physics.add.group({ setVelocityY: 0 }); //groupe enemy 3 swimming
    groupeEnemy2 = this.physics.add.group({ setVelocityY: 0 }); //groupe enemy 2 flying
    groupeBullets = this.physics.add.group(); //groupes de balles
    groupeCaisses = this.physics.add.group(); //groupes des caisses destructibles

    //Spawn du player, ennemis et blocs destructibles aux coordonnes des spawnpoints blocs
    var Bloc1 = groupeCaisses.create(bD1.x, bD1.y, "blockBrown");
    var Bloc2 = groupeCaisses.create(bD2.x, bD2.y, "blockBrown");
    var Bloc3 = groupeCaisses.create(bD3.x, bD3.y, "blockBrown");
    var Bloc4 = groupeCaisses.create(bD4.x, bD4.y, "blockBrown");
    var Bloc5 = groupeCaisses.create(bD5.x, bD5.y, "blockBrown");
    var Bloc7 = groupeCaisses.create(bD7.x, bD7.y, "blockBrown");
    var Bloc8 = groupeCaisses.create(bD8.x, bD8.y, "blockBrown");
    var Bloc9 = groupeCaisses.create(bD9.x, bD9.y, "blockBrown");
    var Bloc91 = groupeCaisses.create(bD91.x, bD91.y, "blockBrown");
    var Bloc92 = groupeCaisses.create(bD92.x, bD92.y, "blockBrown");
    var Bloc93 = groupeCaisses.create(bD93.x, bD93.y, "blockBrown");
    var Bloc94 = groupeCaisses.create(bD94.x, bD94.y, "blockBrown");
    var Bloc95 = groupeCaisses.create(bD95.x, bD95.y, "blockBrown");

    //Creation des ennemies aux spawnpoint ennemies
    this.Enemy02 = groupeEnemy2.create(
      this.SPE2.x,
      this.SPE2.y,
      "enemyFlying_1"
    );
    this.Enemy03 = groupeEnemy2.create(
      this.SPE3.x,
      this.SPE3.y,
      "enemyFlying_1"
    );
    this.Enemy04 = groupeEnemy2.create(
      this.SPE4.x,
      this.SPE4.y,
      "enemyFlying_1"
    );
    this.Enemy05 = groupeEnemy2.create(
      this.SPE5.x,
      this.SPE5.y,
      "enemyFlying_1"
    );
    this.Enemy06 = groupeEnemy2.create(
      this.SPE6.x,
      this.SPE6.y,
      "enemyFlying_1"
    );
    this.Enemy07 = groupeEnemy2.create(
      this.SPE7.x,
      this.SPE7.y,
      "enemyFlying_1"
    );
    this.Enemy08 = groupeEnemy2.create(
      this.SPE8.x,
      this.SPE8.y,
      "enemyFlying_1"
    );
    this.Enemy09 = groupeEnemy2.create(
      this.SPE9.x,
      this.SPE9.y,
      "enemyFlying_1"
    );
    this.Enemy0910 = groupeEnemy2.create(
      this.SPE910.x,
      this.SPE910.y,
      "enemyFlying_1"
    );
    this.Enemy0911 = groupeEnemy2.create(
      this.SPE911.x,
      this.SPE911.y,
      "enemyFlying_1"
    );
    this.Enemy0912 = groupeEnemy2.create(
      this.SPE912.x,
      this.SPE912.y,
      "enemyFlying_1"
    );
    this.Enemy0913 = groupeEnemy2.create(
      this.SPE913.x,
      this.SPE913.y,
      "enemyFlying_1"
    );
    this.Enemy0914 = groupeEnemy2.create(
      this.SPE914.x,
      this.SPE914.y,
      "enemyFlying_1"
    );
    this.Enemy0915 = groupeEnemy2.create(
      this.SPE915.x,
      this.SPE915.y,
      "enemyFlying_1"
    );
    this.Enemy0916 = groupeEnemy2.create(
      this.SPE916.x,
      this.SPE916.y,
      "enemyFlying_1"
    );

    this.Enemy11 = groupeEnemy1.create(
      this.SPE11.x,
      this.SPE11.y,
      "enemyFloating_1"
    );
    this.Enemy12 = groupeEnemy1.create(
      this.SPE12.x,
      this.SPE12.y,
      "enemyFloating_1"
    );
    this.Enemy13 = groupeEnemy1.create(
      this.SPE13.x,
      this.SPE13.y,
      "enemyFloating_1"
    );
    this.Enemy14 = groupeEnemy1.create(
      this.SPE14.x,
      this.SPE14.y,
      "enemyFloating_1"
    );
    this.Enemy15 = groupeEnemy1.create(
      this.SPE15.x,
      this.SPE15.y,
      "enemyFloating_1"
    );
    this.Enemy16 = groupeEnemy1.create(
      this.SPE16.x,
      this.SPE16.y,
      "enemyFloating_1"
    );
    this.Enemy17 = groupeEnemy1.create(
      this.SPE17.x,
      this.SPE17.y,
      "enemyFloating_1"
    );
    this.Enemy18 = groupeEnemy1.create(
      this.SPE18.x,
      this.SPE18.y,
      "enemyFloating_1"
    );
    this.Enemy19 = groupeEnemy1.create(
      this.SPE19.x,
      this.SPE19.y,
      "enemyFloating_1"
    );
    this.Enemy1910 = groupeEnemy1.create(
      this.SPE1910.x,
      this.SPE1910.y,
      "enemyFloating_1"
    );
    this.Enemy1911 = groupeEnemy1.create(
      this.SPE1911.x,
      this.SPE1911.y,
      "enemyFloating_1"
    );
    this.Enemy1912 = groupeEnemy1.create(
      this.SPE1912.x,
      this.SPE1912.y,
      "enemyFloating_1"
    );
    this.Enemy1913 = groupeEnemy1.create(
      this.SPE1913.x,
      this.SPE1913.y,
      "enemyFloating_1"
    );
    this.Enemy1914 = groupeEnemy1.create(
      this.SPE1914.x,
      this.SPE1914.y,
      "enemyFloating_1"
    );
    this.Enemy1915 = groupeEnemy1.create(
      this.SPE1915.x,
      this.SPE1915.y,
      "enemyFloating_1"
    );
    this.Enemy1916 = groupeEnemy1.create(
      this.SPE1916.x,
      this.SPE1916.y,
      "enemyFloating_1"
    );
    this.Enemy21 = groupeEnemy4.create(
      this.SPE21.x,
      this.SPE21.y,
      "enemyWalking_1"
    );
    this.Enemy22 = groupeEnemy4.create(
      this.SPE22.x,
      this.SPE22.y,
      "enemyWalking_1"
    );
    this.Enemy23 = groupeEnemy4.create(
      this.SPE23.x,
      this.SPE23.y,
      "enemyWalking_1"
    );
    this.Enemy24 = groupeEnemy4.create(
      this.SPE24.x,
      this.SPE24.y,
      "enemyWalking_1"
    );
    this.Enemy25 = groupeEnemy4.create(
      this.SPE25.x,
      this.SPE25.y,
      "enemyWalking_1"
    );
    this.Enemy26 = groupeEnemy4.create(
      this.SPE26.x,
      this.SPE26.y,
      "enemyWalking_1"
    );
    this.Enemy27 = groupeEnemy4.create(
      this.SPE27.x,
      this.SPE27.y,
      "enemyWalking_1"
    );
    this.Enemy28 = groupeEnemy4.create(
      this.SPE28.x,
      this.SPE28.y,
      "enemyWalking_1"
    );
    this.Enemy29 = groupeEnemy4.create(
      this.SPE29.x,
      this.SPE29.y,
      "enemyWalking_1"
    );
    this.Enemy30 = groupeEnemy4.create(
      this.SPE30.x,
      this.SPE30.y,
      "enemyWalking_1"
    );

    this.Enemy31 = groupeEnemy4.create(
      this.SPE31.x,
      this.SPE31.y,
      "enemySwimming_1"
    );
    this.Enemy32 = groupeEnemy4.create(
      this.SPE32.x,
      this.SPE32.y,
      "enemySwimming_1"
    );
    this.Enemy33 = groupeEnemy4.create(
      this.SPE33.x,
      this.SPE33.y,
      "enemySwimming_1"
    );
    this.Enemy34 = groupeEnemy4.create(
      this.SPE34.x,
      this.SPE34.y,
      "enemySwimming_1"
    );
    this.Enemy35 = groupeEnemy4.create(
      this.SPE35.x,
      this.SPE35.y,
      "enemySwimming_1"
    );
    this.Enemy36 = groupeEnemy4.create(
      this.SPE36.x,
      this.SPE36.y,
      "enemySwimming_1"
    );
    this.Enemy37 = groupeEnemy4.create(
      this.SPE37.x,
      this.SPE37.y,
      "enemySwimming_1"
    );
    this.Enemy38 = groupeEnemy4.create(
      this.SPE38.x,
      this.SPE38.y,
      "enemySwimming_1"
    );
    this.Enemy39 = groupeEnemy4.create(
      this.SPE39.x,
      this.SPE39.y,
      "enemySwimming_1"
    );
    this.Enemy3910 = groupeEnemy4.create(
      this.SPE3910.x,
      this.SPE3910.y,
      "enemySwimming_1"
    );
    this.Enemy3911 = groupeEnemy4.create(
      this.SPE3911.x,
      this.SPE3911.y,
      "enemySwimming_1"
    );
    this.Enemy3912 = groupeEnemy4.create(
      this.SPE3912.x,
      this.SPE3912.y,
      "enemySwimming_1"
    );
    this.Enemy3913 = groupeEnemy4.create(
      this.SPE3913.x,
      this.SPE3913.y,
      "enemySwimming_1"
    );
    this.Enemy3914 = groupeEnemy4.create(
      this.SPE3914.x,
      this.SPE3914.y,
      "enemySwimming_1"
    );
    this.Enemy3915 = groupeEnemy4.create(
      this.SPE3915.x,
      this.SPE3915.y,
      "enemySwimming_1"
    );
    this.Enemy3916 = groupeEnemy4.create(
      this.SPE3916.x,
      this.SPE3916.y,
      "enemySwimming_1"
    );
    this.Enemy3917 = groupeEnemy4.create(
      this.SPE3917.x,
      this.SPE3917.y,
      "enemySwimming_1"
    );
    this.Enemy3918 = groupeEnemy4.create(
      this.SPE3918.x,
      this.SPE3918.y,
      "enemySwimming_1"
    );
    this.Enemy3919 = groupeEnemy4.create(
      this.SPE3919.x,
      this.SPE3919.y,
      "enemySwimming_1"
    );

    //CREATION PLAYER
    player = this.physics.add.sprite(
      this.Spawnpoint.x, //coordonne x au Spawpoint debut nivuea
      this.Spawnpoint.y,
      "RWG0"
    );
    player.setGravity(0, 2000);
    //Diminution de la taille
    player.setScale(0.15);

    //Paramétrage activation des colisions player et ennemis
    player.setCollideWorldBounds(true);

    //Paramétrage de colisions
    Sol.setCollisionByProperty({ Colision2: true });

    //COLLISONS
    //Paramétrage colision entre player/ennemis et tileset
    this.physics.add.collider(player, Sol);
    this.physics.add.collider(player, fin);

    this.physics.add.collider(
      groupeBullets,
      Sol,
      this.destruction_balle,
      null,
      this
    );

    this.physics.add.collider(groupeEnemy4, Sol);
    this.physics.add.collider(Bloc3, Sol);
    this.physics.add.collider(Bloc4, Sol);
    this.physics.add.collider(Bloc5, Sol);
    this.physics.add.collider(Bloc1, Sol);
    this.physics.add.collider(Bloc7, Sol);
    this.physics.add.collider(Bloc9, Sol);
    this.physics.add.collider(Bloc93, Sol);
    this.physics.add.collider(Bloc95, Sol);

    //COMPTEUR DE MORT
    // Création compteur au SpawnPoint Player
    compteur = this.add.text(
      this.Spawnpoint.x,
      this.Spawnpoint.y - 100,
      "Deaths count : " + compteur_de_mort,
      {
        fontSize: "32px", //tille de police
        fill: "#ff0044"
      }
    );

    //Création d'une zone de texte qui affiche le nombre de morts à la fin du niveau
    compteur1 = this.add.text(
      this.Spawnpoint1.x,
      this.Spawnpoint1.y,
      "Deaths count : " + compteur_de_mort,
      {
        fontSize: "32px",
        fill: "#ff0044"
      }
    );

    //Animations ennemies
    this.anims.create({
      key: "EnemyFlying",
      frames: [
        { key: "enemyFlying_1" },
        { key: "enemyFlying_2" },
        { key: "enemyFlying_3" },
        { key: "enemyFlying_2" }
      ],
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: "EnemyFloating",
      frames: [
        { key: "enemyFloating_1" },
        { key: "enemyFloating_2" },
        { key: "enemyFloating_3" },
        { key: "enemyFloating_2" }
      ],
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "EnemySwimming",
      frames: [
        { key: "enemySwimming_1" },
        { key: "enemySwimming_2" },
        { key: "enemySwimming_3" },
        { key: "enemySwimming_2" }
      ],
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "EnemyWalking",
      frames: [
        { key: "enemyWalking_1" },
        { key: "enemyWalking_2" },
        { key: "enemyWalking_3" },
        { key: "enemyWalking_2" }
      ],
      frameRate: 10,
      repeat: -1
    });

    //animations player
    this.anims.create({
      key: "Jump1",
      frames: [
        { key: "Jump_000" },
        { key: "Jump_001" },
        { key: "Jump_002" },
        { key: "Jump_003" },
        { key: "Jump_004" },
        { key: "Jump_005" },
        { key: "Roll_000" },
        { key: "Roll_001" },
        { key: "Roll_002" },
        { key: "Roll_003" },
        { key: "Roll_004" },
        { key: "Roll_005" },
        { key: "Roll_006" },
        { key: "Roll_007" },
        { key: "Jump_000" },
        { key: "Jump_001" },
        { key: "Jump_002" },
        { key: "Jump_003" },
        { key: "Jump_004" },
        { key: "Jump_005" }
      ],
      frameRate: 50,
      repeat: null
    });
    this.anims.create({
      key: "Idle",
      frames: [
        { key: "Idle000" },
        { key: "Idle001" },
        { key: "Idle002" },
        { key: "Idle003" },
        { key: "Idle004" },
        { key: "Idle005" },
        { key: "Idle006" },
        { key: "Idle007" },
        { key: "Idle008" },
        { key: "Idle009" },
        { key: "Idle010" },
        { key: "Idle011" }
      ],
      frameRate: 10,
      repeat: -1
    });

    //Attribution des annimations aux groupes ennemis + enlever gravité
    groupeEnemy1.children.iterate(function(groupeEnemy1) {
      groupeEnemy1.play("EnemyFloating", true); //appliquer animation
      groupeEnemy1.body.allowGravity = false; //enlever la gravité au groupeEnemy1
    });
    groupeEnemy2.children.iterate(function(groupeEnemy2) {
      groupeEnemy2.play("EnemyFlying", true);
      groupeEnemy2.body.allowGravity = false;
    });
    groupeEnemy3.children.iterate(function(groupeEnemy3) {
      groupeEnemy3.play("EnemySwimming", true);
      groupeEnemy3.body.allowGravity = false;
    });
    groupeEnemy4.children.iterate(function(groupeEnemy4) {
      groupeEnemy4.play("EnemyWalking", true);
      groupeEnemy4.body.allowGravity = false;
    });

    //Rendre les ennemis et bloc destructibles tueurs : retour depart si le player touche un ennemy ou bloc
    this.physics.add.overlap(
      player,
      groupeEnemy1,
      this.retourDepart,
      null,
      this
    );
    this.physics.add.overlap(
      player,
      groupeEnemy2,
      this.retourDepart,
      null,
      this
    );
    this.physics.add.overlap(
      player,
      groupeEnemy3,
      this.retourDepart,
      null,
      this
    );
    this.physics.add.overlap(
      player,
      groupeEnemy4,
      this.retourDepart,
      null,
      this
    );
    this.physics.add.overlap(
      player,
      groupeCaisses,
      this.retourDepart,
      null,
      this
    );

    //Destruction ennemy si on tire dessus
    this.physics.add.overlap(
      groupeBullets,
      groupeEnemy2,
      this.destruction_enemy,
      null,
      this
    );
    this.physics.add.overlap(
      groupeBullets,
      groupeEnemy1,
      this.destruction_enemy,
      null,
      this
    );
    this.physics.add.overlap(
      groupeBullets,
      groupeEnemy4,
      this.destruction_enemy,
      null,
      this
    );

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
    });

    // Apparition instructions tutoriel
    const TabObjects = map.getObjectLayer("InstructionTuto");
    TabObjects.objects.forEach(element => {
      var texte = element.text;
      this.add.text(element.x, element.y, texte["text"], {
        fontSize: "24px",
        color: "black",
        fontFamily: texte["fontfamily"]
      });
    });

    //Création d'une zone de détection pour détecter si le joueur est au niveau de la porte finale
    fin.setTileLocationCallback(
      289, // coordoonnées x
      14, // coordonnees y
      2, // taille largeur
      2, // taille hauteur
      function() {
        this.dansLaZone = 1;
      },
      this
    );

    //Paramétrage de la caméra
    const camera = this.cameras.main;
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(player); //camera suit le player
    this.physics.world.setBounds(0, 0, 20000, 1950); //delimitation niveau

    //Activation récupération cursors
    this.cursors1 = this.input.keyboard.createCursorKeys();

    //Paramétrage touches clavier
    boutonFeu = this.input.keyboard.addKey("S"); //bouton pour tirer
    boutonpause = this.input.keyboard.addKey("P"); //bouton pour megttre pause le niveau
    mute = this.input.keyboard.addKey("M"); //bouton M pour mute music
    playmusic = this.input.keyboard.addKey("L"); //bouton L pour play music

    //Paramétrage musique du niveau
    MusicNiveau1 = this.sound.add("MusicNiveau1"); //musique du nivea1
    this.SonCoupsDeFeu = this.sound.add("SonCoupsDeFeu"); //son quand player tire
    this.SonPorte = this.sound.add("SonPorte"); //son de porte pour la fin du niveau
    this.son_caisse = this.sound.add("son_caisse"); //son de destruction des caisses
    MusicNiveau1.play(); //joeuer music niveau 1 immediatement
    MusicNiveau1.setLoop(); //play en boucle

    //Fin create
  }
  update() {
    //mettre le niveau 1 en pause
    if (Phaser.Input.Keyboard.JustDown(boutonpause)) {
      this.scene.launch("pause1"); //lancer la scene pause1
      this.scene.pause(); //mettre le niveau1 en pause
    }

    // PARAMETRES DE MUSIQUE
    if (Phaser.Input.Keyboard.JustDown(mute)) {
      //METTRE MUTE
      MusicNiveau1.setMute(true);
      soncoupé = true;
    }
    if (Phaser.Input.Keyboard.JustDown(playmusic)) {
      MusicNiveau1.setMute(false); //RELANCER LA MUSIQUE
      soncoupé = false;
    }

    //Faire respirer le player au repos avec animation
    if (start == 0) {
      player.anims.play("Idle", true);
    }

    //Si le player est dans la zone finale, alors il a terminé le niveau et il est téléporté au menu principal
    if (this.dansLaZone) {
      player.setTint("0xff0000");
      check1 = true; //variable passe à true qd reussi niveau
      this.dansLaZone = 0;
      this.scene.start("menuPrincipal"); //retour au menu principal
      MusicNiveau1.stop(); //arreter musique niveau1
      this.SonPorte.play(); //lancer le son d'ouverture de porte
    }

    if (mort) {
      compteur_de_mort++; //compteur s'increment
      compteur.setText("Deaths count : " + compteur_de_mort); //affichage du compteur de mort
      compteur1.setText("Deaths count : " + compteur_de_mort);
      player.setVelocity(0, 0);
      mort = 0;
      start = 0;
    }

    //Paramétrage compteur de mort & reset
    //si le joeur est bloqué
    if (player.body.blocked.right) {
      player.body.reset(this.Spawnpoint.x, this.Spawnpoint.y);
      mort = 1; //le joeur est mort

      //player.x =this.Spawnpoint.y; //retour au depart
      //player.y = this.Spawnpoint.y;
    }

    //Commencer un essai
    if (this.cursors1.space.isDown) {
      start = 1;
    }

    //Paramètre de jeu
    //si le jeu demarre (start=1)
    if (start == 1) {
      //Paramétrage vitesse player
      player.setVelocityX(350);
      //Paramétrage saut
      if (this.cursors1.space.isDown && player.body.blocked.down) {
        player.setVelocityY(-600);
      }
      if (this.cursors1.space.isDown) {
        player.anims.play("Jump1", true);
      }
      //Paramétrage course
      if (player.body.blocked.down) {
        player.anims.play("run", true);
      }
      if (Phaser.Input.Keyboard.JustDown(boutonFeu)) {
        this.tirer(player);
      }
    }

    //Fin update
  }

  //METHODES
  retourDepart(player, enemy) {
    player.body.reset(this.Spawnpoint.x, this.Spawnpoint.y);
    mort = 1; //le player est mort
  }

  tirer(player) {
    var coefDir = 1;
    var bullet = groupeBullets.create(
      //CREATION BALLE A COTE PLAYER
      player.x + 25 * coefDir, //orienter la balle en fonction du coefdir
      player.y + 10,
      "Bullet-2_2"
    );
    bullet.setScale(0.08); //rappetissir la balle
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
    bullet.destroy();
    enemy.destroy();
  }

  destruction_caisse(bullet, caisse) {
    caisse.pointsVie--; //decrement point de vie caisse
    if (caisse.pointsVie === 0) {
      caisse.destroy(); //detruire la caisse
      if (soncoupé==false){
        this.son_caisse.play(); //lancer le son de destruction caisse
      this.son_caisse.setVolume(7); //augmentation du volume
      }
    }
    bullet.destroy(); //detruire la balle
  }

  destruction_balle(bullet, xd) {
    //  if (bullet.body.blocked.right) {
    bullet.destroy();
    //  bullet.x = this.Spawnpoint.x - 200;
    // bullet.y = this.Spawnpoint.y;
  }
}
