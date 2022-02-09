import 'expect-webdriverio'

import { Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'

import ButtonPage from '../page-objects/button.page'


When(
  '{pronoun} want to trigger button event to change the button title',
  async (pronoun: string) => {
     await ButtonPage.showButtonNewCreation()
     await ButtonPage.changeButton()
  }
)

Then(
  '{pronoun} is able to see the button title changed',
  async (pronoun: string) => {
    await ButtonPage.backToHome()
  }
)
