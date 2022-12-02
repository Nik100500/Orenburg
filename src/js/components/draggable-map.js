
    var     image = document.getElementsByClassName('my-img')[0]
    if (image !== undefined) {
        var     imgCntnrs = document.getElementsByClassName('img-cntnr'),
        dragImgMouseStart = {},
        dragImgTouchStart = {},
                 lastDiff = {x: 0, y: 0},
               initialPos = image.getBoundingClientRect(),
          //  currentPos = {x: -initialPos.width/2, y:0};
               currentPos = {x: 0, y:0};
                    scale = 1
        
        
        /* document.addEventListener("DOMContentLoaded", () => {
            scale = 1920 / window.innerWidth
        }); */
        
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
        
        function changeScale() {
        // scale == 2 ? scale = 1 : scale = 2;
        scale = scale*2;
        lastDiff.x = lastDiff.x*2
        lastDiff.y = lastDiff.y*2
        console.log(lastDiff)
        image.style.transform = "scale(" + scale + ") " + "translate(" + lastDiff.x/scale + "px," + lastDiff.y/scale + "px)";
        document.querySelector(".content-orenburg__button").classList.add("active");
        setTimeout(() => {
        document.querySelector(".content-orenburg__button").classList.add("hidden");
        }, 500);
        }
        
        document.getElementById("scale-map").addEventListener('click', changeScale)
        
        function mousemoveDragImg(e) {
        e.preventDefault();
        lastDiff.x = e.clientX - dragImgMouseStart.x;
        lastDiff.y = e.clientY - dragImgMouseStart.y;
        requestAnimationFrame(function(){
        image.style.transform = "scale(" + scale + ") " + "translate(" + (currentPos.x + lastDiff.x)/scale + "px," + (currentPos.y + lastDiff.y)/scale + "px)";
        });
        }
        function touchmoveDragImg(e) {
        lastDiff.x = e.changedTouches[0].clientX - dragImgTouchStart.x;
        lastDiff.y = e.changedTouches[0].clientY - dragImgTouchStart.y;
        requestAnimationFrame(function(){
        image.style.transform = "scale(" + scale + ") " + "translate(" + (currentPos.x + lastDiff.x)/scale + "px," + (currentPos.y + lastDiff.y)/scale + "px)";
        });
        }
        
        function changeStartPosition() {
            lastDiff.x = lastDiff.x;
            lastDiff.y = lastDiff.y + (1080 - window.innerHeight);
            console.log(lastDiff)
            scale = 1920 / window.innerWidth
            image.style.transform = "scale(" + scale + ") " + "translate(" + (currentPos.x + lastDiff.x)/scale + "px," + (currentPos.y + lastDiff.y)/scale + "px)";
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
    