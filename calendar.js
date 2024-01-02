const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();


// 1ヶ月後

function prev(){
  var prev = new Date(today.setMonth(today.getMonth() - 1));
  showhead(prev);
  showcalendar(prev);

}

function next(){
  var next = new Date(today.setMonth(today.getMonth() + 1));
  showhead(next);
  showcalendar(next);

}



window.onload = function(){
  showhead(today);
  showcalendar(today);

};

function showhead(date){
  var year = date.getFullYear();
  var month = date.getMonth();
  document.querySelector(".header").innerHTML = year + "年 " + (month + 1) + "月";
}


function showcalendar(date2){
  var startDate = new Date(date2.getFullYear(),date2.getMonth(), 1).getDate();
  var startDay = new Date(date2.getFullYear(),date2.getMonth(), 1).getDay();
  var EndDate = new Date(date2.getFullYear(), date2.getMonth() + 1, 0).getDate();
  var DayCount = 1


  var calendar2 = "<table border='1'><tr>";
  for(var i = 0; i < week.length; i++){
    calendar2 += "<th>" + week[i] + "</th>";
  }
  calendar2 += "</tr>"
 
  for(var w = 0; w < 6; w++){
    
    for (let d = 0; d < 7; d++) {
      if (w == 0 && d < startDay) {
          // 1行目で1日の曜日の前
          calendar2 += '<td></td>'
      } else if (DayCount > EndDate) {
          // 末尾の日数を超えた
          calendar2 += '<td></td>'
      } else {
          calendar2 += '<td>' + DayCount + '</td>'
          DayCount++
      }
    }
    calendar2 += '</tr>'
  }
  calendar2 += '</table>'

  document.querySelector('.calendar2').innerHTML = calendar2;

}




