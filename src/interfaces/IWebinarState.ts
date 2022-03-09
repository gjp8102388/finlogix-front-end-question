import IWebinar from "./IWebinar";

export default interface IWebinarState {
    loading?: boolean,
    error?: string,
    webinar: IWebinar
}
