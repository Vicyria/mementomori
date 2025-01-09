let xOffset = 0; // Offset for the wave

function setup() {
  let canvas = createCanvas(windowWidth, 30);
  canvas.parent("wave");
}

function draw() {
  background(0); // Clear the canvas on every frame
  
  stroke(255);
  noFill();
  
  beginShape();
  strokeWeight(1)
  for (let x = 0; x <= width; x++) { // Loop vertically
    let y = height / 2 + sin(xOffset + x * 0.05) * 2; // Calculate x using sine wave
    vertex(x, y); // Add vertex point
  }
  endShape();
  beginShape();
  for (let x = 0; x <= width; x++) { // Loop vertically
    let y = height / 2 + 5 + cos(xOffset + x * 0.03) * 4; // Calculate x using sine wave
    vertex(x, y); // Add vertex point
  }
  endShape();

  xOffset += 0.01; // Increment the wave offset to animate
}

const lifespan = 80
const totalWeeks = lifespan * 52
const quarter = totalWeeks / 4

function calculateWeeksLeft() {
    const birthDateInput = document.getElementById("birthdate").value
    if(!birthDateInput) {
        alert("Please enter a valid birthdate!")
    return
    }

    const birthDate = new Date(birthDateInput)
    const today = new Date()

    const diffInMilliseconds = today - birthDate
    const millisecondsInAWeek = 1000 * 60 * 60 * 24 * 7;
    const weeksPassed = Math.floor(diffInMilliseconds / millisecondsInAWeek);

    const weekGrid = document.getElementById("weekGrid")
    weekGrid.innerHTML = " ";

    for (let i = 0; i < totalWeeks; i++)
    {
        if(i % quarter === 0 && i !== 0) {
            const milestone = document.createElement("div");
            milestone.classList.add("milestone")
            milestone.textContent = `${(i / quarter) * 25}% of life completed`
            weekGrid.appendChild(milestone);
        }
        const weekBox = document.createElement("div")
        weekBox.classList.add("week_box")
        weekBox.dataset.index = i

        weekBox.setAttribute("title", `Week ${i + 1}`);

        if(i < weeksPassed)
        {
            weekBox.classList.add("past_week")
        }
        weekGrid.appendChild(weekBox)
    }
}

