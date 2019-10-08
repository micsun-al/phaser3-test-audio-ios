import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() { super({ key: 'boot' }) }

  preload() {
    this.load.image('sky', require('../assets/sky.png'));
    this.load.image('ground', require('../assets/platform.png'));
    this.load.image('star', require('../assets/star.png'));
    this.load.image('bomb', require('../assets/bomb.png'));
    this.load.audio('music', require('../assets/music_intro.mp3'))
    this.load.spritesheet('dude', require('../assets/dude.png'), { frameWidth: 32, frameHeight: 48 });
    var rect = new Phaser.Geom.Rectangle(200, 285, 400, 30);
    var gfx = this.add.graphics();
    this.load.on('progress', function (progress) {
      gfx
        .clear()
        .fillStyle(0x666666)
        .fillRectShape(rect)
        .fillStyle(0xffffff)
        .fillRect(rect.x, rect.y, progress * rect.width, rect.height);
    });
  }

  create() {
    this.sound.add('music').play({ loop: true })

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.scene.start('menu');
    // this.scene.start('play');
    // this.scene.remove();
  }
};
