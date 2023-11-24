import { createContext } from "react"
import { Event, hydrateClientStorage } from "/utils/state.js"

export const initialState = {"get_image": ["cantopulido.jpg", "nave1.jpg", "nave2.jpg"], "images": ["cantopulido.jpg", "nave1.jpg", "nave2.jpg"], "index": 0, "is_hydrated": false}
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}
export const initialEvents = [
    Event('button_state.hydrate', hydrateClientStorage(clientStorage)),
]