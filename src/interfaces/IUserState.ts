export default interface IUserState {
    loading?: boolean,
    error?: string,
    isLogin?: boolean,
    userInfo: { id?: string, name?: string, token?: string }
}
