document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.energyUsage();
  }

  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#temperature-up').addEventListener('click', () => { // event listener
    thermostat.up(); // update model
    updateTemperature();// update view
  })

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  })

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  })

  document.querySelector('#PSM-on').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'On';
    updateTemperature();
  })

  document.querySelector('#PSM-off').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOff();
    document.querySelector('#power-saving-status').innerText = 'Off';
    updateTemperature();
  })


})