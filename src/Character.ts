import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Race, { Elf } from './Races';
import Fighter from './Fighter/Fighter';
import getRandomInt from './utils';
import { SimpleFighter } from './Fighter';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(
    name: string, 
    race: Race = new Elf(name, getRandomInt(1, 10)), 
    archetype: Archetype = new Mage(name),
  ) {
    this._dexterity = race.dexterity;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    const response = {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
    return response as Energy;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    const damage = this._strength;
    if (damage > 0) {
      enemy.receiveDamage(damage);
    }
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this.race.maxLifePoints;
  }

  special(enemy: Fighter | SimpleFighter): void {
    if (this._energy.amount === 10) {
      this._energy.amount -= 10;
      enemy.receiveDamage(this._strength * 2);
    }
  }
}