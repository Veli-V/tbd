
<!DOCTYPE html>
<html>
<body>

<?php
$idea = $_POST["idea"];

$inp = file_get_contents('test.json');
$tempArray = json_decode($inp);
echo $tempArray;
echo $idea;
array_push($tempArray, $idea);
$jsonData = json_encode($tempArray);
file_put_contents('test2.json', $jsonData);
?>

    oispa jotain tähän: <?phP echo $_POST["idea"] ?> </br>
    oispa jotain tähän: <?phP echo $_POST["newIdea"] ?> </br>
</body>
</html>
