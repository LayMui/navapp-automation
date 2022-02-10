import Page from './page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TextInputPage extends Page {
  /**
   * define selectors using getter methods
   */

  /**
   * a method to encapsule automation code to interact with the page
   */
  async enterText(text) {

        //  await $('~PhoneNumberInput').waitForDisplayed()
        //  await $('~PhoneNumberInput').touchAction('tap')
        //  await $('~PhoneNumberInput').addValue(text)

          await $('~AhuaTextInput').waitForDisplayed()
          await $('~AhuaTextInput').touchAction('tap') //Issue with touchAction
          await $('~AhuaTextInput').setValue(text)

          
  }

  async textEntered() {
    await $('~PhoneNumberInput').isDisplayed()
  }
}

export default new TextInputPage()
