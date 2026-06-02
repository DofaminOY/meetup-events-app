import { getEvents } from "./eventsStore.js";

const eventsNearGrid = document.querySelector("#eventsNearGrid");
const onlineEventsGrid = document.querySelector("#onlineEventsGrid");

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

  return `${weekDay}, ${month} ${day} · ${time} PDT`;
};

const createEventCard = (event) => {
  return `
    <article class="event-card">
      <div class="event-card__image-box">
        <img
          class="event-card__image"
          src="${event.image.trim()}"
          alt="${event.title}"
        >
      </div>

      <h3 class="event-card__title">${event.title}</h3>

      <p class="event-card__category">
        ${event.category} (${event.distance} km)
      </p>

      <p class="event-card__date">
        <img
          class="event-card__icon"
          src="./assets/svg/events/1.svg"
          alt=""
        >
        <span>${formatEventDate(event.date)}</span>
      </p>

      <div class="event-card__info">
        <span class="event-card__info-item">
          <img
            class="event-card__icon"
            src="./assets/svg/events/2.svg"
            alt=""
          >
          <span>${event.attendees ?? 0} going</span>
        </span>

        <span class="event-card__info-item">
          <img
            class="event-card__icon"
            src="./assets/svg/events/3.svg"
            alt=""
          >
          <span>Free</span>
        </span>
      </div>
    </article>
  `;
};

const renderEvents = (events, container) => {
  if (!container) {
    return;
  }

  container.innerHTML = events.map(createEventCard).join("");
};

const initEvents = async () => {
  const events = await getEvents();

  const nearEvents = events.filter((event) => event.section === "near");
  const onlineEvents = events.filter((event) => event.section === "online");

  renderEvents(nearEvents, eventsNearGrid);
  renderEvents(onlineEvents, onlineEventsGrid);
};

initEvents();