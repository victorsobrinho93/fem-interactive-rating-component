const store = {
  value: 0,
  previous: "",
  selected: "",
  handleClick: function (buttonId) {
    this.previous = this.selected;
    $(this.previous).removeClass("selected");
    this.selected = buttonId;
    $(this.selected).addClass("selected");
  },
};

function btn(n) {
  this.button = document.createElement("button");
  $(this.button)
    .val(n)
    .text(n)
    .addClass("btn")
    .attr("id", `btn-${n}`)
    .on("click", () => {
      store.handleClick(`#${this.button.id}`);
      store.value = n;
    });
  return this.button;
}

for (let i = 1; i <= 5; i++) {
  $("#rating-btns").append(new btn(i));
}

$("#submit-btn").on("click", () => {
  $("#container").load("templates.html #template-1", () => {
    $("#feedback").html(`You have selected ${store.value} out of 5.`);
    console.log("It's getting here...");
  });
});
