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

      // const _x = await $('~AhuaTextInput').getLocation('x')
      // const _y = await $('~AhuaTextInput').getLocation('y')

      // driver.execute('mobile: tap', { x: _x + 1, y: _y + 1})
    
       await $('~PhoneNumberInput').waitForDisplayed() 
       await $('~PhoneNumberInput').touchAction('tap')
       await $('~PhoneNumberInput').addValue(text)

         await $('~AhuaTextInput').waitForDisplayed()
         await $('~AhuaTextInput').touchAction('tap')
         await $('~AhuaTextInput').addValue(text)
  }

  async textEntered() {
    await $('~PhoneNumberInput').isDisplayed()
  }
}

export default new TextInputPage()
