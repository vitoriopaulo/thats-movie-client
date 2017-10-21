// 'use strict'
// const getFormFields = require(`../../../lib/get-form-fields`)
// const api = require('./api')
// const ui = require('./ui')
//
// const onSignUp = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   if (data.credentials.password !== data.credentials.password_confirmation) {
//     ui.signUpFailure()
//   } else {
//     api.signUp(data)
//       .then(ui.signUpSuccess)
//       .catch(ui.signUpFailure)
//   }
//
// }
//
// const onSignIn = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }
//
// const onChangePassword = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
// const onSignOut = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.signOut(data)
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutfailure)
// }
// const addHandlers = function () {
//   $('#sign-up').on('submit', onSignUp)
//   $('#sign-in').on('submit', onSignIn)
//   $('#change-password').on('submit', onChangePassword)
//   $('#sign-out').on('submit', onSignOut)
// }
//
// module.exports = {
//   addHandlers
// }