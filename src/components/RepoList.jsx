import React from 'react';

function RepoList({ data }) {
  return (
    <div className="projects-grid">
      {data.map((repo) => (
        <div key={repo.id} className="project-card">
          <h3>{repo.name}</h3>
          <p>{repo.description || 'No description provided.'}</p>
          <div className="tech-stack">
            {repo.language && (
              <span className="tech-badge">{repo.language}</span>
            )}
          </div>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px', display: 'inline-block', color: '#646cff' }}>
            View Repository
          </a>
        </div>
      ))}
    </div>
  );
}

export default RepoList;
