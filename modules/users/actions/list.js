import service from '../../../service'

export default (req, res) => {
  console.log(req.connection.remoteAddress)
  const { id } = req.params
  const endpoint = `https://jsonplaceholder.typicode.com/users/${id || ''}`

  service.get(endpoint)
    .then(response => res.json(response))
    .catch(error => console.log(error))
}
