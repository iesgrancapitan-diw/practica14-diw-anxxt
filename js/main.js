$(function() {
    new TypeIt("#nameTypeIt", {
      strings: ["Hi, I'm Antonio García.", "I am Enthusiastic.", "I Love Develop & Design."],
      speed: 100,
      breakLines: false,
      waitUntilVisible: true
    }).go();
    let menuImg = $("#menu");
    let nav = $("nav")
    menuImg.click(function() {
      if (menuImg.attr("src") == "icon/menu.svg") {
        menuImg.attr("src", "icon/close.svg");
        nav.show("fast");
      } else {
        menuImg.attr("src", "icon/menu.svg");
        nav.hide("fast");
      }
    });
});
