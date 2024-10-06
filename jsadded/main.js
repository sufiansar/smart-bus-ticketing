// function mainJs() {
//   buyTicket();
// }

// function clickOnseat() {
// //   const clickSeat = addEventListener("click", seatForAll);

// //   bgColorOfSeat();
// // }

// function all() {
//   const seats = document.querySelectorAll(".seat");
//   let selectedSeat = [];

//   for (let seat of seats) {
//     seat.addEventListener("click", function () {
//       const isExist = selectedSeat.includes(seat.id);

//       if (isExist) {
//         // for seat increase
//         selectedSeat = selectedSeat.filter((st) => st != seat.id);
//         seat.style.backgroundColor = "#F7F8F8";
//       } else {
//         if (selectedSeat.length < 4) {
//           seat.style.backgroundColor = "#1DD100";
//           selectedSeat.push(seat.id);

//           const availableeSeat = document.getElementById("seatincrease");
//           const seatForDis = availableeSeat.innerText;
//           const seatForIntconvert = parseInt(seatForDis);
//           const availableeSeatNow = seatForIntconvert - 1;
//           availableeSeatNow.innerText;
//           const setashow = seatForAll("seatincrease");
//           console.log(setashow);
//           addPeyment("availableeSeatNow", 40);
//         }
//       }
//     });
//   }
// }

// all();

// function setCountBY(event){
//     const seat=event.target;
//     const setcountK=document.querySelectorAll('seat')

// }

function all() {
  const seats = document.querySelectorAll(".seat");
  let selectedSeat = [];

  for (let seat of seats) {
    seat.addEventListener("click", function () {
      const isExist = selectedSeat.includes(seat.id);

      if (isExist) {
        // When a seat is deselected
        selectedSeat = selectedSeat.filter((st) => st != seat.id);
        seat.style.backgroundColor = "#F7F8F8";

        // Increment seat count (optional, if needed)
        const availableSeat = document.getElementById("seatincrease");
        let seatCount = parseInt(availableSeat.innerText);
        availableSeat.innerText = seatCount + 1;
        // this is the seat count also the payment method seat icrement
        const paymentOption = document.getElementById("pymentDone");
        let paymentIcrement = parseInt(paymentOption.innerText);
        paymentOption.innerText = paymentIcrement - 1;
        // this the price of the seat also icrement and dicrement
        const paymentList = document.getElementById("paymentd");
        let paymentIc = parseInt(paymentList.innerText);
        paymentList.innerText = paymentIc - 550;

        //total amount of seat selected

        // const totalammount = document.getElementById("total");
        // let totalIcrement = parseInt(totalammount.innerText);
        // totalammount.innerText = totalIcrement - 550;

        let parsenIntger = persentIcrement("paymentd");
        addPeyment("total", parsenIntger);

        // apply the coupone

        // let applyCoupon = persentIcrement("total");
        // addPeyment("total", (applyCoupon / 100) * 15);

        // let applyCouponTowwnty = persentIcrement("total");
        // addPeyment("total", (applyCouponTowwnty / 100) * 20);
      } else {
        if (selectedSeat.length < 4) {
          // Select the seat
          seat.style.backgroundColor = "#1DD100";
          selectedSeat.push(seat.id);

          // Decrement seat count
          const availableSeat = document.getElementById("seatincrease");
          let seatCount = parseInt(availableSeat.innerText);
          availableSeat.innerText = seatCount - 1;

          // icrement seat count

          const paymentOption = document.getElementById("pymentDone");
          let paymentIcrement = parseInt(paymentOption.innerText);
          paymentOption.innerText = paymentIcrement + 1;

          const paymentList = document.getElementById("paymentd");
          let paymentIc = parseInt(paymentList.innerText);
          paymentList.innerText = paymentIc + 550;

          //total amount of seat selected

          // const totalammount = document.getElementById("total");
          // let totalIcrement = parseInt(totalammount.innerText);
          // totalammount.innerText = totalIcrement + 550;

          // coupn code

          // let applyCoupon = persentIcrement("total");
          // addPeyment("total", (applyCoupon / 100) * 15);

          // let applyCouponTowwnty = persentIcrement("total");
          // addPeyment("total", (applyCouponTowwnty / 100) * 20);

          let parsenIntger = persentdis("paymentd");
          addPeyment("total", parsenIntger);

          addPayment("availableeSeatNow", 40);
          addPayment("availableeSeatNow", 0);
          totalA("total", 0);
        }
      }
    });
  }
}

all();
