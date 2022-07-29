import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    Authorization:
      "Bearer 9cc3b1f0e85642db8b820cfe078b1b7604482812fb9449c88d258ddd3bf4d79f",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const get = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://sentry.io/api/0/projects/dhiwise-ir/net/issues/`,
    method: "get",
    params,
    headers,
    data,
  });
};
