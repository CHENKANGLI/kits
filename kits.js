var kits = {};
// 1.随机整数

kits.randomInt = function(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};
// console.log(typeof kits.randomInt(10, 100));
// console.log(kits.randomInt(10, 100));
// 2.随机rgb颜色

// kits.randomRGB = function() {
//   var r = kits.randomInt(0, 255);
//   var g = kits.randomInt(0, 255);
//   var b = kits.randomInt(0, 255);
//   return "rgb( " + r + " ," + g + "," + b + ")";
// };
// console.log(kits.randomRGB());
// document.body.style.backgroundColor = kits.randomRGB();

// 3.随机十六进制颜色

kits.randomHexa = function() {
  function char(n) {
    switch (n) {
      case 10:
        n = "a";
        break;
      case 11:
        n = "b";
        break;
      case 12:
        n = "c";
        break;
      case 13:
        n = "d";
        break;
      case 14:
        n = "e";
        break;
      case 15:
        n = "f";
        break;
      default:
        n = n.toString();
        break;
    }
    return n;
  }
  var r1 = kits.randomInt(0, 15);
  var r2 = kits.randomInt(0, 15);
  var g1 = kits.randomInt(0, 15);
  var g2 = kits.randomInt(0, 15);
  var b1 = kits.randomInt(0, 15);
  var b2 = kits.randomInt(0, 15);
  r1 = char(r1);
  r2 = char(r2);
  g1 = char(g1);
  g2 = char(g2);
  b1 = char(b1);
  b2 = char(b2);
  return "#" + r1 + r2 + g1 + g2 + b1 + b2;
};
console.log(kits.randomHexa());
document.body.style.backgroundColor = kits.randomHexa();
