function askUserName() {
    const name = prompt("Please enter your name:");
    return name;
  }
  
  function askUserMark(name) {
    const mark = prompt(`Welcome, ${name}! Please enter your mark:`);
    return mark;
  }
  
  function displayResult(name, mark) {
    const parsedMark = parseInt(mark);
    if (isNaN(parsedMark)) {
      alert("Invalid input for mark. Please enter a valid number.");
      return;
    }
  
    const result = Math.floor(parsedMark);
    const passFailMessage = result >= 50 ? "Passed" : "Failed";
  
    const resultRow = document.getElementById("resultRow");
    resultRow.innerHTML = `
      <td>${name}</td>
      <td>${result}</td>
      <td>${passFailMessage}</td>
    `;
  }
  
  window.onload = function () {
    const userName = askUserName();
    if (userName) {
      const userMark = askUserMark(userName);
      if (userMark) {
        displayResult(userName, userMark);
      }
    }
  };
 