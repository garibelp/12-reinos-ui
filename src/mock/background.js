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
    {
        name: 'Cobaia',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.CON.base]: 2,
        },
        bond: BondEnum.FAM,
    },

    {
        name: 'Comerciante',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.CON.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.GRP,
    },

    {
        name: 'Cultista',
        bonusAttr: {
            [AttributeEnum.INT.base]: 2,
            [AttributeEnum.SAB.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.GRP,
    },

    {
        name: 'Estudioso',
        bonusAttr: {
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.INT.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.MENT,
    },

    {
        name: 'Explorador',
        bonusAttr: {
            [AttributeEnum.CON.base]: 2,
            [AttributeEnum.INT.base]: 2,
            [AttributeEnum.SAB.base]: 2,
        },
        bond: BondEnum.CRED,
    },

    {
        name: 'Fazendeiro',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.CON.base]: 2,
            [AttributeEnum.SAB.base]: 2,
        },
        bond: BondEnum.FAM,
    },

    {
        name: 'Fotógrafo',
        bonusAttr: {
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.INT.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.PRO,
    },

    {
        name: 'Hoteleiro',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.CON.base]: 2,
            [AttributeEnum.INT.base]: 2,
            [AttributeEnum.SAB.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.FAM,
    },

    {
        name: 'Investigador',
        bonusAttr: {
            [AttributeEnum.INT.base]: 2,
            [AttributeEnum.SAB.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.PRO,
    },

    {
        name: 'Lutador',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.CON.base]: 2,
        },
        bond: BondEnum.CRED,
    },

    {
        name: 'Marinheiro',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.CON.base]: 2,
            [AttributeEnum.SAB.base]: 2,
        },
        bond: BondEnum.FAM,
    },

    {
        name: 'Modelo',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.CRED,
    },

    {
        name: 'Operário',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.CON.base]: 2,
            [AttributeEnum.SAB.base]: 2,
        },
        bond: BondEnum.PRO,
    },

    {
        name: 'Piloto',
        bonusAttr: {
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.INT.base]: 2,
            [AttributeEnum.SAB.base]: 2,
        },
        bond: BondEnum.PRO,
    },

    {
        name: 'Político',
        bonusAttr: {
            [AttributeEnum.INT.base]: 2,
            [AttributeEnum.SAB.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.GRP,
    },

    {
        name: 'Radialista',
        bonusAttr: {
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.INT.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.PRO,
    },

    {
        name: 'Segurança',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.CON.base]: 2,
        },
        bond: BondEnum.PRO,
    },

    {
        name: 'Servidor',
        bonusAttr: {
            [AttributeEnum.INT.base]: 2,
            [AttributeEnum.SAB.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.PRO,
    },

    {
        name: 'Soldado',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.CON.base]: 2,
        },
        bond: BondEnum.PRO,
    },

    {
        name: 'Técnico',
        bonusAttr: {
            [AttributeEnum.FOR.base]: 2,
            [AttributeEnum.DES.base]: 2,
            [AttributeEnum.INT.base]: 2,
        },
        bond: BondEnum.PRO,
    },

    {
        name: 'Viajante',
        bonusAttr: {
            [AttributeEnum.CON.base]: 2,
            [AttributeEnum.SAB.base]: 2,
            [AttributeEnum.CAR.base]: 2,
        },
        bond: BondEnum.CRED,
    },

];

export default Backgrounds;
