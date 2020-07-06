var app = new Vue({
    el: '#app',
    data: {
        firstOperand: 0,
        secondOperand: 0,
        result: 0,
        header: "Daniel Crumpler's Calculator",
        footer: "Copyright © 2019 Daniel Crumpler. All rights reserved.",
    },
    methods: {
        addXAndY(){
            this.result = this.firstOperand + this.secondOperand;
        },
        subtractXAndY(){

            this.result = this.firstOperand - this.secondOperand;
        },
        multiplyXAndY(){
            this.result = this.firstOperand * this.secondOperand;
        },
        divideXAndY(){
            if (this.secondOperand !== 0) {
                this.result = this.firstOperand/this.secondOperand;
            } else{
                this.result = "DIVIDE BY ZERO ERROR";
            }
        },
        squareX(){
            this.result = Math.sqrt(this.firstOperand);
        },
        absoluteValueX(){
            this.result = Math.abs(this.firstOperand);
        },
        XToThePowerOfY(){
            this.result = Math.pow(this.firstOperand,this.secondOperand);
        },
        cosineOfX(){
            this.result = Math.cos(this.firstOperand);
        },
        displayPiConstant(){
            this.result = Math.PI;
        }
    }
});

