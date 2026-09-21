import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import RepoList from './RepoList';

function Projects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'octocat' with your GitHub username to show your own projects
    fetch('https://api.github.com/users/Rudra2986/repos')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container projects-container">
      <h2>My Projects (GitHub Repositories)</h2>
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <RepoList data={data} />}
    </div>
  );
}

export default Projects;
