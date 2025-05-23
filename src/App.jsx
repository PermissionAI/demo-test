import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AgentDetail from './pages/AgentDetail';
import { MarketplaceLayout } from './layouts/MarketplaceLayout';
import { useAppContext } from './context/AppContext';

function App() {
  const { darkMode } = useAppContext();
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <MarketplaceLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agent/:agentId" element={<AgentDetail />} />
        </Routes>
      </MarketplaceLayout>
    </div>
  );
}

export default App;
