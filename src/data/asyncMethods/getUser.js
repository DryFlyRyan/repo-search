const getUser = async ({ ownerLogin }) => {
  const response = await fetch(
    `https://api.github.com/users/${ownerLogin}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json'
      },
    }
  );

  if (!response.ok) {
    return {};
  }
  return response.json();
}

export default getUser;
