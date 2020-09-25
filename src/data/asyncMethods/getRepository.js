const getRepository = async ({ ownerLogin, repoName }) => {
  const response = await fetch(
    `https://api.github.com/repos/${ownerLogin}/${repoName}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json'
      },
    }
  );

  if (!response.ok) {
    
  }
  return response.json();
}

export default getRepository;
