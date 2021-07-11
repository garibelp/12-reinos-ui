import AttributeEnum from '../enums/attributeEnum';
import BondEnum from '../enums/bondEnum';

const Backgrounds = [
    {
        name: 'Acólito',
        bonusAttr: { [AttributeEnum.INT.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Advogado',
        bonusAttr: { [AttributeEnum.AST.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Atleta',
        bonusAttr: { [AttributeEnum.TEN.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Cobaia',
        bonusAttr: { [AttributeEnum.TEN.base]: 2 },
        bond: BondEnum.FAM,
    },
    {
        name: 'Comerciante',
        bonusAttr: { [AttributeEnum.AST.base]: 2 },
        bond: BondEnum.GRP,
    },

    {
        name: 'Cultista',
        bonusAttr: { [AttributeEnum.INT.base]: 2 },
        bond: BondEnum.GRP,
    },

    {
        name: 'Estudioso',
        bonusAttr: { [AttributeEnum.INT.base]: 2 },
        bond: BondEnum.MENT,
    },
    {
        name: 'Explorador',
        bonusAttr: { [AttributeEnum.CEL.base]: 2 },
        bond: BondEnum.CRED,
    },
    {
        name: 'Fazendeiro',
        bonusAttr: { [AttributeEnum.CEL.base]: 2 },
        bond: BondEnum.FAM,
    },
    {
        name: 'Fotógrafo',
        bonusAttr: { [AttributeEnum.CEL.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Hoteleiro',
        bonusAttr: { [AttributeEnum.AST.base]: 2 },
        bond: BondEnum.FAM,
    },
    {
        name: 'Investigador',
        bonusAttr: { [AttributeEnum.INT.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Lutador',
        bonusAttr: { [AttributeEnum.TEN.base]: 2 },
        bond: BondEnum.CRED,
    },
    {
        name: 'Marinheiro',
        bonusAttr: { [AttributeEnum.TEN.base]: 2 },
        bond: BondEnum.FAM,
    },
    {
        name: 'Modelo',
        bonusAttr: { [AttributeEnum.AST.base]: 2 },
        bond: BondEnum.CRED,
    },
    {
        name: 'Operário',
        bonusAttr: { [AttributeEnum.CEL.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Piloto',
        bonusAttr: { [AttributeEnum.CEL.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Político',
        bonusAttr: { [AttributeEnum.AST.base]: 2 },
        bond: BondEnum.GRP,
    },
    {
        name: 'Radialista',
        bonusAttr: { [AttributeEnum.AST.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Segurança',
        bonusAttr: { [AttributeEnum.TEN.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Servidor',
        bonusAttr: { [AttributeEnum.INT.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Soldado',
        bonusAttr: { [AttributeEnum.TEN.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Técnico',
        bonusAttr: { [AttributeEnum.CEL.base]: 2 },
        bond: BondEnum.PRO,
    },
    {
        name: 'Viajante',
        bonusAttr: { [AttributeEnum.INT.base]: 2 },
        bond: BondEnum.CRED,
    },
];

export default Backgrounds;
