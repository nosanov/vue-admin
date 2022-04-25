const $ = require("jquery");

function getPagesList() {
  $('h1').remove();
  $.get("./api/api.php", (data) => {
    data.forEach((file) => {
      $("body").append("<h1>" + file + "</h1>");
    })
  }, "JSON");
}

getPagesList();

// create page
$('.create-page_button').click(() => {
  $.post('./api/createNewHtmlPage.php', {
    "name": $('.create-page_input').val()
  }, () => {
    getPagesList();
  })
  .fail(() => {
    alert('Такая страница уже существует!');
  });
});

// delete page
$('.delete-page_button').click(() => {
  $.post('./api/deleteHtmlPage.php', {
    "name": $('.delete-page_input').val()
  }, () => {
    getPagesList();
  })
  .fail(() => {
    alert('Такой страницы не существует!');
  });
})