document.addEventListener("mousedown", (event) => {
   const element = event.target;
   if (Array.from(element.classList).indexOf("draggable") < 0) return;
   // Element is Draggble

   const x = element.getBoundingClientRect().left;
   const y = element.getBoundingClientRect().top;
   console.log({ x, y });
   element.style.position = "absolute";
   element.style.left = x + "px";
   element.style.top = y + "px";

   const shiftX = event.pageX - element.getBoundingClientRect().left;
   const shiftY = event.pageY - element.getBoundingClientRect().top;
   console.log({ shiftY, shiftX });
   const mouseMove = (event) => {
      const parent = element.parentNode;

      const x = -shiftX + event.pageX - parent.getBoundingClientRect().left;
      const y = -shiftY + event.pageY - parent.getBoundingClientRect().top;

      element.style.left = x + "px";
      element.style.top = y + "px";
   };

   const mouseUp = (event) => {
      // Cleanup
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
   };

   document.addEventListener("mousemove", mouseMove);
   document.addEventListener("mouseup", mouseUp);
});
