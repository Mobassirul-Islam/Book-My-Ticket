
// // Seat count
// // const totalSeats = 40;
// // let selectedSeat = [];

// // const selectSeat = document.querySelectorAll(".seats");
// for (const i of selectSeat) {
// 	i.addEventListener("click", function (event) {
// 		if (selectedSeat.includes(event.target.innerText) == true) {
// 			selectedSeat.pop();
// 		} else {
			// const tr = document.createElement("tr");
			// const tdSeat = document.createElement("td");
			// tr.appendChild(tdSeat).innerText = event.target.innerText;
			// const tdClass = document.createElement("td");
			// tr.appendChild(tdClass).innerText = "Economy";
			// const tdPrice = document.createElement("td");
			// tr.appendChild(tdPrice).innerText = "550";
			// document.getElementById("seat-item").appendChild(tr);
// 		}
// 		selectedSeat.push(event.target.innerText);
// 		if (selectedSeat.length <= 4) {
// 			i.classList.remove("text-[#03071280]", "bg-[#F7F8F8]");
// 			i.classList.add("bg-[#1DD100]", "text-white");
// 			// Show the remaining seats after selecting any seat/s
// 			document.getElementById("seat-left").innerText =
// 				totalSeats - selectedSeat.length;

// 			// Show the selected seat numbers
// 			document.getElementById("selected-seat-number").innerText =
// 				selectedSeat.length;
// 		} else {
// 			alert("You have already selected 4 seats");
// 			selectedSeat.pop();
// 		}
// 	});
// }
