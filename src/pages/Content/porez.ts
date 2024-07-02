/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  observeDom,
  getElement,
  onUrlChange,
} from '@funnelenvy-npm/fe-dev-utils'
// alert('hello')
interface WaitElement {
  selector: string
  elements: HTMLElement[]
}
// var isDone = false
async function main () {
  //   document.location = 'https://lpa.gov.rs/'
  const returnEl = async (selector: string): Promise<WaitElement> =>
    await getElement(selector, 2000, (e: any) => console.log(e))

  const login = await returnEl('div > span > a.login-link')
  const [loginBtn] = login.elements
  loginBtn.click()

  if (document.location.href.includes('prijava')) {
    alert('prijava')
    // const user = await returnEl('#username1')
    // console.log(user)

    // const [username] = user.elements
    // username.click()
    // username.innerHTML = 'asdfg'
  }
}

main()
