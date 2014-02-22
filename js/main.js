var clock = $('.tcc-clock').FlipClock({
  countdown: true
});

var dateNow = new Date();
var dateEnd = new Date(2014, 1, 22, 19, 0, 0, 0);

var milliseconds =  dateEnd.getTime() - dateNow.getTime();

var time = milliseconds / 1000 ;

clock.setTime(time);

clock.start();

$(".flip-clock-label").remove();

