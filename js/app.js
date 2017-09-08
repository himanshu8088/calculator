var opr;
var num1=0;
var num2=0;

function onNumberClick(key){
	document.getElementById("#disp").innerHTML=key.name;

	if(num1==0)
		num1=key.name;
	else
		num2=key.name
	display(key.name);
}

function onOperatorClick(key){
	opr=key.name;
	display(opr);
}

function onProcessingClick(key){
	if(key.name=="="){
		num1=calculate(num1,num2,key.name);
		num2=0;
		clear();
		display(num1);
	}else{
		clear();
	}
}

function display(val){	
	document.getElementById("#dis").innerText+=val;
}

function clear(){
	document.getElementById("#dis").innerHTML="";
}

function calculate(num1,num2,operand){
	if(operand=='+')
		return num1+num2;
	else if((operand=='-'))
		return num1-num2;
	else if(operand=='*')
		return num1*num2;
	else
		return num1/num2;
}