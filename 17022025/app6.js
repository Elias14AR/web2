let rs = true && false;
let rss = false && true;
console.log("AND")
console.log("A B R")
console.log("1" + "|0" + "|" + "0" + "->" + rs);
console.log("1" + "|0" + "|" + "0" + "->" + rs);
console.log("1" + "|0" + "|" + "0" + "->" + rs);
console.log("1" + "|0" + "|" + "0" + "->" + true);

let rs1 = true || false;
let rss1 = false || true;
console.log("OR")
console.log("A B R")
console.log("1" + "|0" + "|" + "0" + "->" + false);
console.log("1" + "|0" + "|" + "0" + "->" + rs1);
console.log("1" + "|0" + "|" + "0" + "->" + rs1);
console.log("1" + "|0" + "|" + "0" + "->" + rs1);

let rs2 = true != false;
let rss2 = false != true;
console.log("NOT")
console.log("A B R")
console.log("1" + "|0" + "|" + "0" + "->" + true);
console.log("1" + "|0" + "|" + "0" + "->" + false);



