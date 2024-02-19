// Scrolls down to ticket section by clicking the header banner button.
function scrollToBuyTicket() {
	window.scrollTo(0, 1500);
}

// Seat count
const totalSeats = 40;
let selectedSeat = [];
let selectedSeatName = [];
let totalPrice = 0;
let grandTotal = 0;
let discount = 0;


const selectSeats = document.querySelectorAll(".seats");
for (const selectSeat of selectSeats) {
	selectSeat.addEventListener("click", function (event) {
		if (selectedSeat.includes(event.target.innerText) == true) {
			selectSeat.removeEventListener("click", function () {});
		} else {
			selectedSeat.push(event.target.innerText);
			if (selectedSeat.length <= 4) {
				selectSeat.classList.remove("text-[#03071280]", "bg-[#F7F8F8]");
				selectSeat.classList.add("bg-[#1DD100]", "text-white");

				// Shows the remaining seats after selecting any seat/s
				document.getElementById("seat-left").innerText =
					totalSeats - selectedSeat.length;

				// Shows the selected seat numbers
				document.getElementById("selected-seat-number").innerText =
					selectedSeat.length;

				// Shows the selected seat name and info in the table
				let seatItemContainer = document.getElementById("seat-item");
				const tr = document.createElement("tr");
				const tdSeat = document.createElement("td");
				tr.appendChild(tdSeat).innerText = event.target.innerText;
				const tdClass = document.createElement("td");
				tr.appendChild(tdClass).innerText = "Economy";
				const tdPrice = document.createElement("td");
				tr.appendChild(tdPrice).innerText = "550";
				seatItemContainer.appendChild(tr);
				selectedSeatName.push(seatItemContainer.lastChild);

				// Shows the selected ticket/s total and grand total price
				totalPrice = selectedSeat.length * 550;
				document.getElementById("total-price").innerText = totalPrice;

				grandTotal = selectedSeat.length * 550;
				document.getElementById("grand-total").innerText = grandTotal;

				// Coupon apply button activates after selecting 4 tickets.
				if (selectedSeat.length === 4) {
					document.getElementById("coupon-input").removeAttribute("disabled");
					document.getElementById("coupon-btn").removeAttribute("disabled");
				} else {
					document.getElementById("coupon-btn").setAttribute("disabled", true);
					document
						.getElementById("coupon-input")
						.setAttribute("disabled", true);
				}
			} else {
				alert("You have already selected 4 seats");
				selectedSeat.pop();
			}
		}
	});
}

// Validating the coupon names right or not and hide the apply btn after claiming one coupon.
const couponBtn = document.getElementById("coupon-btn");
couponBtn.addEventListener("click", function (event) {
	const couponInput = document.getElementById('coupon-input').value;
    if (couponInput === "NEW15" || couponInput === "Couple 20"){
        if(couponInput === "NEW15"){
            discount = totalPrice * 0.15;
            
        }
        const couponInputContainer = document.getElementById('coupon-input-container');
        couponInputContainer.classList.add('hidden');
    }
    else{
        alert('Invalid Coupon');
    }
});
