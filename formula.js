var noOfOperand=0; 

function ac(){
    document.getElementById("display").value = "";
    noOfOperand = 0;
}

function bs(){
    var a =  document.getElementById("display").value;
    var b = a.length - 1;
    document.getElementById("display").value = a.substring(0,b);
    if(a[b] in ['+','-','X','÷','%']){
        noOfOperand -= 1;
    }
    console.log(a.substring(0,b));
}

function per(){
    var a =  document.getElementById("display").value;
    document.getElementById("display").value = a/100;

}

function div(){
    document.getElementById("display").value  += '÷';
    noOfOperand += 1;
}

function sev(){
    document.getElementById("display").value += '7';
}

function eig(){
    document.getElementById("display").value += '8';
}

function nin(){
    document.getElementById("display").value += '9';
}

function x(){
    document.getElementById("display").value += 'X';
    noOfOperand += 1;
}

function fou(){
    document.getElementById("display").value += '4';
}

function fiv(){
    document.getElementById("display").value += '5';
}

function six(){
    document.getElementById("display").value += '6';
}

function sub(){
    document.getElementById("display").value += '-';
    noOfOperand += 1;
}

function one(){
    document.getElementById("display").value += '1';
}

function two(){
    document.getElementById("display").value += '2';
}

function thr(){
    document.getElementById("display").value += '3';
}

function add(){
    document.getElementById("display").value += '+';
    noOfOperand += 1;
}

function zer(){
    document.getElementById("display").value += '0';
}

function dot(){
    document.getElementById("display").value += '.';
}

function equal(){
    var a =  document.getElementById("display").value;
    let digit = ['.', '1','2','3','4','5','6','7','8','9','0'];
    let op = []
    let  j=0;
    let num = [];
    for(let i=0;i<=(noOfOperand );i++){
        str = "";
        while(digit.includes(a[j])){
            str += a[j];
            j++;
           }
        console.log(str)
        num.push(str);
        op.push(a[j]);
        j++;
    }
    op.pop();
    console.log(num);
    console.log(op);

    for(let z=0;z<op.length;z++){
        if(op[z] == 'X'){
            num[z] = (num[z]*num[z+1]).toString();
            num.splice(z+1,1);
            op.splice(z,1);
            
        }
    }
    console.log(num);
    console.log(op);
    for(let v=0;v<op.length;v++){
        if(op[v] == '÷'){
            num[v] = num[v]/num[v+1];
            num.splice(v+1,1);
            op.splice(v,1);
            v--;
        }
    }

    let k=0,l=0, nexVal, currentOp;
    let val = Number(num[k]);
    while(l < op.length){
        k += 1;
        nexVal = Number(num[k]);
        currentOp = op[l];
        if(currentOp == '+'){
            val = val + nexVal;
        }
        else if(currentOp == '-'){
            val = val - nexVal;
        }
        else{
            null;
        }
        l++;

    }
    document.getElementById("display").value = val;


}