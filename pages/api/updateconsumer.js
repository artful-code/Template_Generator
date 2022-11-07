import { google } from 'googleapis';

async function handler(req, res) {
  if (req.method === 'GET') {
    try{
        const auth = new google.auth.GoogleAuth({
            credentials: {
              client_email: process.env.client_email,
              client_id: process.env.client_id,
              private_key: process.env.private_key.replace(/\\n/g, '\n'),
            },
            scopes: [
              'https://www.googleapis.com/auth/drive',
              'https://www.googleapis.com/auth/drive.file',
              'https://www.googleapis.com/auth/spreadsheets',
            ],
          });
      
          const sheets = google.sheets({
            auth,
            version: 'v4',
          });

          const response1 = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.DATABASE_ID,
            range: 'Consumernew!F3:J3', 
          });

          const value=parseInt(response1.data.values[0][0])+1
          
          const response2=sheets.spreadsheets.values.update(
            {
              spreadsheetId:process.env.DATABASE_ID,
              range: 'Consumernew!F3:J3',
              valueInputOption:'RAW',
              resource: {
                values: [
                  [value],
                ],
              }
            }
          )

          res.status(201);
      
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }

  }
  res.status(200).json({ message: 'Only POST allowed!' });
}

export default handler;