import React, { useState, useEffect, useCallback } from "react";
import "./WeatherWidget.scss";
import { getPlaceLatLng, getWeather } from "../axios/axiosService";
import { IPosition } from "../interfaces/IPosition";
import { IOpenWeatherResponse } from "../interfaces/api/IOpenWeatherResponse";

export const WeatherWidget: React.FC = () => {
    const [place, setPlace] = useState<string>("");
    const [position, setPosition] = useState<IPosition | undefined>(undefined);
    const [weather, setWeather] = useState<IOpenWeatherResponse | undefined>(undefined);

    const fetchWeather = useCallback(async () => {
        if (position && position.lat && position.lng) {
            setWeather(await getWeather(position.lat.toString(), position.lng.toString()));
        }
    }, [position]);

    useEffect(() => {
        fetchWeather();
    }, [position, fetchWeather]);


    const handleOnClick = async () => {
        const latLng = await getPlaceLatLng(place);
        setPosition(latLng);
    }

    return (
        <div className="weather-widget">
            <p>Search for a place where you want to know the weather..</p>
            <input type="text" value={place} onChange={(e) => setPlace(e.target.value)}></input>
            <button onClick={handleOnClick}>Search</button>
            <p>{weather?.current.weather[0].description}</p>
        </div>
    )
}