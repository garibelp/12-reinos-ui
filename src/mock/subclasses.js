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
                [SkillInfoEnum.NAME]: '',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: '',
                [SkillInfoEnum.DESC]: '',
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
                [SkillInfoEnum.NAME]: '',
                [SkillInfoEnum.LEVEL]: 1,
                [SkillInfoEnum.COST]: '',
                [SkillInfoEnum.DESC]: '',
            },
        ],
    },
]);

export default Subclasses;
