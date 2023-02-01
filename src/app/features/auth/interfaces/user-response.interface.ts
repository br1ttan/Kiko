export interface IUserResponse {
    readonly displayName?: string;
    readonly kind: string;
    readonly idToken: string;
    readonly email: string;
    readonly refreshToken: string;
    readonly expiresIn: string;
    readonly localId: string;
    readonly registered?: boolean;
}
