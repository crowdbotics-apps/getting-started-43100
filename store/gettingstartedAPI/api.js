import axios from "axios"
const gettingstartedAPI = axios.create({
  baseURL: "https://getting-started-43100.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return gettingstartedAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return gettingstartedAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return gettingstartedAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return gettingstartedAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return gettingstartedAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return gettingstartedAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return gettingstartedAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return gettingstartedAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return gettingstartedAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return gettingstartedAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return gettingstartedAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return gettingstartedAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return gettingstartedAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return gettingstartedAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
