import { createSlice } from '@reduxjs/toolkit';

import AttributeEnum from '../enums/attributeEnum';

const defaultBonusAttribute = {
    [AttributeEnum.TEN.base]: 0,
    [AttributeEnum.INT.base]: 0,
    [AttributeEnum.CEL.base]: 0,
    [AttributeEnum.AST.base]: 0,
};

const defaultInitialState = {
    id: null,
    name: null,
    currentLife: 1,
    totalLife: 1,
    currentMana: 0,
    totalMana: 0,
    level: 1,
    startLevel: 1,
    heroPoints: 1,
    currentArmor: 3,
    totalArmor: 3,
    background: null,
    race: null,
    job: null,
    subclass: null,
    motivation: null,
    defective: false,
    enhancedAttribute: null,
    [AttributeEnum.TEN.base]: 3,
    [AttributeEnum.INT.base]: 3,
    [AttributeEnum.CEL.base]: 3,
    [AttributeEnum.AST.base]: 3,
    aptitudeList: [null, null, null],
    currentBonusPoints: 3,
    // Attribute used only when adding bonus points on specific levels
    bonusAttributes: defaultBonusAttribute,
};

const { actions, reducer } = createSlice({
    name: 'character',
    initialState: defaultInitialState,
    reducers: {
        setId: (state, action) => {
            const { payload } = action;
            if (payload) {
                state.id = payload;
            } else {
                // Clear store for the creation flow
                state = defaultInitialState;
            }
            return state;
        },
        setName: (state, action) => {
            const { payload } = action;
            state.name = payload;
            return state;
        },
        setCurrentLife: (state, action) => {
            const { payload } = action;
            state.currentLife = payload;
            return state;
        },
        setTotalLife: (state, action) => {
            const { payload } = action;
            state.totalLife = payload;
            return state;
        },
        setCurrentMana: (state, action) => {
            const { payload } = action;
            state.currentMana = payload;
            return state;
        },
        setTotalMana: (state, action) => {
            const { payload } = action;
            state.totalMana = payload;
            return state;
        },
        setLevel: (state, action) => {
            const { payload } = action;
            state.level = payload;
            return state;
        },
        setHeroPoints: (state, action) => {
            const { payload } = action;
            state.heroPoints = payload;
            return state;
        },
        setCurrentArmor: (state, action) => {
            const { payload } = action;
            state.currentArmor = payload;
            return state;
        },
        setTotalArmor: (state, action) => {
            const { payload } = action;
            state.totalArmor = payload;
            return state;
        },
        setBackground: (state, action) => {
            const { payload } = action;
            state.background = payload;
            state.currentBonusPoints = 3;
            state.bonusAttributes = defaultBonusAttribute;
            return state;
        },
        setRace: (state, action) => {
            const { payload } = action;
            state.race = payload;
            return state;
        },
        setJob: (state, action) => {
            const { payload } = action;
            state.job = payload;
            state.currentBonusPoints = 3;
            state.bonusAttributes = defaultBonusAttribute;
            return state;
        },
        setSubclass: (state, action) => {
            const { payload } = action;
            state.subclass = payload;
            return state;
        },
        setMotivation: (state, action) => {
            const { payload } = action;
            state.motivation = payload;
            return state;
        },
        setDefective: (state, action) => {
            const { payload } = action;
            state.defective = payload;
            return state;
        },
        setEnhancedAttribute: (state, action) => {
            const { payload } = action;
            state.enhancedAttribute = payload;
            return state;
        },
        setCharacterInfoBlock: (state, action) => {
            const { payload } = action;
            Object.entries(payload).forEach((attribute) => {
                state[attribute[0]] = attribute[1];
            });
            state.bonusAttributes = defaultBonusAttribute;
            return state;
        },
        setBonusAttributes: (state, action) => {
            const { payload } = action;
            state.bonusAttributes = payload;
            return state;
        },
        setCurrentBonusPoints: (state, action) => {
            const { payload } = action;
            state.currentBonusPoints = payload;
            return state;
        },
        setBaseAttributeValue: (state, action) => {
            const {
                payload: { attributeName, attributeValue },
            } = action;
            state[attributeName] = attributeValue;
            return state;
        },
        setAptitudeList: (state, action) => {
            const { payload } = action;
            state.aptitudeList = payload;
            return state;
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
    setId,
    setJob,
    setLevel,
    setMotivation,
    setName,
    setRace,
    setSubclass,
    setTotalArmor,
    setTotalLife,
    setTotalMana,
    setCharacterInfoBlock,
    setEnhancedAttribute,
    setBonusAttributes,
    setCurrentBonusPoints,
    setBaseAttributeValue,
    setAptitudeList,
} = actions;

export default reducer;
