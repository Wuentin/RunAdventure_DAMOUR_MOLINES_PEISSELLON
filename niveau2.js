// CLasse NIVEAU 2 : JETPACK
class niveau2 extends Phaser.Scene {
  constructor() {
    super({ key: "niveau2" });
  }

  preload() {
    this.load.audio("MusicNiveau2", "sons/MusicNiveau2.ogg");
    this.load.image("door1", "images/door1.png");
    this.load.tilemapTiledJSON("map2", "tiledMap/JetpackV1.json");
    this.load.image("tiles", "tilesheet_complete.png");
    this.load.image("tiles2", "images/set1_background_assembled.png");

    this.load.spritesheet("dude", "perso/spritesheet.png", {
      frameWidth: 300,
      frameHeight: 610
    });

    //Chargement des images pour l'animation Jetpack
    this.load.image("Jetpack_000", "perso/Jetpack_000.png");
    this.load.image("Jetpack_001", "perso/Jetpack_001.png");
    this.load.image("Jetpack_002", "perso/Jetpack_002.png");
    this.load.image("Jetpack_003", "perso/Jetpack_003.png");
    this.load.image("Jetpack_004", "perso/Jetpack_004.png");
    this.load.image("Jetpack_005", "perso/Jetpack_005.png");
    this.load.image("Jetpack_006", "perso/Jetpack_006.png");
    this.load.image("Jetpack_007", "perso/Jetpack_007.png");
    //Chargement des images pour l'animation course
    this.load.image("2run_000", "perso/Run_000.png");
    this.load.image("2run_001", "perso/Run_001.png");
    this.load.image("2run_002", "perso/Run_002.png");
    this.load.image("2run_003", "perso/Run_003.png");
    this.load.image("2run_004", "perso/Run_004.png");
    this.load.image("2run_005", "perso/Run_005.png");
    this.load.image("2run_006", "perso/Run_006.png");
    this.load.image("2run_007", "perso/Run_007.png");
    this.load.image("2run_008", "perso/Run_008.png");
    this.load.image("2run_009", "perso/Run_009.png");

    if (gameOver) {
      return;
    }
  }

  create() {
    //Définition des limites du monde
    this.physics.world.setBounds(0, 0, 21140, 1200); //limites de la fenetre de nivuea
    const map = this.make.tilemap({ key: "map2" });

    //Ajout d'une image pour faire une zone de détection
    door1 = this.add.sprite(20955, 516, "door1");
    door1.setScale(0.5);

    //Création des différentes couches
    const tileset = map.addTilesetImage("tilesheet_complete", "tiles");
    const tiletset2 = map.addTilesetImage("set1_background", "tiles2");
    const backLayer = map.createStaticLayer("Couche 0", tiletset2, 0, 0);
    const backLayer1 = map.createStaticLayer("Couche 0.75", tiletset2, 0, 0);
    const backLayer2 = map.createStaticLayer("Couche 0.5", tiletset2, 0, 0);
    const Decoration = map.createStaticLayer("Decoration", tileset, 0, 0);
    const frontLayer = map.createStaticLayer("Couche 1", tileset, 0, 0);

    var Danger = map.createStaticLayer("danger", tileset, 0, 0);

    //Spawpoint player debut niveau2
    this.spawnpoint3 = map.findObject(
      "object",
      obj => obj.name === "spawnpoint" //"spawnpoint2"
    );

    //Création d'une couche dymanique au niveau de la porte fin de niveau pour détecter si le joueur est dans la zone
    const fin = map.createDynamicLayer("Fin", tileset, 0, 0);

    //Initialisation d'un spawnpoint pour le joueur
    player = this.physics.add.sprite(
      this.spawnpoint3.x,
      this.spawnpoint3.y,
      "dude"
    );
    player.setGravity(0, 2000);
    //Dimensionnement de notre joueur
    player.setScale(0.1);
    //On déplace la hitbox du joueur
    player.setOffset(8, 12);
    //Activation des collisions avec les bordures du monde
    player.setCollideWorldBounds(true);
    //Activation de la collision entre la couche principale et le joueur
    this.physics.add.collider(player, frontLayer);
    //Activation de la collsion entre la couche "eau" (Danger) et le joueur. Lorsque que le player est en collision avec la couche Danger, le joueur respawn.
    this.physics.add.collider(
      player,
      Danger,
      function() {
        player.setVelocityX(0);
        compteur_de_mort++;
        mort = 1;
      },
      null
    );
    //Activation des collisions des différentes couches
    frontLayer.setCollisionByProperty({ collides: true });
    Danger.setCollisionByProperty({ collides: true });
    fin.setCollisionByProperty({ collides: true });

    //Création d'une zone de détection pour détecter si le joueur est au niveau de la porte finale
    this.physics.add.collider(player, fin);
    fin.setTileLocationCallback(
      326, // coordoonnées x
      10, // coordonnees y
      2, // taille largeur
      1, // taille hauteur
      function() {
        this.dansLaZone = 1;
      },
      this
    );

    //Définition de la caméra qui va suivre le joueur
    const camera = this.cameras.main;
    this.cameras.main.startFollow(player); //suivre le joueur
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    //Création d'une animation du personnage lorsqu'il est au repos
    this.anims.create({
      key: "turn",
      frames: this.anims.generateFrameNumbers("dude", {
        start: 0,
        end: 7
      }),
      frameRate: 10,
      repeat: -1
    });
    //Création d'une animation lorsque le joueur est en vol (en mode Jetpack)
    this.anims.create({
      key: "Jetpack",
      frames: [
        { key: "Jetpack_000" },
        { key: "Jetpack_001" },
        { key: "Jetpack_002" },
        { key: "Jetpack_003" },
        { key: "Jetpack_004" },
        { key: "Jetpack_005" },
        { key: "Jetpack_006" },
        { key: "Jetpack_007" }
      ],
      frameRate: 7,
      repeat: -1
    });

    //Création d'une animation lorsque le joueur est au sol et qu'il court
    this.anims.create({
      key: "right",
      frames: [
        { key: "2run_000" },
        { key: "2run_001" },
        { key: "2run_002" },
        { key: "2run_003" },
        { key: "2run_004" },
        { key: "2run_005" },
        { key: "2run_006" },
        { key: "2run_007" },
        { key: "2run_008" },
        { key: "2run_009" }
      ],
      frameRate: 10,
      repeat: -1
    });

    //Création d'une variable qui récupère les activations du clavier
    this.cursors2 = this.input.keyboard.createCursorKeys();
    entrer = this.input.keyboard.addKey("ENTER");

    //Création d'une zone de texte qui affiche la consigne pour lancer la partie
    this.add.text(100, 800, "Press Space to Start", {
      fontSize: "32px",
      fill: "#ff0044"
    });
    //Création d'une zone de texte qui affiche le nombre de morts au spawn
    compteur = this.add.text(100, 700, "Deaths count : " + compteur_de_mort, {
      fontSize: "32px",
      fill: "#ff0044"
    });
    //Création d'une zone de texte qui affiche le nombre de morts à la fin du niveau
    compteur1 = this.add.text(
      20800,
      400,
      "Deaths count : " + compteur_de_mort,
      {
        fontSize: "32px",
        fill: "#ff0044"
      }
    );

    mute = this.input.keyboard.addKey("M"); //bouton M pour  mute musique
    playmusic = this.input.keyboard.addKey("L"); //bouton L pour relancer musique
    boutonpause = this.input.keyboard.addKey("P"); //P pour mettre pause
    son_Niveau2 = this.sound.add("MusicNiveau2"); //son du niveau2
    son_Niveau2.play(); //lancer immediatement le son du niveau2
    son_Niveau2.setLoop(true); //joeuer le son en boucle
  }

  update() {
    // PARAMETRES DE MUSIQUE
    if (Phaser.Input.Keyboard.JustDown(mute)) {
      //METTRE MUTE
      son_Niveau2.setMute(true);
      soncoupé = true;
    }
    if (Phaser.Input.Keyboard.JustDown(playmusic)) {
      son_Niveau2.setMute(false); //RELANCER LA MUSIQUE
      soncoupé = false;
    }

    //mettre le niveau 2 en pause
    if (Phaser.Input.Keyboard.JustDown(boutonpause)) {
      this.scene.launch("pause2"); //lancer la scene pause2
      this.scene.pause(); //mettre niveau2 en pause
    }

    //Si le player est dans la zone finale, alors il a terminé le niveau et il est téléporté au menu principal
    if (this.dansLaZone) {
      player.setTint("0xff0000");
      this.dansLaZone = 0;
      check2 = true; //check passe à true car a gagné
      this.scene.start("menuPrincipal"); //retour au menu principal
      son_Niveau2.stop(); //la musique du niveau2 s'arrete
    } else {
      player.clearTint();
    }

    //On vérifie si le joueur appuye sur la touche espace pour lancer le niveau
    if (this.cursors2.space.isDown) {
      start = 1;
    }
    //Si le joueur est mort, on le fait respawn, et on rénitialise sa hitbox
    if (mort) {
      compteur.setText("Deaths count : " + compteur_de_mort);
      player.x = this.spawnpoint3.x; //retour au depart
      player.y = this.spawnpoint3.y + 50;
      mort = 0;
      start = 0;
      player.setOffset(0, 0);
      player.anims.play("turn");
    }

    // Si le joueur a appuyé sur la touche espace pour lancer le niveau 1
    if (start == 1) {
      //On vérifie si le joueur est bien la zone 1, on lui empêche de s'envoler pour qu'il puisse seulement emprunter la porte pour quitter le niveau
      if (checkOverlap(player, door1)) {
        player.setVelocityX(160);
        player.anims.play("right", true);
        direction = "right";
        player.setSize(300, 600);
        player.setOffset(230, 0);
      }
      //Sinon il a un vitesse constante sur l'axe X
      else {
        player.setVelocityX(400);
        //Si le joueur touche le sol, on lui affecte l'animation où le player court, et on redimenssione sa hitbox
        if (player.body.blocked.down) {
          player.anims.play("right", true);
          player.setSize(300, 610);
          player.setOffset(230, 12);
        }
        //Si le joueur appuie sur la touche espace, on lui affecte l'animation où le player est en Jetpack,on redimenssione sa hitbox et on lui affecte une vitesse Y (pour qu'il saute)
        if (this.cursors2.space.isDown) {
          player.setVelocityY(-330);
          player.anims.play("Jetpack", true);
          player.setSize(300, 425);
          player.setOffset(290, 0);
        }

        //Si le player est bloqué sur la droite (si il ne peut plus se déplacer sur la droit), il est mort et et on lui rajoute une mort
        if (player.body.blocked.right) {
          compteur_de_mort++;
          mort = 1;
        }

        //Si le player est bloqué au dessus de lui (si il ne peut plus se déplacer sur l'axe Y vers le haut), il est mort et et on lui rajoute une mort
        if (player.body.blocked.up) {
          compteur_de_mort++;
          mort = 1;
        }
      }
    }
  }
}
//Fonction qui permet de détecter si deux sprite sont en contact
function checkOverlap(spriteA, spriteB) {
  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();
  var result = Phaser.Geom.Rectangle.Intersection(boundsA, boundsB);
  return result.width != 0 || result.height != 0;
}
