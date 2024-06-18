import React, { useReducer } from "react"

const isBrowser = typeof window !== "undefined" && window

let getBrowserLanguage = null

if (isBrowser) {
  getBrowserLanguage = window.navigator.language
}

const defaultState = {
  isMenuOpen: false,
  language: null,
}

export const SiteStateContext = React.createContext()
export const SiteDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU": {
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }
    }
    case "SWITCH_LANGUAGE": {
      return {
        ...state,
        language: action.payload,
      }
    }
    default:
      throw new Error("Bad Action")
  }
}

const SiteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  return (
    <SiteStateContext.Provider value={state}>
      <SiteDispatchContext.Provider value={dispatch}>
        {children}
      </SiteDispatchContext.Provider>
    </SiteStateContext.Provider>
  )
}

export { SiteContextProvider }
