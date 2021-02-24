class pause1 extends Phaser.Scene {
  constructor() {
    super({ key: "pause1" });
  }
  preload() {
    this.load.image("tilesheetP1", "tilesheet_complete.png");
    this.load.image("backgroundP1", "TilesetPause/set4_background.png");
    this.load.image("background_tilesP1", "TilesetPause/set4_tiles.png");
    this.load.tilemapTiledJSON("mapP1", "tiledMap/pause1.json");
    this.load.image("clavierWelcome", "images/clavier1.png");
  }
  create() {
    //INTEGRATION TILED + CLAVIER
    const mapP1 = this.make.tilemap({ key: "mapP1" });
    const tilesetP1 = mapP1.addTilesetImage("tileset", "tilesheetP1");
    const backgroundsetP1 = mapP1.addTilesetImage("background", "backgroundP1");
    this.boutonplay = this.add.text(700, 1100, "PLAY", {
      font: "80px MS Shell Dlg 2",
      fill: "#ffff"
    });
    const background_tilessetP1 = mapP1.addTilesetImage(
      "background_tiles",
      "background_tilesP1"
    );

    const backgroundLayer = mapP1.createStaticLayer(
      "background",
      backgroundsetP1,
      0,
      0
    );

    const backgroundtilesLayer = mapP1.createStaticLayer(
      "background_tiles",
      background_tilessetP1,
      0,
      0
    );

    const boutonsLayer = mapP1.createStaticLayer("boutons", tilesetP1, 0, 0);

    this.add.image(800, 660, "clavierWelcome");

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
    this.cursorsp1 = this.input.keyboard.createCursorKeys();
    entrer = this.input.keyboard.addKey("ENTER"); //touche entrer
    mute = this.input.keyboard.addKey("M"); //touche pour mettre mute
    playmusic = this.input.keyboard.addKey("L"); //touche L pour relancer musique

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
    if (this.cursorsp1.right.isDown && this.r1.setVisible(true)) {
      this.r2.setVisible(true); //le bouton play est selectionné
      this.r1.setVisible(false); //le bouton back to menu n'est plus selectioné
      playSelect = true;
      backMenuSelect = false;
    }
    //si on clic sur fleche gauche selection bouton back to menu
    if (this.cursorsp1.left.isDown && this.r2.setVisible(true)) {
      this.r1.setVisible(true); //le bouton back to menu est  selectioné
      this.r2.setVisible(false); //le bouton play est plus selectionné
      playSelect = false;
      backMenuSelect = true;
    }

    //VALIDATION CHOIX si on appuie sur entrer
    if (Phaser.Input.Keyboard.JustDown(entrer)) {
      //si le bouton play est selectionné
      if (playSelect == true) {
        this.scene.resume("niveau1"); //reprendre le niveau 1 là ou on a mis pause
        this.scene.stop(); //arreter la scene pause1
        this.son_bouton.play(); //activer le son du bouton
        this.son_bouton.setVolume(5);
        //sinon
      } else if (backMenuSelect == true) {
        this.scene.start("menuPrincipal"); //lancer le menu principal
        this.scene.stop("niveau1"); //arreter le niveau1
        MusicNiveau1.stop(); //arreter la musique du niveua
        this.son_bouton.play();
        this.son_bouton.setVolume(5);
      }
    }

    // PARAMETRES DE MUSIQUE
    if (Phaser.Input.Keyboard.JustDown(mute)) {
      //METTRE MUTE
      MusicNiveau1.setMute(true);
      this.add.image(1540, 70, "immute");
      soncoupé = true;
    }
    if (Phaser.Input.Keyboard.JustDown(playmusic)) {
      MusicNiveau1.setMute(false); //RELANCER LA MUSIQUE
      this.add.image(1540, 70, "unmute");
      soncoupé = false;
    }
  }
}
