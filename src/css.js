const string = `
/* 我们先画皮卡丘的鼻子 */
.nose {
  position: relative;
  top: 145px;
  width: 0px;
  height: 0px;
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
}
.yuan {
  position: absolute;
  top: -16px;
  right: -10px;
  width: 20px;
  height: 6px;
  border-radius: 10px 10px 0 0;
  background-color: black;
}
.nose {
  margin-left: -10px;
  left: 50%;
}
/* 然后是皮卡丘的眼睛 */
#eyes {
  position: absolute;
  top: 100px;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: #2e2e2e;
  border-color: #000;
}
/* 皮卡丘的眼珠是白色的 */
#eye_ball {
  position: absolute;
  content: '';
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid #000;
  background-color: #fff;
}

.left.eye {
  margin-left: -32px;
  left: 50%;
  transform: translateX(-100px);
}

.right.eye {
  margin-left: -32px;
  left: 50%;
  transform: translateX(100px);
}

/* 该画皮卡丘的腮帮子了 */
.face {
  position: absolute;
  top: 200px;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 3px solid black;
  background-color: #ff0000;
}
.face {
  left: 50%;
  margin-left: -44px;
}
.face.left {
  transform: translateX(-200px);
}
.face.right {
  transform: translateX(200px);
}

/* 接着画皮卡丘的小嘴巴 */
.mouth {
  position: absolute;
  top: 170px;
  width: 200px;
  height: 200px;
  left: 50%;
  margin-left: -100px;
}
/* 先是上嘴唇 */
.mouth .up .lip.left {
  transform: translateX(-53px);
}
.mouth .up .lip.right {
  transform: translateX(53px);
}

.mouth .up .lip {
  z-index: 1;
  background-color: #ffe600;
  position: absolute;
  margin-left: -50px;
  left: 50%;
  width: 100px;
  height: 30px;
  border: 3px solid black;
}

.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  border-top-color: transparent;
  border-right-color: transparent;
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  border-top-color: transparent;
  border-left-color: transparent;
}

.mouth .up .lip::before {
  position: absolute;
  top: -2px;
  content: '';
  background-color: #ffe600;
}
.mouth .up .lip.left::before {
  right: -5px;
  width: 7px;
  height: 26px;
}
.mouth .up .lip.right::before {
  left: -5px;
  width: 7px;
  height: 26px;
}

.mouth .up .lip::after {
  position: absolute;
  top: -4px;
  content: '';
  background-color: #ffe600;
}
.mouth .up .lip.left::after {
  right: -5px;
  width: 98px;
  height: 2px;
}

.mouth .up .lip.right::after {
  left: -5px;
  width: 98px;
  height: 2px;
}

.mouth .up .lip.left {
  transform: translateX(-53px) rotateZ(-15deg);
}
.mouth .up .lip.right {
  transform: translateX(53px) rotateZ(15deg);
}

/* 然后是下嘴唇 */
.mouth .down {
  overflow: hidden;
  width: 200px;
  height: 180px;
  position: relative;
  top: 15px;
}

.mouth .down .yuan1 {
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -75px;
  overflow: hidden;
  height: 1000px;
  width: 150px;
  border-radius: 75px/300px;
  border: 3px solid black;
  background-color: #9b000a;
}

.mouth .down .yuan1 .yuan2 {
  position: absolute;
  bottom: -70px;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  height: 200px;
  border-radius: 120px/100px;
  background-color: #ff485f;
}

/* 让皮卡丘的小鼻子动起来 */
.nose {
  animation: wave 300ms infinite linear;
}

/* 这只皮卡丘就送给你啦 */
`
export default string
