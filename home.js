document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("add-accound").value
    const amount = document.getElementById("add-amount").value
    const pin = document.getElementById("add-pin").value
    const AvailableBalance = document.getElementById("Available-balance").innerText
    console.log(AvailableBalance)
    const totalNewAvailableBalance = amount + AvailableBalance

    document.getElementById("Available-balance").innerText = totalNewAvailableBalance
})