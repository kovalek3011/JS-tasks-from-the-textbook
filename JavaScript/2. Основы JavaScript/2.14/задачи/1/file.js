// Напишите "if", аналогичный "switch"

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// let browser,
//   UsrAg = navigator.userAgent;

// if (UsrAg.indexOf("Edge") > -1) {
//   browser = "Edge";
// } else if (UsrAg.indexOf("Chrome") > -1) {
//   browser = "Chrome";
// } else if (UsrAg.indexOf("Firefox") > -1) {
//   browser = "Firefox";
// } else if (UsrAg.indexOf("Safari") > -1) {
//   browser = "Safari";
// } else if (UsrAg.indexOf("Opera") > -1) {
//   browser = "Opera";
// } else {
//   browser = "unknown";
// }

// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }


let UserAg = navigator.userAgent;

if (UserAg.indexOf("Edge") > -1) {
  alert("You've got the Edge!");
} else if (UserAg.indexOf("Chrome") > -1) {
  alert("Okay we support these browsers too");
} else if (UserAg.indexOf("Firefox") > -1) {
  alert("Okay we support these browsers too");
} else if (UserAg.indexOf("Safari") > -1) {
  alert("Okay we support these browsers too");
} else if (UserAg.indexOf("Opera") > -1) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}
