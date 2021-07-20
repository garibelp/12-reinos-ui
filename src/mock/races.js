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
        mov: 6,
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
        mov: 6,
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
        name: 'Alterado',
        age: 'Raça base',
        size: {
            category: SizeEnum.MED,
            description: 'Raça base',
        },
        mov: 6,
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
    {
        name: 'Áquila',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Vôo',
            description:
                'As majestosas asas dos Áquilas os permitem voar, com deslocamento de 9m. Alçar vôo em combate não abre Ataque de Oportunidade.',
        },
        con: {
            name: 'Liberdade',
            description:
                'Como seres do ar, Áquilas precisam sentir-se livres constantemente. A qualquer sinal de aprisionamento, seja físico, emocional ou psicológico, um Áquila não consegue usufruir dos privilégios de um descanso. Seja por algo grave como encarceiramento, ou algo simples como um contrato, Áquilas facilmente sentem sua liberdade ameaçada.',
        },
    },
    {
        name: 'Áshariano',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Construto',
            description:
                'Asharianos não precisam comer, beber e descansar. Para recuperar suas energias, ao invés de usufruir de um descanso como as demais raças, eles entram em modo de reparo, e recebem os privilégios de um repouso em apenas uma noite.',
        },
        con: {
            name: 'Auto-destruição',
            description:
                'Andrômeda deu a todas as suas criações um mecanismo de auto-destruição imbatível. Muitos Asharianos dedicaram suas vidas para descobrir uma forma de desabilitá-lo, em vão. Asharianos derrubados em combate sempre têm automaticamente 2 falhas em Teste de Vigor contra a morte, assim que caem. Caso acumulem a terceira, seu corpo explode causando 8d6 de dano a todas as criaturas a até 9m dele em qualquer direção.',
        },
    },
    {
        name: 'Bugurso',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Irrastreável',
            description:
                'Um Bugurso nunca, jamais, deixa rastros por onde anda. Não importa o terreno e região, se na natureza ou na cidade, é impossível rastrear um Bugurso se ele não o quiser.',
        },
        con: {
            name: 'Dieta',
            description:
                'Dieta. A vida nas florestas do Sul de Bartol mudou bastente a fisiologia desses seres. Bugursos se alimentam exclusivamente de carne crua. Ingerir qualquer outro alimento lhes causa indigestão, que lhes priva de receber os privilégios de um descanso por uma noite e um dia. Além disso, Pétalas de Damiana, uma flor amarela bastante comum, são tóxicas e letais a Bugursos. O contato com a pele lhes causa paralizia instantânea. Ingestão causa morte imediata.',
        },
    },
    {
        name: 'Cheloniano',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Casco',
            description:
                'Chelonianos têm um casco natural para protegê-los. Por isso, não podem usar amardura, mas seu valor de Defesa é 12 por padrão. Com uma ação, podem se recolher por completo, perdendo movimento e qualquer tipo de ação, para aumentar o valor para 14.',
        },
        con: {
            name: 'Membrana',
            description:
                'Quando o casco é quebrado, há apenas uma fina e frágil membrana para proteger os Chelonianos. Quando isso acontece, seu valor de Armadura cai para 0, e reduzir seus Pontos de Vida a 0 é uma morte súbita.',
        },
    },
    {
        name: 'Cogni',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Anfíbio',
            description:
                'Cognis podem respirar embaixo dágua naturalmente por tempo indeterminado.',
        },
        con: {
            name: 'Hidrofílico',
            description:
                'O Pó da Seca foi inventado pelos Cogni para sempre terem consigo uma fonte de água. Até hoje, cada um carrega uma bolsa carregada. Mas se, por algum motivo, um Cogni perder seu Pó da Seca, e passar um dia sem contato com água, perderá os privilégios de um descanso.',
        },
    },
    {
        name: 'Eclésen',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Telepatia',
            description:
                'Telepatia. Para perdurar através das Eras de perigos que tiveram que atravessar, os Eclésen desenvolveram habilidades telepáticas. Suas comunidades podiam ficar em silêncio completo por anos a fio para não chamar atenção de animais selvagens. Posteriormente, quando explorados por outras raças, usavam essa habilidade para se comunicar em sigilo. Eclésen podem apenas falar através de telepatia, não ouvir os pensamentos de outras criaturas, a menos que esteja ouvindo a mensagem de outro telepata.',
        },
        con: {
            name: 'Comunidade',
            description:
                'O senso de comunidade para sobrevivência está enraizado em todos os Eclésen. Por isso, ao jogar com um, esteja sempre próximo a pelo menos outro Eclésen, ou não poderá usufruir de um descanso. Apenas ver outro de sua raça uma vez no dia é o suficiente.',
        },
    },
    {
        name: 'Elfo',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Memória',
            description:
                'A maioria dos Elfos vivos hoje presenciou a colonização de Bartol e, posteriormente, constituiu uma das côrtes da Cidadela. Mesmo os mais jovens já viveram o suficiente para ver muito mais que qualquer outro ser vivo. Por isso, um Elfo pode tentar puxar algum acontecimento ou informação histórica da memória, caso tenha uma justifica narrativa para tal. De preferência, que essa justificativa seja que o fato está, de alguma forma, atrelado à memória de algum episódio de seu passado.',
        },
        con: {
            name: 'Legado',
            description:
                'Felizmente, os outros povos não esquecem a crueldade dos Elfos com facilidade. Ao jogar com um Elfo, você terá de manter-se disfarçado, ou sofrerá diferentes tipos de retaliações, limitando suas ações aonde quer que vá.',
        },
    },
    {
        name: 'Erepe',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Tromba',
            description:
                'Erepes podem usar suas trombas como um terceiro braço, para agarrar, lutar ou carregar objetos. Considere isso um segundo ataque grátis em sua ação no caso de optar por segurar uma arma. Escudos também podem ser usados dessa forma.',
        },
        con: {
            name: 'Claustrofobia',
            description:
                'As casas e templos dos Erepes foram construídas aos pés de montanhas geladas com salões imensos e amplos. A grande maioria das construções de outras raças são pequenas demais para eles. Erepes não conseguem entrar em nenhum tipo de construção com menos de 5m de altura, ou se sentem sufocados. Essa característica também se aplica a cavernas, túneis, e qualquer outro lugar fechado.',
        },
    },
    {
        name: 'Gnomo',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Fortuna',
            description:
                'Gnomos, de alguma forma, sabem qual o caminho certo a seguir. Diferente dos Iuvanti, onde a sorte os protege, para esses seres, o acaso sempre lhes indica a direção certa para seguir e encontrar fortuna, esteja ela na forma que for. É como um sexto sentido, impreciso, enigmático, porém confiável.',
        },
        con: {
            name: 'Traquinagem',
            description:
                'Por viverem muito tempo entre outros jovens Gnomos até amadurecerem, e ter pouco tempo em sua vida adulta, é de se compreender que alguns traços infantis permaneçam nesses seres. Sempre que possível, um Gnomo pregará uma peça, seja em forma de piada ou de uma pegadinha prática.',
        },
    },
    {
        name: 'Goblin',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Companheiros',
            description:
                'Goblins conseguem se comunicar e trocar pequenos favores com ratos e pombos, onde quer que estejam, desde que possam encontrar esses animais.',
        },
        con: {
            name: 'Ardilosos',
            description:
                'Após os anos de cárcere, os Goblins tiveram que lidar com anos de vilania. Isso os fez criar um certo tipo de... defesa. Como Goblin, você nunca poderá dizer, objetivamente, a verdade. Mesmo que não esteja mentindo, mesmo que não queria mentir, sempre dará voltas em sua resposta, por mais simples que a pergunta possa ter sido.',
        },
    },
    {
        name: 'Humano',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Ambição',
            description:
                'Humanos lutam para fazer suas vidas valerem a pena, e para partirem do plano material em paz, por causas naturais. Ao cair em combate, um Humano sempre ganha um sucesso em Teste de Vigor contra a morte automático.',
        },
        con: {
            name: 'Ganância',
            description:
                'Algo na natureza transitória desses seres faz com que sua busca por conquistas em vida torne-se um pouco destrutiva. Humanos têm culturalmente uma obsessão em vida, movida pela ganância. Seja obter riquezas, conquistar fama, constituir uma família, algo em seu âmago os leva a tentar compulsivamente preencher o vazio gerado pela consciência de sua mortalidade.',
        },
    },
    {
        name: 'Iuventi',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Sorte',
            description:
                'Iuventis são protegidos pela força do acaso. Uma vez entre descansos, um Iventi pode rolar novamente um d12 com resultado 1 e escolher o número que preferir.',
        },
        con: {
            name: 'Passividade',
            description:
                'Os pequeninos ainda estão se acostumando com uma vida de aventuras, e algo em sua genética os faz precisar de um empurrão para engatar em atos heróicos. Por isso, Iuventis nunca tomam inicativa. Eles podem dar ideias, discutir, se defender, mas nunca darão o primeiro passo de um plano.',
        },
    },
    {
        name: 'Kadit',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: '9 Vidas',
            description:
                'Kadits têm 9 vidas. Quando caem em combate, não fazem Teste de Vigor contra a morte. Ao invés disso, levantam-se completamente restaurados. No entanto, Sua índole é alterada. Um Kadit nasce Leal e Bom, mas muda o alinhamento cada vez que renasce. Na primeira vez, torna-se Neutro e Bom, depois Caótico e Bom, depois Leal e Neutro e assim sucessivamente.',
        },
        con: {
            name: 'Expressivos',
            description:
                'Os grandes olhos, orelhas articuladas e calda não deixam os Kadits esconderem seus sentimentos. Esses seres são extremamente expressivos e nunca podem verdadeiramente esconder suas intenções. Suas palavras podem tentar dissuadir, mas sua linguagem corporal sempre revelará a verdade.',
        },
    },
    {
        name: 'Lacerturiano',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Cauda',
            description:
                'Lacerturianos usam suas caudas como um terceiro braço, para agarrar, lutar ou carregar objetos. Considere isso um segundo ataque grátis em sua ação no caso de optar por segurar uma arma. Escudos também podem ser usados dessa forma.',
        },
        con: {
            name: 'Pragmatismo',
            description:
                'A ausência de sentimentos e a vida regida apenas pelo instinto de sobrevivêncua e perpetuação da espécie faz com que os Lacerturianos não sejam exatamente os melhores companheiros para se ter. Em caso de combate, caso perceba uma desvantagem, abandonará seus aliados sem hesitar. Suas amizades são formadas apenas com interesse de sobrevivência, e podem ser trocadas a qualquer sinal de melhor oferta.',
        },
    },
    {
        name: 'Lavi',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Rugido',
            description:
                'Para impor seu poder e realeza sobre os demais, a maior arma dos Lavís é seu rugido. Essa explosão sonora avassaladora é capaz de fazer inimigos soltarem suas armas e fugirem antes mesmo de começarem um combate. Quando um Laví ruge, faz um Teste de Vigor contra o Espírito de todos a seu redor que puderem ouví-lo, não importa a distância. Quem falhar, recua e desiste de combatê-lo.',
        },
        con: {
            name: 'Descanso',
            description:
                'Como leões selvagens, Lavís precisam de muitas horas de sono para recuperarem suas forças. Caso jogue com um, para usufruir de um descanso, serão necessárias 14 horas ao invés de 8.',
        },
    },
    {
        name: 'Libendu',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Imorrível',
            description:
                'Nascidos das profundezas da terra, Libendus são absorvidos por sua criadora quando morrem. Algum tempo depois, seu corpo é devolvido à superfície, intacto, mas sua mente é esvaziada por completo.',
        },
        con: {
            name: 'Errante',
            description:
                'Libendus precisam estar em constante movimento. A terra, que lhes dá vida, também lhes suga para a morte. Por isso, ao jogar com um Libendu, se não estiver em mar aberto, para usufruir de um descanso, faça seu acampamento sempre em lugares diferentes. Um Libendu nunca poderá repetir um leito, ou não descansará por completo.',
        },
    },
    {
        name: 'Morfano',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Metamorfo',
            description:
                'Metamorfo. Assim como Duplos, Morfanos podem mudar sua fisionomia por completo e se tornarem idênticos a qualquer humanóide que já tenha visto. Isso não altera nenhum de seus atributos, embora a transformação seja de fato física e indetectável visualmente, mas causa 1d4 de dano.',
        },
        con: {
            name: 'Assimilação',
            description:
                'Morfanos não absorvem os pensamentos e lembranças dos donos das formas assimiladas. Mas alguns traços de personalidade, anseios, ideais e sentimentos são absorvidos durante a transformação. Por isso, esses seres nunca se sentirão eles próprios, mas sempre uma amálgama de vários outros. Sua vida pode mudar por completo a cada trnasformação, a depender da forma que escolher.',
        },
    },
    {
        name: 'Orc',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Sobrevida',
            description:
                'Orcs usam a força de seus ancestrais para permanecer lutando. Sempre que receber um ataque que o derrubaria, um Orc pode fazer um Teste de Constituição. Caso passe, continua no combate com 1 ponto de vida.',
        },
        con: {
            name: 'Pacifismo',
            description:
                'O confronto físico é uma prática abominável para os Orcs. A qualquer sinal de ameaça, sua reação será sempre tentar dialogar e apaziguar a situação. Por isso, um Orc nunca pode atacar na primeira rodada de um combate.',
        },
    },
    {
        name: 'Ravi',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Ágil',
            description:
                'Os Ravís precisaram desenvolver habilidades de escapismo, esquiva e outras formas de fugir dos primeiros Elfos que tentaram capturá-los. Foram as mesmas habilidades que lhes permitiram formar a Guilda de Assassinos e navegar pela grande Cidadela despercebidos. Elas continuam gravadas em sua natureza e, por isso, um Raví nunca abre um Ataque de Oportunidade em combate.',
        },
        con: {
            name: 'Colecionador',
            description:
                'Velhas manias são difíceis de esquecer. Ainda mais as que foram adquiridas para sobrevivência. Ravís se acostumaram os olhos a detectar objetos de valor, e as mãos a apanhá-los. Sempre que tiver a chance, um Raví tentarar furtar um objeto de valor, especialmente brilhantes.',
        },
    },
    {
        name: 'Draconato',
        age:
            'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
        size: {
            category: SizeEnum.MED,
            description: 'Pode variar entre 1,70cm a 2m.',
        },
        mov: 6,
        lang: [LanguagesEnum.COMUM, LanguagesEnum.ANAO],
        pro: {
            name: 'Sopro',
            description:
                'As escamas coloridas e os elementos de seus sopros letais ainda estão presentes na natureza Draconiana. Escolha um elemento. Uma vez por dia, você pode usar seu sopro de dragão para causar 2d6 de dano a todos os alvos em sua frente, dentro de um cone de 3 metros. Para tanto, role 1d12 + seu nível contra a Esquiva de todos.',
        },
        con: {
            name: 'Perseguição',
            description:
                'A Cavalaria não existe mais oficialmente. Mas Draconatos ainda precisam viver desconfiados, apagando seus rastros, desconfiados de todos que conhecem e, principalmente, evitando usar seus Sopros, porque a qualquer momento, podem ser apunhalados pelas costas.',
        },
    },
]);

export default Races;
