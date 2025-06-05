// ==UserScript==
// @name         Old SE chat
// @namespace    http://tampermonkey.net/
// @version      2025-06-05
// @description  try to take over the world with the old chat interface!
// @author       Twineee
// @match        https://chat.stackexchange.com/rooms/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @require     https://code.jquery.com/jquery-3.6.0.min.js\
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("body").append(`<style>
    #learmore {
        display: none;
    }
    .py12 {
        display: none;
    }
    </style>`);
    $("script[src=/Content/bundles/stacks.min.js?v=64d5b4a8959d]").remove();
})();
