let keys = {};

let mappings = {
  'left': 'ArrowLeft',
  'right': 'ArrowRight',
  'up': 'ArrowUp',
  'down': 'ArrowDown',
  'space': ' '
}

document.addEventListener('keydown', (e) => {
  if (!(e.key in keys)) {
    return true;
  }
  
  // console.log(keys);
  
  let key = keys[e.key]; 
  
  if (!key.pressed) {
    key.pressed = true;
    key.action();

    key.interval = setInterval(() => {
      key.action();
    }, key.time)
  }
  return false;
})

document.addEventListener('keyup', (e) => {
  if (e.key in keys) {
    let key = keys[e.key];

    if (key.interval !== null) {
      clearInterval(key.interval);
      key.interval = null;
      key.pressed = false;
    }
  }
})

function convertMap(key) {
  if (key in mappings) {
    return mappings[key];
  } else {
    return key;
  }
}

let hold = {
  add: function(inputs, time, action) {
    inputs = inputs.split(" ").map(input => convertMap(input));
    console.log(inputs);
    for (key of inputs) {
      keys[key] = {
        time,
        action,
        interval: null,
        pressed: false
      };
    }
  },
  remove: function(key) {
    console.log("removed " + key);
    delete keys[key];
  }
}





