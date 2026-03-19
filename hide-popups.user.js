// ==UserScript==
// @name            Hide Popups GMX.com
// @description     Hides the annoying popups on gmx.com
// @version         1.0
// @author          0x7s0lt1 (https://github.com/0x7s0lt1/hide-popups-gmx-com)
// @match           *://*.gmx.com/*
// ==/UserScript==

(function() {
    'use strict';

    document.head.insertAdjacentHTML('beforeend',`
        <style>
            .dialogOverlay { display: none !important; }
            .modal-layer-inactivity { display: none !important; }
        </style>
    `)

})();
