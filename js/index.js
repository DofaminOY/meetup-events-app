// Импорт функции для получения списка событий
import { getEvents } from "./eventsStore.js";

// Импорт функций для рендера общего хедера и футера
import { renderHeader, renderFooter } from "./layout.js";

// Рендер хедера
renderHeader();

// Рендер футера
renderFooter();

// Контейнер для секции Events near
const eventsNearGrid = document.querySelector("#eventsNearGrid");

// Контейнер для секции Upcoming online events
const onlineEventsGrid = document.querySelector("#onlineEventsGrid");

// Форматирование даты события
const formatEventDate = (date) => {
  // Получение сокращенного названия дня недели
  const weekDay = date
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase();

  // Получение сокращенного названия месяца
  const month = date
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();

  // Получение числа месяца
  const day = date.getDate();

  // Получение времени события
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  // Возврат даты в формате, который используется в карточке
  return `${weekDay}, ${month} ${day} · ${time} PDT`;
};

// Форматирование даты события для мобильной версии
const formatEventDateMobile = (date) => {
  // Получение сокращенного названия дня недели
  const weekDay = date
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase();

  // Получение сокращенного названия месяца
  const month = date
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();

  // Получение числа месяца
  const day = date.getDate();

  // Получение времени события
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  // Возврат даты в формате, который используется на мобильной версии
  return `${weekDay}, ${month} ${day} · ${time} UTC`;
};

// Создание HTML-разметки одной карточки события
const createEventCard = (event) => {
  // Проверка онлайн-события для бейджа на картинке
  const eventTypeBadge =
    event.type === "online"
      ? `
        <p class="event-card__type event-card__type--badge">
          <img
            class="event-card__type-icon"
            src="./assets/svg/events/online.svg"
            alt=""
          >
          <span>Online Event</span>
        </p>
      `
      : "";

  // Проверка онлайн-события для текста на мобильной версии
  const eventTypeText =
    event.type === "online"
      ? `
        <p class="event-card__type event-card__type--text">
          <img
            class="event-card__type-icon"
            src="./assets/svg/events/online.svg"
            alt=""
          >
          <span>Online Event</span>
        </p>
      `
      : "";

  return `
    <article class="event-card">
      <div class="event-card__image-box">
        <img
          class="event-card__image"
          src="${event.image.trim()}"
          alt="${event.title}"
        >

        ${eventTypeBadge}
      </div>

      <div class="event-card__content">
        <h3 class="event-card__title">${event.title}</h3>

        <p class="event-card__category">
          ${event.category} (${event.distance} km)
        </p>

        ${eventTypeText}

        <p class="event-card__date">
          <img
            class="event-card__icon"
            src="./assets/svg/events/1.svg"
            alt=""
          >
          <span class="event-card__date-text event-card__date-text--desktop">
            ${formatEventDate(event.date)}
          </span>
          <span class="event-card__date-text event-card__date-text--mobile">
            ${formatEventDateMobile(event.date)}
          </span>
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
      </div>
    </article>
  `;
};

// Рендер списка событий в переданный контейнер
const renderEvents = (events, container) => {
  // Проверка наличия контейнера на странице
  if (!container) {
    return;
  }

  // Формирование карточек из массива событий и вставка в HTML
  container.innerHTML = events.map(createEventCard).join("");
};

// Инициализация секций с событиями
const initEvents = async () => {
  // Получение всех событий из хранилища данных
  const events = await getEvents();

  // Фильтрация событий для секции Events near
  const nearEvents = events.filter((event) => event.section === "near");

  // Фильтрация событий для секции Upcoming online events
  const onlineEvents = events.filter((event) => event.section === "online");

  // Рендер событий для секции Events near
  renderEvents(nearEvents, eventsNearGrid);

  // Рендер онлайн-событий для секции Upcoming online events
  renderEvents(onlineEvents, onlineEventsGrid);
};

// Запуск инициализации событий
initEvents();