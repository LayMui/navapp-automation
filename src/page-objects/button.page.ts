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
      $('~Button').touchAction('tap')

    // await browser.waitUntil(async () => await $('~Button').isDisplayed(), {
    //   timeout: 5000,
    //   timeoutMsg: 'expected button to be displayed after 5s',
    // }),
    //   await $('~Button').touchAction('tap')
  }

  async customButton() {
    await browser.waitUntil(async () => await $('~CustomButton').isDisplayed(), {
      timeout: 5000,
      timeoutMsg: 'expected custom button to be displayed after 5s',
    })
  }

  async backToHome() {
    await browser.waitUntil(
      async () => await $('~Design System Testing, back').isDisplayed(),
      {
        timeout: 5000,
        timeoutMsg: 'expected back button to be displayed after 5s',
      }
    ),
      await $('~Design System Testing, back').waitForExist(),
      await $('~Design System Testing, back').touchAction('tap')
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open('home')
  }
}

export default new ButtonPage()
