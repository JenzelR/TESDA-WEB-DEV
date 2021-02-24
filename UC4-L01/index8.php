<?php 

	// multidimensional array

	$blogs = [
		['title' => 'tea party', 'author' => 'me', 'content' => 'lorem'],
		['title' => 'mario and friends', 'author' => 'still me', 'content' => 'lorem'],
		['title' => 'zelda and friends', 'author' => 'me?', 'content' => 'lorem']
	];

	//print_r($blogs);
	//print_r($blogs[2]);
	//echo $blogs[1]['title'];
	//echo count($blogs);

	$blogs[] = ['title' => 'party party', 'author' => 'harry potter', 'content' => 'lorem'];
	//print_r($blogs);

	$popped = array_pop($blogs);
	//print_r($popped);


?>

<!DOCTYPE html>
<html>
<head>
	<title>PHP Tutorials</title>
</head>
<body>

	<p></p>

</body>
</html>