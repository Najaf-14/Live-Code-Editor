let allInputs = document.querySelectorAll('.top textarea');
let output = document.querySelector("#output");

let htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Start Coding!</h2>
</body>
</html>`;
let cssCode = "h2{color: red; text-align: center}";
let jsCode = "console.log('Hello World!')";

allInputs[0].value = htmlCode
allInputs[1].value = cssCode
allInputs[2].value = jsCode

output.contentDocument.body.innerHTML = htmlCode
output.contentDocument.head.innerHTML = `<style>${cssCode}</style>`
output.contentWindow.eval(jsCode)

allInputs.forEach((ele, index) =>{
    ele.addEventListener("keyup", ()=>{
        if (index == 0) {
            // console.log(ele.value)
            htmlCode = ele.value
        }
        if (index == 1) {
            cssCode = ele.value
        }
        if (index == 2) {
            jsCode = ele.value
        } 

        output.contentDocument.body.innerHTML = htmlCode;
        output.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;
        output.contentWindow.eval(jsCode);
    })
});