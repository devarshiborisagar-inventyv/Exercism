// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {

  const regex1 = /Chatbot/i;

  let result=command.search(regex1);
  console.log(result);
  return !result;

}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {

  message=message+"emoji2135";
  // const regx=/emoji\d+/g;
  return message.replace(/emoji\d+/g,'');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
const regx = /^\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}$/;
  return regx.test(number)?"Thanks! You can now download me to your phone."
    :"Oops, it seems like I can't reach out to "+number;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
    const regx=/[a-z]+.(com|so)/g
    const result = userInput.match(regx) || [];
    return result;
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
    const arr=fullName.split(",");
    console.log(arr);
    return "Nice to meet you, "+arr[1].trim()+" "+arr[0].trim();
}
