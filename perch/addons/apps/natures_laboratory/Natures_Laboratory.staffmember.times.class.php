<?php

class Natures_Laboratory_Staff_Member_Times extends PerchAPI_Factory
{
    protected $table     = 'natures_laboratory_staff_time';
	protected $pk        = 'natures_laboratory_staff_timeID';
	protected $singular_classname = 'Natures_Laboratory_Staff_Member_Time';
	
	protected $default_sort_column = 'timeStamp';
	
	public $static_fields = array('natures_laboratory_staff_timeID,','staffID','timeType','timeStamp','timemotoData','natures_laboratory_staff_timeDynamicFields');	
	
	public function timemoto_log($name,$timeLoggedRounded,$attendanceStatus,$timemotoData){
		
		$sql = 'SELECT * FROM perch3_natures_laboratory_staff WHERE name="'.$name.'" ORDER BY name ASC LIMIT 1';
		$data = $this->db->get_row($sql);
		
		$timeParts = explode("T",$timeLoggedRounded);
		$date_h = $timeParts[0];
		$time_h = $timeParts[1];
		
		if (isset($data['natures_laboratory_staffDynamicFields'])) {
            $dynamicFields = PerchUtil::json_safe_decode($data['natures_laboratory_staffDynamicFields'], true);
        }
        
        if($dynamicFields['constrainDay']=='on'){
	        
	        if(substr($time_h, 0, 2)=='08'){
				$time_h = "08:30:00";
			}
			
			if(substr($time_h, 0, 2)=='17' OR substr($time_h, 0, 4)=='16:5'){
				$time_h = "17:00:00";
			}
	        
        }
		
		$time = array();
	    $time['staffID'] = $data['natures_laboratory_staffID'];
	    $time['timeType'] = $attendanceStatus;
	    $time['timeStamp'] = $date_h." ".$time_h;
	    $time['timemotoData'] = $timemotoData;

	    $insert = $this->db->insert('perch3_natures_laboratory_staff_time', $time);
		
	}
	
	public function forMonth($month,$staffID){
		
		$sql = 'SELECT * FROM perch3_natures_laboratory_staff_time WHERE LEFT(timeStamp,7)="'.$month.'" AND staffID="'.$staffID.'" ORDER BY timeStamp ASC';
		$data = $this->db->get_rows($sql);
		
		return $data;
		
	}
	
	public function startTime($date,$staffID){
		
		$sql = 'SELECT * FROM perch3_natures_laboratory_staff_time WHERE LEFT(timeStamp,10)="'.$date.'" AND staffID="'.$staffID.'" AND timeType="clock in" ORDER BY timeStamp ASC LIMIT 1';
		$data = $this->db->get_row($sql);
		
		if(!$data){
			$data['timeStamp']='';
		}
		
		return $data;
		
	}
	
	public function endTime($date,$staffID){
		
		$sql = 'SELECT * FROM perch3_natures_laboratory_staff_time WHERE LEFT(timeStamp,10)="'.$date.'" AND staffID="'.$staffID.'" AND timeType="clock out" ORDER BY timeStamp DESC LIMIT 1';
		$data = $this->db->get_row($sql);
		
		if(!$data){
			$data['timeStamp']='';
		}
		
		return $data;
		
	}
	
	public function hoursWorked($staffID,$year,$month,$day){
		$day = str_pad($day, 2, "0", STR_PAD_LEFT);
		$date = "$year-$month-$day";
		$sql = 'SELECT * FROM perch3_natures_laboratory_staff_time WHERE LEFT(timeStamp,10)="'.$date.'" AND staffID="'.$staffID.'" AND timeType="clock in" ORDER BY timeStamp ASC LIMIT 1';
		$data = $this->db->get_row($sql);
		if($data){
			$sql = 'SELECT * FROM perch3_natures_laboratory_staff_time WHERE LEFT(timeStamp,10)="'.$date.'" AND staffID="'.$staffID.'" AND timeType="clock out" ORDER BY timeStamp DESC LIMIT 1';
			$data2 = $this->db->get_row($sql);
			if($data2){
				
				$hoursWorked = '00:00';
				$time1 = $data['timeStamp'];
				$time2 = $data2['timeStamp'];
				$diff = abs(strtotime($time1) - strtotime($time2));
				$tmins = $diff/60;
				$hours = floor($tmins/60);
				$mins = $tmins%60;
				if($mins==0){
					$mins = '00';
				}
				if(strlen($mins)==1){
					$mins = '0'.$mins;
				}
				$hoursWorked = "$hours:$mins";
			
				return $hoursWorked;
				
			}else{
				return;
			}
		}else{
			return;
		}
	}
	
	public function clockedIn(){
		
		$sql = 'SELECT * FROM perch3_natures_laboratory_staff ORDER BY name ASC';
		$data = $this->db->get_rows($sql);
		
		$date = date('Y-m-d H:i:s');
		
		$date = date("Y-m-d H:i:s", mktime(date('H')+1, date('m'), date('s'), date('m'), date('d'), date('Y')));
		
		$string = '';
		
		foreach($data as $staff){
			
			$sql = 'SELECT * FROM perch3_natures_laboratory_staff_time WHERE timeStamp<="'.$date.'" AND staffID="'.$staff['natures_laboratory_staffID'].'" ORDER BY timeStamp DESC LIMIT 1';
			$data2 = $this->db->get_row($sql);
			if($data2['timeType']=='clock in'){
				$string .= '1,';
			}else{
				$string .= '0,';
			}
		
		}
		
		$string = substr($string,0,-1);
		echo $string;
		
	}
	
}