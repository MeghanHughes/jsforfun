window.onload = function () {
  var answers = [
    'All of this has happened before, and all of this will happen again.', 'You should not let javascript make up your mind for you.', 'I hope so, but I doubt it.', 'I hope not.', 'Never!', 'If you follow the path of truthiness, you will achieve your goal.', 'Good things take effort.', 'Do not give up.', 'Mistakes happen.', 'You need to toughen up.', 'You know the answer to this already.', 'There are dark days ahead.', 'Trump was a mistake.', 'The darkest time is the hour before dawn', 'Now you are just being silly.', 'The universe is infinite. And contracting.', 'There is no going back. Only forward.'];

document.getElementById('answerButton').onclick = function () {
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};
var container = document.getElementById('answerContainer')
document.getElementById('questionArea').value = '';
document.getElementById('answerButton').onclick = function () {
  while (true) {
    var answer = answers[Math.floor(Math.random() * answers.length)];
    if (answers.length == 1 || answer != previousAnswer) {
      previousAnswer= answer;
      break;
    }
  }
  container.className = '';
  container.innerHTML = answer;
  makeVisible();
};
};
