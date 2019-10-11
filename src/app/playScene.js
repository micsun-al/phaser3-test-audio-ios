import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() { super({ key: 'play' }) }

  create() {
    this.star = this.add.image(this.cameras.main.centerX, this.cameras.main.height * 0.4, 'star')
      .setScale(10)
      .setInteractive({ cursor: "pointer" })
    this.text = this.add.text(this.cameras.main.centerX, this.cameras.main.height * 0.415, "LINK CLICK")
      .setOrigin(0.5)
      .setTint(0x000000)
    this.text = this.add.text(this.cameras.main.centerX, this.cameras.main.height * 0.7, "On iOS, the audio stops playing after returning from the link/new tab.")
      .setOrigin(0.5)
      .setTint(0x00ffff)
    this.star.on('pointerup', () => { window.open('https://lmgtfy.com/?q=cats', '_blank') })
  }
};
