const iPhone11BlackPlusBtn = document.getElementById("iPhone11BlackPlusBtn");
iPhone11BlackPlusBtn.addEventListener("click", function(){
    const iPhone11BlackValue = document.getElementById("iPhone11BlackValue").value;
    const iPhone11BlackValueNumber = parseFloat(iPhone11BlackValue);
    const iPhoneValue = iPhone11BlackValueNumber + 1;

    document.getElementById("iPhone11BlackValue").value = iPhoneValue;

    // iPhonePriceTotalNumber-
    const iPhonePrice = document.getElementById("iPhone11Price").innerText;
    const iPhonePriceNumber = parseFloat(iPhonePrice);
    const iPhonePriceTotalNumber = iPhonePriceNumber + 1219;
    document.getElementById("iPhone11Price").innerText = iPhonePriceTotalNumber;

    subTotal()
    Total()

});
 // iPhone mines-
const iPhone11BlackMinusBtn = document.getElementById("iPhone11BlackMinusBtn");
iPhone11BlackMinusBtn.addEventListener("click", function(){
    const iPhone11BlackValue = document.getElementById("iPhone11BlackValue").value;
    const iPhone11BlackValueNumber = parseFloat(iPhone11BlackValue);
    const iPhoneValue = iPhone11BlackValueNumber - 1;

    document.getElementById("iPhone11BlackValue").value = iPhoneValue;
    // iPhonePriceTotalNumber-
    const iPhonePrice = document.getElementById("iPhone11Price").innerText;
    const iPhonePriceNumber = parseFloat(iPhonePrice);
    const iPhonePriceTotalNumber = iPhonePriceNumber - 1219;
    document.getElementById("iPhone11Price").innerText = iPhonePriceTotalNumber;

    subTotal()
    Total()
})
// iPhone 11 128GB Black end
// =================

// iPhone Case mines-
const iPhon11CaseBlackBtn = document.getElementById("iPhon11CaseBlackPlusBtn");
iPhon11CaseBlackBtn.addEventListener("click", function(){
    const iPhon11CaseBlackValue = document.getElementById("iPhon11CaseBlackValue").value;
    const iPhon11CaseBlackValueNumber = parseFloat(iPhon11CaseBlackValue);
    const iPhon11CaseBlackValueNumberTotal = iPhon11CaseBlackValueNumber + 1;

    document.getElementById("iPhon11CaseBlackValue").value = iPhon11CaseBlackValueNumberTotal;

    const iPhone11CasePrice = document.getElementById("iPhone11CasePrice").innerText;
    const iPhone11CasePriceNumber = parseFloat(iPhone11CasePrice);
    const iPhonePriceTotalNumber = iPhone11CasePriceNumber + 59;
    document.getElementById("iPhone11CasePrice").innerText = iPhonePriceTotalNumber;

    subTotal()
    Total()
})
// iPhone Case mines-
const iPhon11CaseBlackMinusBtn = document.getElementById("iPhon11CaseBlackMinusBtn");
iPhon11CaseBlackMinusBtn.addEventListener("click", function(){
    const iPhon11CaseBlackValue = document.getElementById("iPhon11CaseBlackValue").value;
    const iPhon11CaseBlackValueNumber = parseFloat(iPhon11CaseBlackValue);
    const iPhon11CaseBlackValueNumberTotal = iPhon11CaseBlackValueNumber - 1;

    document.getElementById("iPhon11CaseBlackValue").value = iPhon11CaseBlackValueNumberTotal;

// iPhone Case Price Total Number-
    const iPhone11CasePrice = document.getElementById("iPhone11CasePrice").innerText;
    const iPhone11CasePriceNumber = parseFloat(iPhone11CasePrice);
    const iPhonePriceTotalNumber = iPhone11CasePriceNumber - 59;
    document.getElementById("iPhone11CasePrice").innerText = iPhonePriceTotalNumber;

    subTotal()
    Total()
    
})
function subTotal() {
    const priceOfItem1 = document.getElementById('iPhone11Price').innerText;
    const priceOfItem2 = document.getElementById('iPhone11CasePrice').innerText;
    const subTotal = parseInt(priceOfItem1) + parseInt(priceOfItem2);
    document.getElementById('Subtotal').innerText = subTotal;
}
function Total() {
    const priceOfItem1 = document.getElementById('iPhone11Price').innerText;
    const priceOfItem2 = document.getElementById('iPhone11CasePrice').innerText;
    const Total = parseInt(priceOfItem1) + parseInt(priceOfItem2);
    document.getElementById("Total").innerText = Total;
}
