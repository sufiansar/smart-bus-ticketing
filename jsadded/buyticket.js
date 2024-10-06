function buyTicket() {
  const buyTic = document.getElementById("buyTickeT");
}

function seatForAll(elementId) {
  const element = document.getElementById(elementId);
  const elementTaxt = element.innerText;
  const elementIntValue = parseInt(elementTaxt);
  return elementIntValue;
}

function bgColorOfSeat(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
}

function addPeyment(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function persentdis(elementId) {
  let element = document.getElementById(elementId);
  let innertextEle = element.innerText;
  let elementInt = parseInt(innertextEle);
  return elementInt;
}

function persentIcrement(elementId) {
  let element = document.getElementById(elementId);
  let innertextEle = element.innerText;
  let elementInt = parseInt(innertextEle);
  return elementInt;
}
