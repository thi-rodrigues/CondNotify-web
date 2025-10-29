# Deploy em Github Pages
ng build --configuration production --base-href "https://thi-rodrigues.github.io/cond-notify-web/"

# Mover arquivos da pasta dist para a pasta docs

# Fazer commit



### Publicar na playstore
Instalação Capacitor:
npm install @capacitor/core @capacitor/cli
npx cap init

Adicione a plataforma Android:
npm install @capacitor/android
npx cap add android

Build e sincronize:
ng build --configuration production
npx cap sync android

Abra no Android Studio:
npx cap open android
