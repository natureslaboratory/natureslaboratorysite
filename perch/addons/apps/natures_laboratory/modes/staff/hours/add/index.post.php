 <?php
    echo $HTML->side_panel_start();
    
    echo $HTML->side_panel_end();
    
    echo $HTML->title_panel([
    'heading' => $details['name'].' - Hours Worked',
    'button'  => [
            'text' => $Lang->get('Hours'),
            'link' => $API->app_nav().'/staff/hours/add?id='.$_GET['id'],
            'icon' => 'core/plus',
        ],
    ], $CurrentUser);

    $Smartbar = new PerchSmartbar($CurrentUser, $HTML, $Lang);

	$Smartbar->add_item([
	    'active' => false,
	    'title' => 'Staff',
	    'link'  => $API->app_nav().'/staff/',
	]);
	
	$Smartbar->add_item([
	    'active' => true,
	    'title' => 'Hours',
	    'link'  => $API->app_nav().'/staff/hours/?id='.$_GET['id'],
	]);
	
	$Smartbar->add_item([
	    'active' => false,
	    'title' => 'Holidays',
	    'link'  => $API->app_nav().'/staff/holidays/',
	]);
	
	$Smartbar->add_item([
	    'active' => false,
	    'title' => 'Sick Pay',
	    'link'  => $API->app_nav().'/staff/sick/',
	]);
	
	echo $Smartbar->render();

    echo $HTML->main_panel_start(); 
    
    if (isset($message)){ 
	    
	    echo $message;
	    
	}else{
		
		echo $Form->form_start();
		
		$type[] = array('label'=>'Clock In', 'value'=>'clock in');
		$type[] = array('label'=>'Clock Out', 'value'=>'clock out');
		echo $Form->select_field("timeType","Action",$type,'');
		
		echo $Form->text_field("timeStamp","Timestamp (format YYYY-MM-DD H:i:s)",'');
		    
		echo $Form->submit_field('btnSubmit', 'Add Staff Hours', $API->app_path());
		
		echo $Form->form_end();
	
	}

    echo $HTML->main_panel_end();