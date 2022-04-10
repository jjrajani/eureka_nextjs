import moment from 'moment';

const eurekaEmailTemplate = ({
  fileLink,
  folderLink,
  userEmail,
  userName
}: {
  fileLink: string;
  folderLink: string;
  userEmail: string;
  userName: string
}) => `
<!doctype html>
<html>
  <head>
  <meta charset="utf-8">
  <title>Untitled Document</title>
  </head>
  <body>
    <div style="font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">
      <table className="body" cellspacing="0" cellpadding="0" style="margin-top:56px; margin-bottom: 48px;">
        <tr>
          <td>
            <h3 style="font-size: 22px; line-height: 24px; font-weight: 300; margin: 0 0 8px 0; padding: 0 16px;"><span style="font-weight: 500;">${userName}</span> has completed the D.R.E.S.S. form.</h3>
          </td>
        </tr>
        <tr>
          <td>
            <p style="font-size: 14px; margin: 20px 0 16px 0; padding: 0 16px;"><span style="font-weight: 500;">User's email:</span> ${userEmail}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p style="font-size: 14px; margin: 20px 0 16px 0; padding: 0 16px;"><span style="font-weight: 500;">User's Google Drive folder:</span> ${folderLink}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p style="font-size: 14px; margin: 20px 0 16px 0; padding: 0 16px;"><span style="font-weight: 500;">User's Summary PDF:</span> ${fileLink}</p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`;

export default eurekaEmailTemplate;
