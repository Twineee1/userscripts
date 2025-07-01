// ==UserScript==
// @name         That's The Joke!
// @namespace    http://tampermonkey.net/
// @version      2025-07-01
// @description  try to take over the world with this new button!
// @author       Twineee
// @match        https://chat.stackexchange.com/rooms/*
// @match        https://chat.stackoverflow.com/rooms/*
// @match        https://chat.meta.stackexchange.com/rooms/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackexchange.com
// @grant        none
// @updateURL    https://github.com/Twineee1/userscripts/raw/refs/heads/main/SE/Thatsthejoke.user.js
// ==/UserScript==

(function() {
    'use strict';

    $("#chat-buttons").append("<button class='button' id='thatsdajoke-button'>That's The Joke</button>");

    $("#thatsdajoke-button").click(function() {
        $("#input").val("https://www.youtube.com/watch?v=5ngg5-uwQYI");
        $('#sayit-button')[0].click()
    })
})();
