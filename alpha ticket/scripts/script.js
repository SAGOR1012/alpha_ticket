// alert("connect hoise")

const sitBtnElement = document.getElementsByClassName("all-btn");
let count = 0;
let totalSeatRemaining = 40;
let sum = 0;
const ticketPrice = 550;

for (const btn of sitBtnElement) {
  btn.addEventListener("click", function (event) {
    count++;
    totalSeatRemaining--;

    //added sits
    if (count <= 4) {
      const seatName = event.target;
      seatName.classList.add("bg-green");
      seatName.classList.add("pointer-events-none");

      const addedSits = document.getElementById("added-seat");
      addedSits.innerText = count;
      //totalLeftSit
      const seatLeftText = document.getElementById("seat-left");
      seatLeftText.innerText = totalSeatRemaining;

      const append = document.getElementById("append-container");
      /* Create tag  */
      const li = document.createElement("li");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      p1.innerText = event.target.innerText;
      p2.innerText = "Economy";
      p3.innerText = "550";
      li.appendChild(p1);
      li.appendChild(p2);
      li.appendChild(p3);
      append.appendChild(li);

      const totalPrice = document.getElementById("total-price").innerText;
      let convertedTotalPrice = parseInt(totalPrice);
      // sum =count *ticketPrice;
      sum += ticketPrice;

      document.getElementById("total-price").innerText = sum;

      document.getElementById("grand-total").innerText = sum;

      /* coupon  */
      let grandTotal = 0;

      if (count == 4) {
        document.getElementById("apply").disabled = false;
        document.getElementById("apply").addEventListener("click", function () {
          const couponText = document.getElementById("coupon").value;

          if (couponText === "NEW15" && count >= 4) {
            grandTotal = sum * 0.85;
            document.getElementById("grand-total").innerText = grandTotal;

            let grandTotalDiscount = sum - grandTotal;
            // console.log(grandTotalDiscount);
            document.getElementById("discounted-price").innerText =
              grandTotalDiscount;

            document.getElementById("apply-coupon").classList.add("hidden");
            document
              .getElementById("discount-section")
              .classList.remove("hidden");
          } else if (couponText === "Couple 20" && count >= 4) {
            grandTotal = sum * 0.8;
            document.getElementById("grand-total").innerText = grandTotal;
            let grandTotalDiscount = sum - grandTotal;

            // console.log(grandTotalDiscount);

            document.getElementById("discounted-price").innerText =
              grandTotalDiscount;

            document.getElementById("apply-coupon").classList.add("hidden");
            document
              .getElementById("discount-section")
              .classList.remove("hidden"); // hide discount button
          } else {
            alert("Plase use a valid coupon otherwise Muri Kha");
          }
        });
      }

      //next button

      const btnNext = document.getElementById("next");

      const numberr = document.getElementById("number");

      numberr.addEventListener("keyup", function (event) {
        // console.log(event.key);
        convertedKey = parseInt(event.key);
        console.log(event.key.length);

        if (convertedKey >= 0 && count > 0) {
          btnNext.disabled = false;
        }
      });

      // console.log(sum);
    } else {
      alert("Maximum ticket limit crossed");

      return;
    }
  });
}

// if (count === 0){
//     document.getElementById
// }

// document.getElementById("apply").disabled = true;
