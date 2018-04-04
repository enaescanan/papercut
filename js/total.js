$( function() {
var hashes = window.location.href.slice(window.location.href.indexOf('#')).replace('#', '');
var liters = hashes*13;

    $('.litervalue').html(liters+" LITERS");
    
    if (liters < 601) {
        amount = liters/6;
        $('.litertext').html('flush the toilet '+Math.floor(amount)+' times!');
        $('#result_img').attr("src", "images/flush.png");

    } else if (liters < 1501) {
        amount = liters/30;
        $(".litertext").html('shower for '+Math.floor(amount)+' times! (using a standard shower head, average 3mins per shower)');
        $('#result_img').attr("src", "images/shower.png");

    } else if (liters < 4501) {
        amount = liters/150;
        $(".litertext").html('wash '+Math.floor(amount)+' loads of laundry!');
        $('#result_img').attr("src", "images/laundry.png");
    } else if (liters > 4501) {
        amount = liters/265;
        $(".litertext").html('fill '+Math.floor(amount)+' bath tubs!');
        $('#result_img').attr("src", "images/tub.png");

    }
  });