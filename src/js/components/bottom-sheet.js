var sh = document.getElementsByClassName("open-sheet");
var i;

for (i = 0; i < sh.length; i++) {
  sh[i].addEventListener("click", function () {

    for (let j = 0; j < sh.length; j++) {
      sh[j].nextElementSibling.setAttribute("aria-hidden", true)
      // document.body.classList.remove("overflow")
    }
    document.getElementsByTagName('html')[0].classList.remove("overflow")

    var sheet = this.nextElementSibling;
    const sheetContents = sheet.querySelector(".contents")
    const draggableArea = sheet.querySelector(".draggable-area")
    let sheetHeight
    const setSheetHeight = (value) => {
      if (value === 'max-content') {
        const maxContentHeight = sheetContents.querySelector(".sheet")
        sheetHeight = (maxContentHeight.offsetHeight + 108) / (window.innerHeight) * 100
        // console.log(window.innerHeight + ': windowHeight')
        // console.log(sheetHeight + ': sheetHeight')
        // console.log(sheetContents.offsetHeight + 108 + ': sheetContents')
        sheetContents.style.height = `${sheetHeight}%`
      } else {
        sheetHeight = Math.max(0, Math.min(100, value))
        sheetContents.style.height = `${sheetHeight}%`
      }
      if (sheetHeight === 100) {
        sheetContents.classList.add("fullscreen")
      } else {
        sheetContents.classList.remove("fullscreen")
      }
    }

    const setIsSheetShown = (value) => {
      sheet.setAttribute("aria-hidden", String(!value))
    }



    // setSheetHeight(Math.min(50, 720 / window.innerHeight * 100))
    setSheetHeight('max-content')
    setIsSheetShown(true)
    document.getElementsByTagName('html')[0].classList.add("overflow")
    // document.body.classList.add("overflow")
    
    sheet.querySelector(".close-sheet").addEventListener("click", () => {
      setIsSheetShown(false)
      document.getElementsByTagName('html')[0].classList.remove("overflow")
      // document.body.classList.remove("overflow")
    })

    sheet.querySelector(".overlay").addEventListener("click", () => {
      setIsSheetShown(false)
      document.getElementsByTagName('html')[0].classList.remove("overflow")
      // document.body.classList.remove("overflow")
    })

    const touchPosition = (event) =>
      event.touches ? event.touches[0] : event

    let dragPosition

    const onDragStart = (event) => {
      dragPosition = touchPosition(event).pageY
      sheetContents.classList.add("not-selectable")
      draggableArea.style.cursor = document.body.style.cursor = "grabbing"
    }

    const onDragMove = (event) => {
      if (dragPosition === undefined) return

      const y = touchPosition(event).pageY
      const deltaY = dragPosition - y
      const deltaHeight = deltaY / window.innerHeight * 100

      setSheetHeight(sheetHeight + deltaHeight)
      dragPosition = y
    }

    const onDragEnd = () => {
      dragPosition = undefined
      sheetContents.classList.remove("not-selectable")
      draggableArea.style.cursor = document.body.style.cursor = ""

      if (sheetHeight < 25) {
        setIsSheetShown(false)
        document.getElementsByTagName('html')[0].classList.remove("overflow")
        // document.body.classList.remove("overflow")
      } else if (sheetHeight > 75) {
        setSheetHeight(95)
      } else {
        setSheetHeight('max-content')
      }
    }

    draggableArea.addEventListener("mousedown", onDragStart)
    draggableArea.addEventListener("touchstart", onDragStart)

    window.addEventListener("mousemove", onDragMove)
    window.addEventListener("touchmove", onDragMove)

    window.addEventListener("mouseup", onDragEnd)
    window.addEventListener("touchend", onDragEnd)

  });
}