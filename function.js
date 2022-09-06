function isPrime(n)
{
	if(n == 1) return true;
	for(var i=2; i<=Math.sqrt(n); i++)
	{
		if(n%i == 0) return false;
	}
	return true;
}

function Calc()
{
	document.write("<table cellspacing='0'>");
		var num=1;
		for(var i=1; i<=10; i++)
		{
			document.write("<tr>");
			for(var j=1; j<=10; j++)
			{
				if(isPrime(num))
					document.write("<td style='background-color: bisque;' title='质数'>"+(i*10-10+j)+"</td>");
				else
					document.write("<td style='background-color: #fea071;' title='合数'>"+(i*10-10+j)+"</td>");
				num += 1;
			}
			document.write("</tr>");
		}
	document.write("</table>");
}

function Query()
{
	var btn = document.querySelector('button');
	btn.onclick = function() 
	{
		var num = prompt('请输入要查询的数字：');
		if (num == null) {} else if (num == 1) {
			alert(num + '既不是素数也不是合数');
		} else if (isPrime(num) == false) {
			alert(num + '是合数');
		} else if (isPrime(num) == true) {
			alert(num + '是素数');
		}
	}
}
