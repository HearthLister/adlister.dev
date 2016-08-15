var $results = $('#results');
var deckEditorArray = [];
var imgBuilder = function (cards) {
    console.log(cards);
    $results.html('');
    cards.forEach(function (element, index) {
        if (index % 6 == 0 && index != 0) {
            if (element.playerClass != null) {
                $results.append('<a href="#?add=this"' + ' name="' + element.name + '" class="card" data-value="' + element.cost + '"><img class="col-md-2" style="padding: ; float: left; clear: left;" src=' + element.img +'></a>');
            } else {
                $results.append('<a href="#?add=this"' + ' name="' + element.name + '" class="card" data-value="' + element.cost + '"><img class="col-md-2" style="padding: ; float: left; clear: left;" src=' + element.img +'></a>');
            }
        } else {
            if (element.playerClass != null) {
                $results.append('<a href="#?add=this"' + ' name="' + element.name + '" class="card" data-value="' + element.cost + '"><img class="col-md-2" style="padding: ; float: left;" src=' + element.img +'></a>');

            } else {
                $results.append('<a href="#?add=this"' + ' name="' + element.name + '" class="card" data-value="' + element.cost + '"><img class="col-md-2" style="padding: ; float: left;" src=' + element.img +'></a>');

            }

        }
    });
    var $cards = $('.card');
    $cards.click(function () {
        var deckEditor = $('#deckEditor');
        deckEditor.append("<li><a>" + $(this).data('value') + " " + this.name + "</a></li>");
        // deckEditorArray.push(this.name);
        // console.log(deckEditorArray);
        // console.log($(this).data('value'));


    });
};
// $(document).ready(function () {
    var $search = $('#df');
    $search.keyup(function (key) {
        clearTimeout($.data(this, 'timer'));
        if (key.keyCode == 13) {
            event.preventDefault();
        } else {
            $(this).data('timer', setTimeout(search, 500));
        }
    });
    function search() {
        var $searchVal = $('#df').val();
        console.log($searchVal);
        searchEngine($searchVal);
    };
// });
///////////////////pick a class function//////////
var deckEditor = $('#deckEditor');
var pickaclass = $('#pickaclass');
var classes = ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'];
// var hero = $('.hero');
// $(document).ready(function () {


    pickaclass.click(function () {
        deckEditor.html('');
        classes.forEach(function (e, i) {
            deckEditor.append("<li><a href='#' class='hero' data-value='" + e + "'>" + e + "</a></li>");
        });
       var hero = $('.hero');
        hero.click(function(){
            console.log('aything');
            var chosenHero = $(this)[0].outerHTML;
            deckEditor.html("<li>" + chosenHero + "</li>");
        });
    });

    // pickaclass.click(function () {
    //     deckEditor.html('');
    //     classes.forEach(function (e, i) {
    //         deckEditor.append("<li><a href='#' class='hero' id='" + e + "'>" + e + "</a></li>");
    //     });
    // });



// });






////////////////// deck editor populator//////

