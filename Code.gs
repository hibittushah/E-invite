/**
 * RSVP receiver for the Kartik & Sangini invitation.
 * Create a Google Sheet, open Extensions > Apps Script, paste this file,
 * then deploy as a Web app (Execute as: Me; Who has access: Anyone).
 */
const SHEET_NAME = 'RSVP Responses';
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Submitted At', 'Name', 'Phone', 'Attendance', 'Guests', 'Message']);
      sheet.setFrozenRows(1);
    }
    const p = (e && e.parameter) || {};
    const name = String(p.name || '').trim();
    const phone = String(p.phone || '').trim();
    const attendance = String(p.attendance || '').trim();
    const guests = Math.max(1, Math.min(20, Number(p.guests) || 1));
    const message = String(p.message || '').trim().slice(0, 500);
    if (!name || !phone || !['Yes', 'No'].includes(attendance)) {
      return ContentService.createTextOutput('Invalid RSVP');
    }
    sheet.appendRow([new Date(), name, phone, attendance, guests, message]);
    return ContentService.createTextOutput('OK');
  } finally {
    lock.releaseLock();
  }
}
