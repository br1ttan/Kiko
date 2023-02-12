export interface IUserAuthData {
    readonly email: string;
    readonly password: string;
    readonly displayName?: string;
    readonly returnSecureToken?: boolean;
}
