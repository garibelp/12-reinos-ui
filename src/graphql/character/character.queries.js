import { gql } from '@apollo/client';

export const CHARACTER = gql`
    query character($id: String!) {
        character(_id: $id) {
            Astucia
            Celeridade
            Intelecto
            Tenacidade
            background
            currentArmor
            currentLife
            currentMana
            defective
            enhancedAttribute
            job
            level
            name
            race
            subclass
            totalArmor
            totalLife
            totalMana
            aptitudeList
        }
    }
`;

export const CHARACTER_LIST = gql`
    query characters {
        characters {
            _id
            name
            race
            job
            level
            background
            subclass
        }
    }
`;
