import { createSlice } from '@reduxjs/toolkit';

import AttributeEnum from '../enums/attributeEnum';

const defaultAttributeValues = {
    base: 3,
    job: 0,
    background: 0,
    subclass: 0,
    race: 0,
    bonus: 0,
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
    [AttributeEnum.AST.init]: defaultAttributeValues,
    [AttributeEnum.CEL.init]: defaultAttributeValues,
    [AttributeEnum.INT.init]: defaultAttributeValues,
    [AttributeEnum.TEN.init]: defaultAttributeValues,
    aptitudeList: [null, null, null],
    currentBonusPoints: 3,
};

const updateConstAttribute = (state, attrName, bonusObj) => {
    if (bonusObj) {
        Object.keys(AttributeEnum).forEach((k) => {
            state[k][attrName] = bonusObj[k] || 0;
            // Logic to remove bonus points if attr changed is background
            if (
                attrName === 'background' &&
                bonusObj[k] &&
                state[k].bonus > 0
            ) {
                state.currentBonusPoints += state[k].bonus;
                state[k].bonus = 0;
            }
        });
    }
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
            const {
                payload: { name, bonus },
            } = action;
            state.background = name;
            updateConstAttribute(state, 'background', bonus);
            return state;
        },
        setRace: (state, action) => {
            const {
                payload: { name, bonus },
            } = action;
            state.race = name;
            updateConstAttribute(state, 'race', bonus);
            return state;
        },
        setJob: (state, action) => {
            const {
                payload: { name, bonus },
            } = action;
            state.job = name;
            if (name !== 'Alterado') state.enhancedAttribute = null;
            updateConstAttribute(state, 'job', bonus);
            return state;
        },
        setSubclass: (state, action) => {
            const {
                payload: { name, bonus },
            } = action;
            state.subclass = name;
            updateConstAttribute(state, 'subclass', bonus);
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
            if (state.enhancedAttribute) {
                state[state.enhancedAttribute].race = payload ? -1 : 1;
            }
            return state;
        },
        setEnhancedAttribute: (state, action) => {
            const { payload } = action;
            state.enhancedAttribute = payload;
            updateConstAttribute(state, 'race', {
                [payload]: state.defective ? -1 : 1,
            });
            return state;
        },
        setBonusAttribute: (state, action) => {
            const {
                payload: { value, attribute },
            } = action;
            state.currentBonusPoints -= value;
            state[attribute].bonus += value;
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
        setCharacterInfoBlock: (state, action) => {
            const { payload } = action;
            Object.entries(payload).forEach((attribute) => {
                state[attribute[0]] = attribute[1];
            });
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
    setEnhancedAttribute,
    setBonusAttribute,
    setBaseAttributeValue,
    setAptitudeList,
    setCharacterInfoBlock,
} = actions;

export default reducer;
