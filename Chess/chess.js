
function onload() {
			for (var i = 1; i<=8; i++) {
				let cont=`container-${i}`
				for(var j=1;j<=8;j++){
					const newDiv=document.createElement("div")
					document.getElementById(cont).appendChild(newDiv);
					newDiv.classList.add("box-container");
					newDiv.setAttribute("id",`R${i}C${j}`)
					newDiv.innerHTML=`C-${j}`
		}
	}
}
window.addEventListener("load", onload);

function colorChanger(a,b,color){
			let c=a
			let d=b
			while(c>=1 && d>=1)
			{
				document.getElementById(`R${d}C${c}`).style.backgroundColor=color
				c--;
				d--;
			}
			c=a
			d=b
			while(c>=1 && d<=8)
			{
				document.getElementById(`R${d}C${c}`).style.backgroundColor=color
				c--;
				d++;
			}
			c=a
			d=b
			while(c<=8 && d<=8)
			{
				document.getElementById(`R${d}C${c}`).style.backgroundColor=color
				c++;
				d++;
			}
			c=a
			d=b
			while(c<=8 && d>=1)
			{
				document.getElementById(`R${d}C${c}`).style.backgroundColor=color
				c++;
				d--;
			}

		}
		function fun(event){
			let a=event.target.id[3]
			let b=event.target.id[1]
			colorChanger(a,b,"red")
			setTimeout(function(){colorChanger(a,b,"yellow")},500)
		}	