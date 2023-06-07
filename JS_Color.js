var Links = {
  setColor: function(color) {
    $('a').css('color', color);
  }
};

var Body = {
  setColor: function(color) {
    $('body').css('color', color);
  },
  setBackgroundColor: function(color) {
    $('body').css('backgroundColor', color);
  }
};

function nightDayHandler(self) {
  var target = $('body');
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    $('h1').css('border-bottom', '2px solid white');
    $('ol').css('border-right', '2px solid white'); // 변경된 부분
    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    $('h1').css('border-bottom', '2px solid black');
    $('ol').css('border-right', '2px solid black'); // 변경된 부분
    Links.setColor('blue');
  }
}
