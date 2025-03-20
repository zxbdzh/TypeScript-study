"use strict";
// 明确的表示a的类型是 any —— 【显示的any】
let a;
// 以下对a的赋值, 均无警告
a = 100;
a = '你好';
a = false;
// 没有明确的表示b的类型是any, 但TS主动推断出来b是any —— 隐式的any
let b;
// 以下对b的赋值, 均无警告
b = 100;
b = '你好';
b = false;
/* 注意点: any类型, 可以赋值给任意类型的变量 */
let c;
c = 9;
let x;
x = c; // 无警告
