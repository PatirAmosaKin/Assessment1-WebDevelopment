// Function to calculate the total cost
function calculateTotalCost() {
    // Get the cost per liter and the number of liters from the input fields
    let costPerLiter = parseFloat(document.getElementById("cost-per-liter").value);
    let litersPurchased = parseFloat(document.getElementById("liters-purchased").value);
    
    // Check if the inputs are valid numbers
    if (isNaN(costPerLiter) || isNaN(litersPurchased)) {
        alert("Please enter valid numbers for cost per liter and liters purchased.");
        return; // Exit the function if the inputs are invalid
    }

    // Calculate the total cost
    let totalCost = costPerLiter * litersPurchased;
    
    // Display the result
    document.getElementById("total-cost").textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}

// Add an event listener to the button to trigger calculation on click
document.getElementById("calculate-btn").addEventListener("click", calculateTotalCost);
