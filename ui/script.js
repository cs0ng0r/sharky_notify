let settings = {};

window.addEventListener("message", function (event) {
  if (event.data.type === "config") {
    settings = event.data.settings;
  }

  if (event.data.type === "notify") {
    if (!settings.types) {
      console.error("No such type.");
      return;
    }

    let notifyType = settings.types[event.data.notifyType] || settings.types["info"];
    let title = event.data.title || notifyType.title;

    let notification = document.createElement("div");
    notification.className = "notification show";
    notification.style.backgroundColor = notifyType.styling.background || "#fff";

    notification.innerHTML = `
            <div class="icon" style="color: ${notifyType.styling.icon_color};">
                <i class="${notifyType.icon}"></i>
            </div>
            <div class="content" style="color: ${notifyType.styling.text_color};">
                <div class="title">${title}</div>
                <div class="message">${event.data.message}</div>
            </div>
        `;

    document.querySelector(".notification-container").appendChild(notification);

    setTimeout(function () {
      notification.classList.remove("show");
      notification.classList.add("fadeout");

      setTimeout(function () {
        notification.remove();
      }, 500);
    }, event.data.duration || settings.defaultDuration);
  }
});
