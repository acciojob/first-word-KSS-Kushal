function firstWord(s) {
  // your code here
	const str = s.trim();
	return str.split(' ')[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
