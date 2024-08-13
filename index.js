// Utility Functions
function getAverage(scores) {
  const sum = scores.reduce((acc, score) => acc + score, 0);
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) return "A++";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const passing = hasPassingGrade(studentScore);
  return {
    average: average,
    grade: grade,
    message: passing ? "Passed" : "Failed",
  };
}

// Event Listeners
const submitButton = document.getElementById("btn");
submitButton.addEventListener("click", function () {
  const inputs = document.querySelectorAll(".tableinput");
  const inputScore = Number(document.getElementById("score").value);
  const subjectScores = Array.from(inputs).map((input) => Number(input.value));
  const { average, grade, message } = studentMsg(subjectScores, inputScore);
  updateUI(average, grade, message);
});

const close = document.getElementById("close");
close.addEventListener("click", function () {
  const result = document.getElementById("result");
  result.classList.remove("resultshow");
});

// UI Update Function
function updateUI(average, grade, message) {
  const result = document.getElementById("result");
  const color = message === "Passed" ? "rgb(41, 218, 41)" : "rgb(224, 94, 94)";
  document.getElementById("average").textContent = average.toFixed(2);
  document.getElementById("grade").textContent = grade;
  document.getElementById("status").textContent = message;
  document.getElementById("average").style.color = color;
  document.getElementById("grade").style.color = color;
  document.getElementById("status").style.color = color;
  result.classList.add("resultshow");
}
