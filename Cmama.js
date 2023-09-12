


//Write a program to check if there is a vowel in a string.
// function main (input) {
//     function isVowel(char) {
//         const vowels = 'aeiouAEIOU'; 
//         return vowels.includes(char); 
//     }

    
//     for (let i = 0; i < input.length; i++) {
//         const character = input[i];
//         if (isVowel(character)) {
//             console.log(`The string contains a vowel.`);
//             return; 
//         }
//     }

//     console.log("The string does not contain any vowel.");

// }

// let input = "";
// process.stdin.on('data', (chunk) => {
//     input += chunk;
// });

// process.stdin.on('end', () => {
//     main(input.trim());
// });
//Write a program where you will be given three numbers. You will have to find the next number.

// function main (input) {

//     const numbers = input.split(' ').map(Number);
 
//     const num1 = numbers[0];
//     const num2 = numbers[1];
//     const num3 = numbers[2];
 
//     const difference = num2-num1;
 
//     const result = num3 + difference;
 
//     console.log(result);
//  }
 
//  let input = "";
//  process.stdin.on('data', (chunk) => {
//      input += chunk;
//  });
 
//  process.stdin.on('end', () => {
//      main(input.trim());
//  });
//Write a program where user will give height(height) and height(kg) and then BMI will be calculated.

//Input-The input consists of two double numbers which are height(meter) and weight(kg).

//Output-if bmi < 18.5 print "Underweight" *if bmi >= 18.5 & bmi < 25.0 print "Normal
// weight" *if bmi >= 25.0 & bmi < 30.0 print "Overweight" *else print "Obese"


function main (input) {
    const [heightMeters, weightKg] = input.split(' ').map(Number);
    const bmi = weightKg / (heightMeters * heightMeters);
    
    if (bmi < 18.5){
        console.log(`BMI:${bmi.toFixed(2)}`);
        console.log('Underweight');
    }
     else if(bmi >= 18.5 & bmi < 25.0){
        console.log(`BMI: ${bmi.toFixed(2)}`);
        console.log('Normal weight'); 
    }
    else if (bmi >= 25.0 & bmi < 30.0){
        console.log(`BMI: ${bmi.toFixed(2)}`);
        console.log('Overweight');
    }
    else{
        console.log('Obese');
    }
    }
    
    let input = "";
    process.stdin.on('data', (chunk) => {
        input += chunk;
    });
    
    process.stdin.on('end', () => {
        main(input.trim());
    });