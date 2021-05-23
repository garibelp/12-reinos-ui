import AttributeEnum from '../enums/attributeEnum';
import BondEnum from '../enums/bondEnum';

const Backgrounds = [
    {
        name: 'Advogado',
        bonusAttr: {
            [AttributeEnum.INT.base]: 2,
            [AttributeEnum.SAB.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.PRO,
    },
    {
        name: 'Aprendiz',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 1,
            [AttributeEnum.DES.base]: 1,
            [AttributeEnum.CON.base]: 1,
            [AttributeEnum.INT.base]: 1,
            [AttributeEnum.SAB.base]: 1,
            [AttributeEnum.CAR.base]: 1,
        },
        bond: BondEnum.MENT,
    },
    {
        name: 'Atleta',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.CON.base]: 2,
        },
        bond: BondEnum.PRO,
    },
];

export default Backgrounds;
