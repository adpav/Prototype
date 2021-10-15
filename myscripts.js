// var optionSelector = document.querySelector(‘.size-selector_size’);
// var htmlClasses = document.querySelector(‘.size-selector_size’).classList;


// function toggleActive() {
//     if (htmlClasses.contains(“size-selector_size”)) {
//          htmlClasses.add(‘size-selector_size:active’);
//     } else {
//          htmlClasses.remove(‘size-selector_size:active’);
//     }
//    };

// optionSelector.addEventListener(‘click’, toggleActive);


$('size-selector_size').on('click', function(){
    $('size-selector_size').removeClass('size-selector_size:active');
    $(this).addClass('size-selector_size:active');
});




/////////////////////  M O D A L  ///////////////////// 

// var updateButton = document.getElementById('updateDetails');
// var favDialog = document.getElementById('favDialog');
// var outputBox = document.querySelector('output');
// var selectEl = document.querySelector('select');
// var confirmBtn = document.getElementById('confirmBtn');

// // "Update details" button opens the <dialog> modally
// updateButton.addEventListener('click', function onOpen() {
//   if (typeof favDialog.showModal === "function") {
//     favDialog.showModal();
//   } else {
//     alert("The <dialog> API is not supported by this browser");
//   }
// });
// // "Favorite animal" input sets the value of the submit button
// selectEl.addEventListener('change', function onSelect(e) {
//   confirmBtn.value = selectEl.value;
// });

// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
// favDialog.addEventListener('close', function onClose() {
//   outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
// });


// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
