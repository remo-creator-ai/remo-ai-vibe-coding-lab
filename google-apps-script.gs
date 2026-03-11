/**
 * REMO AI Vibe Coding Lab - Google Sheets 신청 데이터 수집
 * 
 * 이 스크립트를 Google Apps Script에 배포하면
 * 웹사이트 신청 폼 데이터가 자동으로 Google Sheets에 저장됩니다.
 */

// 1. Google Sheets 설정
const SHEET_NAME = 'REMO AI 신청자'; // 시트 이름 (변경 가능)

function doPost(e) {
  try {
    // 요청 데이터 파싱
    const data = JSON.parse(e.postData.contents);
    
    // 현재 스프레드시트 가져오기
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // 시트가 없으면 생성
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // 헤더 추가
      sheet.appendRow(['신청일시', '이름', '전화번호', '이메일', '희망날짜', '유입경로']);
      // 헤더 스타일링
      const headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setBackground('#002D5B');
      headerRange.setFontColor('#FFFFFF');
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
    }
    
    // 데이터 추가
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.email,
      data.date,
      data.referral
    ]);
    
    // 자동 열 너비 조정
    sheet.autoResizeColumns(1, 6);
    
    // 성공 응답
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // 에러 로깅
    Logger.log('Error: ' + error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 테스트용 함수
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: '2026-01-25 23:40:00',
        name: '테스트',
        phone: '010-1234-5678',
        email: 'test@example.com',
        date: '2026-01-31',
        referral: '지인 추천'
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
