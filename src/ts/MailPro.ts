namespace MailPro {

  export interface EmailData {
    subject: string;
    recipient: string;
    body: string;
    options?: GoogleAppsScript.Gmail.GmailAdvancedOptions;
  };

  export interface GmailAdvancedOptionsType {
    name: string,
    htmlBody: string,
    attachments: GoogleAppsScript.Base.BlobSource[],
    bcc: string,
    cc: string,
    from: String,
    inlineImages: GoogleAppsScript.Base.BlobSource,
    noReply: boolean,
    replyTo: string 
  };

  // Function

  // กรองข้อมูลตาม Subject
  export function getSentEmailBySubject(subject: string): GoogleAppsScript.Gmail.GmailThread {
    const query = `in:sent subject: ${subject}`;
    return GmailApp.search(query, 0, 1)[0]; 
  };



  export function sendEmail(params: EmailData): GoogleAppsScript.Gmail.GmailThread {
    const { subject, body, recipient, options } = params;
    GmailApp.sendEmail(recipient, subject, body, options);

    return getSentEmailBySubject(subject);
  }
}
