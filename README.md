<p align="center">
    <a href="https://webdriver.io/">
        <img alt="WebdriverIO" src="https://webdriver.io/assets/images/robot-3677788dd63849c56aa5cb3f332b12d5.svg" width="146">
    </a>
</p>

# UI Test Automation - WebDriverIO
## Starter project creado en vivo en [stream de Twitch](https://www.twitch.tv/charlyautomatiza) basado en [WebDriverIO](https://webdriver.io/), [Cucumber](https://cucumber.io/), [TypeScript](https://www.typescriptlang.org/) y [Allure Report](https://docs.qameta.io/allure-report/).

### Requerimientos

- Instalar [Node.js](https://nodejs.org/es/download/)
- Instalar algún cliente git como por ejemplo [git bash](https://git-scm.com/downloads) 
- Tener instalado Chrome 96 (No Chromium)

### Instalación

**Clonar el repositorio:**

    git clone https://github.com/charlyautomatiza/starter-wdio.git

**Instalar las dependencias.**

    npm install

**Para la ejecución de los test**

    npm run wdio

**Para ejecutar el asistente de configuración (opcional para usar otros browsers o servicios):**

    npm init wdio .

**Para crear el reporte unificado de Allure Report con los resultados de los test**

    npm run clean-report

**Para abrir el reporte unificado de los resultados de los test**

    npm run open-report