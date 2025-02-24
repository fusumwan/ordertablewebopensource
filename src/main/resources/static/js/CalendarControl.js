
function EleLocationInfo(object) {

  var ObjectElement = object;

  this.ReturnElmLeft = ReturnElmLeft;
  function ReturnElmLeft() {
    var x = 0;
    var elm;
    if(typeof(ObjectElement) == "object"){
      elm = ObjectElement;
    } else {
      elm = document.getElementById(ObjectElement);
    }
    while (elm != null) {
      x+= elm.offsetLeft;
      elm = elm.offsetParent;
    }
    return parseInt(x);
  }


  this.WidthOfObject = WidthOfObject;
  function WidthOfObject(){
    var elm;
    if(typeof(ObjectElement) == "object"){
      elm = ObjectElement;
    } else {
      elm = document.getElementById(ObjectElement);
    }
    return parseInt(elm.offsetWidth);
  }





  this.ReturnObjectRight = ReturnObjectRight;
  function ReturnObjectRight(){
    return ReturnElmLeft(ObjectElement) + WidthOfObject(ObjectElement);
  }






  this.getElementTop = getElementTop;
  function getElementTop() {
    var y = 0;
    var elm;
    if(typeof(ObjectElement) == "object"){
      elm = ObjectElement;
    } else {
      elm = document.getElementById(ObjectElement);
    }
    while (elm != null) {
      y+= elm.offsetTop;
      elm = elm.offsetParent;
    }
    return parseInt(y);
  }










  this.getElementHeight = getElementHeight;
  function getElementHeight(){
    var elm;
    if(typeof(ObjectElement) == "object"){
      elm = ObjectElement;
    } else {
      elm = document.getElementById(ObjectElement);
    }
    return parseInt(elm.offsetHeight);
  }

  this.getElementBottom = getElementBottom;
  function getElementBottom(){
    return getElementTop(ObjectElement) + getElementHeight(ObjectElement);
  }
}









function Calendar() {
  var patten_num="3";
  var dateField = null;
  var FunctionCall='';
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var calendarId = 'IDofCalender';
  var sMonth = 0;
  var sYear = 0;
  var cYear = 0;
  var sDay = 0;
  var cMonth = 0;
  var cDay = 0;

  
  
  
  
  
  
  
  
  
  
  function GetFunctionCall(){ return  FunctionCall; }
  





  function getProperty(p_property){
    var ObjectElement = calendarId;
    var elm = null;

    if(typeof(ObjectElement) == "object"){
      elm = ObjectElement;
    } else {
      elm = document.getElementById(ObjectElement);
    }
    if (elm != null){
      if(elm.style){
        elm = elm.style;
        if(elm[p_property]){
          return elm[p_property];
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }









  function setElementProperty(p_property, p_value, ObjectElementId){
    var ObjectElement = ObjectElementId;
    var elm = null;

    if(typeof(ObjectElement) == "object"){
      elm = ObjectElement;
    } else {
      elm = document.getElementById(ObjectElement);
    }
    if((elm != null) && (elm.style != null)){
      elm = elm.style;
      elm[ p_property ] = p_value;
    }
  }

  function setProperty(p_property, p_value) {
    setElementProperty(p_property, p_value, calendarId);
  }








  function getDaysInMonth(year, month) {
    return [31,((!(year % 4 ) && ( (year % 100 ) || !( year % 400 ) ))?29:28),31,30,31,30,31,31,30,31,30,31][month-1];
  }

  function getDayOfWeek(year, month, day) {
    var date = new Date(year,month-1,day)
    return date.getDay();
  }

  this.clearDate = clearDate;
  function clearDate() {
    dateField.value = '';
    hide();
  }

  this.setDate = setDate;
  function setDate(year, month, day) {


    if (dateField) {
      if (month < 10) {month = "0" + month;}

      if (day < 10) {day = "0" + day;}
   
      var dateString="";

      dateString= day+"/"+month+"/"+year;

      dateField.value = dateString;
      hide();
    }
    return;
  }

  this.changeMonth = changeMonth;

  function changeMonth(change) {
    cMonth += change;
    cDay = 0;
    if(cMonth > 12) {
      cMonth = 1;
      cYear++;
    } else if(cMonth < 1) {
      cMonth = 12;
      cYear--;
    }

    calendar = document.getElementById(calendarId);


    calendar.innerHTML = drawCalender();
  }

  this.changeYear = changeYear;
  function changeYear(change) {
    cYear += change;
    cDay = 0;
    calendar = document.getElementById(calendarId);
    calendar.innerHTML = drawCalender();
  }

  function getcYear() {
    var year = new Date().getFullYear();
    
    return year;
  }

  function getcMonth() {
    return new Date().getMonth() + 1;
  } 

  function getcDay() {
    return new Date().getDate();
  }

  function drawCalender() {

    var dayOfMonth = 1;
    var validDay = 0;
    var startDayOfWeek = getDayOfWeek(cYear, cMonth, dayOfMonth);
    var daysInMonth = getDaysInMonth(cYear, cMonth);
    var css_class = null; //CSS class for each day
   








    var table = "<table cellspacing='0' cellpadding='0' border='0'>";
    table = table + "<tr class='header'>";
    table = table + "  <td colspan='2' class='previous'><a href='javascript:CalendarChangeMonth(-1);'>&larr;</a> <a href='javascript:CalendarChangeYear(-1);'>&laquo;</a></td>";
    table = table + "  <td colspan='3' class='title'>" + months[cMonth-1] + "<br>" + cYear + "</td>";
    table = table + "  <td colspan='2' class='next'><a href='javascript:CalendarChangeYear(1);'>&raquo;</a> <a href='javascript:CalendarChangeMonth(1);'>&rarr;</a></td>";
    table = table + "</tr>";
    table = table + "<tr><th>Su</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sa</th></tr>";

    for(var week=0; week < 6; week++) {
      table = table + "<tr>";
      for(var dayOfWeek=0; dayOfWeek < 7; dayOfWeek++) {
        if(week == 0 && startDayOfWeek == dayOfWeek) {
          validDay = 1;
        } else if (validDay == 1 && dayOfMonth > daysInMonth) {
          validDay = 0;
        }

        if(validDay) {
          if (dayOfMonth == sDay && cYear == sYear && cMonth == sMonth) {
            css_class = 'current';
          } else css_class = 'weekday';
          
          
          table = table + "<td><a class='"+css_class+"' href=\"javascript:CalendarSetDate("+cYear+","+cMonth+","+dayOfMonth+","+patten_num+");"+GetFunctionCall()+"\">"+dayOfMonth+"</a></td>";
          dayOfMonth++;
        } else {
          table = table + "<td class='empty'></td>";
        }
      }
      table = table + "</tr>";
    }

    table = table + "</table>";

    return table;
  }


  
  this.show = show;
  function show(field,func) {
    can_hide = 0;
    
    FunctionCall=func;
    // If the calendar is visible and associated with
    // this field do not do anything.
    if (dateField == field) {
      return;
    } else {
      dateField = field;
    }

    if(dateField) {
      try {
        var dateString = new String(dateField.value);
        var dateParts = dateString.split("-");
        
        sMonth = parseInt(dateParts[0],10);
        sDay = parseInt(dateParts[1],10);
        sYear = parseInt(dateParts[2],10);
      } catch(e) {}
    }

    if (!(sYear && sMonth && sDay)) {
      sMonth = getcMonth();
      sDay = getcDay();
      sYear = getcYear();
    }

    cMonth = sMonth;
    cDay = sDay;
    cYear = sYear;

    if(document.getElementById){

      calendar = document.getElementById(calendarId);
      calendar.innerHTML = drawCalender(cYear, cMonth);

      setProperty('display', 'block');

      var fieldPos = new EleLocationInfo(dateField);
      var calendarPos = new EleLocationInfo(calendarId);

      var x = fieldPos.ReturnElmLeft();
      var y = fieldPos.getElementBottom();

      setProperty('left', x + "px");
      setProperty('top', y + "px");
 
      if (document.all) {
        setElementProperty('display', 'block', 'CalendarControlIFrame');
        setElementProperty('left', x + "px", 'CalendarControlIFrame');
        setElementProperty('top', y + "px", 'CalendarControlIFrame');
        setElementProperty('width', calendarPos.WidthOfObject() + "px", 'CalendarControlIFrame');
        setElementProperty('height', calendarPos.getElementHeight() + "px", 'CalendarControlIFrame');
      }
    }
  }

  this.hide = hide;
  function hide() {
    if(dateField) {
      setProperty('display', 'none');
      setElementProperty('display', 'none', 'CalendarControlIFrame');
      dateField = null;
    }
  }

  this.visible = visible;
  function visible() {

    return dateField
  }

  this.can_hide = can_hide;
  var can_hide = 0;
}






var Calendars = new Calendar();

function ShowCalendar(textField,CallFunction) {
  // textField.onblur = hideCalendarControl;

  Calendars.show(textField,CallFunction);
}













function CalendarSetDate(year, month, day,pattern) {
  Calendars.setDate(year, month, day,pattern);
}

function CalendarChangeYear(change) {
  Calendars.changeYear(change);
}









function CalendarChangeMonth(change) {
  Calendars.changeMonth(change);
}










document.write("<iframe id='CalendarControlIFrame' src='javascript:false;' frameBorder='0' scrolling='no'></iframe>");
document.write("<div id='IDofCalender'></div>");









































