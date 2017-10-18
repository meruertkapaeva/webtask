function getResult() {
     var one = Number(document.getElementById('first').value);
     var two = Number(document.getElementById('second').value);
     var three = Number(document.getElementById('third').value);
     var four = Number(document.getElementById('fourth').value);
     var five= Number(document.getElementById('fifth').value);
     var six = Number(document.getElementById('sixth').value);
     var seven = Number(document.getElementById('seventh').value);
     var eight = Number(document.getElementById('eighth').value);
     var nine = Number(document.getElementById('ninth').value);
     var result = one*(five*nine-six*eight)-two*(four*nine-six*seven)+three*(four*eight-five*seven);
     var answer;
     answer = document.getElementById('answer');
     answer.innerHTML = result;
}
     document.querySelector("#btn").addEventListener('click',getResult);