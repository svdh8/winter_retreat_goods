$(function(){
	
	var note = $('#note'),
		ts = new Date('December 5, 2020 23:00:00'),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			if(newYear){
				message += "신청 마감까지 <br />" 
				message += days + " 일" + ", ";
				message += hours + " 시간" + ", ";
				message += minutes + " 분" + ", ";
				message += seconds + " 초";
				message += " 남았습니다!"
			}
			else {
				message += "신청 기한 종료되었습니다.";
			}
			
			note.html(message);
		}
	});
	
});
