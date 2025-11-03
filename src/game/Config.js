import { AUTO } from "phaser";
import LoadingScene from "./scenes/LoadingScene";
import PlayingScene from "./scenes/PlayingScene";

const Config = {
  type: AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  backgroundColor: "#000000",
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [LoadingScene, PlayingScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: process.env.NODE_ENV === "true",
    },
  },
};

export default Config;
