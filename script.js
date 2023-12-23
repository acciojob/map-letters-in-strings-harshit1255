//your JS code here. If required.
function mapLetters(text)
{   let obj ={};
	let arr = text.split('');
	for(let i=0;i<arr.length;i++)
		{
			if(obj[arr[i]])
				obj[arr[i]].push(i);
			else
				obj[arr[i]] =[i];
		}
 return obj;
}