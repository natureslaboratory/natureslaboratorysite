 <?php
    echo $HTML->side_panel_start();
    
    echo $HTML->side_panel_end();
    
    echo $HTML->title_panel([
    'heading' => 'Stock Management',
    ], $CurrentUser);
    
    $Smartbar = new PerchSmartbar($CurrentUser, $HTML, $Lang);

	$Smartbar->add_item([
	    'active' => true,
	    'title' => 'Import CSV',
	    'link'  => $API->app_nav().'/stock-update/',
	]);
	
	$Smartbar->add_item([
	    'active' => false,
	    'title' => 'Sync BeeVital',
	    'link'  => $API->app_nav().'/stock-update/bv/',
	]);
	
	$Smartbar->add_item([
	    'active' => false,
	    'title' => "Sync Sweet Cecily's",
	    'link'  => $API->app_nav().'/stock-update/sc/',
	]);
	
	$Smartbar->add_item([
	    'active' => false,
	    'title' => 'Sync Herbal Apothecary',
	    'link'  => $API->app_nav().'/stock-update/ha/',
	]);
	
	echo $Smartbar->render();

    echo $HTML->main_panel_start();
    
    if($message){
	    echo $message;
	}else{
    
	    echo $Form->form_start();
	    
	    $filename = '../../../../../sagedata/perchstock.csv';
	
		if (file_exists($filename)) {
			
			$filesize = number_format(filesize($filename)/1024/1024,2);
		    echo "<p><strong>Stock CSV was last uploaded: " . date ("F d Y H:i:s", filemtime($filename))." (".$filesize."MB)</strong></p>";
		    
		}
	
		echo $Form->submit_field('btnSubmit', 'Update Database', $API->app_path());	
		echo $Form->form_end();
	
	}
    echo $HTML->main_panel_end();