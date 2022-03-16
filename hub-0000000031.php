<?php
/**
 * Template Name: Perf-eval-new .0000000031
 */
?>

<!DOCTYPE html>


<html>
    <head>
        <script src="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/js/include.js"></script>

        <link href="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/css/tabs.css" rel="stylesheet"/>
        <link href="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/css/style.css" rel="stylesheet"/>
        <link href="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/css/cards.css" rel="stylesheet"/>
        <link href="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/css/upload-form.css" rel="stylesheet"/>
        <link href="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/css/footer.css" rel="stylesheet"/>
        <link href="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/css/icons/icons.css" rel="stylesheet"/> 
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">   
    </head>
<script>
    $(()=>{$("#epeHub").load("/wp-content/themes/thrive-theme-child/perf-eval-new/views/EPE-2.html");});

    $(()=>{$("#pipHub").load("/wp-content/themes/thrive-theme-child/perf-eval-new/views/PIP.html");});

    $(function(){
      $("#emailSetup").load("/wp-content/themes/thrive-theme-child/perf-eval-new/views/email-setup.html"); 
    });

    $(function(){
      $("#senderSetup").load("/wp-content/themes/thrive-theme-child/perf-eval-new/views/return-setup.html"); 
    });

    $(function(){
      $("#successPage").load("/wp-content/themes/thrive-theme-child/perf-eval-new/views/email-sent.html"); 
    });
</script>
<body>

        <!-- Top Bar-->
        <div class="topnav">
            <img src='<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/css/img/PECLogo.png' style="padding: 10px; margin-left: 20px;" width="450px" height="auto"/>
             
           </div>
           <div style="text-align:end; margin-right: 50px;" ><p id="evaluationType"><b></b></p></div>
<!-- -->

<div id="pickHub" include-html="/wp-content/themes/thrive-theme-child/perf-eval-new/views/pick-eval.html"></div>
<div id="senderSetup" style="display: none;"></div>
<div id="emailSetup" style="display: none;"></div>

<div id="epeHub" style="display: none;"></div>

<div id="pipHub" style="display: none;"></div>

<div id="successPage" style="display: none;"></div>

<div id="loadingDiv" style="display: none;">Loading...</div>



<script>
    includeHTML()
</script>


</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/js/upload.js"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/js/navigation.js"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/js/setupEmail-31.js"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/js/addEmployee.js"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/perf-eval-new/assets/js/smtp.js"></script>

</html>