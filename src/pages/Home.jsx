import AgentCard from '../components/AgentCard';
import { useAgents } from '../hooks/useAgents';
import SettingsPanel from '../components/SettingsPanel';

export default function Home() {
  const agents = useAgents();
  return (
    <div>
      <SettingsPanel />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}
