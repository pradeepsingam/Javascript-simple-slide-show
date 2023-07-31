(function () {

    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#previous');
    var img = document.querySelector('img');
    var currentImg = 0;
    var myimage = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']

    nextBtn.addEventListener('click', function () {
        currentImg++;
        if (currentImg > myimage.length - 1) { currentImg = 0 }
        img.src = myimage[currentImg]
        console.log(currentImg)
    })

    prevBtn.addEventListener('click', function () {
        if (currentImg == 0) { currentImg = myimage.length - 1 }
        currentImg--;
        img.src = myimage[currentImg]
        console.log(currentImg)
    })

})()