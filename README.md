<h1 align="center">javascript es6 👋</h1>

Các Tính Năng ES6
- [variables](#variable)
- [classes](#classes)
- [enhanced object literals](#enhanced-object-literals)
- [template strings](#template-strings)
- [destructuring](#destructuring)
- [default + rest + spread](#default--rest--spread)
- [let + const](#let--const)
- [iterators + for..of](#iterators--forof)
- [generators](#generators)
- [unicode](#unicode)
- [modules](#modules)
- [module loaders](#module-loaders)
- [map + set + weakmap + weakset](#map--set--weakmap--weakset)
- [proxies](#proxies)
- [symbols](#symbols)
- [subclassable built-ins](#subclassable-built-ins)
- [promises](#promises)
- [math + number + string + array + object APIs](#math--number--string--array--object-apis)
- [binary and octal literals](#binary-and-octal-literals)
- [reflect api](#reflect-api)
- [tail calls](#tail-calls)

## Function Scope: Phạm vi hoạt động các biến bên trong function bên ngoài không sử dụng được (Ngoài lề), `Function Expression` & `Function Declaration`
`1. Function Expression`

```javascript
Function expression là function được khởi tạo bằng phép gán = ; function có thể có tên hoặc không có tên.
Trong JS, dấu () để gọi thực thi hàm.

var callName = function() {
   name = 'Anh khải mụp';
   console.log(name);
}
callName();

hoặc 
Immediately-Invoked Function Expression (IIFE) || Gọi hàm lập tức
var callName = (function () {
    var name = 'A khải mụp';
    console.log(name);
})();

-----------------------------------------------------------------
var callName = (function () {
    var name = 'A khải mụp';
})();
console.log(name);
Kết quả => không log được giá của biến name vì biến name nằm ngoài phạm vi hoạt động của function scope
```
`Function expression không được hoisting(khác với function declaration giải thích phía dưới)`
```javascript
console.log(a); ==> Lỗi vì a chưa được khai báo
console.log(f); ==> undefined vì f đã được khai báo phía dưới nhưng chưa được hoisting
f(); ==> Lỗi vì f chưa được hoisting nên không biết f đang là kiểu function

var f = function(){
  console.log('Hello a khải mụp');
}
```

`2. Function Declaration`
```javascript
Function declaration là hàm được khai báo như thông thường, hàm này có tên
function callName(){
   console.log('A khải đẹp troai');
};
callName();
```
`Khác với function expression, function declaration được hoisting:`
```javascript
console.log(callName); ==> trả về function callName thay vì undefined vì nó đã được hoisting
callName(); ==> 'A khải đẹp troai'

function callName(){
   console.log('A khải đẹp trai');
}
```
## ECMAScript 6 Features

### Variable

### Khác biệt giữa `var` , `let` & `const`:
>- `var` hổ trợ cơ chế `hoisting`, phạm vi hoạt động của biến `var` trên toàn bộ các scope `({ });`</p>
>- `let` không hỗ trợ cơ chế `hoisting`, phạm vi hoạt động của biến `let` trên từng `scope` phân biệt. Trong cùng 1 `scope` khai báo trùng tên biến sẽ lập tức báo lỗi
</br>Kết luận ==> Dùng `let` thay `var` trong mọi tình huống.
> + `const` cũng giống như `let` nhưng không thể gán lại giá trị mới. Đối với kiểu dữ liệu `object` hoặc `array` thì không thể gán lại bởi `object` hoặc `array` mới mà chỉ có thể thay đổi các giá trị bên trong của đối tượng đó.

```javascript
var number = 1;

==> khai báo lại || Redeclare
var number = 2;
console.log(number)
Trả về kết quả log đc --> 2


let number = 1;
let number = 2;
console.log(number)
Báo lỗi --> Identifier 'number' has already been declared
|| không thể xác định được number vì đã được khai báo

let title = 'cybersoft';
{
    let title = 'cyberlearn';
    console.log('1',title); 
}
console.log('2',title);

Trả về kết quả log đc -->    1 cyberlearn
                             2 cybersoft
ở đây ta có biến title = 'cybersoft', và tại block scope ta có biến là title = 'cyberlearn'
và hai biến này hoàn toàn khác biệt nhau vì title = 'cyberlearn' 
chỉ sử dụng trong block scope nên sẽ không bị ảnh hưởng giá trị khai báo biến bên ngoài 
vì đây là hai biến hoàn toàn riêng biệt.

const domain = 'http://svcy.cybersoft.edu.vn/api/';
const pi = 3.14;
pi = 20;
console.log(pi);
Báo lỗi ==> Uncaught TypeError: Assignment to constant variable 
|| ở đây chúng ta không thể gáng biến lại giá trị của hằng số

const sinhVien = {
    ma: 1,
    ten: 'Nguyễn Văn A'
}
sinhVien = {
    ma:2,
    ten:'Nguyễn Văn B'
}
console.log('sinhVien', sinhVien);
Báo lỗi ==> Báo lỗi ==> Uncaught TypeError: Assignment to constant variable 
|| ở đây chúng ta không thể gáng biến lại giá trị của hằng số

Nhưng ở đây ta có thể gáng lại giá trị của đối tượng bằng cách 
const sinhVien = {
    ma: 1,
    ten: 'Nguyễn Văn A'
}
sinhVien.ma = 2;
sinhVien.ten = 'Nguyễn Văn B';
console.log('sinhVien', sinhVien);
```
