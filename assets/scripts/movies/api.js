'use strict'
const config = require('../config')
const store = require('../store')

const getAllMovies = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOneMovie = function (data) {
  console.log('This is the id of this movie: ' + data.movie)
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data.movie,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateMovie = function (data) {
  // console.log('here what data.movie.id is: ' + data.movie.id)
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data.movie.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteMovie = function (data) {
  // console.log('What is the id of this movie being deleted? :' + data.movie.id)
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data.movie.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getAllMovies,
  getOneMovie,
  addMovie,
  updateMovie,
  deleteMovie
}
