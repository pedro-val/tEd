// Crie a classe Archetype
// heavy_plus_sign Detalhes
// Dentro do nosso universo, os seres têm talentos especiais e cada um desses talentos tem o seu nome dentro de T&D. Aqui vamos ter alguns atributos super legais e necessários, que representarão o nome, a potência do seu ataque especial e o custo energético para utilizá-lo. Por isso, sua próxima quest será criar a classe abstrata Archetype.

// Para que você tenha sucesso nesta quest, é importante saber que:

// O arquivo Archetype.ts deve ser criado no diretório src/Archetypes/;
// A classe Archetype deve ter os atributos privados: name, special, cost, que serão inicializados em seu construtor;
// O atributo name dever ser do tipo string;
// O atributo special dever ser do tipo number;
// O atributo cost dever ser do tipo number;
// name deve ser recebido como parâmetro e inicializado no construtor;
// special e cost devem ser apenas inicializados no construtor com o valor 0.
// Os atributos da classe Archetype podem ser lidos, mas não podem ser alterados:
// name deve retornar o tipo string;
// special deve retornar o tipo number;
// cost deve retornar o tipo number.
// A classe Archetype deve ter um método estático chamado createdArchetypeInstances que retorna um number:
// Esse número corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe abstrata Archetype;
// Cada arquétipo terá seu número máximo de instâncias, que será definido dentro de suas classes especializadas;
// Na classe abstrata Archetype, o método deve apenas lançar um erro com a mensagem Not implemented.
// A classe Archetype deve ter um getter abstrato chamado energyType que retorna uma EnergyType:
// Esse tipo EnergyType corresponde ao tipo de energia que este arquétipo deve ter. (mana ou stamina)
// Cada arquétipo terá o seu tipo de energia, que será definido dentro de suas classes especializadas;
// A classe abstrata Archetype deve conter apenas a assinatura do método.
// warning Atenção:

// Para que os testes funcionem corretamente, a classe Archetype deve ser exportada de forma padrão ( com export default);
// Um arquivo index.ts deve ser criado dentro do diretório src/Archetypes/;
// A classe Archetype deve ser importada dentro deste arquivo e exportada também de forma padrão, como feito com Race.
import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}