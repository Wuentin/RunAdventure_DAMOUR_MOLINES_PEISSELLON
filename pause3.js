// CLasse PAUSE3
class pause3 extends Phaser.Scene {
  constructor() {
    super({ key: "pause3" });
  }

  preload() {
    this.load.image("tilesheetP3", "tilesheet_complete.png");
    this.load.image("backgroundP3", "TilesetMenu/set1_background.png");
    this.load.image("background_tilesP3", "TilesetMenu/set1_tiles.png");
    this.load.tilemapTiledJSON("mapP3", "tiledMap/pause3.json");
    this.load.image("clavierPause3", "images/clavier3.png");
  }
  create() {
    //INTEGRATION TILED + CLAVIER
    const mapP3 = this.make.tilemap({ key: "mapP3" });
    const tilesetP3 = mapP3.addTilesetImage("tileset", "tilesheetP3");
    const backgroundsetP3 = mapP3.addTilesetImage("background", "backgroundP3");
    this.boutonplay = this.add.text(700, 1100, "PLAY", {
      font: "80px MS Shell Dlg 2",
      fill: "#ffff"
    });
    const background_tilessetP3 = mapP3.addTilesetImage(
      "background_tiles",
      "background_tilesP3"
    );

    const backgroundLayer = mapP3.createStaticLayer(
      "background",
      backgroundsetP3,
      0,
      0
    );

    const backgroundtilesLayer = mapP3.createStaticLayer(
      "background_tiles",
      background_tilessetP3,
      0,
      0
    );

    const boutonsLayer = mapP3.createStaticLayer("boutons", tilesetP3, 0, 0);

    this.add.image(800, 660, "clavierPause3");

    // AJOUT DE TEXTE
    this.boutonWelcome = this.add.text(640, 130, "PAUSE", {
      font: "120px MS Shell Dlg 2",
      fill: "#ffff"
    });
    this.boutonplay = this.add.text(1070, 1100, "PLAY", {
      font: "60px MS Shell Dlg 2",
      fill: "#ffff"
    });
    this.boutonmenu = this.add.text(220, 1100, "BACK TO MENU", {
      font: "60px MS Shell Dlg 2",
      fill: "#ffff"
    });

    //AJOUT TOUCHES CLAVIER
    this.cursorsp3 = this.input.keyboard.createCursorKeys();
    entrer = this.input.keyboard.addKey("ENTER");
    mute = this.input.keyboard.addKey("M");
    playmusic = this.input.keyboard.addKey("L");

    // AJOUT RECTANGLES SELECTION
    this.r1 = this.add.rectangle(450, 1120, 510, 190); //rectangle selection bouton "backtomenu"
    this.r1.setStrokeStyle(2, 0xffffff); //couleur blanc
    this.r1.setVisible(true); //visible des le debut
    backMenuSelect = true; //Le bouton backtomenu est selectionné automatiquement donc true
    this.r2 = this.add.rectangle(1150, 1120, 510, 190); //rectangle selection bouton play
    this.r2.setStrokeStyle(2, 0xffffff);
    this.r2.setVisible(false); //pas selectioné au depart donc pas visible

    //AJOUT DU SON
    this.son_bouton = this.sound.add("son_bouton"); //son qd selectionne bouton
    this.add.image(1540, 70, "unmute"); //la musique est en marche donc image avec son
  }
  update() {
    //SELECTION BOUTON
    //si on clic sur fleche droite selection bouton play
    if (this.cursorsp3.right.isDown && this.r1.setVisible(true)) {
      this.r2.setVisible(true); //le bouton play est selectionné
      this.r1.setVisible(false); //le bouton back to menu n'est plus selectioné
      playSelect = true;
      backMenuSelect = false;
    }
    //si on clic sur fleche gauche selection bouton back to menu
    if (this.cursorsp3.left.isDown && this.r2.setVisible(true)) {
      this.r1.setVisible(true); //le bouton back to menu est  selectioné
      this.r2.setVisible(false); //le bouton play est plus selectionné
      playSelect = false;
      backMenuSelect = true;
    }

    //VALIDATION CHOIX
    if (Phaser.Input.Keyboard.JustDown(entrer)) {
      //si le bouton play est selectionné
      if (playSelect == true) {
        this.scene.resume("niveau3"); //reprendre le niveau 3 là ou on a mis pause
        this.scene.stop(); //arreter la scene pause3
        this.son_bouton.play(); //activer le son du bouton
        this.son_bouton.setVolume(7);

        //sinon
      } else if (backMenuSelect == true) {
        this.scene.start("menuPrincipal"); //lancer le menu principal
        this.scene.stop("niveau3"); //arreter le niveau3
        son_Niveau3.stop();
        this.son_bouton.play();
        this.son_bouton.setVolume(7);
      }
    }

    // PARAMETRES DE MUSIQUE
    if (Phaser.Input.Keyboard.JustDown(mute)) {
      //METTRE MUTE
      son_Niveau3.setMute(true);
      this.add.image(1540, 70, "immute");
      soncoupé = true;
    }
    if (Phaser.Input.Keyboard.JustDown(playmusic)) {
      son_Niveau3.setMute(false); //RELANCER LA MUSIQUE
      this.add.image(1540, 70, "unmute");
      soncoupé = false;
    }
  }
}
