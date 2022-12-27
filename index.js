/* ------------------------------------------------------------------------- BUTTON ------------------------------------------------------------------------- */

/* --------------BUTTON 1 START------------------- */

const button1 = document.querySelector("#button_number1");
const button1Value = button1.value;
button1.addEventListener("click", () => {
  document.getElementById("input_display").value += button1Value;
});

/* --------------BUTTON 1 END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------BUTTON 2 START------------------- */

const button2 = document.querySelector("#button_number2");
const button2Value = button2.value;
button2.addEventListener("click", () => {
  document.getElementById("input_display").value += button2Value;
});

/* --------------BUTTON 2 END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------BUTTON 3 START------------------- */

const button3 = document.querySelector("#button_number3");
const button3Value = button3.value;
button3.addEventListener("click", () => {
  document.getElementById("input_display").value += button3Value;
});

/* --------------BUTTON 3 END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------BUTTON 4 START------------------- */

const button4 = document.querySelector("#button_number4");
const button4Value = button4.value;
button4.addEventListener("click", () => {
  document.getElementById("input_display").value += button4Value;
});

/* --------------BUTTON 4 END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------BUTTON 5 START------------------- */

const button5 = document.querySelector("#button_number5");
const button5Value = button5.value;
button5.addEventListener("click", () => {
  document.getElementById("input_display").value += button5Value;
});

/* --------------BUTTON 5 END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------BUTTON 6 START------------------- */

const button6 = document.querySelector("#button_number6");
const button6Value = button6.value;
button6.addEventListener("click", () => {
  document.getElementById("input_display").value += button6Value;
});

/* --------------BUTTON 6 END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------BUTTON 7 START------------------- */

const button7 = document.querySelector("#button_number7");
const button7Value = button7.value;
button7.addEventListener("click", () => {
  document.getElementById("input_display").value += button7Value;
});

/* --------------BUTTON 7 END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------BUTTON 8 START------------------- */

const button8 = document.querySelector("#button_number8");
const button8Value = button8.value;
button8.addEventListener("click", () => {
  document.getElementById("input_display").value += button8Value;
});

/* --------------BUTTON 8 END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------BUTTON 9 START------------------- */

const button9 = document.querySelector("#button_number9");
const button9Value = button9.value;
button9.addEventListener("click", () => {
  document.getElementById("input_display").value += button9Value;
});

/* --------------BUTTON 9 END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------BUTTON 10 START------------------- */

const button0 = document.querySelector("#button_number0");
const button0Value = button0.value;
button0.addEventListener("click", () => {
  document.getElementById("input_display").value += button0Value;
});

/* --------------BUTTON 10 END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* ------------------------------------------------------------------------- OPERATOR ------------------------------------------------------------------------- */

/* --------------PLUS OPERATOR START------------------- */

const plusOperator = document.querySelector("#button_operator_sum");
const plusBtnValue = plusOperator.value;
plusOperator.addEventListener("click", () => {
  document.getElementById("input_display").value += plusBtnValue;
});

/* --------------PLUS OPERATOR END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------SUBTRACTION OPERATOR START------------------- */

const subOperator = document.querySelector("#button_operator_sub");
const subBtnValue = subOperator.value;
subOperator.addEventListener("click", () => {
  document.getElementById("input_display").value += subBtnValue;
});

/* --------------SUBTRACTION OPERATOR END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------MULTIPLICATION OPERATOR START------------------- */

const mulOperator = document.querySelector("#button_operator_mul");
const mulBtnValue = mulOperator.value;
mulOperator.addEventListener("click", () => {
  document.getElementById("input_display").value += mulBtnValue;
});

/* --------------MULTIPLICATION OPERATOR END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------DIVISION OPERATOR START------------------- */

const divOperator = document.querySelector("#button_operator_div");
const divBtnValue = divOperator.value;
divOperator.addEventListener("click", () => {
  document.getElementById("input_display").value += divBtnValue;
});

/* --------------DIVISION OPERATOR END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* --------------DESIMAL OPERATOR START------------------- */

const dotOperator = document.querySelector("#button_operator_dot");
const dotBtnValue = dotOperator.value;
dotOperator.addEventListener("click", () => {
  document.getElementById("input_display").value += dotBtnValue;
});

/* --------------DESIMAL OPERATOR END------------------- */

/* ------------------------------------------------------------BREAK------------------------------------------------------------  */

/* ------------------------------------------------------------------------- CANCEL BUTTON ------------------------------------------------------------------------- */

/* --------------CANCEL BUTTON START------------------- */

const cancelButton = document.querySelector("#button_operator_cancel");
const cancelBtnValue = cancelButton.value;
cancelButton.addEventListener("click", () => {
  document.getElementById("input_display").value = "";
});

/* --------------CANCEL BUTTON END------------------- */

/* ------------------------------------------------------------------------- EQUAL BUTTON ------------------------------------------------------------------------- */

/* --------------EQUAL BUTTON START------------------- */

const equalButton = document.querySelector("#button_operator_euqal");
equalButton.addEventListener("click", () => {
  var x = document.getElementById("input_display").value;
  var y = eval(x);
  document.getElementById("input_display").value = y;
});

/* --------------EQUAL BUTTON END------------------- */
