<?php

require_once __DIR__ . '/../../models/Deck.php';

$deck = new Deck;
$deck->deck_name = 'Zoo';
$deck->user_id = 1;
$deck->class_name = 'Warlock';
$deck->save();
var_dump($deck);

$deck = new Deck;
$deck->deck_name = 'Dragon Warrior';
$deck->user_id = 1;
$deck->class_name = "Warrior";
$deck->save();
var_dump($deck);

$deck = new Deck;
$deck->deck_name = 'N\'Zoth Priest';
$deck->user_id = 1;
$deck->class_name = "Priest";
$deck->save();
var_dump($deck);

$deck = new Deck;
$deck->deck_name = 'Aggro Shaman';
$deck->user_id = 1;
$deck->class_name = "Shaman";
$deck->save();
var_dump($deck);