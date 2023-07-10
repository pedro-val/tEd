import Race from './Race';

export default class Elf extends Race {
  private static _instances = 0; 
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instances += 1;
    this._maxLifePoints = 99;
  }
        
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._instances;
  }
}