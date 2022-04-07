import { pool } from "../database";
module.exports = {
  AuthRegister: function (username: string, password: string, email: string) {
    return new Promise((resolve, reject) => {
      let setData = {
        username: username,
        password: password,
        email: email,
      };
      pool.query(
        `INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}')`,
        function (error: Error, result: any) {
          if (error) {
            reject(error);
          } else {
            let newData = {
              id: result.insertId,
              ...setData,
            };
            resolve(newData);
          }
        }
      );
    });
  },

  AuthLogin: function (username: string) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM users WHERE username = '${username}'`,
        function (error: Error, result: any) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
};
