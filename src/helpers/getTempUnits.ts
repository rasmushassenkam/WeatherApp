import { EUnits } from "../enums/EUnits"

export const getTempUnits = (units: EUnits | string) => {
    switch (units) {
        case EUnits.imperial:
            return "°F"
        case EUnits.metric:
            return "°C"
        case EUnits.standard:
            return "K"
    }
}