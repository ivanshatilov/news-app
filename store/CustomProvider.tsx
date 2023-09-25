'use client'

import {Provider} from 'react-redux'
import { store } from '.'


interface CustomProviderProps {
    children: React.ReactNode | React.ReactElement
}
export const CustomProvider: React.FC<CustomProviderProps> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}