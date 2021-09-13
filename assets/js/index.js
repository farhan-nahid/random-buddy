const spinner = document.getElementById("spinner__container");
spinner.style.display = "none";
// fetch api to get data

const loadData = () => {
  spinner.style.display = "block";
  fetch("https://randomuser.me/api/?results=500")
    .then((res) => res.json())
    .then((data) => {
      spinner.style.display = "none";
      displayBuddy(data.results);
    });
};

loadData();

const displayBuddy = (buddies) => {
  const buddyContainer = document.getElementById("buddy__container");
  for (const buddy of buddies) {
    console.log(buddy);
    const { picture, phone, name, email, gender, dob, location } = buddy;

    const buddyDiv = document.createElement("div");
    buddyDiv.classList.add("card");
    buddyDiv.innerHTML = `
        <img src="${picture.large}" alt="" />
        <h3>${name.title} ${name.first} ${name.last}</h3>
        <h5>${email}</h5>
        <h5>Phone No: ${phone}</h5>
        <h5>Gender: ${gender}</h5>
        <h5>Age: ${dob.age}</h5>
        <h5>Country: ${location.country}</h5>
        <h5>City: ${location.city}</h5>
        <h5>State: ${location.state}</h5>
        <h5>City: ${location.timezone.description}</h5>
        <h5>Time Zone: ${location.timezone.offset}</h5>
    `;
    buddyContainer.appendChild(buddyDiv);
  }
};
