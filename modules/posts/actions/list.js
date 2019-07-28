import service from '../../../service'

export default (req, res) => {
  const { id } = req.params
  const endpoint = `https://jsonplaceholder.typicode.com/posts/${id || ''}`

  service.get(endpoint)
    .then(response => res.json(response))
    .catch(error => console.log(error))
}
