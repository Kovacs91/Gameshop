function Pénz()
{
    let kiír=document.getElementById("kosár");
    let Assasin=document.getElementById("Assasin").value;
    let Destiny= document.getElementById("Destiny").value;
    let EFT= document.getElementById("Eft").value;
    let Rust= document.getElementById("Rust").value;
    let Cyber= document.getElementById("Cyberpunk").value;
    let cod= document.getElementById("Cod").value;
    kiír.innerHTML=Assasin*5000+Destiny*20000+EFT*7500+Rust*3500+Cyber*22000+cod*17500+ "Ft";
}
