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
		expHTML: '<!-- CONTENT BEGINS --> <div class="row"> <div class="columns_mav columns small-12 large-6"> <h1>Proclad Wall & Ceiling Cladding</h1> <p class="width-resize">Strong, hygienic and easy to install (no wet trades). Used in thousands of commercial properties including:</p> <div class="intro-list"> <span class="line-height-change"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/807cd4e575b3ca8cd013ca194f6e6049_icon1.png"> Food Preparation</span> <span class="line-height-change"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/1696f24a09c99a7c5dc71cef1ed721ca_icon2.png"> Healthcare</span> <span class="line-height-change"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/c8d3e90ae78f10dbf6a29eca3e0c7e3f_icon3.png"> Retail Spaces</span> <span class="line-height-change"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/8fd7747e8a6d1844ed128748bbd403df_icon4.png"> Wetrooms</span> <span class="line-height-change"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/05aefeff2857cff0d252a240c69f7aa4_icon5.png"> Custodial Facilities</span> <span class="line-height-change"><img align="left" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/d6fa25e7eecef56f7ce2c6f6a7332d52_icon6.png"> Hospitals</span> <br><br> </div> </div> <div class="columns small-12 large-6 background-lightgrey"> <img class="advice-paul" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/e08019a1aff01502763cbd68b13208b4_advice-paul.png"> <img id="desktop" class="green-grey-edge" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/4481ccacd3066c476f70167277882a6e_green-grey-edge.jpg"> <span class="heading-advice-white-paul"><strong>IPSL - the UK’s No. 1<br> Specialist in Wall Cladding</strong><br><a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img class="image-padding" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/8e9c271e84e7d4355b25ee8fbbf3870e_btn-requestquote.png"></a></span> <span class="author-paul">Paul Clinton, product advisor</span> <div class="commercial"> <ul class="tiles-link"> <li>Supply only, or <strong>full installation </strong>service</li> <li><strong>Free delivery</strong> on orders over £100</li> <li><strong>Free</strong> installation hotline and product advice</li> <li><strong>Free</strong> no obligation site surveys</li> <li><strong>100% guaranteed - 10 year warranty</strong></li> </ul> </div> </div> </div> </div> <div class="background-green"> <div class="row"> <div class="small-12 medium-12 large-12"> <ul class="inline-list specifics-inline"> <li><div class="yes-left"><img align="align" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/feea7dbee08a6bc16a5cc940bdf3b538_bullet-green.png"></div><div class="yes-left">Waterproof</div></li> <li><div class="yes-left"><img align="align" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/feea7dbee08a6bc16a5cc940bdf3b538_bullet-green.png"></div><div class="yes-left">Fireproof</div></li> <li><div class="yes-left"><img align="align" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/feea7dbee08a6bc16a5cc940bdf3b538_bullet-green.png"></div><div class="yes-left">Scratch Resistant</div></li> <li><div class="yes-left"><img align="align" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/feea7dbee08a6bc16a5cc940bdf3b538_bullet-green.png"></div><div class="yes-left">Impact Resistant</div></li> <li><div class="yes-left"><img align="align" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/feea7dbee08a6bc16a5cc940bdf3b538_bullet-green.png"></div><div class="yes-left">Low Maintenance</div></li> </ul> </div> </div> </div> <br><br> <div class="main-container"> <h2 class="center">All commercial panels are 1.22m wide and 2.44m or 3.05m high</h2> <div class="row"> <table class="table-domestic table-domestic-width-one"> <tbody> <tr class="best-seller"> <td><br></td> <td class="yellow"> <h3>Best Seller</h3> <strong> Proclad Premium </strong><br> Durable and hygienic with a satin finish. Ideal for most applications </td> <td class="table-background-midgrey"> <strong>Proclad Premium</strong><br> Colours Premium specification. Wide range of colours in satin and gloss </td> <td class="table-background-lightgrey"> <strong>Proclad Plus</strong> Medium strength, lightweight & hygienic for areas of low traffic </td> </tr> <tr> <td class="table-background-darkgreen">Thickness</td> <td class="yellow-border table-background-darkgrey">2.5mm</td> <td class="table-background-darkgrey">2.5mm</td> <td class="table-background-darkgrey">3mm</td> </tr> <tr> <td class="table-background-lightgreen">Structure</td> <td class="yellow-border table-background-midgrey">Solid uPVC</td> <td class="table-background-midgrey">Solid uPVC</td> <td class="table-background-midgrey">Foam core u PVC</td> </tr> <tr> <td class="table-background-midgreen">Temperature Range</td> <td class="yellow-border table-background-lightgrey">-20 to 60 deg c</td> <td class="table-background-lightgrey">-20 to 60 deg c</td> <td class="table-background-lightgrey">-5 to 60 deg c</td> </tr> <tr> <td class="table-background-lightgreen">Fixing Method</td> <td class="yellow-border table-background-midgrey">PU Adhesive</td> <td class="table-background-midgrey">PU Adhesive</td> <td class="table-background-midgrey">PU Adhesive</td> </tr> <tr> <td class="table-background-midgreen">Firing Rating</td> <td class="yellow-border table-background-lightgrey">Classes 1 & 0 (best)</td> <td class="table-background-lightgrey">Class 1</td> <td class="table-background-lightgrey">Class 1</td> </tr> <tr> <td class="table-background-lightgreen">Finish</td> <td class="yellow-border table-background-midgrey">Satin</td> <td class="table-background-midgrey">Satin/Gloss</td> <td class="table-background-midgrey">Gloss</td> </tr> <tr> <td class="table-background-midgreen">Toughness</td> <td class="yellow-border table-background-lightgrey">High</td> <td class="table-background-lightgrey">High</td> <td class="table-background-lightgrey">Good</td> </tr> <tr> <td class="table-background-lightgreen">Panel Price per m<sup>2</sup> <br><span style="font-weight: normal">(w/out fixings)</span></td> <td class="yellow-border table-background-midgrey"><br>£14.30<br><br><br></td> <td class="table-background-midgrey">£17.67 - £37.03</td> <td class="table-background-midgrey">£14.30</td> </tr> <tr> <td><br></td> <td class="yellow-border table-background-lightgrey"><a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/b490b528f26ed1ff1473b9c30568961b_btn-quote.png"></a></td> <td class="table-background-lightgrey"><a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/e6ea326b5f3bd04b295d8835a4dabc6f_btn-quote2.png"></a></td> <td class="table-background-lightgrey"><a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/e6ea326b5f3bd04b295d8835a4dabc6f_btn-quote2.png"></a></td> </tr> </tbody> </table> <table class="table-domestic table-domestic-width-two"> <tbody> <tr class="best-seller AWA-height-fix"> <td id="mobile"><br></td> <td class="table-background-midgrey AWA-height-fix"> <strong>Proclad 10</strong><br> Tough, rigid & hygienic. Extra thick to install on uneven surfaces </td> <td class="table-background-lightgrey AWA-height-fix"> <strong>Proclad Hyper</strong><br> High strength and antimicrobial for sterile medical areas </td> <td class="table-background-midgrey AWA-height-fix"> <strong>Proclad Low Temp <br>(standard)</strong><br> Very tough with a gloss finish for cold stores & freezer rooms </td> </tr> <tr style="vertical-align:middle"> <td id="mobile" class="table-background-darkgreen">Thickness</td> <td class="table-background-darkgrey">10mm</td> <td class="table-background-darkgrey">2.5mm</td> <td class="table-background-darkgrey">3mm</td> </tr> <tr> <td id="mobile" class="table-background-lightgreen">Structure</span></td> <td class="table-background-midgrey">Solid uPVC</td> <td class="table-background-midgrey">Solid uPVC</td> <td class="table-background-midgrey">Solid polpropylene</td> </tr> <tr> <td id="mobile" class="table-background-midgreen">Temperature Range</td> <td class="table-background-lightgrey">TBC</td> <td class="table-background-lightgrey">-20 to 60 deg c</td> <td class="table-background-lightgrey">-25 to 110 deg c</td> </tr> <tr> <td id="mobile" class="table-background-lightgreen">Fixing Method</td> <td class="table-background-midgrey">PU Adhesive</td> <td class="table-background-midgrey">PU Adhesive</td> <td class="table-background-midgrey">Plastic Rivets</td> </tr> <tr> <td id="mobile" class="table-background-midgreen">Firing Rating</td> <td class="table-background-lightgrey">TBC</td> <td class="table-background-lightgrey">Class 1 & 0 (best)</td> <td class="table-background-lightgrey">None</td> </tr> <tr> <td id="mobile" class="table-background-lightgreen">Finish</td> <td class="table-background-midgrey">TBC</td> <td class="table-background-midgrey">Satin</td> <td class="table-background-midgrey">Gloss</td> </tr> <tr> <td id="mobile" class="table-background-midgreen">Toughness</td> <td class="table-background-lightgrey">TBC</td> <td class="table-background-lightgrey">High</td> <td class="table-background-lightgrey">Very High</td> </tr> <tr> <td id="mobile" class="table-background-lightgreen">Panel Price per m<sup>2</sup> <br><span style="font-weight: normal">(w/out fixings)</span></td> <td class="table-background-midgrey"><br>TBC<br><br><br></td> <td class="table-background-midgrey">£17.17</td> <td class="table-background-midgrey">£11.44</td> </tr> <tr> <td id="mobile"><br></td> <td class="table-background-lightgrey"><a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/e6ea326b5f3bd04b295d8835a4dabc6f_btn-quote2.png"></a></td> <td class="table-background-lightgrey"><a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/e6ea326b5f3bd04b295d8835a4dabc6f_btn-quote2.png"></a></td> <td class="table-background-lightgrey"><a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/e6ea326b5f3bd04b295d8835a4dabc6f_btn-quote2.png"></a></td> </tr> </tbody> </table> </div> <div class="columns small-12 large-6 frame-right"> <br><br> <h2>All of Our Commercial Panels:</h2> <div style="" class="commercial"> <ul class="tiles-link"> <li><a href="#">Meet hygiene regulations</a></li> <li><a href="#">Are non shedding and grout free</a></li> <li><a href="#">Are easy to install and maintain</a></li> <li><a href="#">Are waterproof and fireproof</a></li> <li><a href="#">Are scratch free and impact resistant</a></li> </ul> </div> </div> <div class="columns small-12 large-6"> <br><br> <h2>Concerned About Installation?</h2> <p class="width-resize"> IPSL’s in house team can swiftly and neatly install any of our panels for you. </p> <p class="width-resize"> Call <span data-calltracks-replaced-at="1486964770862" data-calltracks-orig-innerhtml="0114%20332%200669" onclick="window.location=\'tel:\'+this.innerHTML;" class="calltracks_ipslukcouk-main"><strong>0114 332 0669</strong></span> to discuss your requirements, or get a quote. </p> </div> <div class="columns_mav columns small-12 large-12 frame-top"> <h2 class="line-height-change">Need a Panel For: </h2> <div class="clearfix"></div> <div class="panel-need-one panel-need"> Commercial Kitchens <a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/b490b528f26ed1ff1473b9c30568961b_btn-quote.png"></a> <a href="https://www.ipsluk.co.uk/hygienic-wall-cladding/commercial-kitchens.html">Find Out More</a> </div> <div class="panel-need-two panel-need"> Shower Facilities <a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/b490b528f26ed1ff1473b9c30568961b_btn-quote.png"></a> <a href="https://www.ipsluk.co.uk/hygienic-wall-cladding/shower-facilities.html">Find Out More</a> </div> <div class="panel-need-three panel-need"> Food & Drink <a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/b490b528f26ed1ff1473b9c30568961b_btn-quote.png"></a> <a href="https://www.ipsluk.co.uk/hygienic-wall-cladding/food-drink.html">Find Out More</a> </div> <div class="panel-need-four panel-need"> Healthcare <a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/b490b528f26ed1ff1473b9c30568961b_btn-quote.png"></a> <a href="https://www.ipsluk.co.uk/hygienic-wall-cladding/healthcare.html">Find Out More</a> </div> <div class="panel-need-five panel-need"> Retail Space <a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/b490b528f26ed1ff1473b9c30568961b_btn-quote.png"></a> <a href="https://www.ipsluk.co.uk/hygienic-wall-cladding/retail-space.html">Find Out More</a> </div> <div class="panel-need-six panel-need"> Education <a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/b490b528f26ed1ff1473b9c30568961b_btn-quote.png"></a> <a href="https://www.ipsluk.co.uk/hygienic-wall-cladding/education.html">Find Out More</a> </div> <div class="panel-need-seven panel-need"> Custodial & Prison <a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/b490b528f26ed1ff1473b9c30568961b_btn-quote.png"></a> <a href="https://www.ipsluk.co.uk/hygienic-wall-cladding/custodial-prison.html">Find Out More</a> </div> </div> <div class="columns small-12 large-12"> <table class="noborder"> <tr> <td><img align="center" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/814544717a85474ef45123a4456494f5_guarantee.jpg"></td> <td> <h2>Our panels are unbeatable quality, that’s why they have a 10 year guarantee. </h2> </td> </tr> </table> </div> <!-- CONTENT ENDS -->'
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
		  background-image: url(../images/domestic/background-green-gray.gif);\
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
		  table-layout: fixed;\
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
		.breadcrumbs>* .category85 {\
			font-weight: normal;\
		}\
		.AWA-height-fix {\
			height: 130px;\
		}\
		';


	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Hide original content
		$('.main-container').hide();

		// Add new content
		$('.main-container').first().before(exp.vars.expHTML);

		// Re-add breadcrumbs
		$('.columns_mav.columns.small-12.large-6').prepend($('.breadcrumbs'));

		// Change text of last breadcrumb
		$('.category85').text('Why Deal With IPSL');

		// IE bug fix
		$('.main-container .row').first().css('max-width', 'none');

		// Table height fix
		var definingHeight = $('.best-seller').first().css('height');
		$('.AWA-height-fix').css('height', definingHeight);

		// Re-run calltracks script
		$.ajax({
			url: 'https://lite.calltracks.com/calltracks_web_number_dynamics/loader.js',
			dataType: 'script',
		});
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);