import { pool } from "../database";

module.exports = {
  GetHistoryModels: function () {
    return new Promise((resolve, reject) => {
      pool.query("SELECT * FROM history", function (error: Error, result: any) {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  },

  PostHistoryModels: function (pemain: string, score: number) {
    return new Promise((resolve, reject) => {
      let setData = {
        pemain: pemain,
        score: score,
      };
      pool.query(
        `INSERT INTO history (pemain, score) VALUES ('${pemain}', '${score}')`,
        function (error: Error, result: any) {
          if (error) {
            reject(error);
          } else {
            let newData = {
              ...setData,
            };
            resolve(newData);
          }
        }
      );
    });
  },
};
