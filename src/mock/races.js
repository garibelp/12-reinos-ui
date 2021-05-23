import AttributeEnum from '../enums/attributeEnum';
import LanguagesEnum from '../enums/languagesEnum';
import SizeEnum from '../enums/sizeEnum';

const Races = Object.freeze([
    {
        name: 'Anão',
        age:
            'Anões atingem a maturidade com 30 anos, e vivemem média até os 120.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 90cm a 1,50m.',
        },
        mov: 7.5,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Azarão',
            description:
                'Anões, desde sempre, trabalham contra as probabilidades, para bem ou para mal. Podem se atrapalhar e falhar completamente em atividades simples, como obter sucessos surpreendentes em desafios quase impossíveis. Por isso, ao jogar com um Anão, você inverterá o resultado de seus dados, sempre. Dessa forma, em um d12, 1 se torna 12, 2 se torna 11, 3 se torna 10, e vice-versa.',
        },
        con: {
            name: 'Provação',
            description:
                'O declínio dos Anões os tornou ainda mais amargurados que o seu normal por natureza. Todos os Anões ainda sonham que, um dia, tempos mais simples virão. Até lá, tentam se provar úteis e prestativos sempre que puderem... do jeito deles. Sempre que um Anão receber um desafio, iniciado pela palavra "Duvido...", ele tentará cumpri-lo.',
        },
    },
    {
        name: 'Anguisa',
        age:
            'Anguisas atingem a maturidade com 30 anos, eivem em média até os 200.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,60m a 1,80m.',
        },
        mov: 9,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANG],
        pro: {
            name: 'Veneno',
            description:
                'Anguisas são imunes a qualquer tipo de veneno e possuem presas que produzem sua própria substância paralisante. O veneno deve ser extraído de suas presas e depois aplicado em uma lâmina, ou ingerido pelo alvo. Então, o Anguisa faz um Teste de Vigor contra a Tenacidade do Alvo. Caso falhe, o alvo fica paralisado por 1 hora.',
        },
        con: {
            name: 'Digestão',
            description:
                'Anguisas demoram para digerir seus alimentos. Após qualquer refeição, esses seres usam de toda energia de seu corpo para processar o que comeram, por isso geralmente apenas dormem. Dessa forma, enquanto estiver digerindo algo, um Aguisa tem desvantagem em todas as rolagens que fizer.',
        },
    },
    {
        name: 'Gigasse',
        age:
            'Gigasses atingem a maturidade com 150 anos, evivem em média até os 800.',
        size: {
            category: SizeEnum.GRD,
            description: 'Pode variar entre 2,5m a 3m.',
        },
        mov: 7.5,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.GIGA],
        pro: {
            name: 'Gigantismo',
            description:
                'Para todos os efeitos, Gigasses são considados criaturas de tamanho Grande. Seu Valor de Atributo de Força é aumentado em 2 pontos, e o de Destreza é reduzido em 2 pontos.',
        },
        con: {
            name: 'Inadequados',
            description:
                'É muito difícil encontrar coisas mundanas feitas para Gigasses. Desde estabelecimentos com cadeiras que suportem seu tamanho e peso, a armas e armaduras adequadas para seu porte. A vida de um Gigasse entre outras raças pode ser um pouco complicada. Caso esteja em um ambiente inapropriado para seu tamanho, não pode usar Aptidões em nenhum tipo de rolagem.',
        },
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.DES.base]: -2,
        },
    },
    {
        name: 'Alterado',
        age: 'Raça base',
        size: {
            category: SizeEnum.MED,
            description: 'Raça base',
        },
        mov: 9,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ELFO],
        pro: {
            name: 'Melhorado',
            description:
                'Esses seres híbridos mantem as características de sua raça de origem, com a adição de 1 Ponto de Atributo onde quiser, a depender do tipo de melhoramento. Seja um braço (Força), uma perna (Destreza), parte do dorso (Constituição), implantes cerebrais (Inteligência), um Olho (Sabedoria) ou mesmo adereços estéticos (Carisma), esses são apenas alguns exemplos de até onde a tecnologia pode ir.',
        },
        con: {
            name: 'Defeituoso',
            description:
                'Claro que nenhuma melhoria sai de graça, especialmente se você não tem a capacidade de auto-manutenção dos Asharianos. Alterados devem fazer Testes de Tolerância, com dificuldade a depender da situação, sempre que passarem por locais que possam afetar seu funcionamento. Seja água, areia, calor ou frio, em caso de falha, o Alterado perde o Ponto de Atributo extra e passa a ter o valor fixo de -1 naquele Atributo em específico até descansar.',
        },
    },
]);

export default Races;
