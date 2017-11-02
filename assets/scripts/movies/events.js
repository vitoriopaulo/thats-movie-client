'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onGetAllMovies = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getAllMovies(data)
    .then(ui.getAllMoviesSuccess)
    .catch(ui.getAllMoviesFailure)
}

const onGetOneMovie = function (event) {
  const data = getFormFields(this)
  console.log(data.movie)
  event.preventDefault()
  api.getOneMovie(data)
    .then(ui.getOneMovieSuccess)
    .catch(ui.getOneMovieFailure)
}

const onAddMovie = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.addMovie(data)
    .then(ui.addMovieSuccess)
    .catch(ui.addMovieFailure)
}

const onUpdateMovie = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updateMovie(data)
    .then(ui.updateMovieSuccess)
    .catch(ui.updateMovieFailure)
}

const onDeleteMovie = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.deleteMovie(data)
    .then(ui.deleteMovieSuccess)
    .catch(ui.deleteMovieFailure)
}

const addHandlers2 = function () {
  $('#get-all-movies').on('submit', onGetAllMovies)
  $('#get-movie-by-id').on('submit', onGetOneMovie)
  $('#add-movie').on('submit', onAddMovie)
  $('#update-movie').on('submit', onUpdateMovie)
  $('#delete-movie').on('submit', onDeleteMovie)
}

module.exports = {
  addHandlers2
}
