import { welcomeSteps } from "../data/welcome-steps.js";
import { Onboarding } from "../models/Onboarding.js";


const onboarding = new Onboarding(welcomeSteps)

console.log("Initial State: ")
console.log(onboarding.getState())

console.log("Trying to continue without option: ")
try {
    onboarding.next()
} catch (error) {
    console.log(error.message)
}

console.log("Selecting option: ")
console.log(onboarding.selectOption("tiktok"))
console.log(onboarding.getState());

console.log("Going next:");
onboarding.next();
console.log(onboarding.getState());

console.log("Selecting option in second step:");
onboarding.selectOption("migliorare-educazione");
console.log(onboarding.getState());

console.log("Going back:");
onboarding.back();
console.log(onboarding.getState());

console.log("Going forward again:");
onboarding.next();
console.log(onboarding.getState());