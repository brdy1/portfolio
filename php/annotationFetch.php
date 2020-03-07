<?php
    //Store the filename annotationText as a variable
    $file = "annotationText.txt";
    //Store the lines in an array
    $lines = file($file);
    //For each line in annotationText.txt
    foreach($lines as $line) {
        //Explode the line into an array
        list($spanId, $spanBody, $imgFlag, $imgWidth, $imgHeight) = explode ('|', $line, 5);
        //Trim first and last variables of special characters
        $spanId = str_replace("\n", '', trim($spanId,"\t\n\r\0\x0B"));
        $imgHeight = str_replace("\n", '', trim($imgHeight,"\t\n\r\0\x0B"));
        //Print the line of code
        echo '<span id="'.$spanId.'">'.$spanBody;
        //If the third item in the array is a yes
        if ($imgFlag == "yes") {
            //Then print the image code
            echo '<a href="images/'.$spanId.'Large.png" target ="_blank"><img src="images/'.$spanId.'Small.png" width="'.$imgWidth.'" height="'.$imgHeight.'"></a>';
        }
        //Close the span element and end the line
        echo '</span>'."\n";
    }
?>