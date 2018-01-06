document.addEventListener("DOMContentLoaded", () => {
    const rightArrow = document.querySelector("#main-slider .slider-arrow-right");
    
    rightArrow.addEventListener("click", () => {
    
    });
    
    const thumbnails = document.querySelectorAll("#main-slider .thumbnail");
    
    for(const thumbnail of thumbnails) {
        thumbnail.addEventListener("click", handleThumbnailClick);
    }
    
    function handleThumbnailClick(e) {
        selectThumbnail(e.currentTarget);       
    }
    
    function selectThumbnail(thumbnail) {
        const selectedThumbnail = document.querySelector("#main-slider .thumbnail.selected");
        if(selectedThumbnail != null) {
            selectedThumbnail.classList.remove("selected");
        }
        
        // 2.
        thumbnail.classList.add("selected");
        
        // 3.
        const mainSliderImage = document.querySelector("#main-slider .main-slider-image");
        const bigImagePath = thumbnail.getAttribute("data-large-image-src");
        mainSliderImage.src = bigImagePath;
    }
});
