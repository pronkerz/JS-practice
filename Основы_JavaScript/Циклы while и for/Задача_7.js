let num;
Flag:
for(let i = 2; i <= num; i++) {
	for(let j =2; j< i; j++){
		if(i % j ===0){
			continue Flag;
		}
	}
	console.log(i);
}