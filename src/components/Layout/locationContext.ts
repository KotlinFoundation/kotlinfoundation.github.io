import {createContext, useContext} from "react";

export const LocationContext = createContext(null);

export function useLayoutLocation() {
    return useContext(LocationContext);
}
