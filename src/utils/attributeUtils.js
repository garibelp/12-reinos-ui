import AttributeEnum from '../enums/attributeEnum';
import Backgrounds from '../mock/background';
import Jobs from '../mock/jobs';
import Races from '../mock/races';
import Subclasses from '../mock/subclasses';

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
export function extractBackgroundInfo(backgroundName, value) {
    if (backgroundName && value) {
        const currentSubclass = Backgrounds.find(
            (b) => b.name === backgroundName
        );
        return currentSubclass[value];
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
        errors.push('Necess??rio gastar pontos de Atributo');
    } else {
        createPayload[AttributeEnum.AST.init] = attributesObjToArray(
            characterInformation[AttributeEnum.AST.init]
        );
        createPayload[AttributeEnum.CEL.init] = attributesObjToArray(
            characterInformation[AttributeEnum.CEL.init]
        );
        createPayload[AttributeEnum.INT.init] = attributesObjToArray(
            characterInformation[AttributeEnum.INT.init]
        );
        createPayload[AttributeEnum.TEN.init] = attributesObjToArray(
            characterInformation[AttributeEnum.TEN.init]
        );
    }

    function validateIfNotNull(logName, name, value, addToCommon = false) {
        if (!value) {
            errors.push(`Necess??rio selecionar ${logName}`);
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
        errors.push('Necess??rio selecionar Aptid??es');
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
    const charInfo = {
        ...dbCharInfo,
        currentBonusPoints: 0,
        [AttributeEnum.AST.init]: attributesArrayToObj(
            dbCharInfo[AttributeEnum.AST.init]
        ),
        [AttributeEnum.CEL.init]: attributesArrayToObj(
            dbCharInfo[AttributeEnum.CEL.init]
        ),
        [AttributeEnum.INT.init]: attributesArrayToObj(
            dbCharInfo[AttributeEnum.INT.init]
        ),
        [AttributeEnum.TEN.init]: attributesArrayToObj(
            dbCharInfo[AttributeEnum.TEN.init]
        ),
        startLevel: dbCharInfo.level,
    };
    delete charInfo.__typename;

    return charInfo;
}

export function attributesObjToArray(attrObj = {}) {
    const arr = [];

    arr.push(attrObj.job);
    arr.push(attrObj.background);
    arr.push(attrObj.subclass);
    arr.push(attrObj.race);
    arr.push(attrObj.bonus);

    return arr;
}

export function attributesArrayToObj(attrArr = []) {
    if (attrArr.length === 5) {
        const attrObj = { base: 3 };

        attrObj.job = attrArr[0];
        attrObj.background = attrArr[1];
        attrObj.subclass = attrArr[2];
        attrObj.race = attrArr[3];
        attrObj.bonus = attrArr[4];

        return attrObj;
    }
    return null;
}
