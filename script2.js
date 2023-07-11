function togglePopup() {
    var popup = document.getElementById("popupContainer");
    var roomsContainer = document.querySelector(".popup-rooms");
  
    if (popup.style.display === "none" || popup.style.display === "") {
      popup.style.display = "flex";
      roomsContainer.style.display = "flex";
    } else {
      popup.style.display = "none";
      roomsContainer.style.display = "none";
    }
  }
  
  function closePopup(event) {
    if (event.target.id === "popupContainer") {
      var popup = document.getElementById("popupContainer");
      var roomsContainer = document.querySelector(".popup-rooms");
  
      popup.style.display = "none";
      roomsContainer.style.display = "none";
    }
  }
  
  function preventPropagation(event) {
    event.stopPropagation();
  }
  
  function slideButton(button) {
    button.classList.toggle("left");
  }
  
  function toggleFurnished(element, size) {
    var furnishedLabel = document.getElementById(size + "-furnished-label");
    furnishedLabel.textContent = element.checked ? "Unfurnished" : "Furnished";
  }
  
  let roomCounterValue = 1; // Initial room count
  
  function decrementRooms() {
      if (roomCounterValue > 1) {
          roomCounterValue--;
          updateRoomCounter();
      }
  }
  
  function incrementRooms() {
      roomCounterValue++;
      updateRoomCounter();
  }
  
  function updateRoomCounter() {
      const roomCounter = document.querySelector('.room-counter-value');
      roomCounter.textContent = roomCounterValue;
  }
  
  function toggleButton(button) {
    button.classList.toggle("active");
  }
  
  function incrementCount(button) {
    var input = button.parentNode.querySelector('input');
    input.value = parseInt(input.value) + 1;
  }
  
  function decrementCount(button) {
    var input = button.parentNode.querySelector('input');
    var value = parseInt(input.value);
    if (value > 0) {
      input.value = value - 1;
    }
  }
  