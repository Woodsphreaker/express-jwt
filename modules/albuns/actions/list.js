import service from '../../../service/'

export default (req, res) => {
  const { id } = req.params
  service.get(`https://jsonplaceholder.typicode.com/albums/${id || ''}`)
    .then(response => res.send(response))
    .catch(error => res.status(401).send(error))
}
