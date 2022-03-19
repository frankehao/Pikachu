const string = `.nose {
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: relative;
  left: 50%;
  top: 145px;
  margin-left: -10px;
}

.nose:hover {
  animation: wave 300ms infinite linear;
}
.yuan {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  right: -10px;
  border-radius: 10px 10px 0 0;
  background-color: black;
}

.eye {
  height: 64px;
  width: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background-color: #2e2e2e;
  border-color: #000;
  border-radius: 50%;
}
.eye::before {
  content: '';
  display: block;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 5px;
  border: 3px solid #000;
}

.left.eye {
  transform: translateX(-100px);
}

.right.eye {
  transform: translateX(100px);
}

.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 170px;
  margin-left: -100px;
  left: 50%;
}

.mouth .up .lip {
  position: absolute;
  border: 3px solid black;
  width: 100px;
  height: 30px;
  border-top-color: transparent;
  left: 50%;
  margin-left: -50px;
  z-index: 1;
  background-color: #ffe600;
}

.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  border-right-color: transparent;
  transform: rotateZ(-15deg) translateX(-53px);
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  border-left-color: transparent;
  transform: rotateZ(15deg) translateX(53px);
}

.mouth .up .lip::before {
  content: '';
  width: 7px;
  height: 26px;
  position: absolute;
  top: -2px;
  background-color: #ffe600;
}
.mouth .up .lip.left::before {
  right: -5px;
}

.mouth .up .lip.right::before {
  left: -5px;
}

.mouth .down {
  position: relative;
  top: 20px;
  overflow: hidden;
  width: 200px;
  height: 180px;
}

.mouth .down .yuan1 {
  border: 3px solid black;
  height: 1000px;
  width: 150px;
  position: absolute;
  left: 50%;
  margin-left: -75px;
  bottom: 0;
  border-radius: 75px/300px;
  background-color: #9b000a;
  overflow: hidden;
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

.face {
  position: absolute;
  top: 200px;
  left: 50%;
  width: 88px;
  height: 88px;
  border: 3px solid black;
  margin-left: -44px;
  border-radius: 50%;
  background-color: #ff0000;
}
.face.left {
  transform: translateX(-200px);
}
.face.right {
  transform: translateX(200px);
} `
export default string
