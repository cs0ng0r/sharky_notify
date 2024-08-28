:hu: 
# Notify Script

_Egy nagyon egyszerű értesítési rendszer, letisztult konfigurációval, egyszerű szerkeszthetőséggel._

## Triggerek és Export
- **Client Oldali export / trigger**
  - **Export:**
    ```lua
    exports['sharky_notify']:SendNotify(message, type, duration, title)
    ```
  - **Trigger:**
    ```lua
    TriggerEvent("sharky_notify:sendNotify", message, type, duration, title)
    ```

- **Server Oldal:**
  ```lua
  TriggerClientEvent("sharky_notify:sendNotify", source, message, type, duration, title)
  ```

### Paraméterek:
- **message:** A szöveg, amit megjelenít a notify.
- **type:** A notify típusa.
- **duration:** A notify megjelenítési ideje.
- **title:** A notify címe.

### Notify Példa:
```
["info"] = {
        icon = "fas fa-info-circle",
        title = "Information",
        styling = {
            background = "#202727e6",
            text_color = "#3498db",
            icon_color = "#3498db"
        }
    },
```

---

:us:  
# Notify Script

_A very simple notification system with a clean configuration and easy customization._

### Triggers and export
- **Client-Side Export / Trigger**
  - **Export:**
    ```lua
    exports['sharky_notify']:SendNotify(message, type, duration, title)
    ```
  - **Trigger:**
    ```lua
    TriggerEvent("sharky_notify:sendNotify", message, type, duration, title)
    ```

- **Server-Side:**
  ```lua
  TriggerClientEvent("sharky_notify:sendNotify", source, message, type, duration, title)
  ```

### Parameters:
- **message:** The text displayed by the notification.
- **type:** The type of the notification.
- **duration:** The duration the notification is displayed.
- **title:** The title of the notification.

### Example Notify:
### Config Példa:
```
["info"] = {
        icon = "fas fa-info-circle",
        title = "Information",
        styling = {
            background = "#202727e6",
            text_color = "#3498db",
            icon_color = "#3498db"
        }
    },
```
