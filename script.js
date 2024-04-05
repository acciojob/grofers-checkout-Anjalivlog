const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
    let totalPrice = 0;
	prices.forEach(price => {
		totalPrice += parseFloat(price.textContent);
	})
  const table = document.querySelector("table");
    const totalRow = table.insertRow(-1); 
    const totalCell = totalRow.insertCell(0);
    totalCell.colSpan = 2;
    totalCell.textContent = "Total Price: Rs " + totalPrice.toFixed(2);
	totalCell.id = "ans";
};

getSumBtn.addEventListener("click", getSum);

