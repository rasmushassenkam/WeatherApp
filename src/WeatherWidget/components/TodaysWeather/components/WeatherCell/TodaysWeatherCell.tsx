import React from "react";
import "./TodaysWeatherCell.scss";
import { IOpenWeatherResponseData } from "../../../../../interfaces/api/IOpenWeatherResponse";
import { getSpeedUnits } from "../../../../../helpers/getSpeedUnits";
import { EUnits } from "../../../../../enums/EUnits";
import { getTempUnits } from "../../../../../helpers/getTempUnits";

interface IProps {
    todaysWeather: IOpenWeatherResponseData;
    time: string;
    units: EUnits | string;
}

export const TodaysWeatherCell: React.FC<IProps> = ({ todaysWeather, time, units }) => {
    return (
        <div className="weather-cell">
            <div className="time">{time}</div>
            <div>{todaysWeather.temp.toFixed(0)} {getTempUnits(units)}</div>
            <img src={`http://openweathermap.org/img/wn/${todaysWeather.weather[0].icon}@2x.png`} alt="icon"></img>
            <div className="data">{todaysWeather.rain ? todaysWeather.rain["1h"] : "0"} mm</div>
            <div className="data">{todaysWeather.wind_speed.toFixed(0)} {getSpeedUnits(units)}</div>
        </div>
    )
}