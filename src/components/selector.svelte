<script lang="ts">
    import { onMount } from "svelte";
    let selectionOverlay : HTMLDivElement
    let isSelecting = false;
    let startX : number, startY : number;

    
    onMount(() =>  
    {

        document.addEventListener('mousedown', (e) => {
            isSelecting = true;
            startX = e.clientX;
            startY = e.clientY;
            selectionOverlay.style.display = 'block';
            selectionOverlay.style.left = startX + 'px';
            selectionOverlay.style.top = startY + 'px';
        });
    
        document.addEventListener('mousemove', (e) => {
            if (isSelecting) {
                const currentX = e.clientX;
                const currentY = e.clientY;
                const width = currentX - startX;
                const height = currentY - startY;
    
                selectionOverlay.style.width = width + 'px';
                selectionOverlay.style.height = height + 'px';
            }
        });
    
        document.addEventListener('mouseup', () => {
            isSelecting = false;
            selectionOverlay.style.display = 'none';
            selectionOverlay.style.width = '0';
            selectionOverlay.style.height = '0';
        });
    })

</script>
<div class="w-screen h-56">
    <div class="overlay" id="selectionOverlay" bind:this={selectionOverlay}></div>
</div>