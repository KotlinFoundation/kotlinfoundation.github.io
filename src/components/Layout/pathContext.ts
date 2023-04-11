import {createContext, useContext} from "react";

export const PathContext = createContext(null);

export function usePath() {
    return useContext(PathContext);
}
