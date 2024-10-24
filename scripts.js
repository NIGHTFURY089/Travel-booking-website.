function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}
function generateSurprise() {
    const destinations = ['Paris', 'New York', 'Tokyo', 'London', 'Rome'];
    const transports = ['Flight', 'Train', 'Car', 'Bus', 'Boat'];
    const accommodations = ['Hotel', 'Hostel', 'Resort', 'Apartment', 'Villa'];

    // Randomly pick one from each
    const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
    const randomTransport = transports[Math.floor(Math.random() * transports.length)];
    const randomAccommodation = accommodations[Math.floor(Math.random() * accommodations.length)];

    // Display the random options
    document.getElementById('destination').innerHTML = `Destination: ${randomDestination}`;
    document.getElementById('transport').innerHTML = `Mode of Transport: ${randomTransport}`;
    document.getElementById('stay').innerHTML = `Accommodation: ${randomAccommodation}`;
}
function generateSurprise() {
    const destinations = ['Paris', 'New York', 'Tokyo', 'London', 'Rome'];
    const transports = ['Flight', 'Train', 'Car', 'Bus', 'Boat'];
    const accommodations = ['Hotel', 'Hostel', 'Resort', 'Apartment', 'Villa'];

    const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
    const randomTransport = transports[Math.floor(Math.random() * transports.length)];
    const randomAccommodation = accommodations[Math.floor(Math.random() * accommodations.length)];

    document.getElementById('destination').innerHTML = `Destination: ${randomDestination}`;
    document.getElementById('transport').innerHTML = `Mode of Transport: ${randomTransport}`;
    document.getElementById('stay').innerHTML = `Accommodation: ${randomAccommodation}`;
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const form = document.getElementById('booking-form');
    const formData = new FormData(form);
    const fullName = formData.get('full-name');
    const email = formData.get('email');
    const destination = formData.get('destination');
    const travelDate = formData.get('travel-date');
    const numberOfPeople = formData.get('number-of-people');
    const specialRequests = formData.get('special-requests');

    // Validate inputs (you can add more validation here)
    if (!fullName || !email || !destination || !travelDate || !numberOfPeople) {
        alert('Please fill in all fields.');
        return;
    }

    // Show success message
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `Thank you, ${fullName}! Your booking for ${destination} on ${travelDate} for ${numberOfPeople} people has been received.`;
    messageDiv.style.color = 'green';

    // Optionally clear the form
    form.reset();
}
