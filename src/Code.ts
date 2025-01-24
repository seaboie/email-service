const APP_NAME: string = "Learn Clasp";

function sendEmail() {
  const ui = new UiPro.Ui(APP_NAME, SpreadsheetApp.getUi());
  // data input
  const email: string = ui
    .input("Please enter the email address : ")
    .getResponseText();
  const subject: string = ui
    .input("Please enter the email Subject : ")
    .getResponseText();
  const name: string = ui
    .input("Please enter the recipient name : ")
    .getResponseText();
  const message: string = ui
    .input("Please enter the email message : ")
    .getResponseText();

  const htmlBody: string =
    Utils.createHtmlFromFile<MailPro.GmailAdvancedOptionsType>(
      "html/email.html",
      {
        htmlBody: message,
        name,
      }
    );

  const options: GoogleAppsScript.Gmail.GmailAdvancedOptions = {
    htmlBody: htmlBody,
  };

  // Send Email
  const emailData: MailPro.EmailData = {
    recipient: email,
    body: message,
    subject: subject,
    options: options,
  };
  const sendEmail: GoogleAppsScript.Gmail.GmailThread =
    MailPro.sendEmail(emailData);

  const html: string = `
    <p>Your email has been successfully</p>

    <p> you can check it by click on this . <a href="${sendEmail.getPermalink()}" target="_blank">Link</a>.</p>
  `;
  // ui.alert(message, UiPro.ALERT_TYPE.SUCCESS);
  ui.dialog(html);
}
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu(APP_NAME)
    .addItem("Send Email", "sendEmail")
    .addToUi();
}
