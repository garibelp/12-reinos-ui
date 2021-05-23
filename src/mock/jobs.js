import JobAttrEnum from '../enums/jobInfoEnum';

const Jobs = Object.freeze([
    {
        [JobAttrEnum.NAME]: 'Artífice',
        [JobAttrEnum.LIFE]: 8,
        [JobAttrEnum.MANA]: 3,
        [JobAttrEnum.ARMOR]: 1,
        [JobAttrEnum.HIT_DICE]: 'd8',
        [JobAttrEnum.SKILLS]: [
            {
                name: 'Gambiarra',
                level: 1,
                cost: 1,
                description: `"A partir no nível 1, um Artífice pode apanhar objetos mundanos, aprimora-los rapidamente e lança-los contra seus inimigos. Use uma ação bónus e não use movimentos nesse turno para criar uma gambiarra . O ataque é feito a distância, a habilidade usada é Raciocínio e o dano é 1d8 por gambiarra. Ao gastar 1 Ponto de Mana antes de lançar uma Gambiarra, você pode escolher um dos efeitos a seguir, a serem aplicados ao alvo apenas em caso de acerto. 

                1 - Estilhaços, causa 1d4 de dano adicional.
                2 - Gosmento, concede um bônus de 1d4 no acerto do próximo ataque ao alvo."

                Preparar uma Gambiarra sem gastar uma Ação Bônus, ou preparar enquanto se movimenta também requer 1 Ponto de Mana.`,
            },
        ],
    },
]);

export default Jobs;
