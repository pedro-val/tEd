import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energy: EnergyType;
  private static _instances = 0;
  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Warrior._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instances;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}