// ==UserScript==
// @name         Old SE chat
// @namespace    http://tampermonkey.net/
// @version      2025-06-07
// @description  try to take over the world with the old chat interface!
// @author       Twineee
// @match        https://chat.stackexchange.com/*
// @match        https://chat.meta.stackexchange.com/*
// @match        https://chat.stackoverflow.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @require      https://code.jquery.com/jquery-3.6.0.min.js\
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Twineee1/userscripts/refs/heads/main/SE/Old%20SE%20Chat
// ==/UserScript==

(function() {
    'use strict';

    $("body").append(`<style>
    #learmore, .py12, #welcome-to-chat-modal {
        display: none;
    }
    </style>`);
})();
