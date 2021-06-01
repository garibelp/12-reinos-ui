import attributeEnum from '../enums/attributeEnum';
import SkillInfoEnum from '../enums/skillInfoEnum';
import SubclassInfoEnum from '../enums/subclassInfoEnum';

const Subclasses = Object.freeze([
    {
        [SubclassInfoEnum.NAME]: 'Demolicionista',
        [SubclassInfoEnum.JOB]: 'Artífice',
        [SubclassInfoEnum.BONUS_ATTR]: {
            [attributeEnum.CAR.base]: 2,
        },
        [SubclassInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Granadas',
                [SkillInfoEnum.LEVEL]: 2,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]:
                    'O Demolicionista pode transformar suas Gambiarras em Granadas gastando 1 Ponto de Mana. Uma granada tem efeito em área, e o Raciocínio é rolado contra a Defesa de todos os alvos dentro de 3m².',
            },
        ],
    },
    {
        [SubclassInfoEnum.NAME]: 'Ferreiro',
        [SubclassInfoEnum.JOB]: 'Artífice',
        [SubclassInfoEnum.BONUS_ATTR]: {
            [attributeEnum.DES.base]: 2,
        },
        [SubclassInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Mini-gambis',
                [SkillInfoEnum.LEVEL]: 2,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]:
                    'O Ferreiro pode gastar 1 Ponto de Mana em sua ação bônus para criar 2 mini-gambis e atirar as duas com sua Ação. As mini-gambis causam 1d8 de dano cada e podem ser combinadas com outros efeitos.',
            },
        ],
    },
    {
        [SubclassInfoEnum.NAME]: 'Artilheiro',
        [SubclassInfoEnum.JOB]: 'Atirador',
        [SubclassInfoEnum.BONUS_ATTR]: {
            [attributeEnum.CON.base]: 2,
        },
        [SubclassInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Escopeta',
                [SkillInfoEnum.LEVEL]: 2,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]:
                    'O Artilheiro pode gastar 1 Ponto de Mana para realizar um tiro potente de Escopeta. Esse tiro causa 1d8 adicional no alvo, mas o Artilheiro recebe metade desse dano extra. O alvo e o artilheiro também são movidos 1m para trás.',
            },
        ],
    },
    {
        [SubclassInfoEnum.NAME]: 'Pistoleiro',
        [SubclassInfoEnum.JOB]: 'Atirador',
        [SubclassInfoEnum.BONUS_ATTR]: {
            [attributeEnum.CAR.base]: 2,
        },
        [SubclassInfoEnum.SKILLS]: [
            {
                [SkillInfoEnum.NAME]: 'Na Mosca',
                [SkillInfoEnum.LEVEL]: 2,
                [SkillInfoEnum.COST]: 1,
                [SkillInfoEnum.DESC]:
                    'Desde que não se movimente nesse turno, o Pistoleiro pode gastar 1 Ponto de Mana e aumentar suas chances de Acerto Crítico para 8-12',
            },
        ],
    },
]);

export default Subclasses;
