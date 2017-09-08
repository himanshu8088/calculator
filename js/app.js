var opr;
var num1=0;
var num2=0;

function onNumberClick(key){	
	if(num1==0)
		num1=key.name;
	else
		num2=key.name;
	display(key.name);
}

function onOperatorClick(key){
	opr=key.name;
	display(opr);
}

function onProcessingClick(key){
	if(key.name=="="){
		num1=calculate(num1,num2,opr);
		num2=0;
		clear();
		display(num1);
	}else{
		reset();
	}
}

function display(val){	
	document.getElementById("disp").innerText+=val;
}

function clear(){
	document.getElementById("disp").innerText="";
}

function reset(){
	clear();
	opr='';
	num1=0;
	num2=0;
}

function calculate(num1,num2,operand){
	if(operand=='+')
		return parseFloat(num1)+parseFloat(num2);
	else if((operand=='-'))
		return parseFloat(num1)-parseFloat(num2);
	else if(operand=='*')
		return parseFloat(num1)*parseFloat(num2);
	else
		return parseFloat(num1)/parseFloat(num2);
}