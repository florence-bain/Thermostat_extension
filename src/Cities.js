
fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-london').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Sydney,&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-sydney').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Milan,it&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-milan').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Beijing,cn&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-beijing').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=New York,us&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-newyork').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Rio de janeiro,br&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-riodejaneiro').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Singapore,sg&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-singapore').innerText = data.main.temp;
  });

  fetch('http://api.openweathermap.org/data/2.5/weather?q=Osaka,jp&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature-osaka').innerText = data.main.temp;
  });

