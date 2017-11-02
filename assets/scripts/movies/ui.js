'use strict'
const store = require('../store')

const showMoviesTemplate = require('../templates/movies.handlebars')
const showMovieTemplate = require('../templates/movie.handlebars')

const getAllMoviesSuccess = function (data) {
  store.movies = data.movies

  const showMoviesHtml = showMoviesTemplate({ movies: data.movies })

  $('#movies').show()

  $('#movies').html(showMoviesHtml)

  console.log(data)
  // console.log('Sucessfully get all movies.')
  // $('.my-input').val("")
  $('#message_0').show().text('Have movies? Movies will be rendered. No movies? Please add movies.').delay(5000).fadeOut(7000)
}

const getAllMoviesFailure = function (error) {
  console.error(error)
  $('#message_0').show().text('Error: movies not successfully loaded. Try again.').fadeOut(5000)
}

const getOneMovieSuccess = function (data) {
  // console.log('Discovering what is it called data: ' + data)
  store.movie = data.movie

  const showMovieHtml = showMovieTemplate({ movie: data.movie })

  $('#movie').show()

  $('#movie').html(showMovieHtml)

  $('.my-input').val('')

  $('#message_1').show().text('Sucessfully get movie.').fadeOut(5000)
}

const getOneMovieFailure = function (error) {
  console.error(error)
  $('.my-input').val('')
  $('#message_1').show().text('Error on getting movie. Try again.').fadeOut(5000)
}

const addMovieSuccess = function (data) {
  // console.log(data)
  // console.log('Password sucessfully changed!')
  $('.my-input').val('')
  $('.my-txtarea').val('')
  $('#message_2').show().text('Movie sucessfully added.').fadeOut(5000)
}

const addMovieFailure = function (error) {
  console.log(error)
  // console.log('Password already token. Try again.')
  $('.my-input').val('')
  $('.my-txtarea').val('')
  $('#message_2').show().text('Failure on trying to add movie to database. Try again.').fadeOut(5000)
}

const updateMovieSuccess = function (data) {
  // console.log(data)
  $('.my-input').val('')
  $('.my-txtarea').val('')
  $('#message_3').show().text('Movie updated succesfully.').fadeOut(5000)
}

const updateMovieFailure = function (data) {
  // console.log(data)
  $('.my-input').val('')
  $('.my-txtarea').val('')
  $('#message_3').show().text('Failure on updating movie.').fadeOut(5000)
}

const deleteMovieSuccess = function (data) {
  // console.log(data.movie)
  $('.my-input').val('')
  // console.log('Signed out succesfully!')
  $('#message_4').show().text('Movie successfully deleted.').fadeOut(5000)
}

const deleteMovieFailure = function (error) {
  $('.my-input').val('')
  console.log(error)
  // console.log('Failure signing out.')
  $('#message_4').show().text('Failure deleting movie.').fadeOut(5000)
}

module.exports = {
  getAllMoviesSuccess,
  getAllMoviesFailure,
  getOneMovieSuccess,
  getOneMovieFailure,
  addMovieSuccess,
  addMovieFailure,
  updateMovieSuccess,
  updateMovieFailure,
  deleteMovieSuccess,
  deleteMovieFailure
}
