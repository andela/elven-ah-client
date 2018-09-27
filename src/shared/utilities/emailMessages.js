// The email messages needed by the application
const emails = {
  copyleaksCreditExhaustion: email => ({
    to: email,
    from: 'admin@authorshaven.com',
    subject: 'Copyleaks Credit Exhaustion',
    html: `
        Hi,
        <br><br>
        Our Copyleaks credits have finished. We could either change the email again,
        or maybe actually try shelling out a few bucks for the premium version. 🤷🏾‍♂️<br><br>
        Sincerely,<br>
        Us.
      `,
  }),
};
export default emails;
