import { ChangeEvent, createContext, useState } from 'react';
import { SettingsProviderProps, SettingsState } from '../interfaces/interfaces';

type SettingsContextProps = {
  settings: SettingsState,
  handleChange: ({ target: { name, value } }: HandleChange) => void
}
type HandleChange = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

const SettingsContext = createContext<SettingsContextProps>({} as SettingsContextProps);

const initialSettings: SettingsState = {
  work: 15,
  rest: 5,
  task: window.localStorage.getItem("task")
}

const SettingsProvider = ({children}: SettingsProviderProps) => {
  
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = ({ target: { name, value }}: HandleChange) => {
    setSettings({ ...settings, [name]: value });
    if(name === "task") {
      window.localStorage.setItem("task", value);
    }
  }

  return (
    <SettingsContext.Provider value={{
      settings,
      handleChange
    }}>{children}</SettingsContext.Provider>
  )
}

export {SettingsProvider}

export default SettingsContext;