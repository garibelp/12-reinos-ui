import { gql } from '@apollo/client';

export const CREATE_CHARACTER = gql`
    mutation createCharacter($payload: CreateCharacterInput!) {
        createCharacter(payload: $payload) {
            _id
        }
    }
`;

export const UPDATE_CHARACTER = gql`
    mutation updateCharacter($payload: UpdateCharacterInput!) {
        updateCharacter(payload: $payload) {
            _id
        }
    }
`;
