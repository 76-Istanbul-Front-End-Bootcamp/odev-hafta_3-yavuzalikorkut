class Animal{
    constructor(name){
        this.name   = name;
    }

    action(e){
        document.getElementById(this.actionSoundName).play();
        e.stopPropagation();
    }

    putInTheDocument(){
        var petsTable = document.getElementById("petsTable");
        var petTR = document.createElement("tr");
  
        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        petTR.appendChild(petNameTD);
  
        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        petTR.appendChild(petLegsTD);
  
        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        petTR.appendChild(petActionTD);
    
        petActionTDButton.onclick = this.action.bind(this);
        petsTable.querySelector("tbody").appendChild(petTR);


        petTR.addEventListener("click", this.showImg.bind(this));
    }

    showImg(){
        let image=document.querySelector("img");
        image.src=this.url;
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
        this.legs = 4;
        this.actionText = "Meoow"
        this.actionSoundName = "meow"
        this.url = "https://upload.wikimedia.org/wikipedia/commons/b/b1/VAN_CAT.png"
    }
}

class Monkey extends Animal{
    constructor(name){
        super(name);
        this.legs = 2;
        this.actionText = "Scream";
        this.actionSoundName = "scream";
        this.url = "https://upload.wikimedia.org/wikipedia/commons/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg"
    }
}

var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
