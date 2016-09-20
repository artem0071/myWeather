<?php
/**
 * Created by PhpStorm.
 * User: artemdegtarev
 * Date: 20.09.16
 * Time: 14:30
 */
$key = 'c641ef89eed3806974c4a7819f0a39d6';
$city = $_POST['city'];

switch ($city){
    case '1': $city = 'Moscow';
        break;
    case '2': $city = 'Omsk';
        break;
    case '3': $city = 'London';
        break;
}

$url = 'http://api.openweathermap.org/data/2.5/weather?q='.$city.'&units=metric&appid='.$key;

$json = file_get_contents($url);

echo $json;




//$key = 'c641ef89eed3806974c4a7819f0a39d6';
//$city = 'Moscow';
//$url = 'http://api.openweathermap.org/data/2.5/weather?q='.$city.'&units=metric&appid='.$key;
////$url = 'http://api.openweathermap.org/data/2.5/forecast/weather?q='.$city.'&units=metric&appid='.$key;
//
//
//$json = file_get_contents($url);
//
//$data = json_decode($json,true);
//
////$Geonames = $data['geonames'][0];
//
//echo "<pre>";
//
//print_r($data);
//
//$datacity = $data['name'];
//print_r($datacity);