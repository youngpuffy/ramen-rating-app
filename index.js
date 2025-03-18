const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];

// Function to display existing ramen dishes
function displayRamens() {
  const ramenDetails = document.getElementById('image-container');   

  ramens.forEach(ramen => {
    const imgElement = document.createElement('img');
    imgElement.src = ramen.image;
    imgElement.alt = ramen.name;
    imgElement.dataset.id = ramen.id;
    imgElement.addEventListener('click', handleClick);
    ramenDetails.appendChild(imgElement);
  });
}

// Handle click on ramen image to display details
function handleClick(event) {
  const ramenId = event.target.dataset.id;
  const ramen = ramens.find(r => r.id == ramenId);

  const myImage = document.getElementById('ramen-place');
  myImage.src = ramen.image;
  myImage.alt = ramen.name;
  
  // Fallback image if the ramen image is missing or broken
  myImage.onerror = function() {
    myImage.src = 'default.jpg'; // Use a default image
  };
  
  myImage.style.display = 'block';

  document.getElementById('ramenName').textContent = ramen.name;
  document.getElementById('ramenRestaurant').textContent = ramen.restaurant;
  document.getElementById('ramenRating').textContent = ramen.rating;
  document.getElementById('ramenComment').textContent = ramen.comment;
}

// Add submit listener for adding new ramen
function addSubmitListener() {
  const form = document.getElementById('ramen-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Access form values using the correct IDs from the HTML
    const name = document.getElementById('ramen-name-input').value.trim();
    const restaurant = document.getElementById('ramen-restaurant-input').value.trim();
    const image = document.getElementById('image-Url-input').value.trim();
    const rating = Number(document.getElementById('ramen-rating-input').value);
    const comment = document.getElementById('ramen-comment-input').value.trim();

    // Check if all fields are filled out correctly
    if (!name || !restaurant || !image || isNaN(rating) || rating < 1 || rating > 5) {
      alert("Please fill in all fields correctly.");
      return; // Stop the function here if validation fails
    }

    // Create new ramen object
    const newRamen = {
      id: ramens.length + 1,
      name: name,
      restaurant: restaurant,
      image: image,
      rating: rating,
      comment: comment
    };

    // Add the new ramen to the array
    ramens.push(newRamen);

    // Create the image element for the new ramen and add it to the page
    const imgElement = document.createElement('img');
    imgElement.src = newRamen.image;
    imgElement.alt = newRamen.name;
    imgElement.dataset.id = newRamen.id;
    imgElement.addEventListener('click', handleClick); // Add click event to display details
    document.getElementById('image-container').appendChild(imgElement);

    // Reset the form after submission
    form.reset();
  });
}

// Main function to initialize the app
function main() {
  displayRamens(); // Display existing ramen dishes
  addSubmitListener(); // Add the form submission listener
}

// Wait for the DOM to load before running the main function
document.addEventListener('DOMContentLoaded', main);
