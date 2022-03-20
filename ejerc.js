let cupon =document.getElementsByClassName('cupon');
for(let i = 0;i < cupon.length; i++)
{
	cupon[i].addEventListener('click', ()=>
	{
		cupon[i].select()
		document.execCommand('copy')
		alert("Cupon copiado")


	})
}

let btn =document.getElementsByClassName('btn');
for(let i = 0;i < btn.length; i++)
{
	btn[i].addEventListener('click', ()=>
	{
		let cupon =document.getElementsByClassName('cupon');
		cupon[i].select()
		document.execCommand('copy')
		btn[i].textContent="Copiado";


	})
}