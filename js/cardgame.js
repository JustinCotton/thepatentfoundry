(function($){
  $.fn.shuffle = function() {
    return this.each(function(){
      var items = $(this).children();
      return (items.length)
        ? $(this).html($.shuffle(items))
        : this;
    });
  }
  // when using functions that aren't DOM-specific, you can use "$"" only before "."
  // make a sequence diagram of what the card game is supposed to do
  $.shuffle = function(arr) {
    for(
      var j, x, i = arr.length; i;
      j = parseInt(Math.random() * i),
      x = arr[--i], arr[i] = arr[j], arr[j] = x
        );
    return arr;
  }
})(jQuery);

// The total number of cards currently selected and total times failed
var counter = 0,
    failed  = 0,
    limit   = 300; // changed limit from 3 to 300 to give the player a chance to match all the cards.

// Shuffle the cards around
$('#cardTable').shuffle();

$('.card').each(function() {
  var $this = $(this);

  // Create the front side of the card
  $('<div />', {'class' : 'front'}).appendTo($this);

  // Create the back side of the card
  $('<div />', {
    'class' : 'back',
    html    : $this.data('face')
  }).appendTo($this);
});

// Bind the click event to the card so we can toogle the state the
// backface-visibility, this property only applies to browsers that
// support it
$(document.body).on('click', '.card', function() {
  console.log("on click", this);
  // If the counter/current class matches something that should ensure the
  // click is check for it and prevent anything else from happening
  if (counter === 2 || $(this).is('.matched') || !$(this).is('.down'))
    return;

  // Remove the "down" class since the current card can't be turned off
  // unless a second card is selected
  $(this).removeClass('down');

  // Increment the active cards counter
  counter++;

  // Find the 2 cards that have been selected if the counter is at 2
  if (counter === 2) {
    var cards = $('.card:not(.down, .matched)'),
        delay = 0,
        match = $(cards[0]).data('face') === $(cards[1]).data('face');

    if (match) {
      cards.addClass('matched'); // and add a function to reveal a patent fact, FAQ-style
      var key = $(cards[0]).data('face');
      $("#term"+key).show();
      alert('Match! Keyword Unlocked!');

      // Now we need to check if every card was matched, we can do this by
      // simply getting a total count of all the cards compared to how many
      // have the "matched" class
      var $cards  = $('.card'),
          total   = $cards.length,
          matched = $('.card.matched').length;

      if (total === matched){
        alert('You Unlocked All of the Patent Keywords!  Check out the terms below!');

      }
    } else {
      delay = 700;
      failed++;

      setTimeout(function() {
        cards.addClass('down');
      }, delay);
    }

    // Check the number of times that the player has failed, if they have hit
    // the limit reset the cards and the counter
    setTimeout(function() {
      if (failed === limit) {
        alert('Sorry, but you have wrongly matched too many cards. The cards will now be shuffled around!');

        // Reset the cards
        $('.card').removeClass('matched').addClass('down');

        // Shuffle the cards around
        setTimeout(function() {
          $('#cardTable').shuffle();
        }, 200);

        // Reset the counters
        counter = failed = 0;
      } else {
        counter = 0;
      }
    }, delay);
  }
});
