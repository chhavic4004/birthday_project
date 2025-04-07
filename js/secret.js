function checkAnswers() {
    const a1 = document.getElementById("answer1").value.trim().toLowerCase();
    const a2 = document.getElementById("answer2").value.trim().toLowerCase();
    const a3 = document.getElementById("answer3").value.trim().toLowerCase();
  
    if (a1 === "that" && a2 === "love" && a3 === "wish") {
      document.getElementById("result").classList.remove("hidden");
    } else {
      alert("Oops! Try again. Maybe read them one more time 🤭");
    }
  }