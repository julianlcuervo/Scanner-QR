$(document).ready(function () {
	document.addEventListener("deviceready", onDeviceReady, false);
});

//var aux;
//var cont = 0;
var paginas = [];
paginas[0] = 'pagina1'
paginas[1] = 'pagina2'
paginas[2] = 'pagina3'
paginas[3] = 'pagina4'
paginas[4] = 'pagina5'

//window.open('http://www.google.com');
//cordova.InAppBrowser.open('http://www.google.com', '_blank', 'location=yes');
function onDeviceReady() {
	$('#scan').click(function () {
		alert('open');
		cordova.plugins.barcodeScanner.scan(
			function (result) {
				/*alert("We got a barcode\n" +
					  "Result: " + result.text + "\n" +
					  "Format: " + result.format + "\n" +
					  "Cancelled: " + result.cancelled);*/
				openURL(result.text);
				//window.open('http://www.google.com', '_blank', 'location=no,hidden=yes,toolbar=no');
				//window.location="http://www.google.com";
				//location.href==url;

			},
			function (error) {
				alert("Scanning failled: " + error);
			},
			{
				preferFrontCamera: true, // iOS and Android
				showFlipCameraButton: true, // iOS and Android
				showTorchButton: true, // iOS and Android
				torchOn: true, // Android, launch with the torch switched on (if available)
				saveHistory: true, // Android, save scan history (default false)
				prompt: "Place a barcode inside the scan area", // Android
				resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
				orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
				disableAnimations: true, // iOS
				disableSuccessBeep: false // iOS and Android
			}
		);
	}
	);

	$('#add').click(function () {
		alert('add');
		cordova.plugins.barcodeScanner.scan(
			function (result) {
				/*alert("We got a barcode\n" +
					  "Result: " + result.text + "\n" +
					  "Format: " + result.format + "\n" +
					  "Cancelled: " + result.cancelled);*/
				addURL(result.text);
				//window.open('http://www.google.com', '_blank', 'location=no,hidden=yes,toolbar=no');
				//window.location="http://www.google.com";
				//location.href==url;

			},
			function (error) {
				alert("Scanning failled: " + error);
			},
			{
				preferFrontCamera: true, // iOS and Android
				showFlipCameraButton: true, // iOS and Android
				showTorchButton: true, // iOS and Android
				torchOn: true, // Android, launch with the torch switched on (if available)
				saveHistory: true, // Android, save scan history (default false)
				prompt: "Place a barcode inside the scan area", // Android
				resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
				orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
				disableAnimations: true, // iOS
				disableSuccessBeep: false // iOS and Android
			}
		);
	}
	);

	$('#remove').click(function () {
		alert('removed');
		if (typeof (Storage) !== "undefined") {
			// Store
			//localStorage.setItem(paginas[cont], url);
			//cont+=1;
			//document.write(localStorage.getItem(url));
			localStorage.clear();
			//var number=0;
			//localStorage.setItem("count", number);
		} else {
			document.getElementById(url).innerHTML = "Sorry, your browser does not support Web Storage...";
		}
	}
	);
}

function openURL(url) {

	if (typeof (Storage) !== "undefined") {
		// Store
		//localStorage.setItem(paginas[cont], url);
		//cont+=1;
		if(localStorage.getItem(url)==null){
			alert("Lo siento la información no se encuentra almacenada localmente")
		}else{
			document.write('<a class="link" href="index.html">Volver</a> '+localStorage.getItem(url));
		}
		//localStorage.clear();
	} else {
		document.getElementById(url).innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

function addURL(url) {
	if (typeof (Storage) !== "undefined") {
		// Store
		/*var number;
		if(localStorage.getItem("count") == null){
			number=0;
			localStorage.setItem("count", number);
			localStorage.setItem(paginas[localStorage.getItem("count")], url);
		}else{
			aux = 1 + localStorage.getItem("count");
			console.log(aux)
			localStorage.removeItem("count");
			localStorage.setItem("count", aux);
			localStorage.setItem(paginas[localStorage.getItem("count")], url);
		}*/

		if(localStorage.clickcount===undefined){
			localStorage.clickcount=0;
		}

		alert(localStorage.clickcount)
		//localStorage.setItem(paginas[localStorage.clickcount], url);
		localStorage.setItem(localStorage.clickcount, url);

		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount)+1;
		  } else {
			localStorage.clickcount = 1;
		  }
		//cont += 1;
		//document.write(localStorage.getItem(url));
		//localStorage.clear();
	} else {
		document.getElementById(url).innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

function removeURL(url) {
	if (typeof (Storage) !== "undefined") {
		// Store
		//localStorage.setItem(paginas[cont], url);
		//cont+=1;
		//document.write(localStorage.getItem(url));
		localStorage.clear();
		
		
	} else {
		document.getElementById(url).innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}



/*


	$('#agregar').click(function () {
		localStorage.setItem(paginas[cont], url);
		cont += 1;
	}
	);



	$('#eliminar').click(function () {
		localStorage.clear();
	}
	);

*/