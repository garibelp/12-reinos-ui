import attributeEnum from '../enums/attributeEnum';
import JobInfoEnum from '../enums/jobInfoEnum';
import SkillInfoEnum from '../enums/skillInfoEnum';

const Jobs = Object.freeze([
    {
        [JobInfoEnum.NAME]: 'Artífice',
        [JobInfoEnum.LIFE]: 6,
        [JobInfoEnum.MANA]: 3,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd6',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.INT.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Gambiarra',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Um Artífice pode apanhar objetos mundanos, aprimora-los rapidamente e lança-los contra seus inimigos. Use uma ação bónus para criar uma gambiarra. O ataque é feito a distância, a habilidade usada é Intelecto e o dano é 1d6 por gambiarra. Ao gastar 1 Ponto de Mana antes de lançar uma Gambiarra, você pode escolher um dos efeitos a seguir, a serem aplicados ao alvo apenas em caso de acerto. 

                1 - Estilhaços, causa o valor de Intelecto de dano adicional.
                2 - Gosmenta, impõe penalidade de 1d4 no acerto do próximo ataque do alvo.
                3 - Ofuscante, concede um bônus de 1d4 no acerto do próximo ataque ao alvo.
                4 - Mina, é presa ao chão e ativada ao toque automaticamente. Não há necessidade de acerto.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Entendimento Mecânico',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Concentrando-se brevemente, um Artífice entende os detalhes dos mais complexos mecanismos e elixires. Com uma Ação, ele pode basicamente enxergar através de paredes e objetos não-metálicos, observando engrenagens, escapamentos de vapor e detalhes de mecanismos em uma distância de até 5m. Ao observar mecanismos, o Artífice deve ser bem sucedido em um teste de Intelecto com um bônus de -2 para imediatamente entender o seu propósito. Caso um outro Artífice ou Ladino tenha fabricado o mecanismo a ser observado, o Artífice observador deverá superar seu oponente em um teste de Intelecto, ou nem será capaz de enxergar as peças.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Assistente',
                [SkillInfoEnum.LEVEL]: 3,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `O Artífice passa a ser acompanhado por um Assistente mecânico, construído por ele próprio para ajudá-lo em suas missões. A Defesa do assistente é 10, ele possui Vida igual a do Artífice, mas não pode atacar. Sua função é criar e guardar gambiarras, por isso, a cada 2 Pontos de Mana gastos para criar Gambiarras, ele construirá uma extra aleatória. Ele consegue falar e realizar outras atividades mais simples.`,
                [SkillInfoEnum.DIST]: '9m',
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Artista',
        [JobInfoEnum.LIFE]: 8,
        [JobInfoEnum.MANA]: 1,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd8',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.AST.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Magia: Charme',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Faça um teste contra o Intelecto de um alvo. Ao passar, caso o alvo seja indiferente a você, torna-se amigável.`,
                [SkillInfoEnum.CONJ]: 'Ação',
                [SkillInfoEnum.DIST]: '9m',
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Presença',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Sua presença inspira aliados e abala inimigos. Use essa magia como uma reação para converter um acerto normal em crítico ou o contrário.`,
                [SkillInfoEnum.CONJ]: 'Reação',
                [SkillInfoEnum.DIST]: '9m',
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Aclamar',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Aclame um alvo como ação bônus e cure 1d8.`,
                [SkillInfoEnum.CONJ]: 'Ação',
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Atirador',
        [JobInfoEnum.LIFE]: 8,
        [JobInfoEnum.MANA]: 0,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd8',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.CEL.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Disparo Duplo',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Quando o Atirador acertar um ataque em um alvo, ele pode gastar 1 Mana e ativar seu Disparo Duplo para rolar um novo ataque usando sua Ação Bônus. `,
            },
            {
                [SkillInfoEnum.NAME]: 'Tiro de aviso',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Enquanto estiver em posse de sua(s) arma(s), o Atirador tem uma clara vantagem em suas mãos. Gastando uma Ação, o Atirador é capaz de demonstrar o tamanho de seu poder de fogo, intimidando qualquer criatura que não tenha uma arma em mãos num raio de 5m. Caso a(s) criatura(s) em questão tenha armas naturalmente (como garras, por exemplo), ela não é afetada por essa habilidade. A partir daí, o Atirador pode tanto iniciar uma batalha com vantagem, agindo primeiro na ordem de iniciativa, quanto recebe um bônus de 1d4 para intimidar seus inimigos a fugir do combate.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Descarregar',
                [SkillInfoEnum.LEVEL]: 3,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Atiradores podem gastar Pontos de Mana para darem novos disparos sem precisar usar Ação Bónus. Desde que não erre, pode continuar atirando até sua Mana acabar.`,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Bárbaro',
        [JobInfoEnum.LIFE]: 12,
        [JobInfoEnum.MANA]: 0,
        [JobInfoEnum.ARMOR]: 0,
        [JobInfoEnum.HIT_DICE]: 'd12',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.TEN.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Fúria',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Com uma ação bônus, gaste 1 Mana e entre em Fúria e receba apenas metade de toda fonte de dano físico, que são de ataques feitos contra sua Defesa. Sua Fúria acaba caso você não cause ou receba dano em uma rodada, ou chegue a 0 Pontos de Vida. `,
            },
            {
                [SkillInfoEnum.NAME]: 'Algo de errado não está certo.',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Embora seja eficiente em se jogar, furioso, para o perigo, o Bárbaro é também capaz de perceber o perigo, quase como um sexto sentido. Com uma Ação, o Bárbaro pode sentir todas as criaturas, humanoides ou não, que têm intenções imediatamente hostis contra si ou contra seu grupo num raio de 5m.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Retaliar',
                [SkillInfoEnum.LEVEL]: 3,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `A partir do nível 3, o Bárbaro pode gastar 2 Pontos de Mana para adicionar todo o dano que recebeu na última rodada como dano bónus de seu próximo ataque.`,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Clérigo',
        [JobInfoEnum.LIFE]: 8,
        [JobInfoEnum.MANA]: 1,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd8',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.AST.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Magia: Empatia',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Faça um teste contra o Intelecto de um alvo. Ao passar, você identifica até três emoções que ele possa estar sentindo no momento.`,
                [SkillInfoEnum.CONJ]: 'Ação',
                [SkillInfoEnum.DIST]: 'Toque',
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Vigília',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Com uma súplica, um Clérigo pode estabilizar um alvo inconsciente, e poupá-lo de lutar contra a morte, para que sua hora chege em um momento mais oportuno para os deuses.`,
                [SkillInfoEnum.CONJ]: 'Ação',
                [SkillInfoEnum.DIST]: 'Toque',
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Preservar',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Um alvo à sua escolha é curado pelo valor de sua Astúcia.`,
                [SkillInfoEnum.CONJ]: 'Ação Bônus',
                [SkillInfoEnum.DIST]: 'Toque',
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Druida',
        [JobInfoEnum.LIFE]: 12,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd12',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.TEN.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Magia: Selvageria',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `A cada 5 Pontos de Vida que o Druida perder, 1 Ponto de Mana é ganho. Você pode escolher perder os Pontos de Vida, não é preciso ser atacado.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Druidismo',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Enquanto estiver na natureza, use Druidismo para aprender sobre plantas e animais típicos da região e conseguir comida e água para descansar. Também pode falar com animais.`,
                [SkillInfoEnum.CONJ]: 'Ação',
                [SkillInfoEnum.DIST]: 'Pessoal',
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Predador',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Seu próximo ataque causa seu valor de Tenacidade em Dano adicional.`,
                [SkillInfoEnum.CONJ]: 'Ação Bônus',
                [SkillInfoEnum.DIST]: 'Pessoal',
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Feiticeiro',
        [JobInfoEnum.LIFE]: 8,
        [JobInfoEnum.MANA]: 1,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd8',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.AST.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Magia: Ilusão',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Cria um efeito sensorial inofensivo.`,
                [SkillInfoEnum.CONJ]: 'Ação',
                [SkillInfoEnum.DIST]: '9m',
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Tremor',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Treme uma área circular de 3m de raio a partir de você. Faça um teste contra a Tenacidade de todos os alvos na área. Cada criatura recebe 1d8 de dano ou metade se você falhar. O Tremor pode causar dano crítico em uma rolagem 12 de acerto.`,
                [SkillInfoEnum.CONJ]: 'Ação',
                [SkillInfoEnum.DIST]: 'Pessoal',
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Restaurar',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Um alvo à sua escolha é curado em 1d8. Você pode curar pontos adicionais se abdicar de um valor equivalente de seus próprios Pontos de Vida para isso.`,
                [SkillInfoEnum.CONJ]: 'Ação',
                [SkillInfoEnum.DIST]: 'Toque',
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Guerreiro',
        [JobInfoEnum.LIFE]: 12,
        [JobInfoEnum.MANA]: 0,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd12',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.TEN.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Arma Favorita',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Defina um nome para uma arma específica, acostume-se com seu peso, balanço e precisão. Ao gastar 1 Ponto de Mana, você pode rolar um dado de dano adicional em uma ataque feito com sucesso. O uso é declarado antes do ataque e caso esse falhe, o efeito é perdido. Para trocar sua Arma Favorita, nomeie a nova e passe um Repouso treinando com ela.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Competitivo',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `O Guerreiro é uma máquina de vencer, não só dentro das batalhas! Em situações de competição - uma partida de poker, uma corrida ou até uma queda de braço - em que uma aposta estiver em jogo, o Guerreiro pode gastar uma Ação para ganhar um bônus automático de 1d4 em todas as suas rolagens. Caso a competição valha a vida de alguém, esse bônus sobe para 1d6. Para que usufrua dessa habilidade, o Guerreiro deve receber uma confirmação clara da(s) outra(s) parte(s) da competição de que a aposta está feita.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Arma Excepcional',
                [SkillInfoEnum.LEVEL]: 3,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `A partir do nível 3, o Guerreiro pode gastar 1 Ponto de Mana para adicionar sua Tenacidade Ofensiva + seu nível ao seu dano enquanto estiver usando sua Arma Favorita.`,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Ladino',
        [JobInfoEnum.LIFE]: 10,
        [JobInfoEnum.MANA]: 0,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd10',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.CEL.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Agilidade',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `A partir do nível 1, um ladino pode gastar 1 Ponto de Mana para se movimentar usando sua Ação Bônus. Ele ainda pode se movimentar normalmente, ou seja, terá até o dobro de seu deslocamento nesse turno. Mover-se com Agilidade não provoca Ataques de Oportunidade.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Zé Ninguém',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `O Ladino tem um talento especial para ir e vir despercebido. Desde que tome um pouco mais de cuidado, o Ladino é capaz de gastar uma Ação para tornar seu rosto quase completamente imemorável. Em um lugar relacionado a seu Antecedente, ele é capaz de estender esse efeito a até 4 pessoas. Caso cause algum tipo de alarde, o Ladino perde esse efeito imediatamente, atraindo a atenção de todos ao redor. Apenas tome cuidado: Bárbaros ainda podem perceber que Algo de Errado Não Está Certo!`,
            },
            {
                [SkillInfoEnum.NAME]: 'Astuto',
                [SkillInfoEnum.LEVEL]: 3,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `A partir do nível 3, Ladinos podem usar sua Astúcia no lugar de Celeridade em Testes e para atacar à distância.`,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Mago',
        [JobInfoEnum.LIFE]: 6,
        [JobInfoEnum.MANA]: 3,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd6',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.INT.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Magia: Familiar',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Um familiar pode servir como canalizador de magias e se comunicar telepaticamente com você. Até o nível 3, conjurar magias através do Familiar custa 1 Ponto de Mana adicional. Ele pode transmitir mensagens telepáticas para outras pessoas de até 10 palavras desde que você possa vê-lo, e ele possa ver o alvo.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Projétil Mágico',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Faça um teste contra a Celeridade de um alvo. Se passar, causa 1d6 + Intelecto de dano.`,
                [SkillInfoEnum.CONJ]: 'Ação',
                [SkillInfoEnum.DIST]: '9m',
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Escudo Mágico',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Quando você ou um aliado adjacente receber um ataque feito contra sua Defesa, corpo-a-corpo ou à distância, você pode usar sua reação para conjurar um Escudo Mágico, subtraindo seu valor de Intelecto no dano que receberia.`,
                [SkillInfoEnum.CONJ]: 'Reação',
                [SkillInfoEnum.DIST]: 'Pessoal',
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Monge',
        [JobInfoEnum.LIFE]: 10,
        [JobInfoEnum.MANA]: 0,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd10',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.CEL.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Defesa Serena',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `A partir do nível 1, quando receber um ataque que o acertar, Monge pode gastar 1 Ponto de Mana como reação para se desviar serenamente e tratar o ataque como uma falha.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Aura de Tranquilidade',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `A simples presença do monge é um sinal de paz. Com um rápido momento de meditação, o monge pode gastar uma Ação para emanar uma energia extremamente pacífica e inofensiva. Desde que o monge não ataque (ou tenha atacado no passado) nenhuma criatura num raio de 5m, social ou fisicamente, ele também não sofrerá qualquer agressão física ou social.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Contra-golpe',
                [SkillInfoEnum.LEVEL]: 3,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `A partir do nível 3, quando um inimigo errar um ataque contra você ou um aliado adjacente, você pode gastar 1 Ponto de Mana para contra atacar. Essa habilidade não conta como reação, então você ainda poderá realizar Ataques de Oportunidade `,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Nexus',
        [JobInfoEnum.LIFE]: 6,
        [JobInfoEnum.MANA]: 3,
        [JobInfoEnum.ARMOR]: 3,
        [JobInfoEnum.HIT_DICE]: 'd6',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.INT.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Magia: Reprogramar',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Troca uma de suas Aptidões até o fim da cena. Uma Aptidão trocada não pode ser reprogramada novamente até o efeito acabar.`,
                [SkillInfoEnum.CONJ]: 'Ação Bônus',
                [SkillInfoEnum.DIST]: 'Pessoal',
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Esticar Espaço',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Em uma área circular com raio de até 3m a partir de um ponto é esticada. Visualmente, o terreno permanece igual, mas qualquer criatura que andar nele usará o dobro de deslocamento que usaria para percorrer qualquer distância.`,
                [SkillInfoEnum.CONJ]: 'Ação',
                [SkillInfoEnum.DIST]: '9m',
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Rebobinar',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Use essa magia quando um dado qualquer for rolado, desde que você tenha visão e esteja a até 9m do alvo. Rebobinar força um novo dado a ser rolado, e você escolhe qual dos dois resultados será o definitivo. Essa magia é acumulativa, ou seja, você pode continuar gastando Pontos de Mana sobre a mesma rolagem até obter um resultado que te satisfaça.`,
                [SkillInfoEnum.CONJ]: 'Reação',
                [SkillInfoEnum.DIST]: '9m',
            },
        ],
    },
]);

export default Jobs;
