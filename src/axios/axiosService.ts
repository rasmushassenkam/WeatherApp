import axios from "axios";
import { IMapQuestResponse } from "../interfaces/api/IMapQuestResponse";
import { IPosition } from "../interfaces/IPosition";
import { IOpenWeatherResponse } from "../interfaces/api/IOpenWeatherResponse";

export const getPlaceLatLng = async (place: string): Promise<IPosition | undefined> => {
    const response = await axios.get<IMapQuestResponse>(`http://open.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAP_QUEST_API_KEY}&location=${place}`);
    if (response.data) {
        return {
            lat: response.data.results[0]?.locations[0]?.latLng.lat,
            lng: response.data.results[0]?.locations[0]?.latLng.lng
        }
    }
    return undefined;
}

export const getWeather = async (lat: string, lng: string): Promise<IOpenWeatherResponse | undefined> => {
    const response = await axios.get<IOpenWeatherResponse>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    if (response.data) {
        return response.data;
    }
    return undefined;
}