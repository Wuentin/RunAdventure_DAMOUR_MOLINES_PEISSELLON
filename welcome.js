// CLasse WELCOME
class welcome extends Phaser.Scene {
  constructor() {
    super({ key: "welcome" });
  }

  preload() {
    this.load.image("tilesheetW", "tilesheet_complete.png");
    this.load.image("immute", "images/mute.png");
    this.load.image("unmute", "images/unmute.png");
    this.load.audio("son_bouton", "sons/bruit_bouton.wav");
    this.load.image("backgroundW", "TilesetMenu/set1_background.png");
    this.load.image("background_tilesW", "TilesetMenu/set1_tiles.png");
    this.load.tilemapTiledJSON("mapW", "tiledMap/welcome.json");
    this.load.image("clavierWelcome", "images/clavier1.png");
    this.load.audio("sonWelcome", "sons/chill.ogg");
  }
  create() {
    //INTEGRATION TILED + CLAVIER
    const mapW = this.make.tilemap({ key: "mapW" });
    const tilesetW = mapW.addTilesetImage("tileset", "tilesheetW");
    const backgroundsetW = mapW.addTilesetImage("background", "backgroundW");
    const background_tilessetW = mapW.addTilesetImage(
      "background_tiles",
      "background_tilesW"
    );

    const backgroundLayer = mapW.createStaticLayer(
      "background",
      backgroundsetW,
      0,
      0
    );

    const backgroundtilesLayer = mapW.createStaticLayer(
      "background_tiles",
      background_tilessetW,
      0,
      0
    );

    const boutonsLayer = mapW.createStaticLayer("boutons", tilesetW, 0, 0);
    this.add.image(800, 660, "clavierWelcome");

    // AJOUT DE TEXTE
    this.boutonWelcome = this.add.text(200, 150, "WELCOME TO RUNADVENTURE", {
      font: "80px MS Shell Dlg 2",
      fill: "#ffff"
    });
    this.boutonplay = this.add.text(700, 1100, "PLAY", {
      font: "80px MS Shell Dlg 2",
      fill: "#ffff"
    });

    //AJOUT TOUCHES CLAVIER
    // this.cursorsw = this.input.keyboard.createCursorKeys();
    entrer = this.input.keyboard.addKey("ENTER");
    mute = this.input.keyboard.addKey("M");
    playmusic = this.input.keyboard.addKey("L");

    // AJOUT RECTANGLE SELECTION
    this.r = this.add.rectangle(800, 1120, 450, 200);
    this.r.setStrokeStyle(2, 0xffffff);

    //AJOUT DU SON
    this.son_welcome = this.sound.add("sonWelcome");
    this.son_bouton = this.sound.add("son_bouton");
    this.son_welcome.play();
    this.son_welcome.setLoop(true); //mettre la musique en boucle
    this.add.image(1540, 70, "unmute");
  }

  update() {
    //ENTRER DANS LE MENU PRINCIPAL
    if (Phaser.Input.Keyboard.JustDown(entrer)) {
      this.scene.start("menuPrincipal");
      this.son_bouton.play();
      this.son_bouton.setVolume(7);
      this.son_welcome.stop();
    }

    // PARAMETRES DE MUSIQUE
    if (Phaser.Input.Keyboard.JustDown(mute)) {
      //METTRE MUTE
      this.son_welcome.setMute(true);
      this.add.image(1540, 70, "immute");
      soncoupé = true;
    }
    if (Phaser.Input.Keyboard.JustDown(playmusic)) {
      this.son_welcome.setMute(false); //RELANCER LA MUSIQUE
      this.add.image(1540, 70, "unmute");
      soncoupé = false;
    }
  }
}
