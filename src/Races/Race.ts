// 1 - Crie a classe Race
// heavy_plus_sign Detalhes
// No universo de Trybers and Dragons - T&D, quase todos os seres racionais têm uma raça e, embora todas as raças de personagens sejam humanoides, cada uma tem as suas particularidades.

// A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nos habitantes desse universo.
// Para entender melhor um pouco da incrível diversidade que temos e as características únicas de algumas das raças de T&D, vamos começar nossa jornada com a missão de criar a classe abstrata Race.
// Para que você tenha sucesso nesta quest, é importante saber que:
// O arquivo deve ser criado no diretório src/Races/ e se chamar Race.ts;
// A classe Race deve ter os atributos privados: name e dexterity, ambos inicializados em seu construtor;
// O atributo name dever ser do tipo string;
// O atributo dexterity dever ser do tipo number;
// name e dexterity devem ser recebidos como parâmetros e inicializados no construtor.
// Os atributos da classe Race podem ser lidos, mas não podem ser alterados:
// name deve retornar o tipo string;
// dexterity deve retornar o tipo number.
// A classe Race deve ter um método estático chamado createdRacesInstances, que retorna um number;
// Esse número corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe Race;
// Cada raça terá seu número máximo de instâncias, que será definido dentro de cada classe especializada;
// Na classe Race, o método deve lançar um erro com a mensagem Not implemented.
// A classe Race deve ter um getter abstrato chamado maxLifePoints que retorna um number;
// Esse número corresponde à quantidade máxima de pontos de vida da raça;
// Cada raça terá seu número máximo de pontos, que será definido dentro de cada classe especializada;
// Na classe Race deve estar apenas a assinatura do método.
// Dica: use a convenção de atributos privados para criar os atributos com _ e os getters para expor os atributos sem o _.

export default abstract class Race {
  private _name: string;
  private _dexterity: number;
    
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }
    
  get name(): string {
    return this._name;
  }
    
  get dexterity(): number {
    return this._dexterity;
  }
    
  static get createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
    
  abstract get maxLifePoints(): number;
}