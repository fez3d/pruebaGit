function nextCards() {
  let nextPage = Number($("#page-counter").text().charAt(0)) + 1;
  let lastPage = Number($("#page-counter").text().charAt(4))
  if(nextPage <= lastPage) {
    updateCards(nextPage);
  }
}

function backCards() {
  let nextPage = Number($("#page-counter").text().charAt(0)) - 1;
  if(nextPage > 0) {
    updateCards(nextPage);
  }
}

function updateCards(page = 1) {
  $.ajax(
  {
    type: "get",
    url: `https://reqres.in/api/users?page=${page}`,
    success: addCards
  });
}

function addCards(response) {
  $("#page-counter").text(`${response.page} a ${response.total_pages}`);
  $(".info-container").empty();

  response.data.forEach(element => {
    let htmlCard =
      ` 
        <div class="info">
          <div>
              <img id="image" class="info-image" src="${element.avatar}">
          </div>
          
          <div class="info-text">           
            <div>
                <p class="info-title"><strong> California 284</strong></p>
                <p class="info-price">$32,000</p>
            </div>

            <div>
                <p id="name" class="info-name">${element.first_name} ${element.last_name}</p>
                <p id="email" class="info-title">${element.email}</p>
            </div>
          </div>

          <div class="info-status">
            <p class="status-text">Publicado</p>
          </div>

          <div class="info-buttons">
            <p class="button-text">2 comentarios</p>
            <p class="button-text">3 solicitudes de cita</p>
          </div>
        </div>
      `;
      $(".info-container").append(htmlCard);
  });
}

updateCards(location.search.charAt(6));

