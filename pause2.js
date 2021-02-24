// CLasse PAUSE2
class pause2 extends Phaser.Scene {
  constructor() {
    super({ key: "pause2" });
  }

  preload() {
    this.load.image("tilesheetP2", "tilesheet_complete.png");
    this.load.image("backgroundP2", "TilesetPause/set3_background.png");
    this.load.image("background_tilesP2", "TilesetPause/set3_tiles.png");
    this.load.tilemapTiledJSON("mapP2", "tiledMap/pause2.json");
    this.load.image("clavierPause2", "images/clavier2.png");
  }
  create() {
    //INTEGRATION TILED + CLAVIER
    const mapP2 = this.make.tilemap({ key: "mapP2" });
    const tilesetP2 = mapP2.addTilesetImage("tileset", "tilesheetP2");
    const backgroundsetP2 = mapP2.addTilesetImage("background", "backgroundP2");
    this.boutonplay = this.add.text(700, 1100, "PLAY", {
      font: "80px MS Shell Dlg 2",
      fill: "#ffff"
    });
    const background_tilessetP2 = mapP2.addTilesetImage(
      "background_tiles",
      "background_tilesP2"
    );

    const backgroundLayer = mapP2.createStaticLayer(
      "background",
      backgroundsetP2,
      0,
      0
    );

    const backgroundtilesLayer = mapP2.createStaticLayer(
      "background_tiles",
      background_tilessetP2,
      0,
      0
    );

    const boutonsLayer = mapP2.createStaticLayer("boutons", tilesetP2, 0, 0);

    this.add.image(800, 660, "clavierPause2");

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
    this.cursorsp2 = this.input.keyboard.createCursorKeys();
    entrer = this.input.keyboard.addKey("ENTER");
    mute = this.input.keyboard.addKey("M");
    playmusic = this.input.keyboard.addKey("L");

    // AJOUT RECTANGLES SELECTION
    this.r1 = this.add.rectangle(450, 1120, 510, 190); //rectangle selection bouton "backtomenu"
    this.r1.setStrokeStyle(2, 0xffffff); //couleur blanc
    this.r1.setVisible(true); //visible des le debut
    //backMenuSelect2 = true; //Le bouton backtomenu est selectionné automatiquement donc true
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
    if (this.cursorsp2.right.isDown && this.r1.setVisible(true)) {
      this.r2.setVisible(true); //le bouton play est selectionné
      this.r1.setVisible(false); //le bouton back to menu n'est plus selectioné
      playSelect2 = true;
      backMenuSelect2 = false;
    }
    //si on clic sur fleche gauche selection bouton back to menu
    if (this.cursorsp2.left.isDown && this.r2.setVisible(true)) {
      this.r1.setVisible(true); //le bouton back to menu est  selectioné
      this.r2.setVisible(false); //le bouton play est plus selectionné
      playSelect2 = false;
      backMenuSelect2 = true;
    }

    //VALIDATION CHOIX
    if (Phaser.Input.Keyboard.JustDown(entrer)) {
      //si le bouton play est selectionné
      if (playSelect2 == true) {
        this.scene.resume("niveau2"); //reprendre le niveau 2 là ou on a mis pause
        this.scene.stop(); //arreter la scene pause2
        this.son_bouton.play(); //activer le son du bouton
        this.son_bouton.setVolume(5);
        //sinon
      } else if (backMenuSelect2 == true) {
        this.scene.start("menuPrincipal"); //lancer le menu principal
        this.scene.stop("niveau2"); //arreter le niveau2
        son_Niveau2.stop();
        this.son_bouton.play();
        this.son_bouton.setVolume(7);
      }
    }
    // PARAMETRES DE MUSIQUE
    if (Phaser.Input.Keyboard.JustDown(mute)) {
      //METTRE MUTE
      son_Niveau2.setMute(true);
      this.add.image(1540, 70, "immute");
      soncoupé = true;
    }
    if (Phaser.Input.Keyboard.JustDown(playmusic)) {
      son_Niveau2.setMute(false); //RELANCER LA MUSIQUE
      this.add.image(1540, 70, "unmute");
      soncoupé = false;
    }
  }
}
