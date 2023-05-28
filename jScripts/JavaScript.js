
let slideIndex = 1;
let bigImages, smallImages;

function opengallery() {
    bigImages = document.getElementsByClassName("pilatesImages");
    smallImages = document.getElementsByClassName("showSmallImage");

    for (let i = 0; i < bigImages.length; i++) {
        bigImages[i].style.display = "none";
    }
    //for (let i = 0; i < smallImages.length; i++) {
    //    smallImages[i].className = smallImages[i].className.replace(" active", "");
    //}
    showImage(slideIndex);
}

// מקדם את המיקום של מספר התמונה בשימוש בחצים // 
function changeImage(n) {
    showImage(slideIndex + n);
}

//מעדכן את מספר התמונה הרלוונטית בזמן לחיצה עליה//
function currentSlide(n) {
    showImage(n);
}


function showImage(n) {
    let captionText = document.getElementById("caption");

    //מאפסים את התמונה הנוכחית שמוצגת נאן הופך אותה ללא נראת ואאקטיב 
    bigImages[slideIndex - 1].style.display = "none";
    smallImages[slideIndex - 1].className = smallImages[slideIndex - 1].className.replace(" active", "");

    slideIndex = n;
    //מאפס אם הגענו לקצה//
    if (slideIndex > bigImages.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = bigImages.length }

    bigImages[slideIndex - 1].style.display = "block";
    smallImages[slideIndex - 1].className += " active";
    captionText.innerHTML = smallImages[slideIndex - 1].alt;
}
