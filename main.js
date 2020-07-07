// 全域變數
var timeoutId;
// 開始執行
timeoutId = setTimeout(showTime, 1000);

function showTime () {
  // 清除定時器
  clearTimeout(timeoutId);
  var date = new Date();
  var year = date.getFullYear();
  var month = formatNum(date.getMonth()+1);
  var day = formatNum(date.getDate());
  var hour=formatNum(date.getHours());
  var minute=formatNum(date.getMinutes());
  var second=formatNum(date.getSeconds());
  document.getElementById("dateTime").innerHTML = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
	// 設定定時器，循環執行
  timeoutId = setTimeout(showTime, 1000);
}
// 轉換格式
function formatNum (num) {
  return num >= 10 ? num : `0${num}`;
}
