document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("add-accound").value
    const amount = document.getElementById("add-amount").value
    const pin = document.getElementById("add-pin").value
    const AvailableBalance = document.getElementById("Available-balance").innerText
    console.log(AvailableBalance)
    const totalNewAvailableBalance = parseInt(amount) + parseInt(AvailableBalance)

    document.getElementById("Available-balance").innerText = totalNewAvailableBalance
})


// toggling feature 

document.getElementById("add-button").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out button").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})