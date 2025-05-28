import React, { useState, useEffect } from 'react';

const GitHubProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`);
        
        if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub API error');
        
        const profileData = await profileRes.json();
        const reposData = await reposRes.json();
        
        setProfile(profileData);
        setRepos(reposData);
      } catch (err) {
        setError('Failed to load GitHub profile.');
      } finally {
        setLoading(false);
      }
    };
    fetchGitHubData();
  }, [username]);

  if (loading) return <div className="text-center py-8 text-gray-400">Loading GitHub profile...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!profile) return null;

  return (
    <section className="pb-12">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 justify-center sm:justify-start">
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <img
            src={profile.avatar_url}
            alt={profile.login}
            className="rounded-full w-24 h-24 object-cover border-4 border-gray-800 mb-4"
          />
          <h2 className="text-2xl font-bold mb-1">{profile.name || profile.login}</h2>
          <p className="text-gray-400 text-center md:text-left mb-3">{profile.bio}</p>
          <div className="flex items-center gap-3 mb-4 text-gray-300 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>@{profile.login}</span>
            </div>
            {profile.location && (
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{profile.location}</span>
              </div>
            )}
          </div>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            View GitHub Profile
          </a>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="hidden sm:block bg-gray-800 bg-opacity-20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">{profile.public_repos}</div>
            <div className="text-gray-400 text-sm">Repositories</div>
          </div>
          <div className="hidden sm:block bg-gray-800 bg-opacity-20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">{profile.followers}</div>
            <div className="text-gray-400 text-sm">Followers</div>
          </div>
          <div className="hidden sm:block bg-gray-800 bg-opacity-20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">{profile.following}</div>
            <div className="text-gray-400 text-sm">Following</div>
          </div>
          
          {repos.map(repo => (
            <a 
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-gray-800 bg-opacity-20 p-4 rounded-lg col-span-full sm:col-span-1 hover:bg-gray-700 transition-colors"
            >
              <h4 className="font-bold truncate">{repo.name}</h4>
              <p className="text-sm text-gray-400 h-10 overflow-hidden mt-1">{repo.description || 'No description'}</p>
              <div className="flex mt-2 text-xs text-gray-300 gap-2">
                {repo.language && <span>{repo.language}</span>}
                <span>★ {repo.stargazers_count}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubProfile;
