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
