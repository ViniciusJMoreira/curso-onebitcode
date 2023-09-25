async function fetchPut(id, name, amount) {
  return await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'PUT' ,
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({name, amount})
    }).then(async(res) => await res.json())
}

async function fetchPost(name, amount) {
  return await fetch(`http://localhost:3000/transactions`, {
      method: 'POST' ,
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({name, amount})
    }).then(async(res) => await res.json())
}

async function fetchDelete(id) {
  return await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE'})
}

export {fetchDelete, fetchPost, fetchPut }