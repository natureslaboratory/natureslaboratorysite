<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>
<?php
	//log timemoto event	
	$json = file_get_contents('php://input');
	$data = json_decode($json,true);
	
	mail('jack@jackbarber.co.uk','test',$data['event']);
	
	if($data['event']=='attendance.inserted'){
		
		$name = $data['data']['userFullName'];
		$timeLoggedRounded = $data['data']['timeLoggedRounded'];
		$attendanceStatus = $data['data']['attendanceStatusId'];
		
		if($attendanceStatus == 0){
			$attendanceStatus = 'clocked out';
		}elseif($attendanceStatus == 1){
			$attendanceStatus = 'clocked in';
		}
		
		timemoto_log($name,$timeLoggedRounded,$attendanceStatus,$json);
			
	}
	
	timemoto_log('Jack Barber','2021-05-05 17:00:01',0,'');
?>