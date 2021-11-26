import 'expect-webdriverio'

import { Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'

import ButtonPage from '../page-objects/button.page'
import CalendarPage from '../page-objects/calendar.page'

When(
  '{pronoun} want to trigger button event to change the button title',
  async (actor: Actor) => {
     await ButtonPage.showButtonNewCreation()
     await ButtonPage.changeButton()
  }
)

Then(
  '{pronoun} is able to see the button title changed',
  async (actor: Actor) => {
     await ButtonPage.backToHome()
  }
)
