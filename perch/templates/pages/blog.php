<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>
<?php
	perch_layout('global.header'); 
	// Decides to show either the default hero or specific blog hero image
	// Need to add different options for the different sections?
	perch_content_create("Default Hero Image", array(
		"template" => 'blog_hero.html'
	));
	perch_content_create("Sections", array(
		"template" => "section.html"
	));

	$heroImageUrl = perch_content("Default Hero Image", true);
	$category = "blog/" . perch_get("cat");
	if (perch_blog_post_field(perch_get('s'), 'heroImage', true)) {
		$heroImageUrl = perch_blog_post_field(perch_get('s'), 'heroImage', true);
	} else if (perch_get("cat")) {
		$heroImageUrl = perch_category($category, array(
			"template"=>"category_hero.html"
		), true);;
	}
?>
    
		<div class="title-wrapper" style="background-image: url(
		<?php 
		if ($heroImageUrl) {
			echo $heroImageUrl; 
		} else {
			perch_content_custom("Sections", array(
				"template" => "section_image.html",
				"data" => [
					"title"=>perch_get("section")
				]
			));
		}
		?>
		);">
			<?php
			// Renders either the blog title or the default blog landing page title
			echo '<h1 class="span title">';
			if(perch_get('s')){   
				perch_blog_post_field(perch_get('s'), 'postTitle');
			} else if (perch_get('q')) {
				echo "Search";
			} else if (perch_get('cat')) {
				perch_category($category, array(
					"template"=>"category_title.html"
				));;
			} else {
				echo 'The Nature\'s Laboratory Blog';
			}
			echo '</h1>';
			?>
		</div>
		<div class="restrict aside-wrapper" style="<?php if (true){ echo "display: none"; } ?>">
			<!-- <aside>

				<?php 
					// perch_blog_categories(); 
				?>
		
				<?php 
					// perch_blog_custom(array(
					// 'count'      => 10,
					// 'template'   => 'post_in_list_minimal.html',
					// 'sort'       => 'postDateTime',
					// 'sort-order' => 'DESC',
					// 'section'    => 'posts'
					// ));
				?>
				
				<?php 
					// perch_blog_tags();
				?>

			</aside> -->
		</div>
	    <div>
			<div class="blog restrict <?php if(perch_get("cat") || (perch_get("s") || (perch_get("q")))){ echo "narrow"; } ?>">


				<div class="blog-content-wrapper">
					
			    <?php 

			        if(perch_get('s')){
				        perch_blog_post(perch_get('s')); 
			        } else if (perch_get('q')) {
						perch_content_search(perch_get('q'), array(
							'count' => 5,
							'from-path' => '/blog',
							'excerpt-chars' => 300,
							'template' => 'search-result.html'
						));
					} else if (perch_get("cat")) {
						// $array = perch_content_custom("Sections", array(
						// 	'skip-template'=> true
						// ));
						// foreach ($array as $key => $value) {
						// 	echo $key . "<br/>";
						// 	foreach ($value as $subKey => $subValue) {
						// 		if ($subKey == "repeater") {
						// 			echo "--- " . $subKey . "<br/>";
						// 			foreach ($subValue as $subSubKey => $subSubValue) {
						// 				echo "------ " . $subSubKey . "<br/>";
						// 				foreach ($subSubValue as $anotherKey => $anotherValue) {
						// 					if ($anotherKey == "image") {
						// 						echo "--------- " . $anotherKey ."<br/>";
						// 						foreach ($anotherValue as $imageKey => $imageValue) {
						// 							echo "------------ " . $imageKey . ": " . $imageValue . "</br>";
						// 						}
						// 					} else {
						// 						echo "--------- " . $anotherKey . ": " . $anotherValue . "<br/>";
						// 					}
						// 				}
						// 			}
						// 		} else {
						// 			echo "--- " . $subKey . ": " . $subValue . "<br/>";
						// 		}
						// 	}
						// }
						//echo $array[0]['repeater'][0]['image']['title'];
						perch_blog_custom(array(
							'count'      => 10,
							'template'   => 'post_in_list.html',
							'sort'       => 'postDateTime',
							'sort-order' => 'DESC',
							'section'    => 'posts',
							'category' => perch_get("cat"),
							'data' => [
								'category'=> perch_get("cat")
							]
						  ));
					} else {
				        // perch_blog_custom(array(
						//   'count'      => 10,
						//   'template'   => 'post_in_list.html',
						//   'sort'       => 'postDateTime',
						//   'sort-order' => 'DESC',
						//   'section'    => 'posts',
						  
						// ));
						perch_categories(array(
							"set" => "blog",
							"template"=>"blog_category.html"
						));
			       	}
			    ?>
				</div>

			    
			    
			</div>
	    </div>

    <?php 
	    perch_layout('global.footer'); 
    ?>