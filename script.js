
// Select the DOM elements representing clock hands and spikes
const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

// Create spikes for seconds and minutes
for (let s = 0; s < 60; s++) {
  // Create spike elements for minutes and seconds
  let mSpikeEl = document.createElement('i');
  let sSpikeEl = document.createElement('i');
  
  // Add 'spike' class to both spike elements
  mSpikeEl.className = 'spike';
  sSpikeEl.className = 'spike';
  
  // Set the rotation angle for each spike using CSS custom property '--rotate'
  mSpikeEl.style = `--rotate:${6 * s}deg`;
  sSpikeEl.style = `--rotate:${6 * s}deg`;
  
  // Set a custom 'data-i' attribute with the value of 's' (second or minute index)
  mSpikeEl.setAttribute('data-i', s);
  sSpikeEl.setAttribute('data-i', s);

  // Append the spike elements to their respective containers (seconds and minutes)
  seconds.append(sSpikeEl);
  minutes.append(mSpikeEl);
}

// Function to get the current time and update the clock display
function getTime() {
  // Get the current date and time
  let date = new Date();
  let h = date.getHours();
  let s = date.getSeconds();
  let m = date.getMinutes();
  h = h % 12 || 12; // Convert hours to 12-hour format

  
  // Update the 'hour' and 'minute' elements with the current time values
  hour.textContent = h;
  minute.textContent = m;

  // Set the rotation angle for the 'minutes' element using CSS custom property '--dRotate'
  minutes.style = `--dRotate:${6 * m}deg`;

  // Add or remove the 'stop-anim' class based on the second's value
  if (s == 0) {
    seconds.classList.add('stop-anim');
  } else {
    seconds.classList.remove('stop-anim');
  }
  
  // Set the rotation angle for the 'seconds' element using CSS custom property '--dRotate'
  seconds.style = `--dRotate:${6 * s}deg`;
  // Append AM/PM to the hour display
  hour.textContent += ' ' + ampm;
}

// Call the getTime function every 1000 milliseconds (1 second) to update the clock
setInterval(getTime, 1000);

// Initial call to getTime to set the clock to the current time
getTime();
