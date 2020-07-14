let keys = {};


document.addEventListener('keydown', (e) => {
  if (!(e.key in keys)) {
    return;
  }
  
  console.log(keys);
  console.log('detected key down');


})

document.addEventListener('keyup', (e) => {
  console.log('key up');
})

let hold = {
  add: function(key, time, action) {
    keys[key] = {
      time,
      action
    };
    console.log(keys);
  },
  remove: function() {
    console.log('testing remove');
  }
}



