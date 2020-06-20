import React, { useState, useEffect, useCallback } from "react";
import "./WeatherWidget.scss";
import { getPlaceLatLng, getWeather } from "../axios/axiosService";
import { IPosition } from "../interfaces/IPosition";
import { IOpenWeatherResponse } from "../interfaces/api/IOpenWeatherResponse";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { EUnits } from "../enums/EUnits";
import { TodaysWeahter } from "./components/TodaysWeather/TodaysWeather";

export const WeatherWidget: React.FC = () => {
    const [place, setPlace] = useState<string>("Copenhagen");
    const [position, setPosition] = useState<IPosition | undefined>(undefined);
    const [weather, setWeather] = useState<IOpenWeatherResponse | undefined>(undefined);
    const [units, setUnits] = useState<EUnits | string>(EUnits.metric);

    const fetchWeather = useCallback(async () => {
        if (position && position.lat && position.lng) {
            setWeather(await getWeather(position.lat.toString(), position.lng.toString(), units));
        }
    }, [position, units]);

    const getPlaceAndSetPos = useCallback(async () => {
        const latLng = await getPlaceLatLng(place);
        setPosition(latLng);
    }, [place]);

    useEffect(() => {
        fetchWeather();
    }, [position, fetchWeather]);

    useEffect(() => {
        getPlaceAndSetPos();
    }, [getPlaceAndSetPos]);

    const handleOnClick = async () => {
        await getPlaceAndSetPos();
    }


    return (
        <div className="weather-widget">
            <p>Search for a place where you want to know the weather..</p>
            <input type="text" value={place} onChange={(e) => setPlace(e.target.value)}></input>
            <select value={units} name="units" id="units" onChange={(e) => setUnits(e.target.value)}>
                {
                    Object.keys(EUnits).map((x, index) => {
                        return (
                            <option key={index} value={x}>{x}</option>
                        )
                    })
                }
            </select>
            <button onClick={handleOnClick}>Search</button>
            <div className="today">
                <CurrentWeather currentWeather={weather?.current} units={units} />
                <TodaysWeahter todaysWeather={weather?.hourly.slice(0, 24)} units={units} />
            </div>
        </div>
    )
}