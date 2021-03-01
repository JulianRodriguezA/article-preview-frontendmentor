const shareBtn = document.getElementById("share-btn")
const cardSocial = document.getElementById("card-social");
shareBtn.addEventListener('click', ()=>{
    cardSocial.classList.toggle("card-social--active")
    shareBtn.classList.toggle("card-sharebotton--active")
})