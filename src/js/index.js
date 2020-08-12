((data) => {
  if (!data || !data.length || !Array.isArray(data)) return false;

  const genCards = (parent) => (accum, { question, response }, index) => `
    ${accum}
    <div class="card">
        <div class="card-header" id="heading-${parent}-${index}">
            <h2 class="mb-0">
                <button
                  class="btn btn-block text-left inst__text--subtitle"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse-accordion-${parent}-${index}"
                  aria-expanded="false"
                  aria-controls="collapse-accordion-${parent}-${index}"
                >
                  ${question}
                  <i class="ico-menos primary"></i>
                  <i class="ico-mas primary"></i>
                </button>
            </h2>
        </div>
        <div
          id="collapse-accordion-${parent}-${index}"
          class="collapse"
          aria-labelledby="heading-${parent}-${index}"
          data-parent="#accordion-${parent}">
            <p class="card-body inst__text">${response}</p>
        </div>
    </div>
  `;

  const genAccordion = (accum, { content = [] }, index) => `
    ${accum}
    <div class="collapse" id="collapse-${index}">
      <div class="accordion" id="accordion-${index}">
          ${content.reduce(genCards(index), "")}
      </div>
    </div>
  `;

  const genTitles = (accum, { title }, index) => `
    ${accum}
    <button
      class="btn btn-light faq-title__item inst__text--subtitle"
      type="button"
      data-toggle="collapse"
      data-target="#collapse-${index}"
      aria-expanded="false"
      aria-controls="collapse-${index}"
    >
      ${title}
    </button>
  `;

  const switchTitles = (event) => {
    $(".faq-title__item")
      .not(event.target)
      .get()
      .forEach((element) => {
        const id = $(element).data("target");
        $(element).removeClass("collapsed").attr("aria-expanded", false);
        $(id).removeClass("show");
      });
  };

  const eventHandlers = () => {
    $(".faq-title__item").on("click", switchTitles);
  };

  const dispatchSlick = () => {
    $(".faq-title").slick({
      nextArrow:
        '<button type="button" class="slick-arrow slick-next"><i class="ico-drop-4"></i></button>',
      prevArrow:
        '<button type="button" class="slick-arrow slick-prev"><i class="ico-drop-3"></i></button>',
      dots: false,
      speed: 300,
      variableWidth: true,
    });
  };

  const initialize = () => {
    const header = document.createElement("div");
    const body = document.createElement("div");

    header.classList.add("faq-title");
    body.classList.add("faq-body");

    header.innerHTML = data.reduce(genTitles, "");
    body.innerHTML = data.reduce(genAccordion, "");

    $(".faq__content").append(header).append(body);
  };

  $(document).ready(() => {
    initialize();
    eventHandlers();
    dispatchSlick();
  });
})(window.akapolQuestions);
