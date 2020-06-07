export interface IOpenWeatherResponse {
    current: IOpenWeatherResponseData;
    daily: IOpenWeatherResponseData[];
    hourly: IOpenWeatherResponseData[];
}

interface IOpenWeatherResponseData {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: IOpenWeatherResponseWeather[];
    wind_deg: number;
    wind_speed: number;
}

interface IOpenWeatherResponseWeather {
    description: string;
    icon: string;
    id: number
    main: string;
}