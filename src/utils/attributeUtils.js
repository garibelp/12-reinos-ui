import AttributeEnum from '../enums/attributeEnum';
import Backgrounds from '../mock/background';
import Jobs from '../mock/jobs';
import Races from '../mock/races';
import Subclasses from '../mock/subclasses';

/**
 * @description Function that calculates the attribute value of a char based on info sent
 * @param {string} attribute - Attribute being calculated
 * @param {string} background - Character background
 * @param {string} race - Character race
 * @param {string} job - Character class
 * @param {string} subclass - Character subclass
 * @param {number} level - Character level
 * @param {number} enhancedBonus - Enhanced class bonus
 * @returns {number} value of the attribute
 */
export function calculateAttribute(
    attribute,
    background,
    race,
    job,
    subclass,
    level,
    enhancedBonus = 0
) {
    let attrValue = 3 + enhancedBonus;

    const extractBonusAttr = (name, array) => {
        const currentVal = array.find((r) => r.name === name);
        const { bonusAttr } = currentVal;
        if (bonusAttr && bonusAttr[attribute]) {
            return bonusAttr[attribute];
        }
        return 0;
    };

    if (background) {
        attrValue += extractBonusAttr(background, Backgrounds);
    }
    if (race) {
        attrValue += extractBonusAttr(race, Races);
    }
    if (job) {
        attrValue += extractBonusAttr(job, Jobs);
    }
    if (subclass) {
        attrValue += extractBonusAttr(subclass, Subclasses);
    }
    return attrValue;
}

/**
 * @description Function that retrieves life and mana of a class using player level
 * @param {string} jobName - Name of job being used
 * @param {number} currentLevel - Character level
 * @returns {object} life and mana values
 */
export function extractMaxLifeAndMana(jobName, currentLevel) {
    const data = { life: 1, mana: 0 };
    if (jobName) {
        const currentJob = Jobs.find((j) => j.name === jobName);
        data.life = Math.floor(currentJob.life * currentLevel * 1.5);
        data.mana = currentJob.mana + currentLevel * 2;
    }
    return data;
}

/**
 * @description Function that retrieves the field value of a class
 * @param {string} jobName - Name of job being used
 * @param {string} value - Name of attribute being retrieved being used
 * @returns {string} Attribute info
 */
export function extractJobInfo(jobName, value) {
    if (jobName && value) {
        const currentJob = Jobs.find((j) => j.name === jobName);
        return currentJob[value];
    }
    return null;
}

/**
 * @description Function that retrieves the field value of a race
 * @param {string} raceName - Name of race being used
 * @param {string} value - Name of attribute being retrieved being used
 * @returns {string} Attribute info
 */
export function extractRaceInfo(raceName, value) {
    if (raceName && value) {
        const currentRace = Races.find((r) => r.name === raceName);
        return currentRace[value];
    }
    return {};
}

/**
 * @description Function to extract the bond information of the backgroud of a character
 * @param {string} backgroundName - Name of the background of character
 * @returns {string} Bond of the background
 */
export function extractBackgroundBond(backgroundName) {
    if (backgroundName) {
        const currentBg = Backgrounds.find((b) => b.name === backgroundName);
        return currentBg.bond;
    }
    return null;
}

/**
 * @description Function that retrieves the field value of a subclass
 * @param {string} subclassName - Name of subclass being used
 * @param {string} value - Name of attribute being retrieved being used
 * @returns {string} Attribute info
 */
export function extractSubclassInfo(subclassName, value) {
    if (subclassName && value) {
        const currentSubclass = Subclasses.find((j) => j.name === subclassName);
        return currentSubclass[value];
    }
    return null;
}

/**
 * @param {string} jobName - Name of the job being retrieved
 * @returns {string} Bonus Attribute name
 */
export function extractJobBonusAttributeName(jobName) {
    if (jobName) {
        const { bonusAttr } = Jobs.find((j) => j.name === jobName);
        return Object.keys(bonusAttr)[0];
    }
    return null;
}

/**
 * @param {string} backgroundName - Name of the job being retrieved
 * @returns {string} Bonus Attribute name
 */
export function extractBackgroundBonusAttributeName(backgroundName) {
    if (backgroundName) {
        const { bonusAttr } = Backgrounds.find(
            (b) => b.name === backgroundName
        );
        return Object.keys(bonusAttr)[0];
    }
    return null;
}

/**
 * @description Function that validate if all attributes are valid on Character Save flow
 * @param {Object} characterInformation - Object containing character information
 * @returns {Object} List containing invalid fields and payload
 */
export function validateCharMandatoryAttributes(characterInformation = {}) {
    const errors = [];
    const {
        currentBonusPoints,
        id,
        background,
        currentArmor,
        currentLife,
        currentMana,
        defective,
        enhancedAttribute,
        job,
        level,
        name,
        race,
        subclass,
        totalArmor,
        totalLife,
        totalMana,
        aptitudeList,
    } = characterInformation;

    const commonPayload = {
        currentArmor,
        currentLife,
        currentMana,
        level,
    };
    const createPayload = {
        totalArmor,
        totalLife,
        totalMana,
    };

    if (id) {
        commonPayload._id = id;
    }

    if (currentBonusPoints > 0) {
        errors.push('Necessário gastar pontos de Atributo');
    } else {
        createPayload[AttributeEnum.AST.base] =
            characterInformation[AttributeEnum.AST.base];
        createPayload[AttributeEnum.CEL.base] =
            characterInformation[AttributeEnum.CEL.base];
        createPayload[AttributeEnum.INT.base] =
            characterInformation[AttributeEnum.INT.base];
        createPayload[AttributeEnum.TEN.base] =
            characterInformation[AttributeEnum.TEN.base];
    }

    function validateIfNotNull(logName, name, value, addToCommon = false) {
        if (!value) {
            errors.push(`Necessário selecionar ${logName}`);
        } else {
            if (addToCommon) commonPayload[name] = value;
            else createPayload[name] = value;
        }
    }

    validateIfNotNull('Nome', 'name', name);
    validateIfNotNull('Antecedente', 'background', background);
    validateIfNotNull('Classe', 'job', job);
    validateIfNotNull('Linhagem', 'race', race);
    if (level > 1) validateIfNotNull('Subclasse', 'subclass', subclass);
    if (race === 'Alterado') {
        validateIfNotNull(
            'Atributo Aprimorado',
            'enhancedAttribute',
            enhancedAttribute,
            true
        );
        commonPayload.defective = !!defective;
    }

    if (aptitudeList.length !== 3 || aptitudeList.indexOf(null) !== -1) {
        errors.push('Necessário selecionar Aptidões');
    } else {
        commonPayload.aptitudeList = aptitudeList;
    }

    return { errors, commonPayload, createPayload };
}

/**
 * @description Function that builds the char info retrieved from DB to the store format
 * @param {Object} dbCharInfo - Information retrieved from DB
 */
export function buildLoadCharacterPayload(dbCharInfo) {
    console.log('dbCharInfo', dbCharInfo);
    return {
        ...dbCharInfo,
        __typename: null,
        currentBonusPoints: 0,
        startLevel: dbCharInfo.level,
    };
}
