<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dynamic Add Goal Button</title>
<style>
  .disabled {
    background-color: lightcoral; /* Light red color */
    cursor: not-allowed;
  }
</style>
</head>
<body>
  <input type="text" id="goalInput">
  <button id="addGoalBtn">Add Goal</button>

  <script>
    const addGoalBtn = document.getElementById('addGoalBtn');
    const goalInput = document.getElementById('goalInput');

    // Function to handle button state
    function handleButtonState() {
      if (goalInput.value.trim() === '') {
        addGoalBtn.classList.add('disabled');
        addGoalBtn.disabled = true;
      } else {
        addGoalBtn.classList.remove('disabled');
        addGoalBtn.disabled = false;
      }
    }

    // Event listener for input field
    goalInput.addEventListener('input', handleButtonState);

    // Initial state check
    handleButtonState();

    // Additional event listener to change button style when a single letter is typed
    goalInput.addEventListener('input', function() {
      if (goalInput.value.trim().length === 1) {
        addGoalBtn.style.backgroundColor = 'red'; // Change button color to red
      }
    });
  </script>
</body>
</html>
