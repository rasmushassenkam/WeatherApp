export interface IMapQuestResponse {
    results: IMapQuestResponseResult[];
}

interface IMapQuestResponseResult {
    locations: IMapQuestResponseLocation[];
}

interface IMapQuestResponseLocation {
    latLng: IMapQuestResponseLatLng;
}

interface IMapQuestResponseLatLng {
    lat: number;
    lng: number;
}