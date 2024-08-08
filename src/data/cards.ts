import { v4 as uuidv4 } from 'uuid';
import { Card, CardPair } from "../types/cards";

export const deckInfo: CardPair[] = [
  {
    question: "O que é projeto de software?",
    answer: "É a criação de soluções para problemas, dividindo o sistema em partes menores e independentes."
  },
  {
    question: "O que é a decomposição no projeto de software?",
    answer: "Dividir um problema complexo em partes menores e independentes."
  },
  {
    question: "Como a abstração ajuda no projeto de software?",
    answer: "Simplifica o uso de partes complexas do sistema."
  },
  {
    question: "Por que a integridade conceitual é importante?",
    answer: "Garante a coerência e consistência no sistema."
  },
  {
    question: "O que é a integridade conceitual?",
    answer: "Coerência e consistência nas funcionalidades e interfaces de um sistema."
  },
  {
    question: "Qual é a vantagem do ocultamento de informação?",
    answer: "Facilita desenvolvimento paralelo e manutenção."
  },
  {
    question: "O que é um acoplamento ruim?",
    answer: "Dependência forte entre classes que dificulta mudanças."
  },
  {
    question: "Qual é a vantagem de ter interfaces pequenas?",
    answer: "Elas são mais fáceis de entender e implementar corretamente."
  },
  {
    question: "Como uma boa integridade conceitual ajuda?",
    answer: "Melhora a usabilidade e compreensão do sistema."
  },
  {
    question: "Qual é o benefício do ocultamento de informação?",
    answer: "Facilita mudanças e desenvolvimento paralelo."
  },
  {
    question: "O que significa uma classe ser coesa no projeto de software?",
    answer: "A classe deve ter um único propósito ou função."
  },
  {
    question: "O que define o Princípio da Responsabilidade Única?",
    answer: "Cada classe deve ter uma única razão para ser modificada."
  },
  {
    question: "O que é o Princípio da Segregação de Interfaces?",
    answer: "Interfaces devem ser específicas e não carregar métodos desnecessários."
  },
  {
    question: "Como o Princípio de Demeter pode simplificar o código?",
    answer: "Reduz a dependência entre objetos, tornando o código mais modular."
  },
  {
    question: "O que o Princípio de Inversão de Dependências sugere?",
    answer: "Depende de abstrações, não de implementações concretas."
  },
  {
    question: "Quais são os instrumentos oferecidos por linguagens de programação para a criação de abstrações?",
    answer: "Funções, classes, interfaces, pacotes e bibliotecas."
  },
  {
    question: "Por que a decomposição de um problema é importante na Engenharia de Software?",
    answer: "Porque ajuda a combater a complexidade dos sistemas modernos de software."
  },
  {
    question: "Quais são os três objetivos principais no projeto de software?",
    answer: "Decompor o problema, implementar independentemente, criar abstrações."
  },
  {
    question: "O que o analisador léxico faz?",
    answer: "O analisador léxico lê o arquivo de entrada e divide-o em tokens (como if, for, while, x, +, etc.)."
  },
  {
    question: "O que é uma Árvore de Sintaxe Abstrata (AST)?",
    answer: "(AST) é uma estrutura que hierarquiza as tokens analisadas pelo analisador sintático."
  },
  {
    question: "Qual é a principal vantagem do padrão Adapter?",
    answer: "Permite que sistemas com interfaces diferentes interajam."
  },
  {
    question: "O que faz o padrão Iterador?",
    answer: "Padroniza a navegação sobre uma estrutura de dados."
  },
  {
    question: "Qual é a função principal do Singleton?",
    answer: "Garante uma única instância de uma classe."
  },
  {
    question: "O que faz o padrão Fábrica?",
    answer: "Encapsula a criação de objetos."
  },
  {
    question: "Quando não usar o padrão Fábrica?",
    answer: "Se não for necessário criar objetos de tipos diferentes."
  },
  {
    question: "O que faz o padrão Fachada?",
    answer: "Fornece uma interface simplificada para um subsistema."
  },
  {
    question: "O que é um Proxy?",
    answer: "Representa ou substitui um objeto real."
  },
  {
    question: "Como medir a coesão de uma classe?",
    answer: "Olhe se a classe realiza uma única função bem."
  },
  {
    question: "O que faz o padrão Decorador?",
    answer: "Adiciona funcionalidades a um objeto dinamicamente."
  },
  {
    question: "O que o padrão Strategy permite?",
    answer: "Alternar algoritmos de forma flexível."
  },
  {
    question: "O que é o Template Method?",
    answer: "Define a estrutura de um algoritmo, delegando algumas etapas."
  },
  {
    question: "Qual é a função do padrão Observador?",
    answer: "Notifica e atualiza objetos dependentes automaticamente."
  },
  {
    question: "O que é o padrão Visitor?",
    answer: "Adiciona operações a estruturas de dados sem modificar as classes."
  },
  {
    question: "Qual a ideia do Princípio da Segregação de Interfaces?",
    answer: "Interfaces devem ser específicas e não carregar métodos desnecessários."
  },
  {
    question: "Por que preferir composição a herança?",
    answer: "Composição é mais flexível e menos propensa a problemas."
  },
  {
    question: "O que diferencia o padrão Proxy do padrão Decorador?",
    answer: "Proxy controla o acesso ao objeto, Decorador adiciona funcionalidades."
  },
  {
    question: "O que faz a Complexidade Ciclomática?",
    answer: "Mede a complexidade de um método com base em seus caminhos de execução."
  },
  {
    question: "Qual a importância do ocultamento de informação?",
    answer: "Torna o sistema mais seguro e fácil de modificar."
  },
  {
    question: "Qual é a função do padrão Adaptador?",
    answer: "Conecta interfaces incompatíveis."
  },
  {
    question: "Quando a herança é menos recomendada?",
    answer: "Quando se pode criar uma dependência rígida e difícil de gerenciar."
  },
  {
    question: "Qual é a função principal do padrão Proxy?",
    answer: "Controla o acesso ao objeto real."
  },
  {
    question: "Como o Princípio Aberto/Fechado pode ser implementado?",
    answer: "Usando herança e padrões de projeto para permitir extensões sem modificar o código existente."
  }
];

function generateDeck(): Card[] {
  return deckInfo.reduce((acc, item) => {
    const answerId = uuidv4();
    const questionId = uuidv4();

    const answerCard: Card = {
      id: answerId,
      match: questionId,
      type: "answer",
      content: item.answer,
    };

    const questionCard: Card = {
      id: questionId,
      match: answerId,
      type: "question",
      content: item.question,
    };

    return [answerCard, questionCard, ...acc];
  }, [] as Card[]);
}

function shuffleArray(array: Card[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const suffledDeck = shuffleArray(generateDeck());

export const cardDeckData = suffledDeck;