let helper = require('../helper/response')
let HomeModels = require('../models/HomeModels')
import { Request, Response } from 'express';


module.exports = {
    GetDataStudent: async function (request: Request, response: Response): Promise<Response>{
        let date_from = request.query.date_from
        let date_to = request.query.date_to
        try{
            let result = await HomeModels.GetHomeModels(date_from, date_to)
            return helper.response(response, 'success', result, 201)
        }catch(error){
            return helper.response(response, 'failed', 'internal server error', 500)
        }
    },

    ReportDataAbbence: async function (request: Request, response: Response): Promise<Response>{
        let date_from = request.query.date_from
        let date_to = request.query.date_to
        let by = request.query.by
        try{
            let result = await HomeModels.ReportDataModels(date_from, date_to, by)
            return helper.response(response, 'success', result, 201)
        }catch(error){
            console.log(error)
            return helper.response(response, 'failed', 'internal server error', 500)
        }
    },

  
   
}