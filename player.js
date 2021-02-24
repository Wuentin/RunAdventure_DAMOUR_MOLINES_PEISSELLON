// CLasse player
class player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "run_000");
    config.scene.add.existing(this);
  }
}
