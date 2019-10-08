export default class extends Phaser.Scene {
  constructor() { super({ key: 'menu' }) }

  create() {
    this.add.image(400, 150, 'star').setScale(5);

    this.add.text(400, 300, 'Phaser 3 iOS AUDIO TEST\n\n(play)', {
      align: 'center',
      fill: 'lime',
      fontFamily: 'sans-serif',
      fontSize: 48
    })
      .setOrigin(0.5, 0);
    this.input.on('pointerup', function (a, b, c, d) {
      this.scene.switch('play');
    }, this)
  }
}
