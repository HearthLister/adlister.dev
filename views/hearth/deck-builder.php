<nav class="navbar navbar-default" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <!--            <a id="menu-toggle" href="#" class="navbar-toggle">-->
            <!--                <span class="sr-only">Toggle navigation</span>-->
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </a>
        </div>
        <div id="sidebar-wrapper" class="sidebar-toggle">
            <ul id="deckEditor" class="sidebar-nav">
                <li>
                    <a href="#item1" id="pickaclass">Pick a Class</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
    <div class="row">
        <div id="custom-search-input">
            <div class="input-group col-md-10 col-md-offset-2">
                <form method="post">
                    <div class="input-group col-md-6">
                        <input type="text" name="deckname">
                        <input type="submit" value="Create Deck" id="createDeck,">
                    </div>
                </form>
                <form method="get">
                    <input type="text" class="search-query form-control" id="df" placeholder="Search">
                    <div id="checkboxes" class="input-group col-md-6 col-md-offset-3">
                        <label><input type="checkbox" value="rarity">Rarity</label>
                        <label><input type="checkbox" value="playerClass">Class</label>
                        <label><input type="checkbox" value="cardSet">Set</label>
                        <label><input type="checkbox" value="type">Type</label>
                        <label><input type="checkbox" value="name">Name</label>
                        <label><input type="checkbox" value="race">Race</label>
                        <label><input type="checkbox" value="mechanics">Mechanic</label>
                        <label><input type="checkbox" value="cost">Cost</label>
                        <label><input type="checkbox" value="text">Text</label>
                        <?php var_dump($_REQUEST); ?>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div style="float: right;" class="col-md-10" id="results"></div>
<!--<div style="background-color: black; height: 450px; width: 400px; position: fixed; right: 40px; top: 250px;" class="col-md-2">-->
<!--    <h1>Deck Editor</h1>-->
<!--</div>-->
