import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energy: EnergyType;
  private static _instances = 0;
  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Ranger._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}