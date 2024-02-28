function trailingZeros(n) {
  //your JS code here. If required.
	let sum=1;
	for(int i=1;i<=n;i++){
		sum*=i;
	}
	let c=0;
	while(sum%10===0){
		sum/=10;
		c++;
	}
	return c;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));