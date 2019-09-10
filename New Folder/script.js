const a = document.getElementById('1st').value;
console.log(a);
const b = document.getElementById('2nd').value;

function sumup() {
	const a = document.getElementById("1st").value;
	const b = document.getElementById('2nd').value;
	const c = a + b;
	document.getElementById('emotion').innerHTML = c;
	// alert(c);
}