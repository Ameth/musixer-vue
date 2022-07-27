const axios = require('axios')

const api = new axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '1d3a284af7mshad2ccaffd13e0c9p1166d1jsne3aa63559fc5',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
})

const getSearch = async query => {
  const { data } = await api.get('/search', {
    params: {
      q: query
    }
  })

  //   console.log('funcion 1', data)

  return data
}

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export { getSearch, getRandom }
