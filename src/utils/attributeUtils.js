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
        const levelMultiplier = Math.ceil(level / 2);
        attrValue += extractBonusAttr(job, Jobs) * levelMultiplier;
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
    return null;
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
