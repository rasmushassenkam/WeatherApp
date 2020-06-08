import React from "react";
import "./CurrentWeather.scss";
import { IOpenWeatherResponseData } from "../../../interfaces/api/IOpenWeatherResponse";
import { EUnits } from "../../../enums/EUnits";
import { getTempUnits } from "../../../helpers/getTempUnits";
import { getSpeedUnits } from "../../../helpers/getSpeedUnits";

interface IProps {
    currentWeather?: IOpenWeatherResponseData;
    units: EUnits | string;
}

export const CurrentWeather: React.FC<IProps> = ({ currentWeather, units }) => {

    const getTime = (currentWeather: IOpenWeatherResponseData) => {
        const rise = new Date(currentWeather.sunrise * 1000);
        const set = new Date(currentWeather.sunset * 1000);
        const sunrise = rise.getHours() + ":" + rise.getMinutes();
        const sunset = set.getHours() + ":" + set.getMinutes()
        return {
            sunrise,
            sunset
        }
    }

    return (
        <div className="current-weather">
            {currentWeather &&
                <>
                    <div className="top-part">
                        <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="icon"></img>
                        <span className="temp">{currentWeather.temp} {getTempUnits(units)}</span>
                        <span className="description">{currentWeather.weather[0].description}</span>
                    </div>
                    <div className="bottom-part">
                        <div className="row">
                            <span className="title">Feels like:</span>
                            <span className="data">{currentWeather.feels_like} {getTempUnits(units)}</span>
                        </div>
                        <div className="row">
                            <span className="title">Humidity:</span>
                            <span className="data">{currentWeather.humidity} %</span>
                        </div>
                        <div className="row">
                            <span className="title">Rain:</span>
                            <span className="data">{currentWeather.rain ? currentWeather.rain["1h"] : "0"} mm</span>
                        </div>
                        <div className="row">
                            <span className="title">Wind:</span>
                            <span className="data">{currentWeather.wind_speed} {getSpeedUnits(units)}</span>
                        </div>
                        <div className="row">
                            <span className="title">UV:</span>
                            <span className="data">{currentWeather.uvi}</span>
                        </div>
                        <div className="row">
                            <span className="title">Sunrise/-set:</span>
                            <span className="data">
                                {getTime(currentWeather).sunrise}
                                /
                                {getTime(currentWeather).sunset}
                            </span>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}