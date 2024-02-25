function viewBill(button) {
    // This function will trigger when the 'View' button is clicked.
    // You might want to display the bill details or change the status.
    const row = button.parentElement.parentElement;
    const statusCell = row.getElementsByClassName('status')[0];
    
    // For demonstration, let's just alert the status
    alert('The status of this bill is: ' + statusCell.textContent);
    
    // If you want to mark it as paid:
    // statusCell.textContent = 'Paid';
    // statusCell.style.color = 'green';
}
