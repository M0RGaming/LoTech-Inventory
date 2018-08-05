// After all else has been loaded


try {
  $('img[src="undefined"]').remove()
} catch {}
$('.trowid').remove()
$('.drowid').remove()
//console.log(dout)

filtertable();



//console.log("Exists!");
loadbuttons();
vanish();
//$("#table").tablesorter({sortList:[[1,0]]});
$("#blackout").fadeOut();

$('#root').css('overflow-y', 'visible')