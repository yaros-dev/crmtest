import React, {ReactNode, useContext, useReducer} from 'react'

interface IMenuState {
    isMenuOpened: boolean
}

const GET_MENU_STATE = 'menu_state';

type ActionType = {type: string, menuState: IMenuState};

const MenuContext = React.createContext<any>(null);
export const useMenuContext = () => {
    return useContext(MenuContext)
}

const reducer = (state: any, action: ActionType) => {
    switch (action.type) {
        case GET_MENU_STATE:
            return {...state, menuState: action.menuState}
        default: return state
    }
}

interface IMenuStateProviderProps {
    children: ReactNode;
}

export const MenuStateContextProvider = ({ children }: IMenuStateProviderProps) =>  {
    const [state, dispatch] = useReducer(reducer, {
        type: '',
        menuState: null
    })

    const currentMenuState = (menuState: IMenuState) => dispatch({ type: GET_MENU_STATE, menuState: menuState });

    return (
        <MenuContext.Provider value={{
            menuState: state.menuState,
            currentMenuState
        }}>
            { children }
        </MenuContext.Provider>
    )
}