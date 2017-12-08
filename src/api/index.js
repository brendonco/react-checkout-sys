import superagent from 'superagent';
import api from './service';

const get = (url, data, contentType, responseType) => {
  const type = contentType || "application/json";

  return new Promise((resolve, reject) => {
    superagent
      .get(url)
      .query(data)
      .set("Content-Type", type)
      .responseType(responseType)
      .end((err, response) => {
        if (err) {
          reject(err);
        } else if (response) {
          resolve(response);
        }
      });
  });
};

export { get };
export default api;