let songlist = ['Powfu - Death Bed', 'idontwannabeyouanymore', 'lowkey'];

$('button').click(function(){
    songlist.forEach(function(song) {
      $('#songlist').append("<p>" + show + "</p>");
    })
})