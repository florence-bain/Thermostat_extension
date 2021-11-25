# Thermostat_extension

The aim of the Thermostat project was to test drive a simple front-end web app using Javascript, with the specification below. 
It uses a weather API to check the weather of various cities across the world, so that the user is able to compare the different
temperatures.

## Specification:

Thermostat starts at 20 degrees
You can increase the temperature with an up function
You can decrease the temperature with a down function
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default but it can also be turned off
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## Using this program

```
git clone https://github.com/florence-bain/Thermostat_extension.git
```
Then open it with this command in your terminal
```
open index.html
```
You can view various cities by scrolling down the page. Adjust your thermostat accordingly using the '+' and '-' buttons. 
If power-saving mode is on, you won't be able to increase the temperature higher than 25 degrees. 
If you turn it off, you can increase up to 32. By selecting the 'Reset' button the temperature will be set back to 20 degrees.
