import { Response } from 'express';
module.exports = {
    response: async function(res: Response, Status: string, data: any[], statusCode: number): Promise<Response>{    
        let Data = data || ''
        let StatusCode = statusCode || 200;
        let success = Status === 'success' ? true : false

        return res.status(StatusCode).json({
            success: success,
            data: Data
        })
    }
}