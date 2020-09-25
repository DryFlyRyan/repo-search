import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import mockDetails from './_mockDetails';

import { getRepository } from '../../data/asyncMethods';
import { UserSidebar } from './subcomponents';

import { PageContainer, RepoDetailsSection } from './RepoDetail.styles';

const RepoDetail = ({
  results,
}) => {
  const { ownerLogin, repoName} = useParams();
  const [repo, updateRepo] = useState({});
  const [count, updateCount] = useState(0)

  // Using `useEffect` here to ensure that only a single call fires on page load
  useEffect(() => {
    const foundRepo = results.find(repo => repo.name === repoName);

    if (foundRepo) {
      updateRepo(foundRepo);
      return;
    }

    (async () => {
      // const fetchedRepo = await getRepository({ ownerLogin, repoName });
      // updateRepo(fetchedRepo);
      updateRepo(mockDetails);
    })()
  }, [results, ownerLogin, repoName])

  return (
    <PageContainer>
      <UserSidebar
      
      />
      <RepoDetailsSection>

      </RepoDetailsSection>
    </PageContainer>
  )
};

RepoDetail.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default RepoDetail;
