import moment from 'moment';
const year = moment().format("YYYY");

const userEmailTemplate = `
  <!doctype html>
  <html>
    <head>
    <meta charset="utf-8">
    <title>Untitled Document</title>
    <style>
      @media only screen and (max-width:500px)  {
        .left {
        }
        .right {
        }
      }
     @media only screen and (min-width:500px) {
        .left {
          float: left;
        }
        .right {
          float: right;
        }
      }
    </style>
    </head>
    <body>
      <div style="font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">
        <table className="body" cellspacing="0" cellpadding="0" align="center" style="margin-top:56px; margin-bottom: 48px;">
          <tr style="text-align: center;">
            <td align="center">
              <h1 style="font-size: 30px; line-height: 32px; font-weight: 300; margin: 0 0 8px 0; padding: 0 16px;">Congratulations!</h1>
            </td>
          </tr>
          <tr style="text-align: center;">
            <td align="center">
              <h3 style="font-size: 22px; line-height: 24px; font-weight: 300; margin: 0 0 8px 0; padding: 0 16px;">You've completed My D.R.E.S.S. Profile!</h3>
            </td>
          </tr>
          <tr style="text-align: center;">
            <td align="center">
              <p style="max-width: 400px; font-size: 14px; margin: 20px 0 16px 0; padding: 0 16px;">These results create a template for your personalized wellness routine for each of the 5 Pillars of Health Mastery:</p>
            </td>
          </tr>
          <tr style="height: 8px;"></tr>
          <tr>
            <td>
              <div style="text-align: center; line-height: 0; height: 22px; padding: 0 16px;">
                <span style="white-space: nowrap"><span style="font-size: 20px; vertical-align: middle;">&bull;</span><p style="display: inline-block; font-size: 16px; margin:0 8px 0 4px;">Diet</p></span>
                <span style="white-space: nowrap"><span style="font-size: 20px; vertical-align: middle;">&bull;</span><p style="display: inline-block; font-size: 16px; margin: 0 8px 0 4px;">Rest</p></span>
                <span style="white-space: nowrap"><span style="font-size: 20px; vertical-align: middle;">&bull;</span><p style="display: inline-block; font-size: 16px; margin: 0 8px 0 4px;">Exercise</p></span>
                <span style="white-space: nowrap"><span style="font-size: 20px; vertical-align: middle;">&bull;</span><p style="display: inline-block; font-size: 16px; margin: 0 8px 0 4px;">Stress Mastery</p></span>
                <span style="white-space: nowrap"><span style="font-size: 20px; vertical-align: middle;">&bull;</span><p style="display: inline-block; font-size: 16px; margin: 0 0 0 4px;">Supplements</p></span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p style="max-width: 700px; font-size: 14px; margin: 32px 0 16px 0; padding: 0 16px;">
              Keep in mind these results provide a starting point, not an ending point.  My D.R.E.S.S. Profile provides guidance to get started, and a way to measure your progress along the way.  Combined with Health Coaching, your D.R.E.S.S. Profile is the gate that opens to your path of wellness.  Enjoy the journey!  Your path lies before you.  Your Coach will walk with you.  Let's get started together!
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p style="font-size: 14px; margin: 0; padding: 0 16px;">With you in health,</p>
            </td>
          </tr>
          <tr>
            <td>
              <p style="font-size: 14px; margin: 0px 0 16px 0; padding: 0 16px;">D.R.E.S.S. Coaching Team</p>
            </td>
          </tr>
          <tr style="height: 16px"/>
          <tr>
            <td align="center">
              <p style="max-width: 700px; margin: 0; font-size: 12px; border-top: solid #ccc 1px; padding: 32px 16px 0;">
                My D.R.E.S.S. Profile is for educational purposes only to help improve overall health, vitality and well-being. This tool is not meant to be used to diagnose or treat specific diseases, disorders or conditions of any kind. It is always advised to check with your physician before starting any new eating, exercise, or health improvement routine.
              </p>
            </td>
          </tr>
          <tr style="height: 30px"/>
          <tr>
            <td align="center">
              <div style="max-width: 500px;">
                <div class="left">
                  <p style="display: inline-block; margin: 0; font-size: 12px;">© ${year} Eureka! Holistic Nutrition, LLC</p>
                </div>
                <div class="right">
                  <a
                    href="https://eurekaholisticnutrition.com/terms-of-service/"
                    target="_blank"
                    rel="noreferrer"
                    style="font-size: 12px; border-right: solid black 1px; padding-right: 8px; margin-right: 8px; color: black !important;"
                  >Terms</a>
                  <a
                    href="https://eurekaholisticnutrition.com/privacy-policy/"
                    target="_blank"
                    rel="noreferrer"
                    style="font-size: 12px; border-right: solid black 1px; padding-right: 8px; margin-right: 8px; color: black !important;"
                  >Privacy Policy</a>
                  <a
                    href="https://eurekaholisticnutrition.com/scope-of-service-disclaimer/"
                    target="_blank"
                    rel="noreferrer"
                    style="font-size: 12px; color: black;"
                  >Disclaimer</a>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
`;

export default userEmailTemplate;
