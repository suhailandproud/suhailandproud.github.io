const h1s = document.querySelector('.h1s');
h1s.style.color = 'red';

const tochange = document.querySelectorAll('.tochange');
for (let i=0; i < tochange.length; i++) {
  const   newcomp = tochange[i];
   newcomp.innerHTML = '<h2>new comp</h2>';
}

const button = document.querySelector('.event-button');
  button.addEventListener('click', function () {
    alert('Hey there!');
  });

  const button2 = document.querySelector('.event-button');
  button2.addEventListener('click', function () {
    document.location = 'https://www.google.com/'
    alert('Hey there!');
  });

  const input = document.querySelector('.send_to_p');
  const paragraph = document.querySelector('.take_from_input');
  input.addEventListener('keyup' , function() {
    paragraph.innerText = input.value;
  })

  const colorBox = document.querySelector('.colorbox');
  colorBox.style.border = 'red solid 10px';
  colorBox.style.width = '4rem';
  colorBox.style.height = '4rem';

  document.querySelector('.button-container').addEventListener('click', function(event) { if ( event.target.tagName === 'BUTTON' ) { alert (`You clicked button ${event.target.innerText}`)};
   event.currentTarget.style.backgroundColor = 'orange';
  })
  