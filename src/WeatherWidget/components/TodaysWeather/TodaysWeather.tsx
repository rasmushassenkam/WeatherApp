import React from "react";
import "./TodaysWeather.scss"
import { IOpenWeatherResponseData } from "../../../interfaces/api/IOpenWeatherResponse";
import { WeatherCell } from "./components/WeatherCell/WeatherCell";
import { EUnits } from "../../../enums/EUnits";

interface IProps {
    todaysWeather?: IOpenWeatherResponseData[];
    units: EUnits | string;
}

export const TodaysWeahter: React.FC<IProps> = ({ todaysWeather, units }) => {

    const getTime = (hoursToAdd: number): string => {
        let date = new Date(Date.now());
        date.setHours(date.getHours() + hoursToAdd);
        date.setMinutes(date.getMinutes() - date.getMinutes());
        return date.toLocaleTimeString(window.navigator.language, { hour: "2-digit", minute: "2-digit" });
    }

    return (
        <div className="todays-weather">
            {
                todaysWeather?.map((weather, index) => {
                    return (
                        <WeatherCell key={index} time={getTime(index)} todaysWeather={weather} units={units} />
                    );
                })
            }
        </div>
    );
};