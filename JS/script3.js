let dt = new Date(); dt.setHours(dt.getHours() + 80000); // document.write(dt); console.log(dt)
console.log(dt)


//! part 1 

function calculateDays() {
    var input = document.querySelector('#input').value;
    const current = new Date();
    const chosen = (current.getTime() + (input100060*60));
    const answer = new Date(chosen);

    const days = document.createElement('h2');
    const text = document.createTextNode(answer + ' is ' + input + ' hours away.');

    document.body.querySelector('#function').appendChild(days);
    days.appendChild(text);
  }

document.getElementById('submit').addEventListener('click', calculateDays);