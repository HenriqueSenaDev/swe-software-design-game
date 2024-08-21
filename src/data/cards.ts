import { CardPair } from "../types/cards";

export const cardPairs: CardPair[] = [
  {
    question: "O que é projeto de software?",
    answer: "Lugar em que a qualidade do software é estabelecido / É a criação de soluções para problemas, dividindo o sistema em partes menores e independentes.",
    level: "easy"
  },
  {
    question: "O que é a decomposição no projeto de software?",
    answer: "Dividir um problema complexo em partes menores e independentes.",
    level: "easy"
  },
  {
    question: "O que é uma interface provida em um sistema de software?",
    answer: "É o conjunto de serviços ou métodos que uma unidade de código (como uma classe) disponibiliza para o restante do sistema.",
    level: "easy"
  },
  {
    question: "O que significa UML?",
    answer: "Unified Modeling Language",
    level: "easy"
  },
  {
    question: "É um modelo de projeto:",
    answer: "Projeto arquitetural",
    level: "easy"
  },
  {
    question: "Qual visão descreve a funcionalidade do sistema como um todo?",
    answer: "Visão de projeto",
    level: "easy"
  },
  {
    question: "Qual visão descreve a escalabilidade e desempenho do sistema?",
    answer: "Visão de processo",
    level: "easy"
  },
  {
    question: "É um padrão de arquitetura de software que divide uma aplicação em 3 componentes principais:",
    answer: "MVC (Model-View-Controller)",
    level: "easy"
  },
  {
    question: "Qual diagrama representa o fluxo de trabalho ou o processo dentro de um sistema?",
    answer: "Diagrama de atividades",
    level: "easy"
  },
  {
    question: "Como a abstração ajuda no projeto de software?",
    answer: "Simplifica o uso de partes complexas do sistema.",
    level: "medium"
  },
  {
    question: "O que significa uma classe ser coesa no projeto de software?",
    answer: "A classe deve ter um único propósito ou função.",
    level: "medium"
  },
  {
    question: "Quais são os instrumentos oferecidos por linguagens de programação para a criação de abstrações?",
    answer: "Funções, classes, interfaces, pacotes e bibliotecas.",
    level: "medium"
  },
  {
    question: "Por que a decomposição de um problema é importante na Engenharia de Software?",
    answer: "Porque ajuda a combater a complexidade dos sistemas modernos de software.",
    level: "medium"
  },
  {
    question: "Quais são os três objetivos principais no projeto de software?",
    answer: "Decompor o problema, implementar independentemente, criar abstrações.",
    level: "medium"
  },
  {
    question: "Como medir a coesão de uma classe?",
    answer: "Olhe se realiza uma única função bem.",
    level: "medium"
  },
  {
    question: "Qual a ideia do Princípio da Segregação de Interfaces?",
    answer: "Devem ser específicas e não carregar métodos desnecessários.",
    level: "medium"
  },
  {
    question: "Como o Princípio Aberto/Fechado pode ser implementado?",
    answer: "Usando herança e padrões de projeto para permitir extensões sem modificar o código existente.",
    level: "medium"
  },
  {
    question: "Interface de usuário, gerenciamento de interface e apoio de sistema fazem parte de qual arquitetura?",
    answer: "Camadas",
    level: "medium"
  },
  {
    question: "Quando a herança é menos recomendada?",
    answer: "Quando se pode criar uma dependência rígida e difícil de gerenciar.",
    level: "hard"
  },
  {
    question: "Qual é a função principal do padrão Proxy?",
    answer: "Controla o acesso ao objeto real.",
    level: "hard"
  },
  {
    question: "Por que preferir composição a herança?",
    answer: "É mais flexível e menos propensa a problemas.",
    level: "hard"
  },
  {
    question: "O que diferencia o padrão Proxy do padrão Decorador?",
    answer: "Controla o acesso ao objeto e o outro adiciona funcionalidades.",
    level: "hard"
  },
  {
    question: "O que é o padrão Visitor?",
    answer: "Adiciona operações a estruturas de dados sem modificar as classes.",
    level: "hard"
  },
  {
    question: "O que o padrão Strategy permite?",
    answer: "Alternar algoritmos de forma flexível.",
    level: "hard"
  },
  {
    question: "O que faz o padrão Fábrica?",
    answer: "Encapsula a criação de objetos.",
    level: "hard"
  },
  {
    question: "Quando não usar o padrão Fábrica?",
    answer: "Se não for necessário criar objetos de tipos diferentes.",
    level: "hard"
  },
  {
    question: "Qual é a principal vantagem do padrão Adapter?",
    answer: "Permite que sistemas com interfaces diferentes interajam.",
    level: "hard"
  },
]

// {
//   question: "Na ausência do projeto de software pode ocorrer...",
//   answer: "Sistema instável, difícil de testar",
//   level: "easy"
// },
// {
//   question: "Qual diagrama descreve a estrutura estática de um sistema, como classes, atributos, métodos etc?",
//   answer: "Diagrama de classes",
//   level: "medium"
// },
// {
//   question: "O que faz o padrão Iterador?",
//   answer: "Padroniza a navegação sobre uma estrutura de dados.",
//   level: "hard"
// },
// {
//   question: "O que o analisador léxico faz?",
//   answer: "Lê o arquivo de entrada e divide-o em tokens (como if, for, while, x, +, etc.)",
//   level: "hard"
// }