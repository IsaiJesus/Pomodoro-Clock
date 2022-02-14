import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";
import ConfigPage from "./pages/ConfigPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PomodoroPage from "./pages/PomodoroPage";
import Test from "./pages/Test";

function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<ConfigPage />} />
          <Route path="/pomodoro" element={<PomodoroPage />} />
          <Route path="/test" element={<Test/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SettingsProvider>
  );
}

export default App;
