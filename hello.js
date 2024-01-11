function triangle() {
    let output = "#";
    for (let counter = 0; counter < 9; counter++) {
        console.log(output);
        output += "#";
    }
    return 0;
}

//triangle()

//@param number is a number
function fizzBuzz(number) {
    let i = 1
    while (i <= number) {
        let output = "";
        if (i % 3 === 0) {
            output += ("fizz");
        }
        if (i % 5 === 0) {
            output += ("buzz");
        }
        if (output) console.log(i + " :" + output);
        i++;
    }
}

//fizzBuzz(100);
//@param size should be an int
function chessboard(size=8) {
    let output =""
    for(let i = 0;i<size;i++){

        for (let k =0;k<size;k++){
            if ((k+2+i)%2===0) output +=" ";

            else output +="#";

            if (k+1===size) output +="\n";
        }

    }
    console.log(output);
}
function delayExe(delay, callback){
    setTimeout(()=>{
        console.log(`Executing after ${delay} milliseconds `);
        callback();
    },delay);
}
delayExe(2002,chessboard);

chessboard(20);