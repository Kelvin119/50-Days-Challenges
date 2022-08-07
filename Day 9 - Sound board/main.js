const sounds = ['YouCame', 'GoldForever', 'FoundYou', 'Rihanna', 'TheNight', 'TheSun', 'Warzone']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  document.getElementById('buttons').appendChild(btn)
})