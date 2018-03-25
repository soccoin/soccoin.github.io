$(function () {
    $('#timer').countdown({
        date: '06/02/2018 00:00:00',
        offset: -3,
        day: 'Día',
        days: 'Días',
	hour: 'Hora',
	hours: 'Horas',
	minute: 'Minuto',
	minutes: 'Minutos',
	second: 'Segundo',
	seconds: 'Segundos'
    }, function () {
    });
});
