
const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];
function displayRamens(){
    const ramenDetails = document.getElementById('image-container');   

    ramens.forEach(ramen=>{
      const imgElement = document.createElement('img')
      imgElement.src = ramen.image;
      imgElement.alt = ramen.name;
      imgElement.dataset.id = ramen.id;
      imgElement.addEventListener('click', handleClick)
      ramenDetails.appendChild(imgElement)
    
    })
}
function handleClick(event){
    const ramenId = event.target.dataset.id
    const ramen = ramens.find(r => r.id == ramenId)
   
    const myImage = document.getElementById('ramen-place');
    myImage.src =ramen.image;
    myImage.alt =ramen.name;
    myImage.style.display ='block'


    document.getElementById('ramenName').textContent =  ramen.name;
    document.getElementById('ramenRestaurant').textContent = ramen.restaurant;
    document.getElementById('ramenRating').textContent = ramen.rating;
    document.getElementById('ramenComment').textContent = ramen.comment;

    
 }
function addSubmitListener(){
  const form = document.getElementById('ramen-form');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();


    const name = document.getElementById('ramen-name-input').value
    const restaurant = document.getElementById('ramen-restaurant-input').value
    const  rating = document.getElementById('ramen-rating-input').value
    const comment= document.getElementById('ramen-comment-input').value


    const newRamen ={
      name,
      restaurant,
      rating,
      comment,
      imageUrl
    }
    ramens.push(newRamen)

    form.reset();
    
    const ramenDetails = document.getElementById('ramen-menu')
    const imgElement = document.createElement('img')
    imgElement.src = newRamen.imageUrl
    imgElement.alt = newRamen.name
    imgElement.addEventListener('click', ()=> handleClick(newRamen))
    ramenDetails.appendChild(imgElement)
  })
}
function main(){
  displayRamens()

}
document.addEventListener('DOMContentLoaded', main)