import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter,
    protected enemies: (Fighter | SimpleFighter)[],
  ) {
    super(player);
  }

  fight(): number {
    const { player, enemies } = this;
    while (player.lifePoints > 0) {
      player.attack(enemies[0]);
      if (enemies[0].lifePoints === -1) {
        enemies.splice(0, 1);
      }
      enemies.forEach((enemy) => {
        enemy.attack(player);
      });
    }
    return super.fight();
    // while (player.lifePoints > 0 && enemies.length > 0) {
    //   enemies.forEach((enemy, index) => {
    //     if (enemy.lifePoints > 0) {
    //       player.attack(enemy);
    //     }
    //     if (enemy.lifePoints <= 0) {
    //       enemies.splice(index, 1);
    //     }
    //   });
    // }
    // return super.fight();
  }
}
