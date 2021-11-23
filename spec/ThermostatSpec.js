'use strict';

describe('Thermostat', () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases in temperature', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases in temperature', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees ', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
});