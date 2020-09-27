import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { mockRepo, altRepo } from './_mockDetails';
import { getRepository } from 'AsyncMethods';
import {
  UserSidebar,
  RepoDetailsSection,
} from './subcomponents';

import { PageContainer, Divider } from './RepoDetail.styles';

const RepoDetail = ({
  results,
}) => {
  const { ownerLogin, repoName} = useParams();
  const [repo, updateRepo] = useState({});

  // Using `useEffect` here to ensure that only a single call fires on page load
  useEffect(() => {
    const foundRepo = results.find(repo => repo.name === repoName);

    if (foundRepo) {
      updateRepo(foundRepo);
      return;
    }

    (async () => {
      const fetchedRepo = await getRepository({ ownerLogin, repoName });
      updateRepo(fetchedRepo);
    })();
  }, [results, ownerLogin, repoName])

  if (!Object.keys(repo).length) {
    return null;
  }

  console.log(repo)

  return (
    <PageContainer>
      <UserSidebar
        ownerLogin={ownerLogin}
      />
      <Divider />
      <RepoDetailsSection
        repo={repo}
      />
    </PageContainer>
  )
};

RepoDetail.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default RepoDetail;
