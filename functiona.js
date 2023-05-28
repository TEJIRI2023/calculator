

let values = [];
let holder = '';
let displaying;
let answer = 0;
let ans
let position;
let counter = 0;


function number(num) {
    if (holder.length == 0 && num == '.') {
        holder += '0.';   
     } else if (holder.length > 0 && num == '.' && holder.indexOf('.') == -1) {
        holder += '.'
     } else if (num != ".") {
        holder += num
     }    
    displaying = values.join(" ");  
    console.log(holder)
    document.getElementById("view").innerHTML = displaying;
    document.getElementById("resulti").innerHTML = holder; 
}
function operator(val) {
    if (holder.length > 0) {
    values.push(Number(holder))
    }
    position = values.length - 1;
    if (typeof values[position] == 'number') {
        values.push(val)
        counter += 1;
    } else if (val == '-') {
        if (values.length == 0) {
            values.push(val)
        } else if (values[0] == '-' && values.length == 1) {
            values.pop()
        } else if (values[position] == '-' && values[position - 1] == '/') {
            values.pop()            
        } else if (values[position] == '-' && values[position - 1] == 'x') {
            values.pop()            
        } else if (values[position] == '+') {
            values.pop()
            values.push(val)
        } else if (values[position] == '-') {
            values.pop()
            values.push('+')
        } else if (values[position] == '/') {
            values.push(val)
            counter += 1;
        } else if (values[position] == 'x') {
            values.push(val)
            counter += 1;
        }
    } else if (val == 'x') {
        if (values.length == 1 && values[position] == '-') {
            values.pop()
        }
        if (values[position] == '-' && values[position - 1] == 'x') {
            values.pop()
            values.pop()
            values.push(val)
            counter -= 1;
        } else if (values[position] == '-' && values[position - 1] == '/') {
            values.pop()
            values.pop()
            values.push(val)
            counter -= 1;
        } else if (values[position] == '+') {
            values.pop()
            values.push(val)
        } else if (values[position] == '-') {
            values.pop()
            values.push(val)
        } else if (values[position] == '/') {
            values.pop()
            values.push(val)
        }
    } else if (val == '/') {
        if (values.length == 1 && values[position] == '-') {
            values.pop()
        }
        if (values[position] == '-' && values[position - 1] == 'x') {
            values.pop()
            values.pop()
            values.push(val)
            counter -= 1;
        } else if (values[position] == '-' && values[position - 1] == '/') {
            values.pop()
            values.pop()
            values.push(val)
            counter -= 1;
        } else if (values[position] == '+') {
            values.pop()
            values.push(val)
        } else if (values[position] == '-') {
            values.pop()
            values.push(val)
        } else if (values[position] == 'x') {
            values.pop()
            values.push(val)
        }
    }    
        
    holder = '';    
    displaying = values.join(" ");
    console.log(counter)
    console.log(values)
    console.log(holder)
    document.getElementById("view").innerHTML = displaying;
    document.getElementById("resulti").innerHTML = 0;     
}
let arr19;  
let index;
let result;
let multi;
let adds = 0;
let subtracts = 0;
let divid;

function divide() {
    do {
        index = arr19.indexOf('/')
        let dur = index - 1;
        let duur = index + 1;
        let duuur = index + 2;
        if (arr19[duur] == '-') {
            divid = arr19[dur] / - arr19[duuur]
            arr19.splice(dur, 4, divid)
        } else if (arr19.indexOf('/') != -1) {
            divid = arr19[dur] / arr19[duur]
            arr19.splice(dur, 3, divid)
        }  
    } while (arr19.indexOf('/') != -1) 
}
function multiply() {
    do {
        index = arr19.indexOf('x')
        let du = index - 1;
        let duu = index + 1;
        let duuu = index + 2;
        if (arr19[duu] == '-') {
            multi = arr19[du] * - arr19[duuu]
            arr19.splice(du, 4, multi)
        } else if (arr19.indexOf('x') != -1){
            multi = arr19[du] * arr19[duu]
            arr19.splice(du, 3, multi)
        }  
    } while (arr19.indexOf('x') != -1) 
}
let toSubtract = 0;
function add() {
    
    let p = 0;
    if (typeof arr19[0] == 'number' && arr19.length == 1) {
        if (arr19[0] < 0) {
           toSubtract -= arr19[0]
           arr19.splice(0, 1)
           subtracts += toSubtract 
        } else {
            adds += arr19[0];
            arr19.splice(0, 1)
        }        
    } else if (arr19.length >= 2) {
        if (typeof arr19[0] == 'number') {
            adds += arr19[0];
            arr19.splice(0, 1)
        }
        if (arr19.indexOf('+') != -1) {
            do {                      
                index = arr19.indexOf('+');
                adds += arr19[index + 1];
                arr19.splice(index, 2)                                          
                p++
            } while (arr19.indexOf('+') != -1)
        }        
    }      
        
}
function subtract() {
    
    let s = 0;
       
    do {
        index = arr19.indexOf('-');
        let r = 0;                
        if (arr19[index + 1] < 0) {
            r -= arr19[index + 1];
            arr19.splice(index, 2, r)
        } else {
            subtracts += arr19[index + 1];
            arr19.splice(index, 2)            
        }                       
        s++
    } while (arr19.indexOf('-') != -1)
    
} 

function compute() {
    adds = 0;
    subtracts = 0;
    toSubtract = 0;    
    if (holder.length <= 0) {
        arr19 = [...values];
    } else {
        arr19 = [...values, Number(holder)]; 
    }    
    displaying = arr19.join(" ");
    document.getElementById("view").innerHTML = displaying;
    result = 0;
    if (arr19.indexOf('/') != -1) {
        divide()
    }
    console.log(arr19)
    if (arr19.indexOf('x') != -1) {
        multiply()
    }
    console.log(arr19)
    if (arr19.indexOf('+') != -1 || arr19[0] < 0 || arr19[0] > 0) {
        add()
    }
    console.log(arr19)
    console.log(adds)
    console.log(subtracts)
    if (arr19.indexOf('-') != -1 ) {
        subtract()
    }
    console.log(arr19)
    console.log(adds)
    console.log(subtracts)
    console.log(toSubtract)
    let q = 0;
    do {
        if (arr19.indexOf('+') != -1 || arr19[0] > 0) {
            add()
        }
        q++
    } while (arr19 >= 1)
    
    console.log(arr19)
    console.log(adds)
    result = adds - subtracts;
    
    
    document.getElementById("resulti").innerHTML = result;
    console.log(result)    
    
    console.log(values)          
}

function delet() {
    let arr20;
    if (holder.length == 1) {
        holder = '';
        arr20 = [...values]
        displaying = arr20.join(' ')        
        document.getElementById("view").innerHTML = displaying;
        document.getElementById("resulti").innerHTML = 0;
    } else if (holder.length > 1) {
        arr20 = holder.split('')
        arr20.pop()
        holder = arr20.join('')
        arr20 = [...values, Number(holder)]
        displaying = arr20.join(' ')
        document.getElementById("view").innerHTML = displaying
        document.getElementById("resulti").innerHTML = holder;
    } else {
        values.pop()
        index = values.length - 1;
        if (typeof values[index] == 'number') {            
            holder += values[index]
            values.pop()            
            arr20 = [...values, Number(holder)]
            displaying = arr20.join(' ')
            document.getElementById("view").innerHTML = displaying;
            document.getElementById("resulti").innerHTML = holder;
        } else {
            arr20 = [...values]
            displaying = arr20.join(' ')
            document.getElementById("view").innerHTML = displaying;
            document.getElementById("resulti").innerHTML = 0;
        }
        
        document.getElementById("view").innerHTML 
        document.getElementById("resulti").innerHTML
    }
    
}

function clearer() {
    holder = '';
    values = [];
    let displaying = '';
    document.getElementById("view").innerHTML = displaying;
    document.getElementById("resulti").innerHTML = 0;
}

//don't forget to work on an answer, to be like [ans + 54 - 98 - 90] 


let hyll = ''
hyll += 69
let huy = hyll.split('')
huy.pop()
hyll = huy.join('')

console.log(huy)
console.log(hyll)