import { createSlice } from '@reduxjs/toolkit';

import AttributeEnum from '../enums/attributeEnum';

const defaultBonusAttribute = {
    [AttributeEnum.TEN.base]: 0,
    [AttributeEnum.INT.base]: 0,
    [AttributeEnum.CEL.base]: 0,
    [AttributeEnum.AST.base]: 0,
};

const { actions, reducer } = createSlice({
    name: 'character',
    initialState: {
        currentLife: 1,
        totalLife: 1,
        currentMana: 0,
        totalMana: 0,
        level: 1,
        heroPoints: 1,
        currentArmor: 0,
        totalArmor: 0,
        background: null,
        race: null,
        job: null,
        subclass: null,
        motivation: null,
        defective: false,
        enhancedAttribute: null,
        bonusAttributes: defaultBonusAttribute,
        currentBonusPoints: 3,
    },
    reducers: {
        setCurrentLife: (state, action) => {
            const { payload } = action;
            state.currentLife = payload;
        },
        setTotalLife: (state, action) => {
            const { payload } = action;
            state.totalLife = payload;
        },
        setCurrentMana: (state, action) => {
            const { payload } = action;
            state.currentMana = payload;
        },
        setTotalMana: (state, action) => {
            const { payload } = action;
            state.totalMana = payload;
        },
        setLevel: (state, action) => {
            const { payload } = action;
            state.level = payload;
        },
        setHeroPoints: (state, action) => {
            const { payload } = action;
            state.heroPoints = payload;
        },
        setCurrentArmor: (state, action) => {
            const { payload } = action;
            state.currentArmor = payload;
        },
        setTotalArmor: (state, action) => {
            const { payload } = action;
            state.totalArmor = payload;
        },
        setBackground: (state, action) => {
            const { payload } = action;
            state.background = payload;
            state.currentBonusPoints = 3;
            state.bonusAttributes = defaultBonusAttribute;
        },
        setRace: (state, action) => {
            const { payload } = action;
            state.race = payload;
        },
        setJob: (state, action) => {
            const { payload } = action;
            state.job = payload;
            state.currentBonusPoints = 3;
            state.bonusAttributes = defaultBonusAttribute;
        },
        setSubclass: (state, action) => {
            const { payload } = action;
            state.subclass = payload;
        },
        setMotivation: (state, action) => {
            const { payload } = action;
            state.motivation = payload;
        },
        setDefective: (state, action) => {
            const { payload } = action;
            state.defective = payload;
        },
        setEnhancedAttribute: (state, action) => {
            const { payload } = action;
            state.enhancedAttribute = payload;
        },
        setCharacterInfoBlock: (state, action) => {
            const { payload } = action;
            Object.entries(payload).forEach((attribute) => {
                state[attribute[0]] = attribute[1];
            });
            state.currentBonusPoints = 3;
            state.bonusAttributes = defaultBonusAttribute;
        },
        setBonusAttributes: (state, action) => {
            const { payload } = action;
            state.bonusAttributes = payload;
        },
        setCurrentBonusPoints: (state, action) => {
            const { payload } = action;
            state.currentBonusPoints = payload;
        },
    },
});

export const {
    setBackground,
    setCurrentArmor,
    setCurrentLife,
    setCurrentMana,
    setDefective,
    setHeroPoints,
    setJob,
    setLevel,
    setMotivation,
    setRace,
    setSubclass,
    setTotalArmor,
    setTotalLife,
    setTotalMana,
    setCharacterInfoBlock,
    setEnhancedAttribute,
    setBonusAttributes,
    setCurrentBonusPoints,
} = actions;

export default reducer;
