<!-- App.svelte -->
<script lang="ts">
    import type { IBox, IDimension } from "../base/types";
    let selecting = false;
    let selectionBox  : IBox= { top:100, width:100, height:100, left:0}; 
    let startPosition : IDimension = {x:0, y:0};
    let endPosition  : IDimension = {x:0, y:0};
  
    function handleMouseDown(event: MouseEvent) {
      selecting = true;
      startPosition = { x: event.clientX, y: event.clientY };
    }
  
    function handleMouseMove(event:MouseEvent) {
      if (selecting) {
        endPosition = { x: event.clientX, y: event.clientY };
        selectionBox = {
          top: Math.min(startPosition.y, endPosition.y),
          left: Math.min(startPosition.x, endPosition.x),
          width: Math.abs(startPosition.x - endPosition.x),
          height: Math.abs(startPosition.y - endPosition.y),
        };
      }
    }
  
    function handleMouseUp() {
      selecting = false;
      // Aquí puedes hacer algo con la selección, por ejemplo, enviarla a un script de fondo.
      console.log('Selección:', selectionBox);
    }
  </script>
  
  <style>
    .selection-box {
      position: absolute;
      border: 2px dashed #007bff;
      pointer-events: none;
    }
  </style>
  
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:mousedown={handleMouseDown} on:mousemove={handleMouseMove} on:mouseup={handleMouseUp}>
    <div
      class="selection-box"
      style="top: {selectionBox.top}px; left: {selectionBox.left}px; width: {selectionBox.width}px; height: {selectionBox.height}px;"
    ></div>
  </div>
  