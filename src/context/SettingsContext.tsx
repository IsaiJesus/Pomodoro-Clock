import { ChangeEvent, createContext, useState } from 'react';
import { SettingsProviderProps, SettingsState } from '../interfaces/interfaces';

type SettingsContextProps = {
  settings: SettingsState,
  handleChange: ({ target: { name, value } }: HandleChange) => void
}
type HandleChange = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

const SettingsContext = createContext<SettingsContextProps>({} as SettingsContextProps);

const initialSettings: SettingsState = {
  work: 25,
  rest: 5,
  task: ""
}

const SettingsProvider = ({children}: SettingsProviderProps) => {
  
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = ({ target: { name, value }}: HandleChange) => {
    setSettings({ ...settings, [name]: value });
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