import { pool } from '../database'

module.exports = {
    GetHomeModels: function(date_from: string, date_to:string){
        return new Promise((resolve, reject) => {
            pool.query(`SELECT jurusan.nama_jurusan, kelas.nama_kelas, reportabsence.status, reportabsence.nama, reportabsence.tanggal FROM reportabsence INNER JOIN jurusan ON jurusan.id_jurusan = reportabsence.id_jurusan INNER JOIN kelas ON kelas.id_kelas = reportabsence.id_kelas WHERE reportabsence.tanggal BETWEEN '${date_from}' AND '${date_to}'`, function(error: Error,result: any){
                if(error){
                    reject(error)
                }
                resolve(result)
            })
        })
    },

    ReportDataModels: function(date_from: string, date_to: string, by: string){
        return new Promise((resolve, reject) => {
            pool.query(`SELECT jurusan.nama_jurusan, kelas.nama_kelas, reportabsence.status, reportabsence.tanggal, COUNT(*) as count FROM reportabsence INNER JOIN jurusan ON jurusan.id_jurusan = reportabsence.id_jurusan INNER JOIN kelas ON kelas.id_kelas = reportabsence.id_kelas WHERE reportabsence.tanggal BETWEEN '${date_from}' AND '${date_to}' AND status = 'masuk' GROUP BY ${by}`, function(error: Error,result: any){
                if(error){
                    reject(error)
                }
                resolve(result)
            })
        })
    },

}