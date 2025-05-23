import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export function AgentDetailLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <Link to="/" className="text-blue-600 mb-4 inline-block">&larr; Back to Marketplace</Link>
        {children}
      </main>
      <Footer />
    </div>
  );
}
