let keys = {};

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

let hold = {
  add: function(key, time, action) {
    keys[key] = {
      time,
      action,
      interval: null,
      pressed: false
    };
    console.log(keys);
  },
  remove: function() {
    console.log('testing remove');
  }
}



