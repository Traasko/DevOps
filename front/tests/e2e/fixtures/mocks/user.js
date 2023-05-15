export const USER = {
  username: "user",
  password: "password",
  isClientAdmin: true,
  isAdvertiserAdmin: false
}, LOGIN_RESPONSE_SUCCESS = {
  statusCode: 201,
  body: {
    username: "user",
    roles: ["ROLE_USER"],
    token_type: "Bearer",
    access_token: "access_token",
    expires_in: 3600,
    refresh_token: "refresh_token",
  },
};