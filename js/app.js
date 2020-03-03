let Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
    this.setWidth = function (number) {
        this.width = number;
    };
    this.setHeight = function (number) {
        this.height = number;
    };
    this.getWidth = function () {
        return this.width;
    };
    this.getHeight = function () {
        return this.height;
    };
    this.getArea = function () {
        return this.width * this.height;
    };
    this.getPara = function () {
        return (this.width + this.height) * 2;
    }
};

function resizeCanvas() {
    let canvas = document.getElementById('display-obj');
    canvas.height = window.innerHeight * 0.8;
    canvas.width = window.innerWidth * 0.8;
}

let demoRec = new Rectangle();
let width;
let height;
let recShape = document.getElementById('display-obj').getContext('2d');

function createObj() {
    let size = inputSize(width, height);
    demoRec = new Rectangle(size[0], size[1]);
    drawRec(demoRec.getHeight(),demoRec.getWidth());
}

function modifyObj() {
    let size = inputSize(width, height);
    if (size.indexOf(undefined) === -1) {
        demoRec.setWidth(size[0]);
        demoRec.setHeight(size[1]);
        alert("Hình chữ nhật mới có kích thước là: " + demoRec.getWidth() + " x " + demoRec.getHeight());
        drawRec(demoRec.getHeight(),demoRec.getWidth());
    }
}

function calArea() {
    document.getElementById('result-area').innerHTML = "Diện tích của hình chữ nhật là: " + demoRec.getArea();
}

function calPara() {
    document.getElementById('result-para').innerHTML = "Chu vi của hình chữ nhật là: " + demoRec.getPara();
}

function drawRec(width,height) {
    recShape.beginPath();
    recShape.rect(20,50,width,height);
    recShape.stroke();
    recShape.font = "20px Arial";
}

function inputSize(num1,num2) {
    let size = [];
    while (num1 !== null) {
        num1 = prompt("Nhập vào chiều dài.");
        if (isNaN(num1)) {
            alert("Giá trị nhập vào là kí tự. Vui lòng nhập lại giá trị số");
        } else if (num1 <= 0 && num1 !== null) {
            alert("Kích thước không có giá trị âm và 0. Vui lòng nhập lại")
        } else if (num1 === "") {
            alert("Trường không được để trống. Vui lòng nhập giá trị.");
        } else if (num1 !== null) {
            size.push(num1);
            break;
        }
    }
    while (num2 !== null) {
        num2 = prompt("Nhập vào chiều rộng.");
        if (isNaN(num2)) {
            alert("Giá trị nhập vào là kí tự. Vui lòng nhập lại giá trị số");
        } else if (num2 <= 0 && num2 !== null) {
            alert("Kích thước không có giá trị âm và 0. Vui lòng nhập lại")
        } else if (num2 === "") {
            alert("Trường không được để trống. Vui lòng nhập giá trị.");
        } else if (num2 !== null) {
            size.push(num2);
            alert("Đã ghi nhận giá trị");
            break;
        } else {
            alert("Bạn đã hủy việc nhập giá trị");
            break;
        }
    }
    return size;
}



