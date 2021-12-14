class workout {
  date = new Date();
  id = (Date.now() + "").slice(-10); // creating unique id's
  constructor(coords, distance, duration) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords; // [lat, lag]
  }
}

class running extends workout {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.type = "running";
    this.calcPace();
  }
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
  }
}

class cycling extends workout {
  type = "cycling";
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.type = "cycling";
    this.calcSpeed();
  }
  calcSpeed() {
    this.speed = this.distance / this.duration;
  }
}

//////////////////////////////////////////
// Application Architecture
const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class App {
  #map; // private methods
  #mapEvent;
  #workouts = [];
  constructor() {
    // everything in constructor loas when page loads, it's kinda initializing page when user sees it first
    this._getPosition(); // getting user's geolocation

    // in js classes, this keyword always dierects towards the parent html element, so inorder to call it correctly we need to bind this keyword to element itself
    form.addEventListener("submit", this._newWorkout.bind(this));

    inputType.addEventListener("change", this._toggleElevationField.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Could not get your position, check your internet connection");
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    this.#map = L.map("map").setView(coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest(`.form__row`).classList.toggle(`form__row--hidden`);
    inputCadence.closest(`.form__row`).classList.toggle(`form__row--hidden`);
  }

  // creating new workout data using form
  _newWorkout(event) {
    const validInputs = (
      ...inputs // when we use spread operator we can pass multiple arguments to the function and we get a array of all the inputs
    ) => inputs.every((inp) => Number.isFinite(inp));
    // we can use this function to check if all the inputs are valid or not

    const allPositive = (...inputs) => inputs.every((inp) => inp >= 0);
    event.preventDefault();

    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value; // convert it into number using +, cause it always comes into string
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // if activiy is running, create running  object
    if (type === "running") {
      const cadence = +inputCadence.value;

      // Check if data is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert("Inputs have to be positive numbers!!");

      workout = new running([lat, lng], distance, duration, cadence);
    }

    // If activity is cycling, create cycling object
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      // Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert("Input have to be positive numbers!!");
      workout = new cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);

    // Render workout on the map as marker
    this.renderWorkoutMarker(workout);

    //render workout on the list

    //hide form + clear input fields

    inputType.value = "";
    inputDistance.value = "";
    inputDuration.value = "";
    inputCadence.value = "";
    inputElevation.value = "";
  }

  renderWorkoutMarker(workout) {
    // const { lat, lng } = this.#mapEvent.latlng;
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent("workout")
      .openPopup();
  }
}

const app = new App();
