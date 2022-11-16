var Body = {
setColor: function(color) {
  //  document.querySelector('body').style.color = color;
   $('body').css('color', color);
},
setBackgroundColor: function(color) {
  //  document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor', color);
}
}
var Links = {
 setColor: function(color) {
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length) {
  alist[i].style.color = color;
  i = i + 1;
  }
  }
  }

{/* // function BodySetColor(color) {
//                 document
//                     .querySelector('body')
//                     .style
//                     .color = color;
//             }
// function BodySetBackgroudSetColor(color) {
//          document
//             .querySelector('body')
//             .style
//             .backgroundColor = color;
//        }
// function LinkSetColor(color) {
// var alist = document.querySelectorAll('a');
// var i = 0;
// while ( i < alist.length) {
// 		alist[i].style.color = color;
// 		console.log(alist[i]);
// 		i = i + 1;
// 	}
// }
} */}

function nightDayHandler(self) {
    var target = document.querySelector('body');
            if (self.value === 'night') {
                // BodySetBackgroudSetColor('black');
                Body.setBackgroundColor('black');
                // BodySetColor('white');
                Body.setColor('white');
                self.value = 'day'
                // LinkSetColor('powderblue');
                Links.setColor('powderblue');
                }
            
        
            else {
                // BodySetBackgroudSetColor('white');
                Body.setBackgroundColor('White');
                // BodySetColor('black');
                Body.setColor('black');
                self.value = 'night'
                // LinkSetColor('blue');
                Links.setColor('blue');
                }
            }