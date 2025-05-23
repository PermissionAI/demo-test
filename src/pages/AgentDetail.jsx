import { useParams } from 'react-router-dom';
import agents from '../data/agents';
import { AgentDetailLayout } from '../layouts/AgentDetailLayout';
import Tag from '../components/Tag';
import Button from '../components/Button';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function AgentDetail() {
  const { agentId } = useParams();
  const agent = agents.find((a) => a.id === agentId);
  const [showModal, setShowModal] = useState(false);

  if (!agent) {
    return <p>Agent not found</p>;
  }

  return (
    <AgentDetailLayout>
      <div className="flex flex-col items-start">
        <img src={agent.avatarUrl} alt={agent.name} className="w-32 h-32 rounded-full" />
        <h2 className="text-2xl font-bold mt-4">{agent.name}</h2>
        <p className="mt-2 text-gray-700">{agent.description}</p>
        <div className="flex flex-wrap mt-2 gap-1">
          {agent.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <Button onClick={() => setShowModal(true)} className="mt-4">Interact</Button>
        {showModal && (
          <Modal title={`Interact with ${agent.name}`} onClose={() => setShowModal(false)}>
            <p>Interaction type: {agent.interactionType}</p>
            <p className="text-sm mt-2 text-gray-500">Future interaction UI will go here.</p>
          </Modal>
        )}
      </div>
    </AgentDetailLayout>
  );
}
