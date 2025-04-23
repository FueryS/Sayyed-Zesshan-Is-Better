class circles{
    constructor(){
        this.crntNum=0;
        this.circleList=[];
        this.circleDivHolder= document.getElementById("circleHolder");
        this.pageDivHolder= document.getElementById("textHolder");

        this.pageColors= ["#ffffff","ffe2fa","faa6fa","ef61da","cd60ee"];
    
        for (let x of this.circleDivHolder.children){
                this.circleList.push(x);
            }
        console.log(this.circleList);
    }

    setActiveCircle(){
        this.circleList[this.crntNum].classList.remove("circle")
        this.circleList[this.crntNum].classList.add("circleActive")
    }

    changePageCircle(){
        for (let x of this.circleList){
            x.classList.remove("circleActive")
            x.classList.add("circle")
        }
        this.setActiveCircle();
    }
        

    functionPrev(){
        
        if (cObj.crntNum>0){
            cObj.crntNum--;
            cObj.changePageCircle();
        }
        this.functionActive();
    }

    functionNext(){
        if (cObj.crntNum<this.circleList.length-1){
            cObj.crntNum++;
            cObj.changePageCircle();
        }
        this.functionActive();
    }

    functionActive(){
        this.pageChange();

        if (cObj.crntNum==0){
            prevBtn.disabled= true;
            prevBtn.style.color= "ffe2fa";}
        else{
            prevBtn.disabled= false;
            prevBtn.style.color="ff6c6c";}
        if (cObj.crntNum==this.circleList.length-1){
            nextBtn.disabled= true;
            nextBtn.style.color="ffe2fa";}
        else{
            nextBtn.disabled= false;
            nextBtn.style.color="ff6c6c";}
    }

    pageChange(){
        this.circleDivHolder.style.backgroundColor=this.pageColors[this.crntNum];
        this.pageDivHolder.style.backgroundColor=this.pageColors[this.crntNum];
        this.pageDivHolder.innerHTML= "<h1>"+(this.crntNum+1)+"</h1>";
        this.pageDivHolder.innerHTML+= "<p>Page "+(this.crntNum+1)+" of "+this.circleList.length+"</p>";
    }
}

let cObj= new circles();
let prevBtn= document.getElementById("prev");
let nextBtn= document.getElementById("next");
cObj.functionActive();
prevBtn.addEventListener("click",function(){cObj.functionPrev()});
nextBtn.addEventListener("click",function(){cObj.functionNext()});