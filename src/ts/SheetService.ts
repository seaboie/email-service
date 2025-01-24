namespace SheetService {
  export interface SheetData {
    sheetId: string;
    range: string;
    values: any[][];
  }

  export interface SheetOptions {
    sheetName?: string;
    headerRow?: number;
  }

  // Function to get data from a sheet
  export function getSheetData(sheetId: string, range: string): any[][] {
    const sheet = SpreadsheetApp.openById(sheetId);
    const sheetRange = sheet.getRange(range);
    return sheetRange.getValues();
  }

  // Function to set data in a sheet
  export function setSheetData(params: SheetData): void {
    const { sheetId, range, values } = params;
    const sheet = SpreadsheetApp.openById(sheetId);
    const sheetRange = sheet.getRange(range);
    sheetRange.setValues(values);
  }

  // Function to append data to a sheet
  export function appendSheetData(
    sheetId: string,
    sheetName: string,
    values: any[][]
  ): void {
    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
    sheet
      .getRange(sheet.getLastRow() + 1, 1, values.length, values[0].length)
      .setValues(values);
  }

  // Function to clear data from a sheet
  export function clearSheetData(sheetId: string, range: string): void {
    const sheet = SpreadsheetApp.openById(sheetId);
    const sheetRange = sheet.getRange(range);
    sheetRange.clearContent();
  }

  // Function to get a sheet by name
  export function getSheetByName(
    sheetId: string,
    sheetName: string
  ): GoogleAppsScript.Spreadsheet.Sheet {
    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
    return sheet;
  }

  // Function to create a new sheet
  export function createSheet(
    sheetId: string,
    sheetName: string
  ): GoogleAppsScript.Spreadsheet.Sheet {
    const spreadsheet = SpreadsheetApp.openById(sheetId);
    return spreadsheet.insertSheet(sheetName);
  }

  // Function to delete a sheet
  export function deleteSheet(sheetId: string, sheetName: string): void {
    const spreadsheet = SpreadsheetApp.openById(sheetId);
    const sheet = spreadsheet.getSheetByName(sheetName);
    if (sheet) {
      spreadsheet.deleteSheet(sheet);
    }
  }
}
