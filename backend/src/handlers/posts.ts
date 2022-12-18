const Posts = () => {
  const body = JSON.stringify('')
  const headers = { "Content-type": "application/json" }
  return new Response(body, { headers })
};

export default Posts
