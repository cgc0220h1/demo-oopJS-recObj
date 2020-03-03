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

function inputSize() {
    let width;
    let height;
    let size = [];
    for (; ;) {
        width = prompt("Nhập vào chiều dài hình chữ nhật.");
        height = prompt("Nhập vào chiều rộng hình chữ nhật.");
        if (height === "" && width === "") {
            alert("Trường không được để trống. Vui lòng nhập giá trị.");
        } else {
            size.push(width);
            size.push(height);
            alert("Đã ghi nhận thông số.");
            break;
        }
    }
    return size;
}

let demoRec = new Rectangle();

function createObj() {
    let size = inputSize();
    demoRec = new Rectangle(size[0],size[1]);
}

function modifyObj() {
    let size = inputSize();
    demoRec.setWidth(size[0]);
    demoRec.setHeight(size[1]);
    alert("Hình chữ nhật mới có kích thước là: " + demoRec.getWidth() + " x " + demoRec.getHeight());
}

function calArea() {
    document.getElementById('result-area').innerHTML = "Diện tích của hình chữ nhật là: " + demoRec.getArea();
}

function calPara() {
    document.getElementById('result-para').innerHTML = "Chu vi của hình chữ nhật là: " + demoRec.getPara();
}
