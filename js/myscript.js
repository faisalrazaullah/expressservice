document.getElementById('bookingForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const responseMessage = document.getElementById('responseMessage');

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                access_key: 'e813d9be-441a-473c-be11-9b1c1bcf6266', // Replace with your actual Web3Forms access key
                ...Object.fromEntries(formData)
            })
        });

        const result = await response.json();

        if (result.success) {
            responseMessage.textContent = 'Thank you for your booking, We will shortly fullfil your request';
            responseMessage.style.color = '#28a745';
            this.reset();
        } else {
            responseMessage.textContent = 'There was an error with your submission. Please try again.';
            responseMessage.style.color = '#dc3545';
        }
    } catch (error) {
        responseMessage.textContent = 'There was an error with your submission. Please try again.';
        responseMessage.style.color = '#dc3545';
    }
});
