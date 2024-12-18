//your JS code here. If required.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handlesubmision() {
	 const text = document.getElementById('text').value;
  const delayValue = parseInt(document.getElementById('delay').value);
  const outputDiv = document.getElementById('output');

	 if (!text) {
    outputDiv.textContent = "Please enter some text.";
    return;
  }
	 if (isNaN(delayValue) || delayValue < 0) {
    outputDiv.textContent = "Please enter a valid delay (positive number).";
    return;
  }

	  outputDiv.textContent = "";

	  await delay(delayValue);
	  outputDiv.textContent = text;
}
document.getElementById('btn').addEventListener('click', handlesubmision);
