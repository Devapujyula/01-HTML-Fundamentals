// oka function ki parameter ga unko function ni add cheyyatanne callbacks antaru
function callBackTest() {
    console.log("I am being printed inside call back function");
}

// Function lopala access cheseappudu ela avvina cheyacchu kaani function bayata cal chese appudu mathram kacchitamga function name thone cal cheyyali

function callBackTest1() {
    console.log("I am being printed inside call back function-1");
}


function add(n1, n2, func) {
    console.log(n1+n2);
   func()
   // callBackTest();
}

let a = 1
let b = 5
add(a,b, callBackTest1)
