//
// CGIT Optimizely Boilerplate - version 0.1.4
//
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

	// Initialise the experiment object
	var exp = {};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('AWA - Commercial Panels');


	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		expHTML: '<div class="row AWA-breadcrumb-target"> <div class="columns_mav columns small-12 large-6"> <h1>The High Quality Alternative to Tiles for Beautiful Modern Homes</h1> <div style="" class="mid-block inner-shadow lefts"> <ul class="tiles-link lefts"> <li><a href="#">Perfect for showers, bathrooms and kitchens</a></li> <li><a href="javascript:void(0);">Strong, stylish and <strong>100% waterproof</strong></a></li> <li><a href="javascript:void(0);">Easy to install with basic DIY skills</a></li> <li><a href="javascript:void(0);"><strong>Free UK delivery</strong> on orders over £100</a></li> <li><a href="javascript:void(0);">Guaranteed for <strong>10 years</strong></a></li> </ul> </div> </div> <div class="background-grey-green columns_mav columns small-12 large-6"> <img class="advice-gary" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/b2188c284f8da2ec6ccc57fb24985f3d_advice-gary.png"> <span class="heading-advice-white"><strong>Need Advice?</strong><br> <strong>Our team are here to help</strong> <br><br> Call <strong>0114 2799188</strong></span> <br><bR> <span class="name-advice-gary">Gary Wells, Product Advisor, on hand to assist you</span> </div> </div> <div class="row"> <div class="small-12 medium-12 large-12"> <div id="mobile" class="extra-mobile"><strong class="center"><br>Choose from wall panels, shower kits, ceiling panels or flooring:</strong></div> <div class="wallpanel"><img class="height-limit-top" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/1a7f4ade3659e1ec98ac2836dde8bfcd_background-wallpanel.jpg"><img class="tenth-award" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/84eddd518aa716ca0861f73cec107075_10years.png"><div class="tiles-title">Wall Panels</div><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/wall-panels-all.html"><img align="right" class="btn-orange" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/606c5542a05886c5800d53519da21318_btn-orange.png"></a></div> <div class="showerkit"><img class="height-limit" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/7295093462d36739c2e8875b73ff0869_background-showerkit.jpg"><img class="tenth-award" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/84eddd518aa716ca0861f73cec107075_10years.png"><div class="tiles-title-small"><a class="no-dec" href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-panels/shower-wall-kits-all.html">Shower Kits &nbsp;<span class="orange">&#62;</span></a></div></div> <div class="ceiling"><img class="height-limit" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/78f266a8d3e8f235b60185d443e1d8a1_background-ceiling.jpg"><img class="tenth-award" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/84eddd518aa716ca0861f73cec107075_10years.png"><div class="tiles-title-small"><a class="no-dec" href="https://www.ipsluk.co.uk/bathroom-wall-panels/ceiling-cladding/ceiling-panels-all.html">Ceiling Panels &nbsp;<span class="orange">&#62;</span></a></div></div> <div class="flooring"><img class="height-limit" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/fd61500dd3393253ac35f5c981679be3_background-flooring.jpg"><img class="tenth-award" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/84eddd518aa716ca0861f73cec107075_10years.png"><div class="tiles-title-small"><a class="no-dec" href="https://www.ipsluk.co.uk/bathroom-wall-panels/bathroom-flooring/waterproof-laminate-flooring.html">Flooring &nbsp;<span class="orange">&#62;</span></a></div></div> </div> </div> <br><br> <h2 class="center">Our Hygienic, Waterproof Panels are Mould Free, Scratch Resistant and have a 10 Year Warranty</h2> <div class="row AWA-IE-bug-fix"> <table class="table-domestic table-domestic-width-one"> <tbody> <tr class="border-none"> <td></td> <td><img class="image-example" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/839064b24c73f548b3563a1fd54779d3_aquabord-laminate.png"><br>Aquabord Laminate</td> <td><img class="image-example" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/e9386a0d78ff3c7f8f423b4e309acbdf_aquabord_pvc.png"><br>Aquabord PVC</td> <td><img class="image-example" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/0f33532f52bc6e34d65d0f62a2a0d86d_aquaclad.png"><br>Aquaclad</td> </tr> <tr> <td class="table-background-darkgreen">Used for</td> <td class="table-background-darkgreen">Walls</td> <td class="table-background-darkgreen">Walls</td> <td class="table-background-darkgreen">Walls & Ceilings</td> </tr> <tr> <td class="table-background-lightgreen">Size <span style="font-weight:normal">(W x H)</span></td> <td class="table-background-midgrey">1200 x 2400mm</td> <td class="table-background-midgrey">1000 x 2400mm</td> <td class="table-background-midgrey">250 x 2700mm<sup>*</sup></td> </tr> <tr> <td class="table-background-midgreen">Thickness</td> <td class="table-background-lightgrey">10mm</td> <td class="table-background-lightgrey">10.5mm</td> <td class="table-background-lightgrey">8 or 10mm</td> </tr> <tr> <td class="table-background-lightgreen">Solid/Hollow</td> <td class="table-background-midgrey">Solid w/ Foam Core</td> <td class="table-background-midgrey">Hollow Section</td> <td class="table-background-midgrey">Hollow Section</td> </tr> <tr> <td class="table-background-midgreen">Tongue & Groove</td> <td class="table-background-lightgrey">No</td> <td class="table-background-lightgrey"><div class="yes-left">Yes</div><div class="yes-left dont-show"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/92c3f7be02fbee961c347359ee19e19a_green-arrow.png"></div></td> <td class="table-background-lightgrey"><div class="yes-left">Yes</div><div class="yes-left dont-show"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/92c3f7be02fbee961c347359ee19e19a_green-arrow.png"></div></td> </tr> <tr> <td class="table-background-lightgreen">Separate Joint Trim</td> <td class="table-background-midgrey"><div class="yes-left">Yes</div><div class="yes-left dont-show"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/92c3f7be02fbee961c347359ee19e19a_green-arrow.png"></div></td> <td class="table-background-midgrey">No</td> <td class="table-background-midgrey">No</td> </tr> <tr> <td class="table-background-midgreen">Scratch Resistance</td> <td class="table-background-lightgrey">Very High</td> <td class="table-background-lightgrey">Good</td> <td class="table-background-lightgrey">Good</td> </tr> </tbody> </table> <table class="table-domestic table-domestic-width-two"> <tbody> <tr class="border-none"> <td id="mobile"><br><br></td> <td><img class="image-example" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/5f3e3f88ca5a927b159bb81e78969589_aquaclad-long.png"><br>Aquaclad Long</td> <td><img class="image-example" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/a9c2f279d1ec949b69347bce5ffdee6b_dumawall.png"><br>Dumawall</td> <td><img class="image-example" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/a38f4bea5f43c88d35dbc1fc903dbf72_proclad.png"><br>Proclad</td> </tr> <tr style="vertical-align:middle"> <td id="mobile" class="table-background-darkgreen">Used for</td> <td class="table-background-darkgreen">Ceilings</td> <td class="table-background-darkgreen">Walls</td> <td class="table-background-darkgreen">Walls</td> </tr> <tr> <td id="mobile" class="table-background-lightgreen">Size <span style="font-weight:normal">(W x H)</span></td> <td class="table-background-midgrey">250 x 6000mm</td> <td class="table-background-midgrey">650 x 375mm</td> <td class="table-background-midgrey">1220 x 2440mm</td> </tr> <tr> <td id="mobile" class="table-background-midgreen">Thickness</td> <td class="table-background-lightgrey">10mm</td> <td class="table-background-lightgrey">5mm</td> <td class="table-background-lightgrey">2.5mm</td> </tr> <tr> <td id="mobile" class="table-background-lightgreen">Solid/Hollow</td> <td class="table-background-midgrey">Hollow Section</td> <td class="table-background-midgrey">Solid</td> <td class="table-background-midgrey">Solid</td> </tr> <tr> <td id="mobile" class="table-background-midgreen">Tongue & Groove</td> <td class="table-background-lightgrey"><div class="yes-left">Yes</div><div class="yes-left dont-show"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/92c3f7be02fbee961c347359ee19e19a_green-arrow.png"></div></td> <td class="table-background-lightgrey"><div class="yes-left">Yes</div><div class="yes-left dont-show"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/92c3f7be02fbee961c347359ee19e19a_green-arrow.png"></div></td> <td class="table-background-lightgrey">No</td> </tr> <tr> <td id="mobile" class="table-background-lightgreen">Separate Joint Trim</td> <td class="table-background-midgrey">No</td> <td class="table-background-midgrey">No</td> <td class="table-background-midgrey"><div class="yes-left">Yes</div><div class="yes-left dont-show"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/92c3f7be02fbee961c347359ee19e19a_green-arrow.png"></div></td> </tr> <tr> <td id="mobile" class="table-background-midgreen">Scratch Resistance</td> <td class="table-background-lightgrey">Good</td> <td class="table-background-lightgrey">Good</td> <td class="table-background-lightgrey">High</td> </tr> </tbody> </table> </div> <div class="columns_mav columns small-12 large-12"> <h2>How to Buy:</h2> <img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/7303be4d9da911bd17985431d579ea4a_step1.jpg"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/d7ef186878cf345560c496ef865454d9_step2.jpg"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/4ea7b3be659736d7206865cf8c49725e_step3.jpg"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/c605397459b4dc62c8ae970884a89db6_step4.jpg"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/5b5f47b6e045a63f8a8a0365c44a19d5_step5.jpg"> </div> <div class="columns_mav columns small-12 large-12"> <h2 class="line-height-change"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/ebbef8f59c120f105837c5ac7e854e19_number1.jpg">Choose Your Design </h2> <table class="table-domestic-design choose-design"> <tbody> <tr> <td class="table-background-darkgreen">Colour</td> <td class="table-background-darkgrey">IPSL Product</td> </tr> <tr> <td class="table-background-midgreen">Stone</td> <td class="table-background-midgrey"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-laminate-panels-1200mm-width.html">Aquabord Laminate</a>  or  <a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-pvc-panels-1000mm.html">Aquabord PVC</a>  or  <a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquaclad-pvc-narrow-wall-panels.html">Aquaclad PVC</a></td> </tr> <tr> <td class="table-background-lightgreen">Marble</td> <td class="table-background-lightgrey"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-laminate-panels-1200mm-width.html">Aquabord Laminate</a>  or  <a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-pvc-panels-1000mm.html">Aquabord PVC</a>  or  <a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquaclad-pvc-narrow-wall-panels.html">Aquaclad PVC</a></td> </tr> <tr> <td class="table-background-midgreen">Travertine</td> <td class="table-background-midgrey"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-laminate-panels-1200mm-width.html">Aquabord Laminate</a>  or  <a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-pvc-panels-1000mm.html">Aquabord PVC</a>  or  <a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquaclad-pvc-narrow-wall-panels.html">Aquaclad PVC</a></td> </tr> <tr> <td class="table-background-lightgreen">White Gloss</td> <td class="table-background-lightgrey"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-laminate-panels-1200mm-width.html">Aquabord Laminate</a>  or  <a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-pvc-panels-1000mm.html">Aquabord PVC</a>  or  <a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquaclad-pvc-narrow-wall-panels.html">Aquaclad PVC</a></td> </tr> <tr> <td class="table-background-midgreen">White Satin</td> <td class="table-background-midgrey"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquaclad-pvc-narrow-wall-panels-14.html">Aquabord Long</a> or <a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-pvc-panels-1000mm.html">Aquabord PVC</a></td> </tr> <tr> <td class="table-background-lightgreen">Mosaic</td> <td class="table-background-lightgrey"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquaclad-pvc-narrow-wall-panels.html">Aquaclad</a></td> </tr> <tr> <td class="table-background-midgreen">Woodgrain</td> <td class="table-background-midgrey"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquaclad-pvc-narrow-wall-panels.html">Aquaclad</a></td> </tr> <tr> <td class="table-background-lightgreen">Stone-look Tiles</td> <td class="table-background-lightgrey"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquaclad-pvc-narrow-wall-panels.html">Aquaclad</a> or <a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/dumawall-tile-wall-panels.html">Dumawall</a></td> </tr> <tr> <td class="table-background-midgreen">Solid Colours</td> <td class="table-background-midgrey"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/proclad-solid-colour-cladding.html">Proclad</a> or <a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-panels/mermaid-panel-kits.html">Mermaid Kits</a></td> </tr> </tbody> </table> </div> <div class="columns_mav columns small-12 large-12"> <h2 class="line-height-change"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/0fccba2b30d8ba1f33fe64e73ca52b9f_number2.jpg">Choose Your Product </h2> <table class="table-domestic-design"> <tbody> <tr> <td class="table-background-darkgreen">Product</td> <td class="table-background-darkgrey">Uses and Benefits</td> </tr> <tr> <td class="table-background-lightergreen"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-laminate-panels-1200mm-width.html">Aquabord Laminate</a></td> <td class="table-background-midgrey">Gives you a stunning high quality scratch resistent finish with a luxury feel </td> </tr> <tr> <td class="table-background-lightestgreen"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquabord-pvc-panels-1000mm.html">Aquabord PVC</a></td> <td class="table-background-lightgrey">Offers stylish good looks with an easy tongue-and-groove installation system</td> </tr> <tr> <td class="table-background-lightergreen"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquaclad-pvc-narrow-wall-panels.html">Aquaclad PVC</a></td> <td class="table-background-midgrey">Narrow width toungue-&-groove wall panels for really easy installation and come in a huge range of finishes at a great value price</td> </tr> <tr> <td class="table-background-lightestgreen"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/aquaclad-pvc-narrow-wall-panels-14.html">Aquaclad Long</a></td> <td class="table-background-lightgrey">Long and narrow for ceilings or high walls. They come in whute only, in matt, gloss, satin or woodgrain finish </td> </tr> <tr> <td class="table-background-lightergreen"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/dumawall-tile-wall-panels.html">Dumawall Tile Panels</a></td> <td class="table-background-midgrey"> Have an integral grout line for the look of tiles, without the fiddly installation or mould issues</td> </tr> <tr> <td class="table-background-lightestgreen"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-wall-panels/proclad-solid-colour-cladding.html">Proclad</a></td> <td class="table-background-lightgrey">Is the wall cladding used by professionals and comes in a range of bright solid colours </td> </tr> <tr> <td class="table-background-lightergreen">Aquafloor</td> <td class="table-background-lightgrey">Planks and tiles slot together like traditional laminate flooring but are designed for wet conditions </td> </tr> <tr> <td class="table-background-lightestgreen"><a href="https://www.ipsluk.co.uk/bathroom-wall-panels/shower-panels/mermaid-panel-kits.html">Mermaid</a></td> <td class="table-background-lightgrey">Comes as a kit and offers bright solid colours for showers and bathrooms</td> </tr> </tbody> </table> <p>All are available to buy as a kit with all the joints, trims, sealants, fixings and adhesives, or you can buy all the items individually.</p> </div> <div class="columns_mav columns small-12 large-12"> <h2 class="line-height-change"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/9a1786278a61edc9668e859e98d059e4_number3.jpg">Select Your Panels </h2> <p> Measure your walls and order sufficient panels for the area required. The size of each panel is clearly shown on the product page. If you would like us to work out how many panels you need, then please give us a call on <strong>0114 2799 188</strong></p> </div> <div class="columns_mav columns small-12 large-12"> <h2 class="line-height-change"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/af69c8c8559bb6901d1711ec3626de39_number4.jpg">Add Trims and Fixings </h2> <p> Add the right quantity of edge trims, joint trims, corner trims, fixings, seals and adhesive. The products you need are shown in the installation/ technical info section at the bottom of each product page, or phone us for advice on <strong>0114 2799 188</strong></p> </div> <div class="columns_mav columns small-12 large-12"> <h2 class="line-height-change"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/227f36b91beb0ae8a5397dfd90d847eb_number5.jpg">Install Using Simple DIY Skills </h2> <p> Panels are very easy to install. Simply attach fixing trims to the walls with adhesive or screws, then attach panels to the fixing trims. Finally apply finishing trims and sealant and you’re done.</p> </div> <div class="columns small-12 large-12"> <table class="noborder"> <tr> <td><img align="center" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/814544717a85474ef45123a4456494f5_guarantee.jpg"></td> <td> <h2>Our panels are unbeatable quality, that’s why they have a 10 year guarantee. </h2> </td> </tr> </table> </div> '
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		.line-height-guarantee\
		{\
		  line-height:45px;\
		}\
		table.noborder\
		{\
		  border: 0px;\
		  text-align: center;\
		  vertical-align: middle;\
		  margin-top: 40px;\
		}\
		table.noborder img\
		{\
		  min-width: 100px;\
		}\
		.panel-need\
		{\
		  float: left;\
		  width:14%;\
		  border-right: 1px solid #ffffff;\
		  text-align: center;\
		  font-weight: bold;\
		  padding-top:150px;\
		  padding-bottom: 15px;\
		}\
		.panel-need a:link\
		{\
		  font-weight: normal;\
		  color: #006faf;\
		  text-decoration: underline;\
		  font-size: 11px;\
		}\
		.panel-need img\
		{\
		  margin:0px auto;\
		  text-align: center;\
		  width: 65%;\
		  padding-top:20px;\
		}\
		.panel-need-one\
		{\
		  background-image: url(http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/5a309945d461216deb984a0eeaff9619_panel-need-one.jpg);\
		  background-size: contain;\
		  background-repeat: no-repeat;\
		  background-position: top center;\
		  background-color: #dedede;\
		}\
		.panel-need-two\
		{\
		  background-image: url(http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/e3f1e872587bef64c10b61f942d7030b_panel-need-two.jpg);\
		  background-size: contain;\
		  background-repeat: no-repeat;\
		  background-position: top center;\
		  background-color: #eaeaea;\
		}\
		.panel-need-three\
		{\
		  background-image: url(http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/19de43a70f2f61da43f37af29a0354ee_panel-need-three.jpg);\
		  background-size: contain;\
		  background-repeat: no-repeat;\
		  background-position: top center;\
		  background-color: #dedede;\
		}\
		.panel-need-four\
		{\
		  background-image: url(http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/f3de4f564e8960fb22f1d8b7b74a09d1_panel-need-four.jpg);\
		  background-size: contain;\
		  background-repeat: no-repeat;\
		  background-position: top center;\
		  background-color: #eaeaea;\
		}\
		.panel-need-five\
		{\
		  background-image: url(http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/0c4c2c3ab48512b7d79c157631c1bd0f_panel-need-five.jpg);\
		  background-size: contain;\
		  background-repeat: no-repeat;\
		  background-position: top center;\
		  background-color: #dedede;\
		}\
		.panel-need-six\
		{\
		  background-image: url(http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/e91034ab1954417bb28e6cf50ef4c618_panel-need-six.jpg);\
		  background-size: contain;\
		  background-repeat: no-repeat;\
		  background-position: top center;  \
		  background-color: #eaeaea;\
		}\
\
		.panel-need-seven\
		{\
		  background-image: url(http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/b5a45f1863e4e29cefe7b1a2397afe66_panel-need-seven.jpg);\
		  background-size: contain;\
		  background-repeat: no-repeat;\
		  background-position: top center;\
		  background-color: #dedede;\
		}\
		tr.best-seller td\
		{\
		  text-align:center;\
		  height: 130px;\
		}\
		.frame-right\
		{\
		 border-right: 1px solid #cbcbcb; \
		}\
		.frame-top\
		{\
		  border-top: 1px solid #cbcbcb;\
		  margin-top: 35px;\
		}\
		tr.best-seller td.yellow\
		{\
		background-color: #ffc343;\
		}\
		.yellow-border\
		{\
		  border-right: 2px solid #ffc343 !important;\
		  border-left: 2px solid #ffc343 !important;\
		}\
		tr.best-seller td.yellow h3\
		{\
		  color: #ffffff;\
		}\
		.background-green\
		{\
		  margin-bottom: 10px;\
		  background-color: #008e83;\
		  padding: 20px 10px 10px 10px;\
		}\
		.green-grey-edge\
		{\
		  position: absolute;\
		  right: -15px;\
		  top: 0px;\
		}\
		p.width-resize\
		{\
		  width: 85%;\
		}\
		.specifics-inline\
		{\
		  font-weight: bold;\
		  color: #ffffff;\
		  font-size:16px;\
		  width: 100%;\
		}\
		.specifics-inline li\
		{\
		 margin-right: 7px;\
		}\
		.author-paul\
		{\
		  display:inline-block;\
		  margin-top:22px;\
		}\
		.background-lightgrey\
		{\
		  background-image: url(http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/4cd3d09bb81c715128979640ea264046_green-grey-bg.jpg);\
		  background-repeat: repeat-x;\
		  background-color: #dedede;\
		  position:relative;\
		}\
		.mid-block .tiles-link {\
		    width:100%;\
		    display:inline;\
		    float:left;\
		    margin:10px 0px 20px 0px;\
		}\
		.mid-block .tiles-link li {\
		    display:inline;\
		    float:left;\
		    margin-right: 0px;\
		    background:url(http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/92c3f7be02fbee961c347359ee19e19a_green-arrow.png) no-repeat scroll left center;\
		    padding:3px 0 3px 40px;\
		}\
		.mid-block .tiles-link li a {\
		    font-family: "Open Sans",sans-serif;\
		    color:#010101;\
		    font-size:18px;\
		    /*font-weight:bolder;*/\
		    font-weight:normal !important;\
		}\
		.mid-block .tiles-link li:first-child {\
		}\
		.mid-block .tiles-link li a {\
		    font-size:18px;\
		    padding:5px 0px 5px 0px;\
		    cursor: default;\
		}\
		.mid-block .tiles-link li.current a {\
		    color:#069e92;\
		    font-size:18px;\
		}\
		.mid-block .tiles-link li a:hover {\
		    /*color:#069e92;*/\
		}\
		.mid-block .tiles-link li a {\
		    font-family: "Open Sans",sans-serif;\
		    color: #010101;\
		    font-size: 18px;\
		    font-weight: normal; \
		}\
		.commercial .tiles-link {\
		    width:100%;\
		    display:inline;\
		    float:left;\
		    margin:10px 0px 20px 0px;\
		}\
		.commercial .tiles-link li {\
		    display:block;\
		    margin-right: 0px;\
		    background:url(http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/92c3f7be02fbee961c347359ee19e19a_green-arrow.png) no-repeat scroll left center;\
		    padding:3px 0 3px 50px;\
		}\
		.commercial .tiles-link li a {\
		    font-family: "Open Sans",sans-serif;\
		    color:#010101;\
		    font-size:18px;\
		    /*font-weight:bolder;*/\
		    font-weight:normal !important;\
		}\
		.commercial .tiles-link li:first-child {\
		}\
		.commercial .tiles-link li a {\
		    font-size:18px;\
		    padding:5px 0px 5px 0px;\
		    cursor: default;\
		}\
		.commercial .tiles-link li.current a {\
		    color:#069e92;\
		    font-size:18px;\
		}\
		.commercial .tiles-link li a:hover {\
		    /*color:#069e92;*/\
		}\
		.commercial .tiles-link li a {\
		    font-family: "Open Sans",sans-serif;\
		    color: #010101;\
		    font-size: 18px;\
		    font-weight: normal; \
		}\
		.yes-left\
		{\
		  float:left;\
		  text-align:left;\
		  height:30px;\
		  line-height:28px;\
		  display:inline-block;\
		}\
		.background-grey-green\
		{\
		  background-color:#d1d1d1;\
		  background-image: url(http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/60d190fd65974d9e64a5a3d11cd02b43_background-green-gray.gif);\
		  background-repeat: repeat-x;\
		}\
		.image-padding\
		{\
		  margin-top:12px;\
		}\
		.heading-advice-white\
		{\
		  font-size: 24px;\
		  line-height:28px;\
		  color: #ffffff;\
		  display:inline-block;\
		  top:70px;\
		  left:190px;\
		  padding-bottom:110px;\
		  position: relative;\
		}\
		.heading-advice-white-paul\
		{\
		  font-size: 24px;\
		  line-height:28px;\
		  color: #ffffff;\
		  display:inline-block;\
		  padding-top:20px;\
		  padding-left:150px;\
		  padding-bottom: 20px;\
		  position: relative;\
		  width: 100%;\
		}\
\
		img.advice-gary\
		{\
		  left:-30px;\
		  top: 20px;\
		  position:absolute;\
		}\
		img.advice-paul\
		{\
		  left:-50px;\
		  top: -17px;\
		  position:absolute;\
		  /*width: 180px;*/\
		  z-index: 4;\
		}\
		.name-advice-gary\
		{\
		  color: #333333;\
		  font-size: 20px;\
		  line-height:22px;\
		  display: inline-block;\
		  width:100%;\
		  text-align:center;\
		  position: relative;\
		  padding-bottom:30px;\
		}\
		img.categories-images-first\
		{\
		  float:left;\
		  border-top:7px solid #ffffff;\
		}\
		img.categories-images-last\
		{\
		  float:left;\
		  border-top:7px solid #ffffff;\
		  border-left:7px solid #ffffff;\
		}\
		img.categories-images\
		{\
		  float:left;\
		  border-top:7px solid #ffffff;\
		  border-left:7px solid #ffffff;\
		}\
		.height-limit, .height-limit-top\
		{\
		  min-height:230px;\
		}\
		.wallpanel\
		{\
		  background-color: #333333;  \
		  border-right: 6px solid #ffffff;\
		  border-top: 10px solid #ffffff;\
		  float:left;\
		  position:relative;\
		  height:296px;\
		  max-width: 510px;\
		}\
		.showerkit\
		{\
		  background-color: #333333;\
		  border-right: 6px solid #ffffff;\
		  border-top: 10px solid #ffffff;\
		  float:left;\
		  position:relative;\
		  height:296px;\
		  max-width: 230px;\
		}\
		.ceiling\
		{\
		  background-color: #333333;\
		  border-right: 6px solid #ffffff;\
		  border-top: 10px solid #ffffff;\
		  float:left;\
		  position:relative;\
		  height:296px;\
		  max-width: 229px;\
		}\
		.flooring\
		{\
		  background-color: #333333;\
		  border-top: 10px solid #ffffff;\
		  float:left;\
		  height:296px;\
		  max-width: 230px;\
		  position:relative;\
		}\
		.tiles-title\
		{\
		  display:inline-block;\
		  padding-left: 20px;\
		  padding-top: 16px;\
		  padding-bottom: 16px;\
		  color: #ffffff;\
		  font-size:18px;\
		}\
		.tiles-title-small\
		{\
		  display:inline-block;\
		  padding-left: 20px;\
		  padding-top: 17px;\
		  padding-bottom: 20px;\
		  color: #ffffff;\
		  font-size:14px;\
		}\
		.tenth-award\
		{\
		  width:90px;\
		  height:83px;\
		  position: absolute;\
		  right:1px;\
		  top:-4px;\
		}\
		.table-domestic\
		{\
		  border:0px;\
		  padding:0px;\
		  float:left;\
		}\
		.table-domestic-design\
		{\
		  border:0px;\
		  padding:0px;\
		  width: 100%;\
		}\
		.table-domestic-width-one\
		{\
		  width: 675px;\
		}\
		.table-domestic-width-two\
		{\
		 width: 525px; \
		}\
		.table-domestic td\
		{\
		  border:1px solid #f5f5f5;\
		}\
		.table-domestic tr.border-none td\
		{\
		  border:0px;\
		  border-right:2px solid #f5f5f5;\
		  text-align: center;\
		  font-weight: bold;\
		}\
		.table-domestic tr\
		{\
		  height: 52px;\
		}\
		p\
		{\
		  font-size: 18px;\
		  color: #000000;\
		}\
		table.choose-design a:link, table.choose-design a:active, table.choose-design a:hover, table.choose-design a:visited\
		{\
		  color: #0088c7 !important;\
		  font-weight: bold;\
		  text-decoration: underline;\
		}\
		.table-domestic .image-example\
		{\
		  width: 153px;\
		  height: 153px;\
		}\
		.table-background-darkgreen\
		{\
		  background-color:#266663;\
		  color: #ffffff;\
		  font-weight: bold;\
		}\
		.table-background-midgreen\
		{\
		  background-color:#3a9d98;\
		  color: #ffffff;\
		  font-weight: bold;\
		}\
		.table-background-lightgreen\
		{\
		  background-color: #6fc3bc;\
		  color: #ffffff;\
		  font-weight: bold;\
		}\
		.table-background-lightergreen\
		{\
		  background-color: #d4e5e3;\
		  color: #0088c7;\
		  font-weight: bold;\
		}\
		.table-background-lightestgreen\
		{\
		  background-color: #c3d6d5;\
		  color: #0088c7;\
		  font-weight: bold;\
		}\
\
		.table-background-darkgrey\
		{\
		  background-color:#8f8f8f;\
		  font-weight: bold;\
		  color: #ffffff;\
		}\
\
		.table-background-midgrey\
		{\
		  background-color:#c7c7c7;\
		}\
\
		.table-background-lightgrey\
		{\
		  background-color:#e3e3e3;\
		}\
\
		h2.line-height-change\
		{\
		  line-height:58px;\
		  display: inline-block;\
		  margin-top:25px;\
		}\
		h2.line-height-change img\
		{\
		  margin-right:7px;\
		}\
\
		span.line-height-change\
		{\
		  line-height:25px;\
		  display: inline-block;\
		  width: 100%;\
		  margin-top:12px;\
		  color: #000000;\
		  font-size: 16px;\
		}\
		span.line-height-change img\
		{\
		  margin-right:7px;\
		  margin-left: 15%;\
		}\
\
		.orange\
		{\
		  color: #e28400;\
		  font-weight: bold;\
		}\
		/* MOBILE STYLES */\
		@media (max-width: 468px) {\
\
\
		.panel-need\
		{\
		  float: left;\
		  width:49%;\
		  border-right: 1px solid #ffffff;\
		  border-bottom: 1px solid #ffffff;\
		  text-align: center;\
		  font-weight: bold;\
		  padding-top:150px;\
		  padding-bottom: 15px;\
		}\
\
		  .frame-right\
		{\
		 border: 0px;\
		}\
		  .btn-orange\
		  {\
		    width:50%;\
		  }\
\
		  .height-limit-top\
		  {\
		    min-height:auto;\
		  }\
\
		  .tiles-title\
		  {\
		    display:inline-block;\
		    padding-left: 8px;\
		    padding-top: 6px;\
		    padding-bottom: 5px;\
		    color: #ffffff;\
		    font-size:13px;\
		  }\
		  .tiles-title-small\
		  {\
		    display:inline-block;\
		    padding-left: 6px;\
		    padding-top: 10px;\
		    padding-bottom: 10px;\
		    color: #ffffff;\
		    font-size:12px;\
		  }\
		  .tenth-award\
		  {\
		    width:55px;\
		    height: auto;\
		  }\
		  .height-limit\
		  {\
		    min-height:auto;\
		    max-height:103px;\
		  }\
		  .wallpanel\
		  {\
		    background-color: #333333;  \
		    border-right: 6px solid #ffffff;\
		    border-top: 10px solid #ffffff;\
		    float:left;\
		    position:relative;\
		    height:auto;\
		    max-width: 66%;\
		    min-width: 66%;\
		  }\
		  .extra-mobile\
		  {\
		    width:33%;\
		    height:auto;\
		    float: left;\
		    padding: 0px 10px;\
		    position: relative;\
		  }\
		  .showerkit\
		  {\
		    background-color: #333333;\
		    border-right: 6px solid #ffffff;\
		    border-top: 10px solid #ffffff;\
		    float:left;\
		    position:relative;\
		    height:auto;\
		    max-width: 33%;\
		  }\
		  .ceiling\
		  {\
		    background-color: #333333;\
		    border-right: 6px solid #ffffff;\
		    border-top: 10px solid #ffffff;\
		    float:left;\
		    position:relative;\
		  height:auto;\
		    max-width: 33%;\
		  }\
		  .flooring\
		  {\
		    background-color: #333333;\
		    border-top: 10px solid #ffffff;\
		    float:left;\
		  height:auto;\
		    max-width: 33%;\
		    position:relative;\
		  }\
		  h2.line-height-change\
		  {\
		    line-height:36px;\
		    font-size: 17px;\
		    display: inline-block;\
		    margin-top:25px;\
		  }\
		  h2.line-height-change img\
		  {\
		    width:40px;\
		  }\
\
		  .commercial .tiles-link li a {\
		      font-family: "Open Sans",sans-serif;\
		      color: #010101;\
		      font-size: 12px;\
		      font-weight: normal;\
		    }\
		  .dont-show\
		  {\
		    display: none;\
		  }\
		  p\
		  {\
		    font-size: 14px;\
		    color: #000000;\
		  }\
		  .name-advice-gary\
		  {\
		    font-size: 15px;\
		    line-height:17px;\
		    padding-bottom:20px;\
		  }\
		    .heading-advice-white\
		  {\
		      font-size: 17px;\
		      line-height:20px;\
		      color: #ffffff;\
		      display:inline-block;\
		      top:80px;\
		      left:150px;\
		      padding-bottom:110px;\
		      position: relative;\
		      width: 50%;\
		  }\
		  .heading-advice-white-paul\
		  {\
		      font-size: 17px;\
		      line-height:20px;\
		      color: #ffffff;\
		      display:inline-block;\
		      top:10px;\
		      left:0px;\
		      padding-bottom:30px;\
		      position: relative;\
		      width: 100%;\
		  }\
		  img.advice-gary\
		  {\
		    left:0px;\
		    top: 48px;\
		    width: 165px;\
		    position:absolute;\
		  }\
		  img.advice-paul\
		  {\
		    left:0px;\
		    top: 10px;\
		    width: 160px;\
		    position:absolute;\
		  }\
		  .table-domestic td\
		  {\
		    font-size:11px;\
		  }\
		  .table-domestic tr td\
		  {\
		    min-height: 55px;\
		    vertical-align: middle;\
		  }\
		  .table-domestic .image-example\
		  {\
		    width: 100%;\
		    height: auto;\
		  }\
		  .table-domestic-width-one\
		  {\
		    width: 100%;\
		  }\
		  .table-domestic-width-two\
		  {\
		    width: 100%;\
		  }\
		}\
		/* TABLET STYLES */\
		  @media (min-width: 468px) and (max-width: 1024px) {\
\
		.panel-need\
		{\
		  float: left;\
		  width:24%;\
		  border-right: 1px solid #ffffff;\
		  border-bottom: 1px solid #ffffff;\
		  text-align: center;\
		  font-weight: bold;\
		  padding-top:150px;\
		  padding-bottom: 15px;\
		}\
		.frame-right\
		{\
		 border-right: 0px;\
		 border-bottom: 1px solid #dedede;\
		}\
		.dont-show\
		{\
		  display: none;\
		}\
		.extra-mobile\
		{\
		  width:25%;\
		  height:auto;\
		  padding:0px 20px;\
		  float: left;\
		  font-size: 24px;\
		  line-height: 30px;\
		  position: relative;\
		}\
		.table-domestic-width-one\
		{\
		  width: 100%;\
		}\
		.table-domestic-width-two\
		{\
		  width: 100%;\
		}\
		.mid-block .tiles-link li a {\
		  font-family: "Open Sans",sans-serif;\
		  color: #010101;\
		  font-size: 12px;\
		  font-weight: normal;\
		}\
		.wallpanel\
		{\
		  background-color: #333333;  \
		  border-right: 6px solid #ffffff;\
		  border-top: 10px solid #ffffff;\
		  float:left;\
		  position:relative;\
		  height:auto;\
		  max-width: 70%;\
		  min-width: 70%;\
		}\
		.showerkit\
		{\
		  background-color: #333333;\
		  border-right: 6px solid #ffffff;\
		  border-top: 10px solid #ffffff;\
		  float:left;\
		  position:relative;\
		  height:auto;\
		  max-width: 33%;\
		}\
		.ceiling\
		{\
		  background-color: #333333;\
		  border-right: 6px solid #ffffff;\
		  border-top: 10px solid #ffffff;\
		  float:left;\
		  position:relative;\
		  height:auto;\
		  max-width: 33%;\
		}\
\
		.flooring\
		{\
		  background-color: #333333;\
		  border-top: 10px solid #ffffff;\
		  float:left;\
		  height:auto;\
		  max-width: 33%;\
		  position:relative;\
		}\
\
		.height-limit\
		{\
		  min-height:auto;\
		  max-height:100%;\
		}\
\
		.height-limit-top\
		{\
		  min-height:auto;\
		 max-height:100%;\
		 height: auto;\
		 min-width:100%;\
		}\
\
		.name-advice-gary\
		{\
		  font-size: 15px;\
		  line-height:37px;\
		  padding-top:30px;\
		  padding-bottom:40px;\
		}\
		  .heading-advice-white\
		{\
		  font-size: 18px;\
		  line-height:24px;\
		  color: #ffffff;\
		  display:inline-block;\
		  top:70px;\
		  left:180px;\
		  padding-bottom:60px;\
		  position: relative;\
		  width: 50%;\
		}\
		.heading-advice-white-paul\
		{\
		  font-size: 18px;\
		  line-height:24px;\
		  color: #ffffff;\
		  display:inline-block;\
		  top:0px;\
		  left:0px;\
		  padding-bottom:60px;\
		  position: relative;\
		  width: 100%;\
		}\
\
		.btn-orange\
		{\
		  width:20%;\
		}\
\
		  img.advice-paul\
		  {\
		    left:0px;\
		    top: 0px;\
		    width: 160px;\
		    position:absolute;\
		  }\
		  .author-paul\
		{\
		  display:inline-block;\
		  margin-top:0px;\
		}\
		  }\
		.section-sponsor {\
			background: white !important;\
		}\
		.breadcrumbs>* {\
			color: #636363;\
		}\
		.breadcrumbs>* .category76 {\
			font-weight: normal;\
		}\
		.AWA-IE-bug-fix {\
			max-width: none !important;\
		}\
		.no-dec {\
			color: white;\
		}\
		';


	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Hide original content
		$('.section-sponsor.sectioninner').hide();

		// Add new content
		$('.main-container').html(exp.vars.expHTML);
		$('.AWA-breadcrumb-target').prepend($('.breadcrumbs'));

		// Change text of last breadcrumb
		$('.category76').text('Why Deal With IPSL');
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);