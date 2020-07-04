import React, { useEffect } from "react";
import { IOpenWeatherResponseDailyData } from "../../../interfaces/api/IOpenWeatherResponse";
import { WeeklyWeatherCell } from "./components/WeeklyWeatherCell";
import { EUnits } from "../../../enums/EUnits";

interface IProps {
    weeklyWeather?: IOpenWeatherResponseDailyData[];
    units: EUnits | string;
}

export const WeeklyWeather: React.FC<IProps> = ({ weeklyWeather, units }) => {

    const getDay = (daysToAdd: number): string => {
        let date = new Date(Date.now());
        date.setDate(date.getDate() + daysToAdd);
        const weekDay = new Intl.DateTimeFormat(window.navigator.language, { weekday: "long" }).format(date);
        const dayDate = new Intl.DateTimeFormat(window.navigator.language, { day: "2-digit", month: "2-digit" }).format(date);
        return weekDay + " " + dayDate;
    }

    return (
        <div className="weekly-weather">
            {weeklyWeather?.map((weather, index) => {
                return (
                    <WeeklyWeatherCell weather={weather} day={getDay(index)} units={units} />
                );
            })}
        </div>
    );
}