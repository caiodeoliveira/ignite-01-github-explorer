import React from 'react';
import RepositoryItem from './RepositoryItem';


function RepositoryList() {
  return (
      <section className="repository-list">
          <h1>Lista de repositórios</h1>

        <ul>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
        </ul>
      </section>
  )
}

export default RepositoryList;