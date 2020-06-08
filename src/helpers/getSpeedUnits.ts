import { EUnits } from "../enums/EUnits"

export const getSpeedUnits = (units: EUnits | string) => {
    switch (units) {
        case EUnits.imperial:
            return "mph"
        case EUnits.metric:
            return "m/s"
        case EUnits.standard:
            return "m/s"
    }
}