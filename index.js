const poll = new Map();

poll.set("React", 0);
poll.set("Vue", 0);
poll.set("Angular", 0);
poll.set("Svelte", 0);
poll.set("Other", 0);

function submitPoll(e) {
  e.preventDefault();

  const selectedOption = document.getElementsByName("poll-option");

  let checkedValue = null;

  for (let i = 0; i < selectedOption.length; i++) {
    if (selectedOption[i].checked) {
      checkedValue = selectedOption[i].value;

      let voteCount = poll.get(checkedValue);
      poll.set(checkedValue, voteCount + 1);

      // console.log(poll);

      displayResults();

      // disable after submission
      // document
      //   .getElementById("poll-form")
      //   .querySelectorAll("input", "button")
      //   .forEach((el) => {
      //     el.setAttribute("disabled", true);
      //   });
      break;
    }
  }

  if (checkedValue === null) {
    alert("Select an Option");
    return;
  }
}

function displayResults() {
  const results = document.querySelector("#results");
  results.innerHTML = "";

  for (let [option, votes] of poll) {
    const optionElement = document.createElement("div");
    optionElement.classList.add(
      "border-bottom",
      "p-2",
      "d-flex",
      "justify-content-between"
    );

    optionElement.innerHTML = `<strong>${option}: </strong> ${votes} Votes`;

    results.appendChild(optionElement);
  }
}

document.querySelector("#poll-form").addEventListener("submit", submitPoll);
