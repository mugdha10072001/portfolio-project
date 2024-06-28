document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.getElementById("preloader");

  setTimeout(function () {
    preloader.style.display = "none";
  }, 3000);
});


// JavaScript code here
// let cachedData = {};

// function serviceCallSlots(date) {
//   const dt = new Date(date);
//   let ms = dt.getTime();
//   let startMs = ms - (60 * 60 * 24 * 1000 * 2);
//   const dtArr = [1, 2, 3, 4, 5].map((e) => {
//     const innerDt = new Date(startMs);
//     startMs += 60 * 60 * 24 * 1000;
//     return innerDt;
//   });
//   const timeArrs = [
//     ['9', '10', '11', '12', '1', '2', '3', '4', '5'],
//     ['9', '10', '11', '1', '2', '3', '4', '5'],
//     ['9', '10', '11', '12', '3', '4', '5'],
//     ['10', '11', '2', '4'],
//     ['11', '12', '1', '4', '5']
//   ];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const obj = dtArr.reduce((accum, e) => {
//         const randomNum = Math.floor(Math.random() * 5);
//         const dtString = e.toLocaleDateString();
//         let parts = dtString.split('/');
//         parts[0] = parts[0].length === 1 ? '0' + parts[0] : parts[0];
//         parts[1] = parts[1].length === 1 ? '0' + parts[1] : parts[1];
//         accum[parts.join('/')] = timeArrs[randomNum];
//         return accum;
//       }, {});
//       resolve(obj);
//     }, 2000);
//   });
// }

// function spinner(startOrStop) {
//   const spin = document.querySelector('.spin-me');
//   if (startOrStop === 'start') {
//     const spinner = document.createElement('i');
//     spinner.setAttribute('class', 'fas fa-spinner fa-4x fa-spin');
//     spin.appendChild(spinner);
//   } else {
//     spin.innerHTML = '';
//   }
// }

// function createSlotsDom(formSubmit, morning, afternoon, arr) {
//   [9, 10, 11, 12, 1, 2, 3, 4, 5].forEach((e) => {
//     const div = document.createElement('div');
//     div.setAttribute('class', 'item');

//     const button = document.createElement('div');
//     button.setAttribute('class', 'hollow button');
//     button.setAttribute('href', 'javascript:void(0)');
//     button.setAttribute('id', e);
//     const time = (e < 10 ? '0' + e : e) + ':00'; // Fixed typo here, changed "10" to "e"
//     const txt = document.createTextNode(time);
//     button.appendChild(txt);
//     button.onclick = function (e) {
//       const specificId = document.querySelector('hollow');
//       document.getElementById(e.target.id).classList.add('activeColorChanger')
//       // console.log(specificId, 'sid');
//       // console.log(e.target.id, 'etv', document.querySelector('.hollow').id);


//     };
//     if (!arr.includes(e.toString())) {
//       // button.setAttribute('disabled', 'true');
//     }
//     div.appendChild(button);
//     if (e >= 9 && e < 12) { // Fixed typo here, changed "script 12" to "12"
//       morning.appendChild(div);
//     } else {
//       afternoon.appendChild(div);
//     }
//   });
// }

// $("#datepicker").datepicker({
//   onSelect: function (date) {
//     const container = document.querySelector('.master-container-slots');
//     const morning = document.querySelector('.flex-container-morning');
//     const afternoon = document.querySelector('.flex-container-afternoon');
//     const formSubmit = document.querySelector('.form-submit');
//     // formSubmit.classList.add('disabled');
//     // container.classList.add('fade-out');
//     if (cachedData[date]) {
//       spinner('start');
//       setTimeout(() => {
//         morning.innerHTML = '';
//         afternoon.innerHTML = '';
//         createSlotsDom(formSubmit, morning, afternoon, cachedData[date]);
//         spinner('stop');
//         // container.classList.remove('fade-out');
//         // container.classList.add('fade-in');
//       }, 500);
//     } else {
//       spinner('start');
//       const prom = serviceCallSlots(date);
//       setTimeout(() => {
//         morning.innerHTML = '';
//         afternoon.innerHTML = '';
//         prom.then((payload) => {
//           Object.keys(payload).forEach((key) => {
//             // console.log(payload,key,'pk'); 
//             cachedData[key] = payload[key];
//           });
//           createSlotsDom(formSubmit, morning, afternoon, payload[date]);
//           spinner('stop');
//           // container.classList.remove('fade-out');
//           // container.classList.add('fade-in');
//         });
//       }, 1000); // Changed delay to 3000 milliseconds for demonstration purposes
//     }
//   }
// });

// let cachedData = {};

// function serviceCallSlots(date) {
//   const dt = new Date(date);
//   let ms = dt.getTime();
//   let startMs = ms - (60 * 60 * 24 * 1000 * 2);
//   const dtArr = [1, 2, 3, 4, 5].map((e) => {
//     const innerDt = new Date(startMs);
//     startMs += 60 * 60 * 24 * 1000;
//     return innerDt;
//   });
//   const timeArrs = [
//     ['9', '10', '11', '12', '1', '2', '3', '4', '5'],
//     ['9', '10', '11', '1', '2', '3', '4', '5'],
//     ['9', '10', '11', '12', '3', '4', '5'],
//     ['10', '11', '2', '4'],
//     ['11', '12', '1', '4', '5']
//   ];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const obj = dtArr.reduce((accum, e) => {
//         const randomNum = Math.floor(Math.random() * 5);
//         const dtString = e.toLocaleDateString();
//         let parts = dtString.split('/');
//         parts[0] = parts[0].length === 1 ? '0' + parts[0] : parts[0];
//         parts[1] = parts[1].length === 1 ? '0' + parts[1] : parts[1];
//         accum[parts.join('/')] = timeArrs[randomNum];
//         return accum;
//       }, {});
//       resolve(obj);
//     }, 2000);
//   });
// }

// function spinner(startOrStop) {
//   const spin = document.querySelector('.spin-me');
//   if (startOrStop === 'start') {
//     const spinner = document.createElement('i');
//     spinner.setAttribute('class', 'fas fa-spinner fa-4x fa-spin');
//     spin.appendChild(spinner);
//   } else {
//     spin.innerHTML = '';
//   }
// }

// function createSlotsDom(formSubmit, morning, afternoon, arr) {
//   [9, 10, 11, 12, 1, 2, 3, 4, 5].forEach((e) => {
//     const div = document.createElement('div');
//     div.setAttribute('class', 'item');

//     const button = document.createElement('div');
//     button.setAttribute('class', 'hollow button');
//     button.setAttribute('href', 'javascript:void(0)');
//     button.setAttribute('id', e);
//     const time = (e < 10 ? '0' + e : e) + ':00'; // Fixed typo here, changed "10" to "e"
//     const txt = document.createTextNode(time);
//     button.appendChild(txt);
//     button.onclick = function (e) {
//       const specificId = document.querySelector('hollow');
//       document.getElementById(e.target.id).classList.add('activeColorChanger');
//       // console.log(specificId, 'sid');
//       // console.log(e.target.id, 'etv', document.querySelector('.hollow').id);
//     };
//     if (!arr.includes(e.toString())) {
//       button.setAttribute('disabled', 'true');
//     }
//     div.appendChild(button);
//     if (e >= 9 && e < 12) { // Fixed typo here, changed "script 12" to "12"
//       morning.appendChild(div);
//     } else {
//       afternoon.appendChild(div);
//     }
//   });
// }

// $("#datepicker").datepicker({
//   onSelect: function (date) {
//     const container = document.querySelector('.master-container-slots');
//     const morning = document.querySelector('.flex-container-morning');
//     const afternoon = document.querySelector('.flex-container-afternoon');
//     const formSubmit = document.querySelector('.form-submit');
//     // formSubmit.classList.add('disabled');
//     // container.classList.add('fade-out');
//     if (cachedData[date]) {
//       spinner('start');
//       setTimeout(() => {
//         morning.innerHTML = '';
//         afternoon.innerHTML = '';
//         createSlotsDom(formSubmit, morning, afternoon, cachedData[date]);
//         spinner('stop');
//         // container.classList.remove('fade-out');
//         // container.classList.add('fade-in');
//       }, 500);
//     } else {
//       spinner('start');
//       const prom = serviceCallSlots(date);
//       setTimeout(() => {
//         morning.innerHTML = '';
//         afternoon.innerHTML = '';
//         prom.then((payload) => {
//           Object.keys(payload).forEach((key) => {
//             // console.log(payload,key,'pk'); 
//             cachedData[key] = payload[key];
//           });
//           createSlotsDom(formSubmit, morning, afternoon, payload[date]);
//           spinner('stop');
//           // container.classList.remove('fade-out');
//           // container.classList.add('fade-in');
//         });
//       }, 3000); // Changed delay to 3000 milliseconds for demonstration purposes
//     }
//   }
// });

let cachedData = {};

function serviceCallSlots(date) {
  const dt = new Date(date);
  let ms = dt.getTime();
  let startMs = ms - (60 * 60 * 24 * 1000 * 2);
  const dtArr = [1, 2, 3, 4, 5].map((e) => {
    const innerDt = new Date(startMs);
    startMs += 60 * 60 * 24 * 1000;
    return innerDt;
  });
  const timeArrs = [
    ['9', '10', '11', '12', '1', '2', '3', '4', '5'],
    ['9', '10', '11', '1', '2', '3', '4', '5'],
    ['9', '10', '11', '12', '3', '4', '5'],
    ['10', '11', '2', '4'],
    ['11', '12', '1', '4', '5']
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const obj = dtArr.reduce((accum, e) => {
        const randomNum = Math.floor(Math.random() * 5);
        const dtString = e.toLocaleDateString();
        let parts = dtString.split('/');
        parts[0] = parts[0].length === 1 ? '0' + parts[0] : parts[0];
        parts[1] = parts[1].length === 1 ? '0' + parts[1] : parts[1];
        accum[parts.join('/')] = timeArrs[randomNum];
        return accum;
      }, {});
      resolve(obj);
    }, 2000);
  });
}

function spinner(startOrStop) {
  const spin = document.querySelector('.spin-me');
  if (startOrStop === 'start') {
    const spinner = document.createElement('i');
    spinner.setAttribute('class', 'fas fa-spinner fa-4x fa-spin');
    spin.appendChild(spinner);
  } else {
    spin.innerHTML = '';
  }
}

function createSlotsDom(formSubmit, morning, afternoon, arr) {
  [9, 10, 11, 12, 1, 2, 3, 4, 5].forEach((e) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'item');

    const button = document.createElement('div');
    button.setAttribute('class', 'hollow button');
    button.setAttribute('href', 'javascript:void(0)');
    button.setAttribute('id', e);
    const time = (e < 10 ? '0' + e : e) + ':00';
    const txt = document.createTextNode(time);
    button.appendChild(txt);
    button.onclick = function (e) {
      const selectedButton = document.querySelector('.activeColorChanger');
      if (selectedButton) {
        selectedButton.classList.remove('activeColorChanger');
      }
      document.getElementById(e.target.id).classList.add('activeColorChanger');
    };
    if (!arr.includes(e.toString())) {
      button.setAttribute('disabled', 'true');
    }
    div.appendChild(button);
    if (e >= 9 && e < 12) {
      morning.appendChild(div);
    } else {
      afternoon.appendChild(div);
    }
  });
}


$("#datepicker").datepicker({
  onSelect: function (date) {
    const container = document.querySelector('.master-container-slots');
    const morning = document.querySelector('.flex-container-morning');
    const afternoon = document.querySelector('.flex-container-afternoon');
    const formSubmit = document.querySelector('.form-submit');
    // formSubmit.classList.add('disabled');
    // container.classList.add('fade-out');
    if (cachedData[date]) {
      spinner('start');
      setTimeout(() => {
        morning.innerHTML = '';
        afternoon.innerHTML = '';
        createSlotsDom(formSubmit, morning, afternoon, cachedData[date]);
        spinner('stop');
        // container.classList.remove('fade-out');
        // container.classList.add('fade-in');
      }, 500);
    } else {
      spinner('start');
      const prom = serviceCallSlots(date);
      setTimeout(() => {
        morning.innerHTML = '';
        afternoon.innerHTML = '';
        prom.then((payload) => {
          Object.keys(payload).forEach((key) => {
            // console.log(payload,key,'pk'); 
            cachedData[key] = payload[key];
          });
          createSlotsDom(formSubmit, morning, afternoon, payload[date]);
          spinner('stop');
          // container.classList.remove('fade-out');
          // container.classList.add('fade-in');
        });
      }, 3000); // Changed delay to 3000 milliseconds for demonstration purposes
    }
  }
});



