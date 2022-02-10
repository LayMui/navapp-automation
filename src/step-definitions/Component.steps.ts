import 'expect-webdriverio'

import { Given, Then, When } from '@cucumber/cucumber'

import ButtonPage from '../page-objects/button.page'
import CalendarPage from '../page-objects/calendar.page'

Given('{actor} is at the app', (actor: string) => {})

When(
  '{pronoun} want to select for {string}',
  async (pronoun: string, component: string) => {
    switch (component) {
      case 'Button':
        await ButtonPage.showButtonNewCreation()
        await ButtonPage.customButton()
        await CalendarPage.backToButton()
        await ButtonPage.backToHome()
        await ButtonPage.showButtonDaughterOfKingdom()
        await ButtonPage.customButton()
        await CalendarPage.backToButton()
        break

      case 'Calendar':
        await CalendarPage.showCalendar()
        break
    }
  }
)

Then(
  '{pronoun} is able to see the component displayed',
  async (pronoun: string) => {
    await ButtonPage.backToHome()
  }
)
