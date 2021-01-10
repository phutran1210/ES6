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
Báo lỗi --> Identifier 'number' has already been declared || không thể xác định được number vì đã được khai báo

let title = 'cybersoft';
{
    let title = 'cyberlearn';
    console.log('1',title); 
}
console.log('2',title);

Trả về kết quả log đc -->    1 cyberlearn 
                             2 cybersoft
ở đây ta có biến title = 'cybersoft', và tại block scope ta có biến là title = 'cyberlearn' và hai biến này hoàn toàn khác biệt nhau vì title = 'cyberlearn' chỉ sử dụng trong block scope nên sẽ không bị ảnh hưởng giá trị khai báo biến bên ngoài vì đây là hai biến hoàn toàn riêng biệt.
```
