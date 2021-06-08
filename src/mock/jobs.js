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
]);

export default Jobs;
