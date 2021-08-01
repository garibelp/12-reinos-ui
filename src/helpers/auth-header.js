import { authService } from '../service/authService';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authService.currentUserValue;
    if (currentUser && currentUser.access_token) {
        return `Bearer ${currentUser.access_token}`;
    }
    return '';
}
