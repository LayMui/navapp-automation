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
  async showButton() {
    await $('~Button').waitForDisplayed() &&
      await $('~Button').touchAction('tap')
  }

  async customButton() {
   // ;(await $('~X').waitForDisplayed()) && (await $('~X').click())
   
    if ($('~X').waitForDisplayed()) {
     const _x = await ($('~X').getLocation('x'))
     const _y = await ($('~X').getLocation('y'))
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
