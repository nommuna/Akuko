const Posts = () => {
  const body = JSON.stringify({hello: 'World'})
  const headers = { "Content-type": "application/json" }
  return new Response(body, { headers })
};

export default Posts
