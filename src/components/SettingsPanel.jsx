import Button from './Button';
import { useAppContext } from '../context/AppContext';

export default function SettingsPanel() {
  const { darkMode, setDarkMode } = useAppContext();
  return (
    <div className="border p-4 rounded shadow bg-white mb-4">
      <h3 className="font-bold mb-2">Settings</h3>
      <div className="flex items-center gap-2">
        <span>Dark Mode</span>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Disable' : 'Enable'}
        </Button>
      </div>
    </div>
  );
}
