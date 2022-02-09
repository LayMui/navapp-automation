import 'expect-webdriverio'

import { Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'

import ButtonPage from '../page-objects/button.page'
import TextinputPage from '../page-objects/textinput.page'


When('{pronoun} want to enter text to the text input {string}', async (actor: Actor, mobileNumber:string) => {
  await ButtonPage.showButtonAhuaTextInput()
  await TextinputPage.enterText(mobileNumber)
})

Then('{pronoun} is able to see text entered', async (actor: Actor) => {
  await TextinputPage.textEntered()
})
