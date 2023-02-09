// assign wheelzoom
wheelzoom(document.querySelectorAll('#home'));

// assign and set the zoom increment percentage
wheelzoom(document.querySelectorAll('#home'), {zoom: 0.05});

// set a maximum zoom amount
wheelzoom(document.querySelectorAll('#home'), {maxZoom: 2});

// zooming out can be triggered by calling 'wheelzoom.reset'
document.querySelector('#home').dispatchEvent(new CustomEvent('wheelzoom.reset'));

// wheelzoom can be removed from an element by calling 'wheelzoom.destroy'
document.querySelector('#home').dispatchEvent(new CustomEvent('wheelzoom.destroy'));