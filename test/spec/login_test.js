
import {init, end} from "../../config.js"

import { preencherEmail, preencherSenha, clickEntrar, validaLoginError, ValidarLoginSucesso } from "../pages/login_page.js"

describe('Login', () => {

    let driver = null

    beforeEach(async function () {
        driver = await init(process.env.PLATFORM)
    })

    afterEach(async function () {
        await end(driver)
    })

    it('Login com email inválido', async () => {
        await preencherEmail(driver, "error@teste.com")
        await preencherSenha(driver, "123456")
        await clickEntrar(driver)
        await validaLoginError(driver)

    })

    it('Login com email e senha vazios', async () => {
        await clickEntrar(driver)
        await validaLoginError(driver)

    })

    it('Login com email vazio', async () => {
        await preencherSenha(driver, "123456")
        await clickEntrar(driver)
        await validaLoginError(driver)

    })

    it('Login com senha vazio', async () => {
        await preencherEmail(driver, "teste@teste.com")
        await clickEntrar(driver)
        await validaLoginError(driver)

    })

    it('Login com senha inválida', async () => {
        await preencherEmail(driver, "teste@teste.com")
        await preencherSenha(driver, "xpto")
        await clickEntrar(driver)
        await validaLoginError(driver)

    })

    it('Login com sucesso', async () => {
        await preencherEmail(driver, "teste@teste.com")
        await preencherSenha(driver, "123456")
        await clickEntrar(driver)
        await ValidarLoginSucesso(driver)


    })
})