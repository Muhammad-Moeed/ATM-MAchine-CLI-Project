
//********* */ ATM Machine By Moeed Qadri***********

import inquirer from "inquirer";


let myBalnce = 1000; //Doller
let myPin = 1234;

let pinAsnwer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
        }
    ]
);
if (pinAsnwer.pin === myPin) {
    console.log("Correct pin code !!!")
    let operationAns = await inquirer.prompt(
        [
            {
                name: "Operation",
                message: "Please Select Option",
                type: "list",
                choices: ["Withdraw", "Check Balance"]
            }
        ]
    )

    if (operationAns.Operation === "Withdraw") {
        let ammountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter Your Amount",
                    type: "number"
                }
            ]
        )
        if (ammountAns.amount >= myBalnce) {
            console.log("Sorry Your Ammont Balance now is: " + myBalnce)
        }
        else {
            myBalnce -= ammountAns.amount;
            console.log("Your remaining balnce is: " + myBalnce)
        }
    }

    else if (operationAns.Operation === "Check Balance") {
        console.log("Your Balance is: " + myBalnce)
    }

}
else {
    console.log("Incorrect pin Number")
}