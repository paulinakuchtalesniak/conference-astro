const filterState = {
  date: "",
  locations: [],
};
const setupDateTabs = () => {
  const tabs = document.querySelectorAll(".date-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      filterState.date = tab.getAttribute("data-date");
      applyFilters();
    });
  });
};
document.querySelectorAll('input[name="locations"]').forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      filterState.locations.push(value);
    } else {
      filterState.locations = filterState.locations.filter(
        (loc) => loc !== value
      );
    }

    applyFilters();
  });
});

const applyFilters = () => {
  const speakers = document.querySelectorAll(".speakers__card-lineup");

  speakers.forEach((speaker) => {
    const speakerDate = speaker.getAttribute("data-date-speaker");
    const speakerLocation = speaker.getAttribute("data-location");
    const matchesDate =
      filterState.date === "" || filterState.date === speakerDate;
    const matchesLocation =
      filterState.locations.length === 0 ||
      filterState.locations.includes(speakerLocation);

    if (matchesDate && matchesLocation) {
      speaker.classList.remove("hidden");
    } else {
      speaker.classList.add("hidden");
    }
  });
};

setupDateTabs();
applyFilters();
