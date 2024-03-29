<?php
	
	if (!$CurrentUser->has_priv('natures_laboratory.labels')) exit;
	
	$NaturesLaboratoryLabels = new Natures_Laboratory_Labels($API);
	$NaturesLaboratoryLabelsProducts = new Natures_Laboratory_Labels_Products($API);
    
    $HTML = $API->get('HTML');
    $Form = $API->get('Form');
    
    $Goods = array();
    $details = array();
    
    $products = $NaturesLaboratoryLabels->getStock();

    if($Form->submitted()) {
    
        //FOR ITEMS PROGRAMMATICALLY ADDED TO FORM
        $postvars = array('productCode','batch','bbe_year','bbe_month','bbe_day','size','quantity');	   
    	$data = $Form->receive($postvars);     
    	
    	$data['bbe'] = "$data[bbe_year]-$data[bbe_month]-$data[bbe_day]";
    	$productBBE = $data['bbe_month'].'/'.$data['bbe_year'];
    	unset($data['bbe_year']);
    	unset($data['bbe_month']);
    	unset($data['bbe_day']);

        $new_label = $NaturesLaboratoryLabels->create($data);
        
        // GET PRODUCT DATA
        $product = $NaturesLaboratoryLabelsProducts->getProduct($data['productCode']);
        $productType = $product['productType'];
        $productName = $product['productName'];
        $productCode = $product['productCode'];
        $productNotes = $product['notes'];
        $productOrganic = $product['organic'];
        $productRestriction = $product['restriction'];
        
        // GET BG IMAGE
        $productLabel = '../../label_standard.jpg';
        if($productOrganic == 'organic' AND $productRestriction==''){
	        if($product['productType']=='Cut Herb' OR $product['productType']=='Whole Herb' OR $product['productType']=='Whole' OR $product['productType']=='Powder'){
	        	$productLabel = '../../label_organic_herb.jpg';
	        }else{
		        $productLabel = '../../label_organic.jpg';
	        }
        }elseif($productRestriction == 'allergen' AND $productOrganic==''){
	        $productLabel = '../../label_allergen.jpg';
        }elseif($productRestriction == 'poison' AND $productOrganic==''){
	        $productLabel = '../../label_poison.jpg';
        }elseif($productOrganic=='organic' AND $productRestriction=='allergen'){
	        if($product['productType']=='Cut Herb' OR $product['productType']=='Whole Herb' OR $product['productType']=='Whole' OR $product['productType']=='Powder'){
	        	$productLabel = '../../label_organic_herb_allergen.jpg';
	        }else{
		        $productLabel = '../../label_organic_allergen.jpg';
	        }
        }elseif($productOrganic=='organic' AND $productRestriction=='poison'){
	        if($product['productType']=='Cut Herb' OR $product['productType']=='Whole Herb' OR $product['productType']=='Whole' OR $product['productType']=='Powder'){
	        	$productLabel = '../../label_organic_herb_poison.jpg';
	        }else{
		        $productLabel = '../../label_organic_poison.jpg';
	        }
        }
        
        // CREATE FOLDER
		$labelsID = $new_label->natures_laboratory_labelID();
		mkdir("../pngs/$labelsID", 0755);
		$url = "../pngs/$labelsID";
		
		$name = str_replace(array("250ml", "500ml", "1000ml", "250g", "500g", "1000g"), "", $productName);
		
		$name = wordwrap($name, 20, "<br />");
		$nameLines = explode("<br />", $name);
		
		$notes = wordwrap($productNotes, 46, "<br />");
		$notesLines = explode("<br />", $notes);
					
		// Create the image
		$im = imagecreatetruecolor(1200, 900);
		
		// Create some colors
		$green = imagecolorallocate($im, 001, 149, 135);
		
		// Replace path by your own font path
		$fontLight = '../../Helvetica.ttf';
		$fontHeavy = '../../Helvetica-Bold.ttf';
		
		// Copy the stamp image onto our photo using the margin offsets and the photo 
		// width to calculate positioning of the stamp. 
		$background = imagecreatefromjpeg($productLabel);
		imagecopy($im, $background, 0, 0, 0, 0, 1200, 900);
		
		// Add the text
		imagettftext($im, 40, 0, 40, 280, $green, $fontHeavy, ucwords($productType)." ".ucwords($productCode));
		
		$lineStart = 380;
		foreach($nameLines as $line){
			$line = trim($line);
			imagettftext($im, 40, 0, 40, $lineStart, $green, $fontLight, $line);
			$lineStart = $lineStart + 65;
		}
		
		foreach($notesLines as $line){
			$line = trim($line);
			imagettftext($im, 20, 0, 40, $lineStart, $green, $fontLight, $line);
			$lineStart = $lineStart + 26;
		}

		imagettftext($im, 20, 0, 40, 790, $green, $fontHeavy, "Batch");
		imagettftext($im, 28, 0, 40, 850, $green, $fontLight, "$data[batch]");
		
		imagettftext($im, 20, 0, 270, 790, $green, $fontHeavy, "BBE");
		imagettftext($im, 28, 0, 270, 850, $green, $fontLight, "$productBBE");
		
		imagettftext($im, 20, 0, 500, 790, $green, $fontHeavy, "Size");
		imagettftext($im, 28, 0, 500, 850, $green, $fontLight, "$data[size]");
		
		$codeContents = "https://natureslaboratory.co.uk/perch/addons/apps/natures_laboratory/products/go/?id=".$data['batch']."&size=".$data['size']."&bbe=".$productBBE;
	    $fileName = 'qr_'.str_replace("/","-",$data['batch']).'.png';
	    QRcode::png($codeContents, $fileName, QR_ECLEVEL_L, 6);
	    $qr = imagecreatefrompng($fileName);
	    imagecopyresized($im, $qr, 860, 214, 0, 0, 310, 310, 300, 300);
		unlink($fileName);
		
		// Output and free memory
		imagepng($im,"../pngs/$labelsID/label".'.png');


        // SHOW RELEVANT MESSAGE
        if ($new_label) {
            $message = $HTML->success_message('Labels have been successfully created. Return to %sLabels%s', '<a href="'.$API->app_path().'/labels/">', '</a>'); 
        }else{
            $message = $HTML->failure_message('Sorry, labels could not be created.');
        }
        
    }