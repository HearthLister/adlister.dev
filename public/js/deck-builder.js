var $results = $('#results');
var deckEditorArray = [];
var counter = 0;
var deckList = '';
var imgBuilder = function (cards) {
    // console.log(cards);
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
        // console.log(deckEditorArray);
        var deckEditor = $('#deckEditor');
        for(var i = 0 ; i <= deckEditorArray.length ; i++){
            if(deckEditorArray.length >= 30){
                break;
            }
            if(this.name == deckEditorArray[i]){
                counter++;
                console.log(counter);
                if(counter==2){
                    counter = 0;
                    break;
                }
                continue;
            }
            if(i == deckEditorArray.length){
                counter = 0;
                deckEditor.append("<li><a>" + $(this).data('value') + " " + this.name + "</a></li>");
                deckEditorArray.push(this.name);
                break;
            }
        }


    });
};

var $search = $('#df');
$search.keyup(function (key) {
    clearTimeout($.data(this, 'timer'));
    if (key.keyCode == 13) {
        event.preventDefault();
    } else {
        $(this).data('timer', setTimeout(search, 500));
    }
}); function search() {
    var $searchVal = $('#df').val();
    console.log($searchVal);
    searchEngine($searchVal);
};

///////////////////pick a class function//////////
var deckEditor = $('#deckEditor');
var pickaclass = $('#pickaclass');
var classes = ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'];
pickaclass.click(function () {
    deckEditorArray = [];
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


///////create a deck function//////////
var createButton = $('#createDeck');
createButton.click(function(){
   // if(deckEditorArray.length == 30){
       console.log('workd');
       deckList = deckEditorArray.join(',');
       $.post('index.php',{deckList: deckList});
       console.log(deckEditorArray);
   // }
});

