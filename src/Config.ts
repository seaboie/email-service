function getSheetId(): string {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetId = spreadsheet.getId();
  Logger.log("Sheet ID: " + sheetId);
  return sheetId;
}

function getScriptId(): string {
  const scriptId: string = ScriptApp.getScriptId();
  Logger.log(`Script ID: ` + scriptId);
  return scriptId;
}

function getFormId(): string {
  const formId = FormApp.getActiveForm().getId();
  Logger.log(`Form ID: ${formId}`);
  return formId;
}
