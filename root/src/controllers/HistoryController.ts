let helper = require("../helper/response");
let HistoryModels = require("../models/HistoryModels");
import { Request, Response } from "express";

module.exports = {
  GetHistory: async function (
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      let result = await HistoryModels.GetHistoryModels();

      return helper.response(response, "success", result, 201);
    } catch (error) {
      return helper.response(response, "failed", "internal server error", 500);
    }
  },

  PostHistory: async function (
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      let result = await HistoryModels.PostHistoryModels(
        request.body.pemain,
        request.body.score
      );
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },
};
