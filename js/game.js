window.onload=function(){
    class Game{
        constructor(){
            this.header=""
            this.letters=[]
            this.fen=0
            this.sm=10
            this.fenbox=""
            this.smbox=""
            this.result=""
            // this.sudu=0.1;
        }
        //创建字母
        createLetter(){
            let ascll
            let letter
            let code=document.createElement("div")
            code.className="code"
            let left
            do{
                left=Math.random()*(7.5-0.53*3)+0.53
            }
            while(leftrepeat(left,this.letters))
            do{
                ascll=Math.floor(Math.random()*26+65)
                letter=String.fromCharCode(ascll)
            }while(letterrepeat(letter,this.letters))
            let top=Math.random()
            code.style.left=left+"rem"
            code.style.top=top+"rem"
            code.style.backgroundImage=`url(img/A_Z/${letter}.png)`
            this.header.appendChild(code)
            let sudu=Math.random()*0.1+0.2
            let obj={};
            obj["top"]=top
            obj["left"]=left
            obj["node"]=code
            obj["name"]=letter
            obj["sudu"]=sudu
            this.letters.push(obj)
        }
        //字母下落
        run(){
            // let that=this
            this.t=setInterval(()=>{
                for(let item of this.letters){
                    item["top"]+=item["sudu"]
                    if(item["top"]>=5.48){
                        this.header.removeChild(item["node"])
                        let index=this.letters.indexOf(item)
                        this.letters.splice(index,1)
                        this.createLetter()
                        // this.remove(item["name"])
                        smbox.innerText=Number(smbox.innerText)-1
                        continue
                    }
                    if( Number(smbox.innerText)<=0){
                        alert.style.display="block"
                        clearInterval(this.t)
                        result.innerText=fenbox.innerText
                    }
                    item["node"].style.top=item["top"]+"rem"
                }
            },200)
        }
        //清除字母
        remove(letter){
        //    需要传入字母  A  B   C
        //    从header中移除对应节点
        //    从this.letters数组中移除对应的数据
        //    type=0  减生命值   =1 加分
            for(item of this.letters){
                if(item["name"]==letter){
                    fenbox.innerText=Number(fenbox.innerText)+1
                    let index=this.letters.indexOf(item)
                    this.header.removeChild(item["node"])
                    this.letters.splice(index,1)
                    this.createLetter()
                }
            }
        }
        //    暂停
        pause(){
            clearInterval(this.t)
        }
    }
    let game=new Game()
    game.header=document.querySelector("header")
    game.result=""
    game.run()
    let num=4
    for(let i=0;i<num;i++){
        game.createLetter()
    }
    // console.log(game.letters)
    function leftrepeat(left,letters){
        for(item of letters){
            if(Math.abs(item["left"]-left)<0.53){
                return true
            }
        }
        return false
    }
    function letterrepeat(letter,letters){
        for(item of letters){
            if(item["name"]==letter){
                return true
            }
        }
        return false
    }
    let footerbox=document.querySelector("footer .box_one")
    let smbox=document.querySelector(".aside .smbox")
    let fenbox=document.querySelector(".aside .fenbox")
    let jifen=fenbox.innerText
    let alert=document.querySelector(".alert")
    let button=document.querySelector(".alert .gameover .button")
    let result=document.querySelector(".alert .gameover h2")
    footerbox.onclick=function(event){
        if(event.target.className!="box_one"){
            let text=event.target.innerText
            game.remove(text)
            // fenbox.innerText=Number(fenbox.innerText)+1
        }
    }
    let start=document.querySelector(".aside .Pause")
    start.onclick=function(){
        if( start.className=="Pause"){
            start.className= "start"
            game.pause()
        }
       else{
            start.className="Pause"
            game.run()
        }
    }
    button.onclick=function(){
        alert.style.display="none"
        smbox.innerText=10
        fenbox.innerText=0
        game.run()
    }


    

}