import { Duration } from '@serenity-js/core'
import { isPresent, Wait } from '@serenity-js/webdriverio'
import calendarPage from './calendar.page'
import Page from './page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ButtonPage extends Page {
  /**
   * define selectors using getter methods
   */

  /**
   * a method to encapsule automation code to interact with the page
   */
  async showButtonNewCreation() {
    ;(await $('~NewCreation').waitForDisplayed()) &&
      (await $('~NewCreation').touchAction('tap'))
  }

  async showButtonDaughterOfKingdom() {
    ;(await $('~DaughterOfKingdom').waitForDisplayed()) &&
      (await $('~DaughterOfKingdom').touchAction('tap'))
  }

  async showButtonAhuaTextInput() {
    ;;;(await $('~AhuaTextInputButton').waitForDisplayed()) &&
      (await $('~AhuaTextInputButton').touchAction('tap'))
  }

  async changeButton() {
    ;(await $('~ChangeButton').waitForDisplayed()) &&
      (await $('~ChangeButton').touchAction('tap'))
  }

  async customButton() {
    //await $('~CustomButton').waitForDisplayed() && await $('~CustomButton').touchAction('tap')

    if ($('~CustomButton').waitForDisplayed()) {
      const _x = await $('~CustomButton').getLocation('x')
      const _y = await $('~CustomButton').getLocation('y')
      browser.execute('mobile: tap', {
        x: _x + 1,
        y: _y + 5,
      })
    }
  }

  async backToHome() {
    // await browser.waitUntil(
    //   async () => await $('~Design System Testing, back').isDisplayed(),
    //   {
    //     timeout: 5000,
    //     timeoutMsg: 'expected back button to be displayed after 5s',
    //   }
    // ),
    await $('~Home, back').waitForExist(),
      await $('~Home, back').touchAction('tap')
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open('home')
  }
}

export default new ButtonPage()
