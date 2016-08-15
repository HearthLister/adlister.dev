<?php

require_once __DIR__ . '/../../models/User.php';

$user = new User;
$user->NAME = 'Rob';
$user->email = 'rob@rob.com';
$user->username = 'RobK';
$user->PASSWORD = 'codeup';
$user->save();
var_dump($user);

$user = new User;
$user->NAME = 'TJ';
$user->email = 'tj@tj.com';
$user->username = 'TJ';
$user->PASSWORD = 'codeup';
$user->save();
var_dump($user);

$user = new User;
$user->NAME = 'Craig';
$user->email = 'craig@craig.com';
$user->username = 'Craig';
$user->PASSWORD = 'codeup';
$user->save();
var_dump($user);

$user = new User;
$user->NAME = 'Anthony';
$user->email = 'ant@ant.com';
$user->username = 'Anthony';
$user->PASSWORD = 'codeup';
$user->save();
var_dump($user);