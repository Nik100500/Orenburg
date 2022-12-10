
    var     image = document.getElementsByClassName('my-img')[0]
    if (image !== undefined) {
        var     imgCntnrs = document.getElementsByClassName('img-cntnr'),
        dragImgMouseStart = {},
        dragImgTouchStart = {},
                 lastDiff = {x: 0, y: 0},
               initialPos = image.getBoundingClientRect(),
               currentPos = {x: 0, y:0},
                    scale = 1,
                plusWidth = 0,
                imgHeight = 1080,
              windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
             windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        function mousedownDragImg(e) {
        e.preventDefault();
        dragImgMouseStart.x = e.clientX;
        dragImgMouseStart.y = e.clientY;
            currentPos.x += lastDiff.x;
            currentPos.y += lastDiff.y;
                 lastDiff = {x: 0, y: 0};
        window.addEventListener('mousemove', mousemoveDragImg);
        window.addEventListener('mouseup', mouseupDragImg);
        }
        
        function touchstartDragImg(e) {
        dragImgTouchStart.x = e.changedTouches[0].clientX;
        dragImgTouchStart.y = e.changedTouches[0].clientY;
            currentPos.x += lastDiff.x;
            currentPos.y += lastDiff.y;
                  lastDiff = {x: 0, y: 0};
        window.addEventListener('touchmove', touchmoveDragImg);
        window.addEventListener('touchend', touchendDragImg);
        document.body.classList.add('overflow');
        }
        
        // function changeScale() {
        // // scale == 2 ? scale = 1 : scale = 2;
        // scale = scale*2;
        // lastDiff.x = lastDiff.x
        // lastDiff.y = lastDiff.y
        // image.style.transform = "scale(" + scale + ") " + "translate(" + lastDiff.x/scale + "px," + lastDiff.y/scale + "px)";
        // var orenburgButton = document.querySelector(".content-orenburg__button");
        // var orskButton = document.querySelector(".content-orsk__button");
        // orenburgButton !== null ? orenburgButton.classList.add("active") : orskButton !== null ? orskButton.classList.add("active") : ""
        // setTimeout(() => {
        //     orenburgButton !== null ? orenburgButton.classList.add("hidden") : orskButton !== null ? orskButton.classList.add("hidden") : ""
        // }, 500);
        // }
        
        // document.getElementById("scale-map").addEventListener('click', changeScale)
        
        function mousemoveDragImg(e) {
        e.preventDefault();
        // lastDiff.x = e.clientX - dragImgMouseStart.x;
        // lastDiff.y = e.clientY - dragImgMouseStart.y;
        
        if ((currentPos.x + (e.clientX - dragImgMouseStart.x)) < (1920 - windowWidth)/2 + plusWidth && (currentPos.x + (e.clientX - dragImgMouseStart.x)) > (-1920 + windowWidth)/2) {
            lastDiff.x = e.clientX - dragImgMouseStart.x;
            console.log(windowWidth)
        }
        if ((currentPos.y + (e.clientY - dragImgMouseStart.y)) < 0 && (currentPos.y + (e.clientY - dragImgMouseStart.y)) > (-imgHeight + windowHeight)) {
            lastDiff.y = e.clientY - dragImgMouseStart.y;
        }
        requestAnimationFrame(function(){
        image.style.transform = "scale(" + scale + ") " + "translate(" + (currentPos.x + lastDiff.x)/scale + "px," + (currentPos.y + lastDiff.y)/scale + "px)";
        });
        }
        function touchmoveDragImg(e) {
        if ((currentPos.x + (e.changedTouches[0].clientX - dragImgTouchStart.x)) < (1920 - windowWidth)/2 + plusWidth && (currentPos.x + (e.changedTouches[0].clientX - dragImgTouchStart.x)) > (-1920 + windowWidth)/2) {
            lastDiff.x = e.changedTouches[0].clientX - dragImgTouchStart.x;
            console.log(windowWidth)
        }
        if ((currentPos.y + (e.changedTouches[0].clientY - dragImgTouchStart.y)) < 0 && (currentPos.y + (e.changedTouches[0].clientY - dragImgTouchStart.y)) > (-imgHeight + windowHeight)) {
            lastDiff.y = e.changedTouches[0].clientY - dragImgTouchStart.y;
        }
        
            requestAnimationFrame(function(){
            image.style.transform = "scale(" + scale + ") " + "translate(" + (currentPos.x + lastDiff.x)/scale + "px," + (currentPos.y + lastDiff.y)/scale + "px)";
            });
        }
        
        function changeStartPosition() {
            scale = 1920 / windowWidth
            image.style.transform = "scale(" + scale + ") " + "translate(" + (currentPos.x + lastDiff.x)/scale + "px," + (currentPos.y + lastDiff.y)/scale + "px)";
            windowWidth > 950 ? plusWidth = 400 : ''
        }
        
        function mouseupDragImg(e) {
        e.preventDefault();
        window.removeEventListener('mousemove', mousemoveDragImg);
        window.removeEventListener('mouseup', mouseupDragImg);
        }
        function touchendDragImg() {
        window.removeEventListener('touchmove', touchmoveDragImg);
        window.removeEventListener('touchend', touchendDragImg);
        document.body.classList.remove('overflow');
        }
        
        image.addEventListener('mousedown', mousedownDragImg);
        image.addEventListener('touchstart', touchstartDragImg);
        
        document.onload = changeStartPosition();
        
    }
    