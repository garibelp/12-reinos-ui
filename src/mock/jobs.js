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
                [SkillInfoEnum.DESC]: `"A partir no nível 1, um Artífice pode apanhar objetos mundanos, aprimora-los rapidamente e lança-los contra seus inimigos. Use uma ação bónus e não use movimentos nesse turno para criar uma gambiarra . O ataque é feito a distância, a habilidade usada é Raciocínio e o dano é 1d8 por gambiarra. Ao gastar 1 Ponto de Mana antes de lançar uma Gambiarra, você pode escolher um dos efeitos a seguir, a serem aplicados ao alvo apenas em caso de acerto. 

                1 - Estilhaços, causa 1d4 de dano adicional.
                2 - Gosmento, concede um bônus de 1d4 no acerto do próximo ataque ao alvo."

                Preparar uma Gambiarra sem gastar uma Ação Bônus, ou preparar enquanto se movimenta também requer 1 Ponto de Mana.`,
            },
        ],
    },
]);

export default Jobs;
