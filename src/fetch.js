// console.log('test')

const starWars = () => { 
    fetch("https://swapi.co/api/people/1/")
    .then(response => response.json())
    .then(data => { 
        document.getElementById('luke-skywalker').innerHTML =
        "<pre>" + JSON.stringify(data, null, " ") + "</pre>"    
      })
      .catch(err => alert(err))
    }


starWars()

const darthVader = () => { 
    fetch("https://swapi.co/api/people/4/")
    .then(response => response.json())
    .then(data => { 
        document.getElementById('darth-vader').innerHTML =
        "<pre>" + JSON.stringify(data, null, " ") + "</pre>"    
      })
      .catch(err => alert(err))
    }

