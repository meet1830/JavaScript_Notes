const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },

  {
    name: "Shubham Sharma",
    age: 28,
    city: "Bangalore",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },

  {
    name: "Camella Cabello",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },

  {
    name: "Aishwariya Rai",
    age: 45,
    city: "Mumbai",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
  },

  {
    name: "Rohit Sharma",
    age: 34,
    city: "Jharkhand",
    language: "Go",
    framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];

// iterating through the data using iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex <= profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const candidates = cvIterator(data);

const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", showNextCv);

showNextCv();

function showNextCv() {
  let currentCandidate = candidates.next().value;

  const candidateImage = document.getElementById("candidateImage");
  const candidateInfo = document.getElementById("candidateInfo");

  if (currentCandidate != undefined) {
    candidateImage.innerHTML = `<img src='${currentCandidate.image}'>`;

    candidateInfo.innerHTML = `<ul class="list-group">
            <li class="list-group-item">${currentCandidate.name}</li>
            <li class="list-group-item">${currentCandidate.age}</li>
            <li class="list-group-item">${currentCandidate.city}</li>
            <li class="list-group-item">${currentCandidate.language}</li>
            <li class="list-group-item">${currentCandidate.framework}</li>
        </ul>`;
  } else {
    candidateImage.innerHTML = "";
    candidateInfo.innerHTML = "";

    let message = document.createElement("div");
    message.className = "container";
    message.id = "finishedMessage";
    message.innerHTML = `All candidates are viewed. Refresh the page to view them again in same order.`;

    const nextButton = document.getElementById("nextButton");
    nextButton.classList.add("disabled");

    let container = document.querySelector(".container");
    container.insertBefore(message, candidateImage);

    // instead of above code in else statement can also use this approach
    // alert('End of candidate applications');
    // window.location.reload();
  }
}
