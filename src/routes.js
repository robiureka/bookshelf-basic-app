const {
  addBookHandler,
  getAllBooksHandler,
  getSpecificBookByIdHandler,
  editSpecificBookByIdHandler,
  deleteSpecificBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getSpecificBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editSpecificBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteSpecificBookByIdHandler,
  },
];

module.exports = routes;
