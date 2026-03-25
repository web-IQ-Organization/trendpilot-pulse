import React, { useState, useEffect } from 'react';
import { TrendBrief, TrendEntry } from '@/lib/briefGenerator';

const BriefPage: React.FC = () => {
  const [brief, setBrief] = useState<TrendBrief | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBrief = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/brief');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: TrendBrief = await response.json();
      setBrief(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrief();
  }, []);

  if (loading) return <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center"><p>Loading brief...</p></div>;
  if (error) return <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center"><p className="text-red-500">Error: {error}</p></div>;
  if (!brief) return <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center"><p>No brief available.</p></div>;

  const getViralScoreColor = (score: number) => {
    if (score > 85) return 'bg-red-600';
    if (score > 70) return 'bg-orange-500';
    if (score > 50) return 'bg-yellow-500';
    return 'bg-zinc-500';
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-inter p-6">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4 text-zinc-50">TrendPilot Pulse</h1>
        <button
          onClick={fetchBrief}
          className="mb-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition-colors"
        >
          Refresh Brief
        </button>

        {brief.urgentAlert && (
          <div className="bg-red-800 text-white p-4 rounded-md mb-6 font-semibold animate-pulse">
            {brief.urgentAlert}
          </div>
        )}

        <h2 className="text-2xl text-zinc-300 mb-6">Today's Brief: <span className="font-bold text-zinc-50"></span>{brief.headline}</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {brief.topTrends.map((trend: TrendEntry, index: number) => (
            <div key={index} className="bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-800 relative">
              <span className={`absolute top-0 right-0 m-4 px-3 py-1 text-sm font-bold rounded-full ${getViralScoreColor(trend.viralScore)}`}>
                Score: {trend.viralScore}
              </span>
              <h3 className="text-3xl font-bold mb-2 text-zinc-50">{trend.keyword}</h3>
              <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-4">
                {trend.category}
              </span>
              <p className="text-zinc-300 mb-2"><strong>Why it matters:</strong> {trend.why}</p>
              <p className="text-zinc-300"><strong>Actionable:</strong> {trend.action}</p>
              <p className="text-zinc-500 text-sm mt-4">Source: {trend.source}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-zinc-900 rounded-lg text-center border border-zinc-800">
          <h3 className="text-xl font-semibold text-zinc-50 mb-4">Ready for daily insights?</h3>
          <p className="text-zinc-300 mb-4">Get daily briefs delivered to your inbox — $297/mo Starter</p>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white font-bold text-lg transition-colors">
            Upgrade to Starter
          </button>
        </div>
      </div>
    </div>
  );
};

export default BriefPage;
