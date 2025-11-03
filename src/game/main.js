import { Game } from "phaser";
import Config from "./Config";

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig

const StartGame = (parent) => {
  return new Game({ ...Config, parent });
};

export default StartGame;
