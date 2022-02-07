export interface SettingsProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface SettingsState {
  work: number;
  rest: number;
  task: string | null;
}