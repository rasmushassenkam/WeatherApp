export interface IOpenWeatherResponse {
    current: IOpenWeatherResponseData;
    daily: IOpenWeatherResponseDailyData[];
    hourly: IOpenWeatherResponseData[];
}

export interface IOpenWeatherResponseData {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    rain?: IOpenWeatherResponseRain;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: IOpenWeatherResponseWeather[];
    wind_deg: number;
    wind_speed: number;
}

export interface IOpenWeatherResponseDailyData {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: IOpenWeatherResponseDailyTemp;
    humidity: number;
    pressure: number;
    rain?: number;
    sunrise: number;
    sunset: number;
    temp: IOpenWeatherResponseDailyTemp;
    uvi: number;
    visibility: number;
    weather: IOpenWeatherResponseWeather[];
    wind_deg: number;
    wind_speed: number;
}

interface IOpenWeatherResponseDailyTemp {
    day: number;
    eve: number;
    max?: number;
    min?: number;
    morn: number;
    night: number;
}

interface IOpenWeatherResponseRain {
    ["1h"]: number;
}

interface IOpenWeatherResponseWeather {
    description: string;
    icon: string;
    id: number
    main: string;
}