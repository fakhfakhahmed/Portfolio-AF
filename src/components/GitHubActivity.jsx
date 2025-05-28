import React, { useState, useEffect } from 'react';

const GitHubActivity = ({ username }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        setLoading(true);
        const eventsRes = await fetch(`https://api.github.com/users/${username}/events?per_page=10`);
        
        if (!eventsRes.ok) throw new Error('GitHub API error');
        
        const eventsData = await eventsRes.json();
        setEvents(eventsData);
      } catch (err) {
        setError('Failed to load GitHub activity.');
      } finally {
        setLoading(false);
      }
    };
    fetchGitHubActivity();
  }, [username]);

  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getEventTypeDescription = (event) => {
    switch(event.type) {
      case 'PushEvent':
        return `Pushed to ${event.repo.name}`;
      case 'PullRequestEvent':
        return `${event.payload.action} pull request in ${event.repo.name}`;
      case 'IssuesEvent':
        return `${event.payload.action} issue in ${event.repo.name}`;
      case 'CreateEvent':
        return `Created ${event.payload.ref_type} in ${event.repo.name}`;
      case 'DeleteEvent':
        return `Deleted ${event.payload.ref_type} in ${event.repo.name}`;
      case 'WatchEvent':
        return `Starred ${event.repo.name}`;
      case 'ForkEvent':
        return `Forked ${event.repo.name}`;
      default:
        return `Activity in ${event.repo.name}`;
    }
  };

  if (loading) return <div className="text-center py-6 text-gray-400">Loading GitHub activity...</div>;
  if (error) return <div className="text-center py-6 text-red-500">{error}</div>;
  if (!events.length) return null;

  return (
    <section className="py-20 bg-rn-dark">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* GitHub Contributions Graph */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contributions</h3>
            <div className="bg-gray-800 bg-opacity-30 p-4 rounded-lg">
              <img 
                src={`https://ghchart.rshah.org/${username}`} 
                alt="GitHub Contribution Graph" 
                className="w-full h-auto rounded"
              />
              <div className="mt-3 text-center text-sm text-gray-400">
                Contribution activity over the past year
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {events.slice(0, 6).map((event, index) => (
                <div key={index} className="flex p-4 bg-gray-800 bg-opacity-30 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-lg text-white">
                      {event.type === 'PushEvent' ? '🔨' : 
                       event.type === 'PullRequestEvent' ? '🔀' :
                       event.type === 'IssuesEvent' ? '⚠️' :
                       event.type === 'CreateEvent' ? '✨' :
                       event.type === 'ForkEvent' ? '🍴' : '🚀'}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div className="text-sm font-medium">{getEventTypeDescription(event)}</div>
                      <div className="text-xs text-gray-400">{formatEventDate(event.created_at)}</div>
                    </div>
                    <div className="mt-1 text-xs text-gray-400 truncate">
                      {event.repo.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
