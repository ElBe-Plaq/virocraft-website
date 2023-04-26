/*
ViroCraft Network Translation System.
Version: 0.1.0

Copyright (c) 2023-present ElBe-Plaq.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the 'Software'),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
*/


///////////////
// VARIABLES //
///////////////

let translations = {};


///////////////
// DOM READY //
///////////////

function onReady(func) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(func, 1);
	} else {
		document.addEventListener("DOMContentLoaded", func);
	}
}

	
////////////////////
// TRANSLATE PAGE //
///////////////////

function translatePage() {
	fetch("lang/" + (["de-DE"].includes(navigator.language) ? navigator.language : "default") + ".json")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		document.querySelectorAll("[localization-key]").forEach((element) => {
			let key = element.getAttribute("localization-key");
			element.innerHTML = data[key];
		});
	});
}

onReady(translatePage());