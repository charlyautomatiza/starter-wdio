<p align="center">
  <a href="https://www.twitch.tv/charlyautomatiza"><img alt="Twitch" src="https://img.shields.io/badge/CharlyAutomatiza-Twitch-9146FF.svg" style="max-height: 300px;"></a>
  <a href="https://discord.gg/wwM9GwxmRZ"><img alt="Discord" src="https://img.shields.io/discord/944608800361570315" style="max-height: 300px;"></a>
  <a href="http://twitter.com/char_automatiza"><img src="https://img.shields.io/badge/@char__automatiza-Twitter-1DA1F2.svg?style=flat" style="max-height: 300px;"></a>
  <a href="https://www.youtube.com/channel/UCwEb6xrQtQCEuN_gNgi_Xfg?sub_confirmation=1"><img src="https://img.shields.io/badge/Charly%20Automatiza-Youtube-FF0000.svg" style="max-height: 300px;" style="max-height: 300px;"></a>
  <a href="https://www.linkedin.com/in/gautocarlos/"><img src="https://img.shields.io/badge/Carlos%20 Gauto-LinkedIn-0077B5.svg" style="max-height: 300px;" style="max-height: 300px;"></a>
</p>

<p align="center">
    <a href="https://webdriver.io/">
        <img alt="WebdriverIO" src="https://webdriver.io/assets/images/robot-3677788dd63849c56aa5cb3f332b12d5.svg" width="146">
    </a>
</p>

## Starter project creado en vivo en [stream de Twitch](https://www.twitch.tv/charlyautomatiza) basado en [WebDriverIO](https://webdriver.io/), [Appium](http://appium.io/), [Cucumber](https://cucumber.io/), [TypeScript](https://www.typescriptlang.org/), [Allure Report](https://docs.qameta.io/allure-report/), [Node.js](https://nodejs.org/en/) con soporte multi-browser mediante [Docker](https://www.docker.com/) y [Selenium Grid](https://github.com/SeleniumHQ/docker-selenium)

### Requerimientos generales

- Instalar [Node.js](https://nodejs.org/es/download/)
- Instalar algún cliente git como por ejemplo [git bash](https://git-scm.com/downloads)
- Tener instalado Chrome 100 (No Chromium)

### Requerimientos mobile

Descargar e instalar

- Java Development Kit [(JDK)](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133155.html)
  - Asegurarse de tener configurada la variable de entorno **JAVA_HOME** con la ruta de la JDK respectiva.
- [Appium](https://appium.io/downloads/) Desktop.
- [Android Studio](https://developer.android.com/studio/index.html) y dentro de la aplicación instalar.
  - **SDK Platform**: Android 10 o la versión necesaria.
  - **SDK tools**:
    - Android SDK Build Tools.
    - Andorid SDK Command Line Tools.
    - Android Emulator.
    - Android SDK Platform-tools.
    - Intel x86 Emulator accelerator.
  - Configurar al menos un emulador desde **Android Virtual Device Manager**.
  - Asegurarse de agregar las siguientes variables de entorno:
    - **ANDROID_HOME**: Agregar el directorio donde se aloja la SDK de Android, por ejemplo: *C:\Users\USERNAME\AppData\Local\Android\Sdk*.
    - Luego respetando el orden agregar estas variables de entorno:
      - **%ANDROID_HOME%**\emulator
      - **%ANDROID_HOME%**\platform-tools
      - **%ANDROID_HOME%**\tools
      - **%ANDROID_HOME%**\tools\bin
  - Iniciando el emulador desde la línea de comandos:
    - Listar los emuladores instalados:
      - emulator -list-avds
    - Iniciar el emulador:
      - emulator @nombre_emulador
    - Como alternativa a algún error se puede iniciar con el siguiente comando: **%ANDROID_HOME%**\emulator\emulator.exe -avd <nombre_emulador>
- **Appium Doctor**: Para validar que contamos con todo lo necesario para realizar nuestros Test de mobile debemos instalar y ejecutar.

  - npm install -g appium-doctor
    - Esto instalará el utilitario que nos permitirá validar que todo esté correctamente configurado.
  - appium-doctor --android
    - Si hemos realizado correctamente todos los pasos de arriba con este comando se mostrará un mensaje de éxito ya algunos warning.
    - En caso de algún error bloqueante, el mismo se mostrará en pantalla, se deberá corregir y volver a ejecutar hasta que esté todo ok.

- APK a probar.
  - Usamos para el ejemplo [la apk](https://github.com/webdriverio/native-demo-app/releases/download/v0.4.0/Android-NativeDemoApp-0.4.0.apk) provista por WebdriverIO.
  - Pueden ejecutar desde la línea de comandos lo siguiente como alternativa:
    - curl <https://github.com/webdriverio/native-demo-app/releases/download/v0.4.0/Android-NativeDemoApp-0.4.0.apk> --output Android-NativeDemoApp-0.4.0.apk
  - Para que el ejemplo funcione la apk debe estar dentro de la carpeta **/app** en la base de nuestro proyecto con el nombre configurado en la capability **app** del archivo [*config/wdio.mobile.conf.ts*](config/wdio.mobile.conf.ts).

### Requerimientos docker

Descargar e instalar

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
  - Crearse una cuenta gratuita.

Para levantar una imagen de Selenium Grid con múltiples browsers:

Desde una terminal ejecutar:

```bash
# Network
docker network create grid
```

```bash
# Hub
docker run -d -p 4442-4444:4442-4444 --net grid --name selenium-hub selenium/hub:4.1.3-20220405
```

```bash
# Relacionamos los nodos con el hub
# Nodo con Chrome
docker run -d --net grid -e SE_EVENT_BUS_HOST=selenium-hub \
    --shm-size="2g" \
    -e SE_EVENT_BUS_PUBLISH_PORT=4442 \
    -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \
    -e SE_NODE_MAX_SESSIONS=2 \
    -e SE_NODE_OVERRIDE_MAX_SESSIONS=true \
    selenium/node-chrome:100.0-20220405
```

```bash
# Nodo con Edge
docker run -d --net grid -e SE_EVENT_BUS_HOST=selenium-hub \
    --shm-size="2g" \
    -e SE_EVENT_BUS_PUBLISH_PORT=4442 \
    -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \
    -e SE_NODE_MAX_SESSIONS=2 \
    -e SE_NODE_OVERRIDE_MAX_SESSIONS=true \
    selenium/node-edge:100.0-20220405
```

```bash
# Nodo con Firefox
docker run -d --net grid -e SE_EVENT_BUS_HOST=selenium-hub \
    --shm-size="2g" \
    -e SE_EVENT_BUS_PUBLISH_PORT=4442 \
    -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \
    -e SE_NODE_MAX_SESSIONS=2 \
    -e SE_NODE_OVERRIDE_MAX_SESSIONS=true \
    selenium/node-firefox:99.0-20220405
```

### Instalación del framework de pruebas

#### **Clonar el repositorio:**

```bash
git clone https://github.com/charlyautomatiza/starter-wdio.git
```

#### **Instalar las dependencias.**

```bash
npm install
```

#### **Para la ejecución de los test de web**

```bash
npm run wdio-web
```

#### **Para la ejecución de los test de web usando docker**

```bash
npm run wdio-web-docker
```

#### **Para la ejecución de los test de mobile**

```bash
npm run wdio-mobile
```

#### **Para ejecutar el asistente de configuración (opcional para usar otros browsers o servicios):**

```bash
npm init wdio .
```

#### **Para crear y abrir el reporte unificado de los resultados de los test**

```bash
npm run report
```
