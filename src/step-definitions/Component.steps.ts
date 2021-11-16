import 'expect-webdriverio'

import { Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'

import ButtonPage from '../page-objects/button.page'
import CalendarPage from '../page-objects/calendar.page'

Given('{actor} is at the app', (actor: Actor) => {})

When('{pronoun} want to select for {string}', async (actor: Actor, component: string) => {
  switch (component) {
    case 'Button':
      await ButtonPage.showButton()
      break

    case 'Calendar':
      await CalendarPage.showCalendar()
      break
  }
})

Then('{pronoun} is able to see the component {string} displayed', async (actor: Actor, component: string) => {
  switch (component) {
    case 'Button':
      await ButtonPage.customButton()
      break
    case 'Calendar':
      await CalendarPage.calendarPrev()
      break
  }
  await ButtonPage.backToHome()
})
