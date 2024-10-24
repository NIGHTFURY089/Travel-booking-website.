document.getElementById('get-surprise-btn').addEventListener('click', generateSurprise);

function generateSurprise() {
    const destinations = ['Paris', 'New York', 'Tokyo', 'London', 'Rome'];
    const transports = ['Flight', 'Train', 'Car', 'Bus', 'Boat'];
    const accommodations = ['Hotel', 'Hostel', 'Resort', 'Apartment', 'Villa'];

    const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
    const randomTransport = transports[Math.floor(Math.random() * transports.length)];
    const randomAccommodation = accommodations[Math.floor(Math.random() * accommodations.length)];

    document.getElementById('surprise-result').innerHTML = `
        <span>Destination:</span> ${randomDestination} <br>
        <span>Transport:</span> ${randomTransport} <br>
        <span>Accommodation:</span> ${randomAccommodation}
    `;
}
