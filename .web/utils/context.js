import { createContext } from "react"
import { Event, hydrateClientStorage } from "/utils/state.js"

export const initialState = {"is_hydrated": false, "show_left": false, "show_top": false}
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}
export const initialEvents = [
    Event('drawer_state.hydrate', hydrateClientStorage(clientStorage)),
]