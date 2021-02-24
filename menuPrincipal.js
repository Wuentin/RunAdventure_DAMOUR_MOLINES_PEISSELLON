//Classe MENU PRINCIPAL
class menuPrincipal extends Phaser.Scene {
  constructor() {
    super({ key: "menuPrincipal" });
  }

  preload() {
    this.load.audio("son_caisse", "sons/explosion caisse.ogg");
    this.load.audio("sonPorte", "sons/SonPorte.m4a");
    this.load.audio("sonMenu", "sons/happymenu.ogg");
    this.load.audio("son_gun", "sons/tir.wav");
    this.load.image("caisse", "images/caisse.png");
    this.load.image("bullet", "images/bullets.png");
    this.load.image("enemyHaut", "images/enemy1.png");
    this.load.image("enemyMilieu", "images/enemy2.png");
    this.load.image("enemyBas", "images/enemy3.png");
    this.load.image("tilesheet", "tilesheet_complete.png");
    this.load.image("background", "TilesetMenu/set1_background.png");
    this.load.image("background_hills", "TilesetMenu/set1_hills.png");
    this.load.image("background_tiles", "TilesetMenu/set1_tiles.png");

    this.load.tilemapTiledJSON("mapMenu", "tiledMap/Menu_V1.json");

    this.load.image("run_000", "perso/RWG0.png");
    this.load.image("run_001", "perso/RWG1.png");
    this.load.image("run_002", "perso/RWG2.png");
    this.load.image("run_003", "perso/RWG3.png");
    this.load.image("run_004", "perso/RWG4.png");
    this.load.image("run_005", "perso/RWG5.png");
    this.load.image("run_006", "perso/RWG6.png");
    this.load.image("run_007", "perso/RWG7.png");
    this.load.image("run_008", "perso/RWG8.png");
    this.load.image("run_009", "perso/RWG9.png");
    this.load.image("Jump_000", "perso/Jump_000.png");
    this.load.image("Jump_001", "perso/Jump_001.png");
    this.load.image("Jump_002", "perso/Jump_002.png");
    this.load.image("Jump_003", "perso/Jump_003.png");
    this.load.image("Jump_004", "perso/Jump_004.png");
    this.load.image("Jump_005", "perso/Jump_005.png");
    this.load.image("run_000l", "perso/RWG0-left.png");
    this.load.image("run_001l", "perso/RWG1-left.png");
    this.load.image("run_002l", "perso/RWG2-left.png");
    this.load.image("run_003l", "perso/RWG3-left.png");
    this.load.image("run_004l", "perso/RWG4-left.png");
    this.load.image("run_005l", "perso/RWG5-left.png");
    this.load.image("run_006l", "perso/RWG6-left.png");
    this.load.image("run_007l", "perso/RWG7-left.png");
    this.load.image("run_008l", "perso/RWG8-left.png");
    this.load.image("run_009l", "perso/RWG9-left.png");
    this.load.image("Jump_000l", "perso/Jump_000-left.png");
    this.load.image("Jump_001l", "perso/Jump_001-left.png");
    this.load.image("Jump_002l", "perso/Jump_002-left.png");
    this.load.image("Jump_003l", "perso/Jump_003-left.png");
    this.load.image("Jump_004l", "perso/Jump_004-left.png");
    this.load.image("Jump_005l", "perso/Jump_005-left.png");
  }
  create() {
    //  AJOUT TILED (Monde)
    this.physics.world.setBounds(0, 0, 1600, 1270);
    const map = this.make.tilemap({ key: "mapMenu" });
    // ajout set (nom tiled su set, image correspondante preload)
    const tileset = map.addTilesetImage("tileset_base", "tilesheet");
    const backgroundset = map.addTilesetImage("Background", "background");
    const background_tilesset = map.addTilesetImage(
      "Background_tiles",
      "background_tiles"
    );
    const background_hillsset = map.addTilesetImage(
      "Background_hills",
      "background_hills"
    );

    // ajout layer (nom layer tiled, nom set ref)
    const backGround1Layer = map.createStaticLayer(
      "Background",
      backgroundset,
      0,
      0
    );
    const backGround_tilesLayer = map.createStaticLayer(
      "Background_tiles",
      background_tilesset,
      0,
      0
    );
    const backGround_hillsLayer = map.createStaticLayer(
      "Background_hills",
      background_hillsset,
      0,
      0
    );

    const backGround_elementsLayer = map.createStaticLayer(
      "background_elements",
      tileset,
      0,
      0
    );
    const solLayer = map.createStaticLayer("sol", tileset, 0, 0);
    const muteLayer = map.createStaticLayer("mute", tileset, 0, 0);
    const solcachéLayer = map.createStaticLayer("sol caché", tileset, 0, 0);
    const fakeLayer = map.createStaticLayer("fake", tileset, 0, 0);
    const eauLayer = map.createDynamicLayer("eau", tileset, 0, 0);
    const niveau1Layer = map.createDynamicLayer("niveau1", tileset, 0, 0);
    const niveau2Layer = map.createDynamicLayer("niveau2", tileset, 0, 0);
    const niveau3Layer = map.createDynamicLayer("niveau3", tileset, 0, 0);

    //ajout objects et spawnpoint
    //spawpoint txt level 1
    const txt_niveau1 = map.findObject(
      "txt_niveau",
      obj => obj.name === "level1"
    );
    //spawpoint txt level 2
    const txt_niveau2 = map.findObject(
      "txt_niveau",
      obj => obj.name === "level2"
    );
    //spawpoint player
    this.spawnpointM = map.findObject(
      "spawnpoint",
      obj => obj.name === "spawn"
    );
    //spawnpoint des ennemies
    const monstre1 = map.findObject("ennemies", obj => obj.name === "ennemy1");
    const monstre2 = map.findObject("ennemies", obj => obj.name === "ennemy2");
    const monstre3 = map.findObject("ennemies", obj => obj.name === "ennemy3");

    //AJOUT TOUCHES CLAVIER
    this.cursors = this.input.keyboard.createCursorKeys();
    entrer = this.input.keyboard.addKey("ENTER"); //touche entrée
    mute = this.input.keyboard.addKey("M"); //touche M pour mute
    playmusic = this.input.keyboard.addKey("L"); //touche L pour play music
    boutonFeu = this.input.keyboard.addKey("S"); //touche S pour tirer

    //AJOUT MUSIC ET SONS
    this.son_menu = this.sound.add("sonMenu"); //son du menu principal
    this.son_menu.play(); //on joue le son du menu automatiquement
    this.son_menu.setLoop(true); //on joue le son du menu en boucle

    this.son_Gun = this.sound.add("son_gun"); //son qd le joeur tire une balle
    this.son_caisse = this.sound.add("son_caisse"); //son quand une caisse est détruite
    this.son_bouton = this.sound.add("sonPorte"); //son quand on selectionne un niveau
    this.add.image(1540, 70, "unmute"); //image pour dire que le jeu n'est pas en mute

    //AJOUT GROUPES
    groupeEnemy = this.physics.add.group(
      { setAllowGravity: false },
      { setVelocityY: 0 } //suppression de vitesse a tous les ennemies
    );
    groupeBullets = this.physics.add.group();
    groupeCaisses = this.physics.add.staticGroup();

    //AJOUT PARAMETRES PLAYER

    player = this.physics.add.sprite(
      this.spawnpointM.x, //coordonnée en x du playeur qd il apparait au spawpoint
      this.spawnpointM.y, //coordonnée en x du playeur qd il apparait
      "run_000" //il cours
    );
    player.setGravity(0, 2000);
    player.setScale(0.2); //retrecir la dimension playeyr
    player.setBounce(0.1); //ajouter du rebond au playeyr pour plus de realisme
    player.setCollideWorldBounds(true); //le playeur se cogne au bord de la fenetre de jeu

    //AJOUT PARAMETRES ENNEMIS VOLANTS (au spawnpoint des enemies)
    var Enemy1 = groupeEnemy.create(monstre1.x, monstre1.y, "enemyHaut");
    var Enemy2 = groupeEnemy.create(monstre2.x, monstre2.y, "enemyHaut");
    var Enemy3 = groupeEnemy.create(monstre3.x, monstre3.y, "enemyHaut");

    // AJOUT DES CAISSES et PARAMETRES (devant la porte du niveau 3)
    groupeCaisses.create(280, 170, "caisse");
    groupeCaisses.create(320, 170, "caisse");
    groupeCaisses.create(360, 170, "caisse");
    groupeCaisses.create(280, 130, "caisse");
    groupeCaisses.create(320, 130, "caisse");
    groupeCaisses.create(360, 130, "caisse");
    groupeCaisses.create(280, 90, "caisse");
    groupeCaisses.create(320, 90, "caisse");
    groupeCaisses.create(360, 90, "caisse");

    groupeCaisses.children.iterate(function(groupeCaisses) {
      groupeCaisses.pointsVie = 2; //2 points de vie attribués à l'ensemble des caisses
      groupeCaisses.setScale(1.5); //taille de l'ensemble des caisses augmentée
    });
    //AJOUT DES RECTANGLES DE SELECTION
    this.r1 = this.add.rectangle(1250, 960, 450, 130); //rectangle selection level1
    this.r1.setStrokeStyle(2, 0xffffff); //couleur blanche
    this.r1.setVisible(false); //il est invisible
    this.r2 = this.add.rectangle(865, 510, 320, 130); //rectangle selection level2
    this.r2.setStrokeStyle(2, 0xffffff);
    this.r2.setVisible(false);
    this.r3 = this.add.rectangle(320, 220, 130, 50); //rectangle selection level3
    this.r3.setStrokeStyle(2, 0xffffff);
    this.r3.setVisible(false);

    //AJOUT DES MESSAGES
    const boutonNiveau1 = this.add.text(
      txt_niveau1.x, //coordonné x du level1
      txt_niveau1.y,
      "LEVEL 1",
      {
        font: "65px MS Shell Dlg 2", //police
        align: "center", //centrée
        fill: "#ffff" //couleur blanche
      }
    );
    const boutonNiveau2 = this.add.text(
      txt_niveau2.x,
      txt_niveau2.y,
      "LEVEL 2",
      {
        font: "58px MS Shell Dlg 2",
        align: "center",
        fill: "#ffff"
      }
    );

    //msg si on a pas fini le niveau 1 qui apparait en haut de l'ecran
    this.message1 = this.add.text(500, 100, "UNLOCK LEVEL 1 FIRST", {
      fontSize: "56px",
      fill: "#ffff"
    });
    this.message1.setVisible(false);
    //msg si on a pas fini le niveau 2 qui apparait en haut de l'ecran
    this.message2 = this.add.text(500, 100, "UNLOCK LEVEL 2 FIRST", {
      fontSize: "56px",
      fill: "#ffff"
    });
    this.message2.setVisible(false);

    //AJOUT DES ZONES SPECIALES
    //plateforme niveau 1
    niveau1Layer.setTileLocationCallback(
      16, // coordoonnées x
      14, // coordonnees y
      6, // taille largeur
      1, // taille hauteur
      function() {
        this.dansLaZone1 = 1;
      },
      this
    );
    //plateforme niveau 2
    niveau2Layer.setTileLocationCallback(
      11,
      7,
      5,
      1,
      function() {
        this.dansLaZone2 = 1;
      },
      this
    );
    //plateforme niveau 3
    niveau3Layer.setTileLocationCallback(
      4,
      3,
      2,
      1,
      function() {
        this.dansLaZone3 = 1;
      },
      this
    );
    //zone d'eau
    eauLayer.setTileLocationCallback(
      6,
      19,
      16,
      1,
      function() {
        this.dansLaZoneEau = 1;
      },
      this
    );

    //AJOUT COLLISIONS
    //collisions avec sol vert
    solLayer.setCollisionByProperty({ pourMarcher: true });
    this.physics.add.collider(player, solLayer);
    //collision avec niveau 1
    niveau1Layer.setCollisionByProperty({ pourMarcher: true });
    this.physics.add.collider(player, niveau1Layer);
    //collision avec niveau 2
    niveau2Layer.setCollisionByProperty({ pourMarcher: true });
    this.physics.add.collider(player, niveau2Layer);
    //collision avec niveau 3
    niveau3Layer.setCollisionByProperty({ pourMarcher: true });
    this.physics.add.collider(player, niveau3Layer);
    //collision avec sol caché
    solcachéLayer.setCollisionByProperty({ pourMarcher: true });
    this.physics.add.collider(player, solcachéLayer);
    //coliision avec l'eau
    eauLayer.setCollisionByProperty({ mourir: true });
    this.physics.add.collider(player, eauLayer);
    //colision entre player et les caisses
    this.physics.add.collider(player, groupeCaisses);

    this.physics.add.collider(
      groupeBullets,
      solLayer,
      this.destruction_balle, //permet de détruire les balles si elles sont en contact avec un bloc sol
      null,
      this
    );
    /////////////

    ////////////
    //OVERLAP
    //destruction caisse si on tire dessus
    this.physics.add.overlap(
      groupeBullets,
      groupeCaisses,
      this.destruction_caisse,
      null,
      this
    );
    //retour depart si on touche un ennemy
    this.physics.add.overlap(
      player,
      groupeEnemy,
      this.retourDepart,
      null,
      this
    );

    //Destruction ennemy si on tire dessus
    this.physics.add.overlap(
      groupeBullets,
      groupeEnemy,
      this.destruction_enemy,
      null,
      this
    );

    //ANIMATIONS
    //courir vers la droite
    this.anims.create({
      key: "run",
      frames: [
        { key: "run_000" },
        { key: "run_001" },
        { key: "run_002" },
        { key: "run_003" },
        { key: "run_004" },
        { key: "run_005" },
        { key: "run_006" },
        { key: "run_007" },
        { key: "run_008" },
        { key: "run_009" }
      ],
      frameRate: 20,
      repeat: -1
    });
    //courir vers la gauche
    this.anims.create({
      key: "runl",
      frames: [
        { key: "run_000l" },
        { key: "run_001l" },
        { key: "run_002l" },
        { key: "run_003l" },
        { key: "run_004l" },
        { key: "run_005l" },
        { key: "run_006l" },
        { key: "run_007l" },
        { key: "run_008l" },
        { key: "run_009l" }
      ],
      frameRate: 20,
      repeat: -1
    });
    //playeur immobile
    this.anims.create({
      key: "pause",
      frames: [{ key: "run_002" }],
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "pausel",
      frames: [{ key: "run_002l" }],
      frameRate: 12,
      repeat: -1
    });
    //sauter vers la droite
    this.anims.create({
      key: "Jump",
      frames: [
        { key: "Jump_000" },
        { key: "Jump_001" },
        { key: "Jump_002" },
        { key: "Jump_003" },
        { key: "Jump_004" },
        { key: "Jump_005" }
      ],
      frameRate: 400,
      repeat: -1
    });
    //sauter vers la gauche
    this.anims.create({
      key: "Jumpl",
      frames: [
        { key: "Jump_000l" },
        { key: "Jump_001l" },
        { key: "Jump_002l" },
        { key: "Jump_003l" },
        { key: "Jump_004l" },
        { key: "Jump_005l" }
      ],
      frameRate: 400,
      repeat: -1
    });
    //ennemi volant
    this.anims.create({
      key: "animEnemy",
      frames: [
        { key: "enemyHaut" },
        { key: "enemyMilieu" },
        { key: "enemyBas" },
        { key: "enemyMilieu" }
      ],
      frameRate: 10,
      repeat: -1
    });

    //APPLICATION A TOUS LES ENNEMIES LES ANIMS ET PAS DE GRAVITE
    groupeEnemy.children.iterate(function(groupeEnemy) {
      groupeEnemy.play("animEnemy", true);
      groupeEnemy.body.allowGravity = false;
    });
  }
  update() {
    //DEPLACEMENT
    //courir vers la gauche quand on appuis sur fleche gauche
    if (this.cursors.left.isDown) {
      player.setVelocityX(-400);
      player.anims.play("runl", true);
      direction = "left"; //direction devient gauche
    } else if (this.cursors.right.isDown) {
      player.setVelocityX(400);
      player.anims.play("run", true);
      direction = "right";
    } else {
      if (direction == "right") {
        player.setVelocityX(0); //si on est trouné vers la droite alors
        player.anims.play("pause", true); //animation pause droite
      } else {
        player.setVelocityX(0);
        player.anims.play("pausel", true); //sinon animation pause gauche
      }
    }

    //SAUTER
    if (this.cursors.space.isDown && player.body.blocked.down) {
      if (direction == "right") {
        player.setVelocityY(-800); //si player est tourné vers la droite
        player.anims.play("Jump", true); //alors animation sauter vers la droite
      } else {
        player.setVelocityY(-800);
        player.anims.play("Jumpl", true); //sinon anim sauter vers la gauche
      }
    }

    // PARAMETRES DE MUSIQUE
    if (Phaser.Input.Keyboard.JustDown(mute)) {
      //METTRE MUTE
      this.son_menu.setMute(true);
      this.add.image(1540, 70, "immute"); //image mute remplace image non mute
      soncoupé = true; //le son est coupé
    }
    if (Phaser.Input.Keyboard.JustDown(playmusic)) {
      this.son_menu.setMute(false); //RELANCER LA MUSIQUE
      this.add.image(1540, 70, "unmute");
      soncoupé = false;
    }

    //ENTRER DANS UN NIVEAU
    if (this.dansLaZone1) {
      this.r1.setVisible(true); //SELECTION DU NIVEAU AVEC DESSIN RECTANGLE
      this.dansLaZone1 = 0;
      if (Phaser.Input.Keyboard.JustDown(entrer)) {
        this.scene.start("niveau1"); //lancer niveau 1
        this.son_bouton.play();
        this.son_bouton.setVolume(7); //on augmente le son du bouton
        this.son_menu.stop(); //on arrete la musique du menu
      }
    } else {
      this.r1.setVisible(false); //si player plus dans la zone le rectangle de selection n'est plus visible
    }

    if (this.dansLaZone2) {
      this.r2.setVisible(true);
      this.dansLaZone2 = 0;
      if (Phaser.Input.Keyboard.JustDown(entrer)) {
        if (check1 == true) {
          this.scene.start("niveau2"); //LANCER NIVEAU 2 QUE SI NIVEAU 1 REUSSI
          this.son_menu.stop();
          this.son_bouton.play();
          this.son_bouton.setVolume(7);
        } else {
          //SINON ON INDIQUE AU PLAYER DE FINIR NIVEAU1 D'ABORD
          this.message1.setVisible(true);
          setTimeout(this.cacher_msg, 3000, this.message1);
        }
      }
    } else {
      this.r2.setVisible(false);
    }

    if (this.dansLaZone3) {
      this.r3.setVisible(true);
      this.dansLaZone3 = 0;
      if (Phaser.Input.Keyboard.JustDown(entrer)) {
        if (check2 == true) {
          this.scene.start("niveau3"); //LANCER NIVEAU 3 QUE SI NIVEAU 2 REUSSI
          this.son_menu.stop();
          this.son_bouton.play();
          this.son_bouton.setVolume(7);
        } else {
          //SINON ON INDIQUE AU PLAYER DE FINIR NIVEAU2 D'ABORD
          this.message2.setVisible(true);
          setTimeout(this.cacher_msg, 3000, this.message2);
        }
      }
    } else {
      this.r3.setVisible(false);
    }

    // MOURIR (EAU) = RETOUR AU SPAWNPOINT
    if (this.dansLaZoneEau) {
      player.x = this.spawnpointM.x;
      player.y = this.spawnpointM.y;
      this.dansLaZoneEau = 0;
    }

    //TIRER
    if (Phaser.Input.Keyboard.JustDown(boutonFeu)) {
      this.tirer(player, direction); //appel de la fonction tirer
      if (soncoupé == false) {
        this.son_Gun.play(); //SON DU TIR SI LE SON EST PAS MUTE
      }
    }

    //SI ON FINI LE JEU un msg et le compteur de mort s'affiche
    if (check1 == true && check2 == true && check3 == true) {
      const texteFin = this.add.text(
        600, //coordonné x du level1
        100,
        "WELL DONE!",
        {
          font: "65px MS Shell Dlg 2", //police
          align: "center", //centrée
          fill: "#ffff" //couleur blanche
        }
      );
      compteur = this.add.text(550, 200, "Deaths count : " + compteur_de_mort, {
        fontSize: "60px", //tille de police
        fill: "#ffff"
      });
    }
  }

  //METHODES
  retourDepart(player, enemy) {
    player.x = this.spawnpointM.x; //player retour au spawpoint
    player.y = this.spawnpointM.y;
  }

  cacher_msg(msg) {
    msg.setVisible(false);
  }

  tirer(player, direction) {
    var coefDir;
    if (direction == "left") {
      coefDir = -1;
    } else {
      coefDir = 1;
    }
    var bullet = groupeBullets.create(
      //CREATION BALLE A COTE PLAYER
      player.x + 25 * coefDir, //a gauche ou droite en fonction du coeff
      player.y - 4,
      "bullet"
    );
    bullet.setScale(1 / 8); //diminuer taille bullet
    bullet.body.allowGravity = false; //ENLEVER GRAVITE POUR BALLE
    bullet.setVelocity(1000 * coefDir, 0); //VITESSE DE LA BALLE
  }

  destruction_caisse(bullet, caisse) {
    caisse.pointsVie--; //perd un point de vie quand est touché
    if (caisse.pointsVie == 0) {
      caisse.destroy(); //caisse detruite
      if (soncoupé == false) {
        this.son_caisse.play(); //son explosion de la caisse se lance
        this.son_caisse.setVolume(7);
      }
    }
    bullet.destroy(); //destruction de la balle qd elle touche une caisse
  }

  destruction_enemy(bullet, enemy) {
    bullet.destroy(); //detruire balle et ennemi detruit quand touché
    enemy.destroy();
  }

  destruction_balle(bullet, xd) {
    //Fonction qui permet de détruire les balles
    bullet.destroy();
  }
}
