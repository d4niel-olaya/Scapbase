

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.selectionBox) {
      // Aquí puedes hacer algo con la información de la selección, por ejemplo, almacenarla o enviarla a otro servicio.
      console.log('Selección en fondo:', request.selectionBox);
    }
  });
  