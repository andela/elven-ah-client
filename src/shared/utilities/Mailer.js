import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

export default class Mailer {
  /**
  * Sends an email with Sendgrid API
  * @param {object} msg the email params
  * @param {string} msg.to the receiver's email address
  * @param {string} msg.from the sender's email address
  * @param {string} msg.subject the email subject
  * @param {string} msg.text the plain text email body
  * @param {string} msg.html the HTML email body
  */
  static async sendMail(msg) {
    try {
      const response = await sgMail.send(msg);
      return response;
    } catch (error) {
      return false;
    }
  }
}
