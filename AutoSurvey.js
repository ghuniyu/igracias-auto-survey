// ==UserScript==
// @name         AutoSurvey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto Survey Script!
// @author       iamnubs
// @match        https://igracias.telkomuniversity.ac.id/survey/index.php*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    var multi = 'Sangat puas';
    var option = 'Ya';

    $('.answerlist1:contains('+multi+'), .answerlist1:contains('+option+')').each(function(){
        $(this).parent().each(function(){
            $(this).find('.answerlist2').children().click()
        })
    });
})();