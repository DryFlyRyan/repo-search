import qs from 'qs';
const searchRepositories = async (query) => {
  const params = qs.stringify({
    q: query,
  })
  const response = await fetch(
    `https://api.github.com/search/repositories?${params}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json'
      },
      q: query,
    }
  );

  // Note: Add error handling

  if (response.ok) {
    return response.json();
  }
}

export default searchRepositories;
