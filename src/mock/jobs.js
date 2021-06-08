import attributeEnum from '../enums/attributeEnum';
import JobInfoEnum from '../enums/jobInfoEnum';
import SkillInfoEnum from '../enums/skillInfoEnum';

const Jobs = Object.freeze([
    {
        [JobInfoEnum.NAME]: 'Artífice',
        [JobInfoEnum.LIFE]: 8,
        [JobInfoEnum.MANA]: 3,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd8',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.INT.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Gambiarra',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Um Artífice pode apanhar objetos mundanos, aprimora-los rapidamente e lança-los contra seus inimigos. Use uma ação bónus e não use movimentos nesse turno para criar uma gambiarra . O ataque é feito a distância, a habilidade usada é Raciocínio e o dano é 1d8 por gambiarra. Ao gastar 1 Ponto de Mana antes de lançar uma Gambiarra, você pode escolher um dos efeitos a seguir, a serem aplicados ao alvo apenas em caso de acerto. 

                1 - Estilhaços, causa 1d4 de dano adicional.
                2 - Gosmento, concede um bônus de 1d4 no acerto do próximo ataque ao alvo.

                Preparar uma Gambiarra sem gastar uma Ação Bônus, ou preparar enquanto se movimenta também requer 1 Ponto de Mana.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Assistente',
                [SkillInfoEnum.LEVEL]: 3,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `O Artífice passa a ser acompanhado por um Assistente mecânico, construído por ele próprio para ajudá-lo em suas missões. A Defesa do assistente é 10, ele possui Vida igual a do Artífice, mas não pode atacar. Sua função é criar gambiarras, ou seja, não é mais necessário usar Ação Bônus, abdicar do Movimento, nem gastar 1 Ponto de Mana. Ele consegue falar e realizar outras atividades mais simples.`,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Artista',
        [JobInfoEnum.LIFE]: 6,
        [JobInfoEnum.MANA]: 2,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd6',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.DES.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Magia: Charme',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Quando user essa magia, faça um Teste de Precisão contra a Vontade de um alvo indiferente a você. Se o alvo falhar, torna-se amigável a você.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Crítica',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Ao usar essa magia, faça um Teste de Precisão contra a Vontade de um alvo. Se o alvo falhar, sofre 1d6 de dano.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Surto Criativo',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Quando usar essa magia, use outra magia como Ação Bônus. O custo de mana dela permanece o mesmo.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Aclamar',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Essa magia é conjurada para curar um alvo. Apenas o aclame como ação bônus e cure 2d6.`,
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
            [attributeEnum.DES.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Disparo Duplo',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Quando o Atirador acertar um ataque em um alvo, ele pode gastar 1 Mana e ativar seu Disparo Duplo para rolar um novo ataque usando sua Ação Bônus. `,
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
        [JobInfoEnum.LIFE]: 10,
        [JobInfoEnum.MANA]: 0,
        [JobInfoEnum.ARMOR]: 0,
        [JobInfoEnum.HIT_DICE]: 'd10',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.CON.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Fúria',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Com uma ação bônus, gaste 1 Mana e entre em Fúria e receba apenas metade de toda fonte de dano físico, que são de ataques feitos contra sua Defesa. Sua Fúria acaba caso você não cause ou receba dano em uma rodada, ou chegue a 0 Pontos de Vida. `,
            },
            {
                [SkillInfoEnum.NAME]: 'Retaliar',
                [SkillInfoEnum.LEVEL]: 3,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `A partir do nível 3, o Bárbaro pode gastar 2 Pontos de Mana para adicionar todo o dano que recebeu no último turno como dano bónus de seu próximo ataque.`,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Clérigo',
        [JobInfoEnum.LIFE]: 8,
        [JobInfoEnum.MANA]: 2,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd8',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.SAB.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Magia: Punir',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Faça um Teste de Augúria contra o Espírito de um alvo. Se falhar, ele recebe 1d8 de dano.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Vigília',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Com uma súplica, um Clérigo pode estabilizar um alvo inconsciente ao tocá-lo, e poupá-lo de lutar contra a morte, para que sua hora chege em um momento mais oportuno para os deuses.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Bênção',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Quando abençoar alguém, incluindo a si próprio, toque o alvo e permita que o alvo adicione 1d6 a uma rolagem que ele escolher, menos de dano.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Preservar',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Um alvo à sua escolha é curado em 2d8. Você precisa tocá-lo.`,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Druida',
        [JobInfoEnum.LIFE]: 8,
        [JobInfoEnum.MANA]: 2,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd8',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.FOR.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Magia: Druidismo',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Enquanto estiver na natureza, use Druidismo para aprender sobre plantas e animais típicos da região e conseguir comida e água para descansar. Também pode falar com animais.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Selvageria',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Com uma ação bônus, ativa Selvageria e pode usar Potência com as mãos nuas para causar 1d8 de dano ou aumentar em 2 sua Defesa.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Bom Fruto',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Cria um fruto que, quando consumido com uma ação, cura 1d8 Pontos de Vida. Só pode criar um fruto por vez.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Predador',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Use Predador como Ação Bônus e, em seu próximo ataque de Selvageria, cause 1d8 de Dano adicional.`,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Feiticeiro',
        [JobInfoEnum.LIFE]: 6,
        [JobInfoEnum.MANA]: 2,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd6',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.CAR.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Magia: Ilusão',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Cria um efeito sensorial inofensivo.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Raio Enérgico',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Faça um Teste de Perspicácia contra a Esquiva de um alvo. Ele recebe 1d6. O Raio Enérgico pode causar dano crítico em uma rolagem 12 de acerto.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Tremor',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Treme uma área circular de 3m de raio a partir de você. Faça um Teste de Perspicácia contra a Tenacidade de todos os alvos na área. Cada criatura recebe 1d6 de dano ou metade se você falhar. O Tremor pode causar dano crítico em uma rolagem 12 de acerto.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Neblina',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Cria uma neblina em uma área circular de 5m de raio. Criaturas dentro da área não conseguem ver, realizam ataques com desvantagem, mas também recebem ataques com desvantagem.`,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Guerreiro',
        [JobInfoEnum.LIFE]: 10,
        [JobInfoEnum.MANA]: 0,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd10',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.FOR.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Arma Favorita',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Defina um nome para uma arma específica, acostume-se com seu peso, balanço e precisão. Ao gastar 1 Ponto de Mana, você pode rolar um dado de dano adicional em uma ataque feito com sucesso. O uso é declarado antes do ataque e caso esse falhe, o efeito é perdido. Para trocar sua Arma Favorita, nomeie a nova e passe um Repouso treinando com ela.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Arma Excepcional',
                [SkillInfoEnum.LEVEL]: 3,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `A partir do nível 3, o Guerreiro pode gastar 1 Ponto de Mana para adicionar sua Potência + seu nível ao seu dano enquanto estiver usando sua Arma Favorita.`,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Ladino',
        [JobInfoEnum.LIFE]: 8,
        [JobInfoEnum.MANA]: 0,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd8',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.CAR.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Golpe de Sorte',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `A partir do nível 1, um ladino pode gastar 1 Ponto de Mana para declarar seu próximo ataque um acerto crítico. O ataque ainda precisa ser bem sucedido para que o efeito seja causado. O crítico apenas dobra o número de dados rolados, ou dobra o resultado do número normal de dados rolados.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Astuto',
                [SkillInfoEnum.LEVEL]: 3,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `A partir do nível 3, Ladinos podem usar seu Carisma no lugar de Destreza em Testes e atacar à distância.`,
            },
        ],
    },
    {
        [JobInfoEnum.NAME]: 'Mago',
        [JobInfoEnum.LIFE]: 6,
        [JobInfoEnum.MANA]: 4,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd6',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.INT.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Magia: Projétil Mágico',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Faça um Teste de Raciocínio contra a Lucidez de um alvo para lhe disparar um projétil e, caso acerte, cause 1d6 de dano`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Familiar',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Um familiar pode servir como canalizador de magias e se comunicar telepaticamente com você. Até o nível 3, conjurar magias através do Familiar custa 1 Ponto de Mana adicional.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Mensagem',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Envie uma mensagem telepática de até 10 palavras para um alvo que você possa ver. O alvo pode te responder mentalmente também com até 10 palavras.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Libra',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Faça um Teste de Raciocínio contra o Espírito de um alvo. Em um sucesso, descubra uma Vulnerabilidade e uma Resistência dele. Caso não tenha nenhuma, descubra o valor de sua Defesa e Atributos Defensivos. Libra não pode ser usada mais de uma vez em um mesmo alvo.`,
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
            [attributeEnum.SAB.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Artes Marciais',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `A partir do nível 1, um Monge pode realizar ataques corpo a corpo com suas mãos nuas utilizando Augúria, com dano de 1d8. Ao gastar 1 Ponto de Mana, pode declarar seu próximo ataque um sucesso automático.`,
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
        [JobInfoEnum.LIFE]: 8,
        [JobInfoEnum.ARMOR]: 1,
        [JobInfoEnum.HIT_DICE]: 'd8',
        [JobInfoEnum.BONUS_ATTR]: {
            [attributeEnum.CON.base]: 2,
        },
        [JobInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Ser Nexus',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `A cada 5 Pontos de Vida que o Nexus perder, 1 Ponto de Mana é ganho.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Distorcer',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 0,
                [SkillInfoEnum.DESC]: `Faça um Teste de Vigor contra a Lucidez de um alvo. Se passar, distorce o espaço ao seu redor e lhe causa 1d8 de dano.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Esticar Tempo',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Uma área circular com raio de até 4,5m a partir de um ponto esticada. Visualmente, o terreno permanece igual, mas qualquer criatura que andar nele usará o dobro de deslocamento que usaria para percorrer qualquer distância.`,
            },
            {
                [SkillInfoEnum.NAME]: 'Magia: Reprogramar',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]: `Troca uma de suas Aptidões até o fim da cena. Uma Aptidão trocada não pode ser reprogramada novamente até o efeito acabar.`,
            },
        ],
    },
]);

export default Jobs;
