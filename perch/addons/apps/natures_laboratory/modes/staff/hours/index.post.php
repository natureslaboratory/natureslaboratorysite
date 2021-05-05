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
	
	$Smartbar->add_item([
	    'active' => false,
	    'title' => 'Volunteer Days',
	    'link'  => $API->app_nav().'/staff/volunteer/',
	]);
	
	$Smartbar->add_item([
	    'active' => false,
	    'title' => 'Skills Matrix',
	    'link'  => $API->app_nav().'/staff/skills/',
	]);
	
	echo $Smartbar->render();

    echo $HTML->main_panel_start(); 
    
    ?>
	<h2><?php echo date('F Y'); ?></h2>
	
	<table class="d">
        <thead>
            <tr>
                <th class="first">Date</th>
                <th>Start Time</th> 
                <th>End Time</th> 
                <th>Hours Worked</th>
            </tr>
        </thead>
        <tbody>
	    <?php
		$days = cal_days_in_month(CAL_GREGORIAN, date('m'), date('Y'));
		$i = 1;
		while($i<=$days){
			$humanDate = date("l jS F Y", mktime(0, 0, 0, date('m'), $i, date('Y')));
			$queryDate = date("Y-m-d", mktime(0, 0, 0, date('m'), $i, date('Y')));
			$start = $NaturesLaboratoryStaffTimes->startTime($queryDate,$_GET['id']);
			$end = $NaturesLaboratoryStaffTimes->endTime($queryDate,$_GET['id']);
			$hours = '00:00';
			if($start['timeStamp']<>'' AND $end['timeStamp']<>''){
				$time1 = $start['timeStamp'];
				$time2 = $end['timeStamp'];
				$diff = abs(strtotime($time1) - strtotime($time2));
				$tmins = $diff/60;
				$hours = floor($tmins/60);
				$mins = $tmins%60;
				$hours = "$hours:$mins";
			}
			
			if($start['timeStamp']<>'' AND $end['timeStamp']==''){
				$hours = 'ERROR';
			}
			
			echo "
			<tr>
				<td>".$humanDate."</td>
				<td>";if($start['timeStamp']<>''){echo $start['timeStamp'];} echo "</td>
				<td>";if($end['timeStamp']<>''){echo $end['timeStamp'];} echo "</td>
				<td>$hours</td>
			</tr>";
			$i++;
		}  
		?>    
        </tbody>
	</table>
	
	<h2>Full Log</h2>
	
    <table class="d">
        <thead>
            <tr>
                <th class="first">Time Type</th>
                <th>Time Stamp</th> 
                <th>View/Edit</th>
                <th class="action last">Delete</th>
            </tr>
        </thead>
        <tbody>
<?php
    foreach($times as $Time) {
?>
            <tr>
                <td><?php echo ucwords($Time['timeType']); ?></td>
                <td><?php echo $Time['timeStamp']; ?></td>
                <td><a href="<?php echo $HTML->encode($API->app_path()); ?>/staff/hours/edit/?id=<?php echo $HTML->encode(urlencode($Time['natures_laboratory_staff_timeID'])); ?>"><?php echo 'View/Edit'; ?></a></td>
                <td><a href="<?php echo $HTML->encode($API->app_path()); ?>/staff/hours/delete/?id=<?php echo $HTML->encode(urlencode($Time['natures_laboratory_staff_timeID'])); ?>" class="delete inline-delete"><?php echo 'Delete'; ?></a></td>
            </tr>
<?php
	}
?>
	    </tbody>
    </table>

<?php 

    echo $HTML->main_panel_end();