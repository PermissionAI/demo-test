import { Link } from 'react-router-dom';
import Tag from './Tag';

export default function AgentCard({ agent }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <img src={agent.avatarUrl} alt={agent.name} className="w-16 h-16 rounded-full" />
      <h3 className="text-lg font-bold mt-2">{agent.name}</h3>
      <p className="text-sm text-gray-700 mt-1">{agent.description}</p>
      <div className="flex flex-wrap mt-2 gap-1">
        {agent.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <Link to={`/agent/${agent.id}`} className="text-blue-600 mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
}
