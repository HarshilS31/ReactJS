import {createContext,useContext} from 'react'
export interface ThemeType {
  themeMode:string;
  darkTheme:()=>void;
  lightTheme:()=>void

}
export const ThemeContext = createContext<ThemeType>({
  themeMode:"light",
  darkTheme:()=>{},
  lightTheme:()=>{},
})

export const  ThemeProvider =ThemeContext.Provider
export  function useTheme() {
  return useContext(ThemeContext )
}