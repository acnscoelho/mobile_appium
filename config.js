import { remote } from "webdriverio"


const androidCapabilities = {
    'appium:platformName': 'Android',
    'appium:automationName': 'UiAutomator2', 
    'appium:deviceName': 'XXXXXXXXXXX',
    'appium:app': 'C:/workshop-appium/apps/app-release.apk',
    'appium:appPackage': 'com.qazandoqafood',
    'appium:appActivity': '.MainActivity'
}

const iOSCapabilities = {
'appium:platformName': 'iOS',
'appium:automationName': 'XCUITest', 
'appium:deviceName': 'iphone 11',
'appium:plataformVersion': '15.2',
'appium:app': 'C:/workshop-appium/apps/qazandoqafood.app',
'appium:noReset': false,
}

export async function init(platform) {
    return await remote({
        hostname: '127.0.0.1',
        port: 4723,
        capabilities: platform == 'android' ? androidCapabilities : iOSCapabilities
    })
        .catch(err => console.log('Erro ao iniciar o Appium: ', err))
}

export async function end(driver) {
    await driver.deleteSession()
}