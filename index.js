
//------Cơ chế khai báo biến trong es6-------
// Khác biệt giữa var và let: 
// + var hổ trợ cơ chế hoisting, phạm vi hoạt động của biến var trên toàn bộ các scope ({});
// + let không hỗ trợ cơ chế hoisting, phạm vi hoạt động của biến let trên từng scope phân biệt. Trong cùng 1 scope khai báo trùng tên biến sẽ lập tức báo lỗi
// Kết luận: Dùng let thay var trong mọi tình huống
// + const cũng giống như let nhưng không thể gán lại giá trị mới. Đối với kiểu dữ liệu object hoặc array thì không thể gán lại bởi object hoặc array mới mà chỉ có thể thay đổi các giá trị bên trong của đối tượng đó.


// let number = 1;

// let number = 2;
// console.log(number)

let title = 'cybersoft';
{
    let title = 'cyberlearn';
    console.log('1', title);
}

console.log('2', title);

const domain = 'http://svcy.cybersoft.edu.vn/api/';
// pi = 5;


const sinhVien = {
    ma: 1,
    ten: 'Nguyễn Văn A'
}

sinhVien.ma = 2;
sinhVien.ten = 'Nguyễn Văn B';
console.log('sinhVien', sinhVien);
// sinhVien = {
//     ma:2,
//     ten:'Nguyễn Văn B'
// }

//---- Function Scope: Phạm vi hoạt động các biến bên trong function bên ngoài không sử dụng được.
var tenHam = function () {
    var name = 'Sĩ';
}
// function tenHam () {

// }


// -------------Arrow Function ----------
// + Đối với hàm có 1 lệnh return thì không cần viết lệnh return và {}

//function es5
function showInfo() {
    console.log('Hello Phú!');
}
showInfo();
//function es6
let showInfoES6 = () => {
    console.log('Hello Sĩ!');
}
showInfoES6();

let tinhDiemTB = (dToan, dLy, dHoa) => (dToan + dLy + dHoa) / 3;

let dtb = tinhDiemTB(5, 6, 2);
console.log('dtb', dtb);
// --------------- Con trỏ this trong js ---------------
// + Ngữ cảnh mặc định của con trỏ this => trỏ về windown
// var num =  () => {};
// console.log(typeof(num));
// var name = 'Sĩ Phú'; 
window.name = 'Phú Sĩ';
window.ma = 10;
console.log(this.name);

// + Con trỏ this trong đối tượng thì sẽ trỏ về chính đối tượng đó
// + Con trỏ this trong prototype (class) sẽ trỏ về đối tượng được new từ Prototype đó 
// + Lưu ý: Những hàm bên trong phương thức của prototype thì nên khai báo = arrow function thay vì là function.
let hocVien1 = {
    ma: 1,
    ten: 'Nguyễn Văn Tèo',
    hienThiThongTin: function () {
        console.log('Mã: ', this.ma);
        console.log('Họ tên: ', this.ten);
    }
}
hocVien1.hienThiThongTin();
// prototype : ứng với lớp đối tượng trong lập trình
function HocVien() {
    this.ma = '';
    this.ten = '';
    this.hienThiThongTin = function () {
        let hienThi = () => {
            console.log('Mã: ', this.ma);
            console.log('Họ tên: ', this.ten);
        }
        hienThi();
    }
}
let hv1 = new HocVien();
hv1.ma = '001';
hv1.ten = 'Nguyễn Văn Tèo';
hv1.hienThiThongTin();

// let hv2 = new HocVien();
// hv2.ma = '002';
// hv2.ten = 'Nguyễn Văn Tí';
// hv2.hienThiThongTin();

// let hv3 = new HocVien();
// hv3.ma = '003';
// hv3.ten = 'Nguyễn Thị Thơ';
// hv3.hienThiThongTin();


//-----Bài tập 1: Đổi màu div




//b1 : Tạo 1 hàm load ra các nút từ mảng
//1.1: Tạo màu sắc cho button trên từng lần lặp
//1.2: Định nghĩa click cho các button vừa tạo => thay đổi màu sắc của div#house

//1.2: Trong các lần lặp trỏ đến div#house thay đổi màu 
const arrColor = ['red', 'green', 'black', 'pink', 'yellow', 'silver', 'blue'];
//Duyệt mảng màu
for (let i = 0; i < arrColor.length; i++) {
    //Mỗi lần duyệt lấy ra 1 màu trong mảng
    let sColor = arrColor[i];
    //Tạo 1 button từ màu đó
    //Cách 1: Tạo button dựa vào createElement
    let btnColor = document.createElement('button');
    //Định nghĩa nội dung cho button
    btnColor.innerHTML = sColor;
    //Định nghĩa class cho button
    btnColor.className = 'mr-2';
    //Định nghĩa màu sắc cho button
    btnColor.style.backgroundColor = sColor;
    //Định nghĩa sự kiện click cho button
    btnColor.onclick = () => {
        document.getElementById('house').style.backgroundColor = sColor;
    }
    //Gán button lên giao diện
    document.getElementById('color').appendChild(btnColor);

}

//-------------Default params---------
//DefaultParam: Là giá trị mặc định của các tham số trên hàm, nếu người dùng không truyền giá trị thì sẽ lấy giá trị mặc định, nếu người dùng truyền giá trị thì sẽ lấy giá trị người dùng truyền vào.
let getUserInfo = (name = 'khải', age = '15') => {
    if (age > 0 && age < 30) {
        console.log(name + ' còn trẻ ! ' + name + ' muốn đi chơi!');
    }
}

// getUserInfo('khải',18);
getUserInfo();

let hienThiThongTin = (hoTen, namSinh = 2000, tuoi = 2020 - namSinh) => {
    console.log('Họ tên ', hoTen);
    console.log('Tuổi ', tuoi);
}

hienThiThongTin('Sĩ'); //Kết quả 20

hienThiThongTin('Phú', 2002, 17); //Kết quả 18

//============Rest params============


// var tinhTong = (a,b) => {
//     console.log('tổng = ',a+b);
// }

// var tinhTong = (a,b,c) => {
//     console.log('tổng = ',a+b+c);
// }
// + restParams nhận các tham số của hàm được gọi dưới dạng mảng(array)
let tinhTong = (...thamSo) => {
    switch (thamSo.length) {
        case 3: {
            console.log(thamSo[0] + thamSo[1] + thamSo[2]);
        }; break;
        case 2: {
            console.log('Tổng = ', thamSo[0] + thamSo[1]);
        }; break
    }
}


tinhTong(5, 10, 10);//25

tinhTong(10, 20);//30


//-------------------- Bài tập --------------