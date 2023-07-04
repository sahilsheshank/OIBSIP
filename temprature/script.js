function convert() {
    var inputTemp = document.getElementById('inputTemp').value;
    var unitSelect = document.getElementById('unitSelect').value;
    var outputDiv = document.getElementById('output');
    var convertedTemp;
  
    if (unitSelect === 'celsius') {
      convertedTemp = (inputTemp * 9/5) + 32;
      outputDiv.innerHTML = inputTemp + ' &#8451; = ' + convertedTemp + ' &#8457;';
    } else if (unitSelect === 'fahrenheit') {
      convertedTemp = (inputTemp - 32) * 5/9;
      outputDiv.innerHTML = inputTemp + ' &#8457; = ' + convertedTemp + ' &#8451;';
    }
  }
  