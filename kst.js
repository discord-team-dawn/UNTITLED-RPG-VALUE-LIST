// ==================== kst.js (한국 시간 유틸리티 모듈) ====================

function getKoreanCurrentTime() {
    const now = new Date();

    const options = {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const formatter = new Intl.DateTimeFormat('ko-KR', options);
    const parts = formatter.formatToParts(now);
    
    let dateObj = {};
    parts.forEach(part => {
        if (part.type !== 'literal') {
            dateObj[part.type] = part.value;
        }
    });

    const kstString = `${dateObj.year}-${dateObj.month}-${dateObj.day} ${dateObj.hour}:${dateObj.minute}:${dateObj.second}`;
    
    return {
        string: kstString,
        year: dateObj.year,
        month: dateObj.month,
        day: dateObj.day,
        hour: dateObj.hour,
        minute: dateObj.minute,
        second: dateObj.second
    };
}

// 다른 파일(HTML 등)에서 불러다 쓸 수 있도록 내보내기 (ES6 모듈 방식)
export { getKoreanCurrentTime };
