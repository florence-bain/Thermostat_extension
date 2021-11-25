
fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-london').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Cardiff,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-cardiff').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Edinburgh,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-edinburgh').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Dublin,ie&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-dublin').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Bristol,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-bristol').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Glasgow,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-glasgow').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Liverpool,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-liverpool').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Newcastle upon Tyne,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-newcastle').innerText = data.main.temp;
  });

