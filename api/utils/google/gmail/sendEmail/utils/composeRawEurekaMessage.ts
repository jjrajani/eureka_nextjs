import MailComposer from 'nodemailer/lib/mail-composer';
import content from 'api/utils/google/gmail/sendEmail/templates/eurekaEmailTemplate';

export interface composeRawUserMessageArgs {
  fileLink: string;
  folderLink: string;
  userEmail: string;
  userName: string;
}

const composeRawEurekaMessage = async ({
  fileLink,
  folderLink,
  userEmail,
  userName,
}: composeRawUserMessageArgs) => {
  console.log('userEmail', userEmail);
  const mail = new MailComposer({
    from: 'D.R.E.S.S. Planner <connect@eurekaholisticnutrition.com>',
    // to: `New Submission <connect@eurekaholisticnutrition.com>`,
    to: `New Submission <jjrajani@eurekaholisticnutrition.com>`,
    html: content({ fileLink, folderLink, userEmail, userName }),
    subject: `New D.R.E.S.S. Submission - ${userName}`,
    textEncoding: 'base64',
  });

  const message = await new Promise((resolve, reject) => {
    return mail.compile().build(async (error: any, msg: any) => {
      if (error) {
        if (error?.mesage) {
          console.log('error', error?.message);
        } else {
          console.log('error', error);
        }
        reject(error);
      } else {
        const encodedMessage = Buffer.from(msg)
          .toString('base64')
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
        resolve(encodedMessage);
      }
    });
  });

  return message;
};

export default composeRawEurekaMessage;
