import { getEvents } from "./eventsStore.js";
import { renderHeader, renderFooter } from "./layout.js";

renderHeader();
renderFooter();

const eventsList = document.querySelector("#eventsList");
const typeFilter = document.querySelector("#typeFilter");
const distanceFilter = document.querySelector("#distanceFilter");
const categoryFilter = document.querySelector("#categoryFilter");

let allEvents = [];

const formatEventDate = (date) => {
  const weekDay = date
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase();

  const month = date
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();

  const day = date.getDate();

  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${weekDay}, ${month} ${day} · ${time} UTC`;
};

const createEventItem = (event) => {
  const attendeesText =
    event.attendees !== undefined ? `${event.attendees} attendees` : "";

  const spotsText = event.spotsLeft
    ? `<span class="events-page__item-spots">${event.spotsLeft} spots left</span>`
    : "";

  return `
    <article class="events-page__item">
      <div class="events-page__item-image-box">
        <img
          class="events-page__item-image"
          src="${event.image.trim()}"
          alt="${event.title}"
        >
      </div>

      <div class="events-page__item-content">
        <p class="events-page__item-date">
          ${formatEventDate(event.date)}
        </p>

        <h2 class="events-page__item-title">
          ${event.title}
        </h2>

        <p class="events-page__item-category">
          ${event.category} (${event.distance} km)
        </p>

        <div class="events-page__item-info">
          <span>${attendeesText}</span>
          ${spotsText}
        </div>
      </div>
    </article>
  `;
};

const renderEventsPage = (events) => {
  if (!eventsList) {
    return;
  }

  if (events.length === 0) {
    eventsList.innerHTML = `
      <p class="events-page__empty">No events found</p>
    `;
    return;
  }

  eventsList.innerHTML = events.map(createEventItem).join("");
};

const filterEvents = () => {
  const selectedType = typeFilter.value;
  const selectedDistance = distanceFilter.value;
  const selectedCategory = categoryFilter.value;

  const filteredEvents = allEvents.filter((event) => {
    const isTypeMatch =
      selectedType === "all" || event.type === selectedType;

    const isDistanceMatch =
      selectedDistance === "all" || event.distance <= Number(selectedDistance);

    const isCategoryMatch =
      selectedCategory === "all" || event.category === selectedCategory;

    return isTypeMatch && isDistanceMatch && isCategoryMatch;
  });

  renderEventsPage(filteredEvents);
};

const initEventsPage = async () => {
  const events = await getEvents();

  allEvents = events;

  renderEventsPage(allEvents);

  typeFilter.addEventListener("change", filterEvents);
  distanceFilter.addEventListener("change", filterEvents);
  categoryFilter.addEventListener("change", filterEvents);
};

initEventsPage();