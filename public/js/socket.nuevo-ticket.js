var socket = io();

var label = $('#lblNuevoTicket');
socket.on('connect', function() {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
  console.log('Perdimos la conexión al servidor');
});

socket.on('estadoActual', function(ticket) {
  if (ticket.actual) {
    label.text(ticket.actual);
  }
});

$('button').on('click', function() {
  socket.emit('siguientesTicket', null, function(siguienteTicket) {
    label.text(siguienteTicket);
  });
});
