<?php
    
    $NaturesLaboratoryGoodsIn = new Natures_Laboratory_Goods_Ins($API); 
    $NaturesLaboratoryGoodsSuppliers = new Natures_Laboratory_Goods_Suppliers($API); 
    
    $HTML = $API->get('HTML');
    $Form = $API->get('Form');
    
    $goodsIn = array();
    $goodsIn = $NaturesLaboratoryGoodsIn->getGoodsIn();
    
    if($Form->submitted()) {
		//MAKE LABELS
		$postvars = array();
		foreach($goodsIn as $Goods){
			array_push($postvars, 'batch_'.$Goods['ourBatch']);
		}   
    	$data = $Form->receive($postvars);   
    	
    	$label = 1;
		
		class PDF extends FPDF
		{
			// Page header
			function Header()
			{
			    $this->Image('../label.jpg',6,14,99.1,67.8);
			    $this->Image('../label.jpg',105.1,14,99.1,67.8);
			    $this->Image('../label.jpg',6,81.8,99.1,67.8);
			    $this->Image('../label.jpg',105.1,81.8,99.1,67.8);
			    $this->Image('../label.jpg',6,149.6,99.1,67.8);
			    $this->Image('../label.jpg',105.1,149.6,99.1,67.8);
			    $this->Image('../label.jpg',6,217.4,99.1,67.8);
			    $this->Image('../label.jpg',105.1,217.4,99.1,67.8);
			}
		}
		
		$pdf = new PDF();
		$pdf->AddPage();
		
		$row = 1;
	    $column = 1;
    	  
    	foreach($data as $key => $value){
	    	$parts = explode('_',$key);
	    	$batchData = $NaturesLaboratoryGoodsIn->getBatchData($parts[1]);
	    	
	    	// DATA FOR LABEL
	    	$categoryName = 'Essential Oil';
	    	$productCode = $batchData['productCode'];
	    	$productName = $batchData['productDescription'];
	    	$batch = $batchData['ourBatch'];
	    	$bbe = $batchData['bbe'];
	    	$quantity = $batchData['qty'];
	    	$unit = $batchData['unit'];
	    	
	    	$bbeParts = explode("-",$bbe);
		    $bbe = "$bbeParts[1]/$bbeParts[0]";
	    	
	    	
	    	$y = 1;
	
	    	while($y<=($batchData['bags']+1)){
		    	if($row>4){
			    	$row = 1;
			    	$pdf->AddPage();
			    }
			    if($column==2){
			    	$x = 114;
			    }else{
				    $x = 14;
			    }
			    
			    $first = array(44,55,70);
			    $second = 70;
			    $third = 140;
			    $fourth = 210;
			    
			    if($row==1){
				    $y1 = 40;
				    $y2 = 50;
				    $y3 = 60;
				    $y4 = 68;
			    }
			    
			    if($row==2){
				    $y1 = 108;
				    $y2 = 118;
				    $y3 = 128;
				    $y4 = 136;
			    }
			    
			    if($row==3){
				    $y1 = 176;
				    $y2 = 186;
				    $y3 = 196;
				    $y4 = 204;
			    }
			    
			    if($row==4){
				    $y1 = 243;
				    $y2 = 253;
				    $y3 = 263;
				    $y4 = 271;
			    }
			    
			    $pdf->SetXY($x, $y1);
				$pdf->SetFont('Arial','B',14);
				$pdf->Cell(90,10,"$categoryName $productCode",0);
				$pdf->SetFont('Arial','B',8);
				$pdf->SetXY($x, $y2);
				$pdf->Cell(90,10,"$productName",0);
				$pdf->SetFont('Arial','B',10);
				$pdf->SetXY($x, $y3);
				$pdf->Cell(90,10,"Batch: $batch  BBE: $bbe  $quantity $unit",0);
				
				if($y == 1){
					$pdf->SetFont('Arial','B',12);
					$pdf->SetXY($x, $y4);
					$pdf->Cell(90,10,"SAMPLE",0);	
				}
				
				$y++;
				
				$label++;
				if($column==1){
					$column = 2;
				}else{
					$column = 1;
					$row++;
				}
					
			}
				
    	}
    	
    	$pdf->Output('F','small-labels.pdf');
    	
    	$pdf = new FPDF();
		$pdf->AddPage();
    	$pdf->SetFont('Arial','B',14);
		$pdf->Cell(90,10,"BIG LABEL",0);
    	$pdf->Output('F','big-labels.pdf');
    	
    	$files = array('small-labels.pdf','big-labels.pdf');
		$zipname = 'file.zip';
		$zip = new ZipArchive;
		$zip->open($zipname, ZipArchive::CREATE);
		foreach ($files as $file) {
		  $zip->addFile($file);
		}
		$zip->close();
    	
	}