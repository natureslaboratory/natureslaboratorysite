 <?php
    echo $HTML->side_panel_start();
    
    echo $HTML->side_panel_end();
    
    if($staffID){
    
	    echo $HTML->title_panel([
	    'heading' => $details['name'].' - Hours Worked',
	    'button'  => [
	            'text' => $Lang->get('Hours'),
	            'link' => $API->app_nav().'/staff/hours/add?id='.$_GET['id'],
	            'icon' => 'core/plus',
	        ],
	    ], $CurrentUser);
    
    }else{
	    
	    echo $HTML->title_panel([
	    'heading' => 'Hours Worked'
	    ], $CurrentUser);
	    
    }

    $Smartbar = new PerchSmartbar($CurrentUser, $HTML, $Lang);

	$Smartbar->add_item([
	    'active' => false,
	    'title' => 'Staff',
	    'link'  => $API->app_nav().'/staff/',
	]);
	
	if($staffID){
	
		$Smartbar->add_item([
		    'active' => true,
		    'title' => 'Hours',
		    'link'  => $API->app_nav().'/staff/hours/?id='.$staffID,
		]);
	
	}else{
		
		$Smartbar->add_item([
		    'active' => true,
		    'title' => 'Hours',
		    'link'  => $API->app_nav().'/staff/hours/',
		]);
		
	}
	
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
    
    if($staffID){
    
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
		$today = date('Y-m-d');
		$i = 1;
		$totalHours = 0;
		$totalMinutes = 0;
		while($i<=$days){
			$humanDate = date("l jS F Y", mktime(0, 0, 0, date('m'), $i, date('Y')));
			$queryDate = date("Y-m-d", mktime(0, 0, 0, date('m'), $i, date('Y')));
			$start = $NaturesLaboratoryStaffTimes->startTime($queryDate,$_GET['id']);
			$end = $NaturesLaboratoryStaffTimes->endTime($queryDate,$_GET['id']);
			$hoursWorked = '00:00';
			if($start['timeStamp']<>'' AND $end['timeStamp']<>''){
				$time1 = $start['timeStamp'];
				$time2 = $end['timeStamp'];
				$diff = abs(strtotime($time1) - strtotime($time2));
				$tmins = $diff/60;
				$hours = floor($tmins/60);
				$mins = $tmins%60;
				$hoursWorked = "$hours:$mins";
				$totalHours = $totalHours+$hours;
				$totalMinutes = $totalMinutes+$mins;
			}
			
			$class = '';
			
			if($start['timeStamp']<>'' AND $end['timeStamp']=='' AND $queryDate<>$today){
				$hoursWorked = 'ERROR';
				$class = 'notification notification-warning';
			}
			
			if($queryDate==$today){
				$hoursWorked = 'TODAY';
				$class = 'notification notification-success';
			}
			
			echo "
			<tr class='$class'>
				<td>".$humanDate."</td>
				<td>";if($start['timeStamp']<>''){echo $start['timeStamp'];} echo "</td>
				<td>";if($end['timeStamp']<>''){echo $end['timeStamp'];} echo "</td>
				<td>$hoursWorked</td>
			</tr>";
			$i++;
		}  
		
		$totalMinutes_h = "00:00";
		if(convertToHoursMins($totalMinutes, '%02d:%02d')<>''){
			$totalMinutes_h = convertToHoursMins($totalMinutes, '%02d:%02d');
		}
		$parts = explode(":",$totalMinutes_h);
		$totalHours = $totalHours+$parts[0];
		$totalMinutes = $parts[1];
		
		echo "<tfoot>
				<tr><td><strong>Total Hours Worked</strong></td>
				<td></td>
				<td></td>
				<td><strong>$totalHours:$totalMinutes</strong></td>
		</tfoot>";
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

	}else{

?>
	<h2><?php echo date('F Y'); ?></h2>
	<?php
		$days = cal_days_in_month(CAL_GREGORIAN, date('m'), date('Y'));
	?>
	<table class="d">
        <thead>
            <tr>
                <th class="first">Name</th>
                <?php
	                $i = 1;
	                while($i<=$days){
		                echo "<th>$i</th>";
		                $i++;
	                }
	            ?>
	            <th>Total</th>
            </tr>
        </thead>
        <tbody>
<?php
    foreach($staff as $Staff) {
?>
            <tr>
                <td><?php echo $Staff->name(); ?></td>
                <?php
	                $i = 1;
	                $totalHours = 0;
	                $totalMinutes = 0;
	                while($i<=$days){
		                $hoursWorked = $NaturesLaboratoryStaffTimes->hoursWorked($Staff->natures_laboratory_staffID(),date('Y'),date('m'),$i);
		                $parts = explode(":",$hoursWorked);
		                $hours = $parts[0];
		                $minutes = $parts[1];
		                $totalHours = $totalHours+$hours;
		                $totalMinutes = $totalMinutes+$minutes;
		                echo "<td>$hoursWorked</td>";
		                $i++;
	                }
	                
	                $totalMinutes_h = floor($totalMinutes/60);
	                if(convertToHoursMins($totalMinutes, '%02d:%02d')<>''){
						$totalMinutes_h = convertToHoursMins($totalMinutes, '%02d:%02d');
					}
					$parts = explode(":",$totalMinutes_h);
					$totalHours = $totalHours+$parts[0];
					$totalMinutes = $parts[1];
					
					if($totalMinutes==''){
						$totalMinutes='00';
					}
	                
	                echo "<td>$totalHours:$totalMinutes</td>";
	            ?>
            </tr>
<?php
	}
?>
	    </tbody>
    </table>

<?php		
		
	}

	function convertToHoursMins($time, $format = '%02d:%02d') {
	    if ($time < 1) {
	        return;
	    }
	    $hours = floor($time / 60);
	    $minutes = ($time % 60);
	    return sprintf($format, $hours, $minutes);
	}

    echo $HTML->main_panel_end();