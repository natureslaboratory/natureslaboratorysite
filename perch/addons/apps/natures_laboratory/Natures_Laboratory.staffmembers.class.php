<?php

class Natures_Laboratory_Staff_Members extends PerchAPI_Factory
{
    protected $table     = 'natures_laboratory_staff';
	protected $pk        = 'natures_laboratory_staffID';
	protected $singular_classname = 'Natures_Laboratory_Staff_Member';
	
	protected $default_sort_column = 'name';
	
	public $static_fields = array('natures_laboratory_staffID,','name','email','phone','address','startDate','staffDynamicFields');	
	
	public function rfid($staffID){
		
		$sql = 'SELECT * FROM perch3_natures_laboratory_staff_rfid WHERE natures_laboratory_staffID="'.$staffID.'"';
		$data = $this->db->get_row($sql);
		return $data;
		
	}
	
	public function updateRFID($staffID, $name, $rfid){
		
		$sql = 'SELECT * FROM perch3_natures_laboratory_staff_rfid WHERE natures_laboratory_staffID="'.$staffID.'"';
		$data = $this->db->get_row($sql);
		if($data){
			$sql = 'UPDATE perch3_natures_laboratory_staff_rfid SET rfid="'.$rfid.'", name="'.$name.'" WHERE natures_laboratory_staffID="'.$staffID.'"';
			$this->db->execute($sql);
		}else{
			$sql = 'INSERT INTO perch3_natures_laboratory_staff_rfid (natures_laboratory_staffID, rfid, name) VALUES ("'.$staffID.'", "'.$rfid.'", "'.$name.'")';
			$this->db->execute($sql);
		}
		
	}
}