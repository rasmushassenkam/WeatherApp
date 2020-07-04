import React from "react";
import "./WeeklyWeatherCell.scss";
import { IOpenWeatherResponseDailyData } from "../../../../interfaces/api/IOpenWeatherResponse";
import { getTempUnits } from "../../../../helpers/getTempUnits";
import { EUnits } from "../../../../enums/EUnits";
import { getSpeedUnits } from "../../../../helpers/getSpeedUnits";

interface IProps {
    weather: IOpenWeatherResponseDailyData;
    day: string;
    units: EUnits | string;
}

export const WeeklyWeatherCell: React.FC<IProps> = ({ weather, day, units }) => {
    return (
        <div className="weekly-weather-cell">
            {day}
            <div>{weather.temp.day.toFixed(0)} {getTempUnits(units)}</div>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon"></img>
            <div className="data">{weather.rain ? weather.rain.toFixed(1) : "0"} mm</div>
            <div className="data">{weather.wind_speed.toFixed(0)} {getSpeedUnits(units)}</div>
        </div>
    );
}