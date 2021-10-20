function ageInDays() {

  var birthyear = prompt('What Year were you born?');
  var agenindays = (2021 - birthyear) * 365;
  var h4 = document.createElement('h4');
  var answer = document.createTextNode('Your are ' + agenindays + ' Days old');
  h4.setAttribute('id', 'ageInDays');
  h4.appendChild(answer);
  document.getElementById('text-box-result').appendChild(h4);
}

function reset() {
  document.getElementById('ageInDays').remove();
}
function generateCat() {
  var img = document.createElement('img');
  var div = document.getElementById('im');
  img.src = "images/cat-gif.gif";
  div.appendChild(img);
  console.log(img);
}
function rpsGame(yourChoice) {
  console.log(yourChoice.src);
  var humanChoice = 0;
  var botChoice = 0;
  humanChoice = yourChoice.id;
  console.log("human:", humanChoice);

  botChoice = numberTochoice(randomBot());

  console.log('Bot Choice:', botChoice)

  results = desideWinner(humanChoice, botChoice);
  console.log("Final:", results);

  Message = finalMessage(results);

  console.log("Message:", Message)

  frontEnd(yourChoice.id, botChoice, Message)


}

function randomBot() {
  return Math.floor(Math.random() * 3);
}
function numberTochoice(number) {
  return ['rock', 'paper', 'scissors'][number]
}

function desideWinner(yourChoice, computerChoice) {
  var rspDatabase = {
    'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
    'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
    'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
  }
  var youscore = rspDatabase[yourChoice][computerChoice];
  console.log('Your Score', youscore)
  var computerscore = rspDatabase[computerChoice][yourChoice];
  console.log('System Score--',computerscore);

  return [youscore, computerscore];
}
function finalMessage([youscore, computerscore]) {

  if (youscore == 0) {
    return { 'message': 'you lost', 'color': 'red' };
  } else if (youscore == 0.5) {
    return { 'message': 'Tie', 'color': 'yellow' };
  } else {
    return { 'message': 'You Won', 'color': 'green' };
  }

}
function frontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imageDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src,
  }
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humandiv = document.createElement('div');
  var msgdiv = document.createElement('div');
  var botdiv = document.createElement('div');

  console.log("+++++++++++++++++++++", imageDatabase[botImageChoice]);

  humandiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'height=150 with=150' >"
  msgdiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:60px;padding:30px;'>" + finalMessage['message'] + "</h1>"
  botdiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "'height=150 with=150'  >"

  document.getElementById('rps-game').appendChild(humandiv);
  document.getElementById('rps-game').appendChild(msgdiv);
  document.getElementById('rps-game').appendChild(botdiv);
}
