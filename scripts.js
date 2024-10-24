function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('booking-form');
    const formData = new FormData(form);
    const fullName = formData.get('full-name');
    const destination = formData.get('destination');
    const travelDate = formData.get('travel-date');
    const numberOfPeople = formData.get('number-of-people');

    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `Thank you, ${fullName}! Your booking to ${destination} on ${travelDate} for ${numberOfPeople} people has been received.`;
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
