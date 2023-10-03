import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(protected player1: Fighter, protected player2: Fighter) {
    super(player1);
  }

  fight(): number {
    const { player1 } = this;
    const { player2 } = this;
    while (player1.lifePoints > 0 && player2.lifePoints > 0) {
      player1.attack(player2);
      player2.attack(player1);
    }
    return super.fight();
  }
}