import Page from './page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CalendarPage extends Page {
  /**
   * define selectors using getter methods
   */

  /**
   * a method to encapsule automation code to interact with the page
   */
  async showCalendar() {
    ;(await $('~Calendar').waitForDisplayed()) &&
      (await $('~Calendar').touchAction('tap'))
  }

  async calendarPrev() {
    await $('~Previous').isDisplayed()
  }

  async backToButton() {
    await $('~Button, back').waitForExist(),
    await $('~Button, back').touchAction('tap')
  }
}

export default new CalendarPage()
