import React, { useState, useEffect } from "react";
import "./WeatherWidget.scss";
import { getPlaceLatLng, getWeather } from "../axios/axiosService";
import { IPosition } from "../interfaces/IPosition";
import { IOpenWeatherResponseData } from "../interfaces/api/IOpenWeatherResponse";

export const WeatherWidget: React.FC = () => {
    const [place, setPlace] = useState<string>("");
    const [position, setPosition] = useState<IPosition | undefined>(undefined);
    const [weather, setWeather] = useState<IOpenWeatherResponseData | undefined>(undefined);


    useEffect(() => {
        fetchWeather();
    }, [position]);

    const fetchWeather = async () => {
        if (position && position.lat && position.lng) {
            setWeather(await getWeather(position.lat.toString(), position.lng.toString()));
        }
    }

    const handleOnClick = async () => {
        const latLng = await getPlaceLatLng(place);
        setPosition(latLng);
    }

    return (
        <div className="weather-widget">
            <p>Search for a place where you want to know the weather..</p>
            <input type="text" value={place} onChange={(e) => setPlace(e.target.value)}></input>
            <button onClick={handleOnClick}>Search</button>
            <p>{weather?.weather[0]?.description}</p>
        </div>
    )
}