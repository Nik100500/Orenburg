// const $ = document.querySelector.bind(document)

// const openSheetButton = $("#open-sheet")
// const sheet = $("#sheet")
// const sheetContents = sheet.querySelector(".contents")
// const draggableArea = sheet.querySelector(".draggable-area")

// let sheetHeight // in vh

// const setSheetHeight = (value) => {
//   sheetHeight = Math.max(0, Math.min(100, value))
//   sheetContents.style.height = `${sheetHeight}vh`

//   if (sheetHeight === 100) {
//     sheetContents.classList.add("fullscreen")
//   } else {
//     sheetContents.classList.remove("fullscreen")
//   }
// }

// const setIsSheetShown = (value) => {
//   sheet.setAttribute("aria-hidden", String(!value))
// }

// // Open the sheet when clicking the 'open sheet' button
// openSheetButton.addEventListener("click", () => {
//   setSheetHeight(Math.min(50, 720 / window.innerHeight * 100))
//   setIsSheetShown(true)
//   document.body.classList.toggle("overflow")
// })

// // Hide the sheet when clicking the 'close' button
// sheet.querySelector(".close-sheet").addEventListener("click", () => {
//   setIsSheetShown(false)
//   document.body.classList.toggle("overflow")
// })

// // Hide the sheet when clicking the background
// sheet.querySelector(".overlay").addEventListener("click", () => {
//   setIsSheetShown(false)
//   document.body.classList.toggle("overflow")
// })

// const touchPosition = (event) =>
//   event.touches ? event.touches[0] : event

// let dragPosition

// const onDragStart = (event) => {
//   dragPosition = touchPosition(event).pageY
//   sheetContents.classList.add("not-selectable")
//   draggableArea.style.cursor = document.body.style.cursor = "grabbing"
// }

// const onDragMove = (event) => {
//   if (dragPosition === undefined) return

//   const y = touchPosition(event).pageY
//   const deltaY = dragPosition - y
//   const deltaHeight = deltaY / window.innerHeight * 100

//   setSheetHeight(sheetHeight + deltaHeight)
//   dragPosition = y
// }

// const onDragEnd = () => {
//   dragPosition = undefined
//   sheetContents.classList.remove("not-selectable")
//   draggableArea.style.cursor = document.body.style.cursor = ""

//   if (sheetHeight < 25) {
//     setIsSheetShown(false)
//     document.body.classList.toggle("overflow")
//   } else if (sheetHeight > 75) {
//     setSheetHeight(100)
//   } else {
//     setSheetHeight(50)
//   }
// }

// draggableArea.addEventListener("mousedown", onDragStart)
// draggableArea.addEventListener("touchstart", onDragStart)

// window.addEventListener("mousemove", onDragMove)
// window.addEventListener("touchmove", onDragMove)

// window.addEventListener("mouseup", onDragEnd)
// window.addEventListener("touchend", onDragEnd)

var sh = document.getElementsByClassName("open-sheet");
var i;

for (i = 0; i < sh.length; i++) {
  sh[i].addEventListener("click", function () {
    
    // this.classList.toggle("active");

    var sheet = this.nextElementSibling;
    console.log(sheet)
    const sheetContents = sheet.querySelector(".contents")
    const draggableArea = sheet.querySelector(".draggable-area")
    let sheetHeight
    /* if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } */
    const setSheetHeight = (value) => {
      sheetHeight = Math.max(0, Math.min(100, value))
      sheetContents.style.height = `${sheetHeight}vh`

      if (sheetHeight === 100) {
        sheetContents.classList.add("fullscreen")
      } else {
        sheetContents.classList.remove("fullscreen")
      }
    }

    const setIsSheetShown = (value) => {
      sheet.setAttribute("aria-hidden", String(!value))
    }

    setSheetHeight(Math.min(50, 720 / window.innerHeight * 100))
    setIsSheetShown(true)
    document.body.classList.add("overflow")

    // Open the sheet when clicking the 'open sheet' button
    /* openSheetButton.addEventListener("click", () => {
      setSheetHeight(Math.min(50, 720 / window.innerHeight * 100))
      setIsSheetShown(true)
      document.body.classList.toggle("overflow")
    }) */

    // Hide the sheet when clicking the 'close' button
    sheet.querySelector(".close-sheet").addEventListener("click", () => {
      setIsSheetShown(false)
      document.body.classList.remove("overflow")
    })

    // Hide the sheet when clicking the background
    sheet.querySelector(".overlay").addEventListener("click", () => {
      setIsSheetShown(false)
      document.body.classList.remove("overflow")
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
        document.body.classList.remove("overflow")
      } else if (sheetHeight > 75) {
        setSheetHeight(100)
      } else {
        setSheetHeight(50)
      }
    }

    draggableArea.addEventListener("mousedown", onDragStart)
    draggableArea.addEventListener("touchstart", onDragStart)

    window.addEventListener("mousemove", onDragMove)
    window.addEventListener("touchmove", onDragMove)

    window.addEventListener("mouseup", onDragEnd)
    window.addEventListener("touchend", onDragEnd)

    var sh = document.getElementsByClassName("open-sheet");
    var i;

  });
  const $ = document.querySelector.bind(document)

    const openSheetButton = $("#open-sheet")
    const sheet = $("#sheet")
    const sheetContents = sheet.querySelector(".contents")
    const draggableArea = sheet.querySelector(".draggable-area")

    let sheetHeight // in vh

    const setSheetHeight = (value) => {
      sheetHeight = Math.max(0, Math.min(100, value))
      sheetContents.style.height = `${sheetHeight}vh`

      if (sheetHeight === 100) {
        sheetContents.classList.add("fullscreen")
      } else {
        sheetContents.classList.remove("fullscreen")
      }
    }

    const setIsSheetShown = (value) => {
      sheet.setAttribute("aria-hidden", String(!value))
    }

    // Open the sheet when clicking the 'open sheet' button
    openSheetButton.addEventListener("click", () => {
      setSheetHeight(Math.min(50, 720 / window.innerHeight * 100))
      setIsSheetShown(true)
      document.body.classList.toggle("overflow")
    })

    // Hide the sheet when clicking the 'close' button
    sheet.querySelector(".close-sheet").addEventListener("click", () => {
      setIsSheetShown(false)
      document.body.classList.toggle("overflow")
    })

    // Hide the sheet when clicking the background
    sheet.querySelector(".overlay").addEventListener("click", () => {
      setIsSheetShown(false)
      document.body.classList.toggle("overflow")
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
        document.body.classList.toggle("overflow")
      } else if (sheetHeight > 75) {
        setSheetHeight(100)
      } else {
        setSheetHeight(50)
      }
    }

    draggableArea.addEventListener("mousedown", onDragStart)
    draggableArea.addEventListener("touchstart", onDragStart)

    window.addEventListener("mousemove", onDragMove)
    window.addEventListener("touchmove", onDragMove)

    window.addEventListener("mouseup", onDragEnd)
    window.addEventListener("touchend", onDragEnd)
}

// const $ = document.querySelector.bind(document)

// const openSheetButton = $("#open-sheet")
// const sheet = $("#sheet")
// const sheetContents = sheet.querySelector(".contents")
// const draggableArea = sheet.querySelector(".draggable-area")

// let sheetHeight // in vh

// const setSheetHeight = (value) => {
//   sheetHeight = Math.max(0, Math.min(100, value))
//   sheetContents.style.height = `${sheetHeight}vh`

//   if (sheetHeight === 100) {
//     sheetContents.classList.add("fullscreen")
//   } else {
//     sheetContents.classList.remove("fullscreen")
//   }
// }

// const setIsSheetShown = (value) => {
//   sheet.setAttribute("aria-hidden", String(!value))
// }

// // Open the sheet when clicking the 'open sheet' button
// openSheetButton.addEventListener("click", () => {
//   setSheetHeight(Math.min(50, 720 / window.innerHeight * 100))
//   setIsSheetShown(true)
//   document.body.classList.toggle("overflow")
// })

// // Hide the sheet when clicking the 'close' button
// sheet.querySelector(".close-sheet").addEventListener("click", () => {
//   setIsSheetShown(false)
//   document.body.classList.toggle("overflow")
// })

// // Hide the sheet when clicking the background
// sheet.querySelector(".overlay").addEventListener("click", () => {
//   setIsSheetShown(false)
//   document.body.classList.toggle("overflow")
// })

// const touchPosition = (event) =>
//   event.touches ? event.touches[0] : event

// let dragPosition

// const onDragStart = (event) => {
//   dragPosition = touchPosition(event).pageY
//   sheetContents.classList.add("not-selectable")
//   draggableArea.style.cursor = document.body.style.cursor = "grabbing"
// }

// const onDragMove = (event) => {
//   if (dragPosition === undefined) return

//   const y = touchPosition(event).pageY
//   const deltaY = dragPosition - y
//   const deltaHeight = deltaY / window.innerHeight * 100

//   setSheetHeight(sheetHeight + deltaHeight)
//   dragPosition = y
// }

// const onDragEnd = () => {
//   dragPosition = undefined
//   sheetContents.classList.remove("not-selectable")
//   draggableArea.style.cursor = document.body.style.cursor = ""

//   if (sheetHeight < 25) {
//     setIsSheetShown(false)
//     document.body.classList.toggle("overflow")
//   } else if (sheetHeight > 75) {
//     setSheetHeight(100)
//   } else {
//     setSheetHeight(50)
//   }
// }

// draggableArea.addEventListener("mousedown", onDragStart)
// draggableArea.addEventListener("touchstart", onDragStart)

// window.addEventListener("mousemove", onDragMove)
// window.addEventListener("touchmove", onDragMove)

// window.addEventListener("mouseup", onDragEnd)
// window.addEventListener("touchend", onDragEnd)
