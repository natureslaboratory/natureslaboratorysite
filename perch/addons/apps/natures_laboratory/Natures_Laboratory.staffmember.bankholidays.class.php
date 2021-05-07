<?php

class Natures_Laboratory_Staff_Member_Bankholidays extends PerchAPI_Factory
{
    protected $table     = 'natures_laboratory_staff_bankholiday';
	protected $pk        = 'natures_laboratory_staff_bankholidayID';
	protected $singular_classname = 'Natures_Laboratory_Staff_Member_Bankholiday';
	
	protected $default_sort_column = 'timeStamp';
	
	public $static_fields = array('natures_laboratory_staff_bankholidayID,','date');	
	
	public function getDate($date){
		
		$sql = 'SELECT * FROM perch3_natures_laboratory_staff_bankholidays WHERE date="'.$date.'"';
		$data = $this->db->get_count($sql);

		if($data==1){
			return true;
		}else{
			return false;
		}
		
	}
	
}