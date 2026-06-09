// Импорт функции для получения списка событий
import { getEvents } from "./eventsStore.js";

// Импорт функций для рендера общего хедера и футера
import { renderHeader, renderFooter } from "./layout.js";

// Рендер хедера
renderHeader();

// Рендер футера
renderFooter();

// Контейнер для списка событий на второй странице
const eventsList = document.querySelector("#eventsList");

// Фильтр по типу события
const typeFilter = document.querySelector("#typeFilter");

// Фильтр по дистанции события
const distanceFilter = document.querySelector("#distanceFilter");

// Фильтр по категории события
const categoryFilter = document.querySelector("#categoryFilter");

// Форма поиска в хедере
const headerSearchForm = document.querySelector(".header__search");

// Поле поиска событий в хедере
const headerSearchInput = document.querySelector(".header__search-input");

// Переменная для хранения всех событий после получения данных
let allEvents = [];

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

  // Возврат даты в формате, который используется на странице
  return `${weekDay}, ${month} ${day} · ${time} UTC`;
};

// Создание HTML-разметки одного события
const createEventItem = (event) => {
  // Формирование текста с количеством участников
  const attendeesText =
    event.attendees !== undefined ? `${event.attendees} attendees` : "";

  // Формирование текста с количеством свободных мест
  const spotsText = event.spotsLeft
    ? `<span class="events-page__item-spots">${event.spotsLeft} spots left</span>`
    : "";

  // Проверка онлайн-события
  const eventTypeText =
    event.type === "online"
      ? `
        <span class="events-page__item-type">
          <img
            class="events-page__item-type-icon"
            src="./assets/svg/events/online.svg"
            alt=""
          >
          <span>Online Event</span>
        </span>
      `
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

        ${eventTypeText}

        <div class="events-page__item-info">
          <span>${attendeesText}</span>
          ${spotsText}
        </div>
      </div>
    </article>
  `;
};

// Рендер списка событий на второй странице
const renderEventsPage = (events) => {
  // Проверка наличия контейнера на странице
  if (!eventsList) {
    return;
  }

  // Сообщение, если после фильтрации событий нет
  if (events.length === 0) {
    eventsList.innerHTML = `
      <p class="events-page__empty">No events found</p>
    `;
    return;
  }

  // Формирование карточек из массива событий и вставка в HTML
  eventsList.innerHTML = events.map(createEventItem).join("");
};

// Фильтрация событий по выбранным значениям
const filterEvents = () => {
  // Получение выбранного типа события
  const selectedType = typeFilter.value;

  // Получение выбранной дистанции
  const selectedDistance = distanceFilter.value;

  // Получение выбранной категории
  const selectedCategory = categoryFilter.value;

  // Получение текста из поля поиска
  const searchValue = headerSearchInput
    ? headerSearchInput.value.trim().toLowerCase()
    : "";

  // Создание нового массива событий после применения фильтров
  const filteredEvents = allEvents.filter((event) => {
    const isTypeMatch = selectedType === "all" || event.type === selectedType;

    const isDistanceMatch =
      selectedDistance === "all" || event.distance <= Number(selectedDistance);

    const isCategoryMatch =
      selectedCategory === "all" || event.category === selectedCategory;

    const isSearchMatch =
      searchValue === "" || event.title.toLowerCase().includes(searchValue);

    return isTypeMatch && isDistanceMatch && isCategoryMatch && isSearchMatch;
  });

  // Рендер отфильтрованных событий
  renderEventsPage(filteredEvents);
};

// Инициализация страницы со списком событий
const initEventsPage = async () => {
  // Получение всех событий из хранилища данных
  const events = await getEvents();

  // Сохранение всех событий в общую переменную
  allEvents = events;

  // Первичный рендер всех событий
  renderEventsPage(allEvents);

  // Запуск фильтрации при изменении типа события
  typeFilter.addEventListener("change", filterEvents);

  // Запуск фильтрации при изменении дистанции
  distanceFilter.addEventListener("change", filterEvents);

  // Запуск фильтрации при изменении категории
  categoryFilter.addEventListener("change", filterEvents);

  if (headerSearchForm && headerSearchInput) {
    // Запуск поиска при отправке формы поиска
    headerSearchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      filterEvents();
    });

    // Запуск поиска при вводе текста
    headerSearchInput.addEventListener("input", filterEvents);
  }
};

// Запуск инициализации страницы событий
initEventsPage();