function SendNotify(message, type, duration, title)
    if type == nil then
        type = "info"
    end

    if target == nil then
        target = source
    end

    if duration == nil then
        duration = settings["defaultDuration"]
    end

    SendNUIMessage({
        type = "notify",
        message = message,
        notifyType = type,
        duration = duration,
        title = title
    })
end

exports("SendNotify", SendNotify)

RegisterNetEvent("sharky_notify:sendNotify")
AddEventHandler("sharky_notify:sendNotify", function(message, type, duration, title)
    SendNotify(message, type, duration, title)
end)


if settings["enableTestCommand"] then
    RegisterCommand('testNotifyType', function(source, args)
        SendNotify(
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            args[1], 5000)
    end, false)
end


AddEventHandler('onResourceStart', function()
    Wait(1000)
    SendNUIMessage({
        type = "config",
        settings = settings
    })
end)
