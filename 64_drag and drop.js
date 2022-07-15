console.log("this is drag and drop utility in js");
// 1. defined body, imgbox, and whitebox classes in css

// 2.
const imgBox = document.querySelector(".imgBox");
// const whiteBoxes = document.querySelectorAll('.whiteBox')
const whiteBoxes = document.getElementsByClassName("whiteBox");

// 3. drag start and drag end events defined and console logs
//event listeners for draggable element imgbox
imgBox.addEventListener("dragstart", (e) => {
  console.log("IMG: dragstart");
  //will print when clicked on the element and hold.
  //here cannot apply this.classname += ' holdBorder'; because 'this' is a window object
  //   5. 
  e.target.className += " holdBorder";
  //this means on the element to which this dragstart event is applied, we are adding the class hold to it which is defined in css. hold defined to add red border to image when dragging it. space given in syntax because we have to separate different classes on the element through space
  setTimeout(() => {
      //now when dragging the image it kind of copies itself and its first instance still remains from where it copied. we want to drag the image so hiding the first instance
      //   6. hide class defined and included
      e.target.className = " hide";
    //when testing this, it immediately hides the image therefore cannot drag it. hence moving it in a timeout with 0 meaning execute it at last.
  }, 0);
});
imgBox.addEventListener("dragend", (e) => {
  console.log("IMG: dragend");
  //will print when let go of image
  //now after defining for-of loop when we drop img on an element we want to add img box as a class so that the red border stops displaying
  //we have to use this because we have given timeout of hide event so if we do not use this then the img will disappear.
//   9.
  e.target.className = "imgBox";
  // e.target.className = "imgBox";
  //then go to drop event and append imgbox so that image sticks to the element on which it is added
});

// 4. all four events defined
// 7. console logs written
//now event listeners for element on which image is to be dragged
for (whiteBox of whiteBoxes) {
  //to all elements of class whitebox
  //all 4 events will be added to each whitebox
  whiteBox.addEventListener("dragover", (e) => {
    console.log("BOX: dragover");
    // 8.
    //it is triggered when we drag the source element about any element
    //now cannot drop image by default onto some element hence has to override default behaviour
    e.preventDefault();
    //if prevent default is not used then cannot drop image onto any element
  });
  whiteBox.addEventListener("dragenter", (e) => {
    console.log("BOX: dragenter");
    // 11.
    //extra things to do styling:
    e.target.className += " dashed";
    //but then we also need to hide grey on the element from which we picked the element
    //for that when we drag the image out from an element drag leave event is fired
  });
  whiteBox.addEventListener("dragleave", (e) => {
    console.log("BOX: dragleave");
    // 12.
    //to remove the dashed when dropping img to different element
    //so here dashed is removed from previous element and whitebox is replaced as class
    e.target.className = "whiteBox";
  });
  whiteBox.addEventListener("drop", (e) => {
    console.log("BOX: drop");
    // 10.
    //append imgbox so that img displays in the element in which drop event is triggered
    // e.target.append(imgBox);
    e.target.append(imgBox);
  });
}
