class Form{
    constructor(){
        this.input=createInput("").attribute("placeholder","Enter your name")
        this.playButton=createButton("play")
        this.titleImg=createImg("","GameTitle")
        this.greeting=createElement("h2")



    }
    setElementsPositions(){
        this.input.position(width/2-110,height/2-80)
        this.playButton.position(width/2-90,height/2-20)
        this.titleImg.position(120,50)
        this.greeting.position(width/2-300,height/2-100)

    }
    setElementStyle(){
        this.input.class("customInput")
        this.playButton.class("customButton")
        this.titleImg.class("GameTitle")
        this.greeting.class("Greeting")
    }
    hide(){
        this.greeting.hide()
        this.playButton.hide()
        this.input.hide()

    }
    handleMousePressed(){
        this.playButton.mousePressed(()=>{
        this.input.hide()
        this.playButton.hide()
        var message =`Hello ${this.input.value()}
        </br>Wait for another player to join`
        this.greeting.html(message)  
        })

    }
    display(){
        this.setElementStyle()
        this.setElementsPositions()
        this.handleMousePressed()
    }
}