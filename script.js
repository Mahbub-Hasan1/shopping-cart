const iPhone11BlackPlusBtn = document.getElementById("iPhone11BlackPlusBtn");
iPhone11BlackPlusBtn.addEventListener("click", function(){
    const iPhone11BlackValue = document.getElementById("iPhone11BlackValue").value;
    const iPhone11BlackValueNumber = parseFloat(iPhone11BlackValue);
    const iPhoneValue = iPhone11BlackValueNumber + 1;

    document.getElementById("iPhone11BlackValue").value = iPhoneValue;
    
});