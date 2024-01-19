# Project BFF Smowl

## Estrutura

O Projeto consiste na seguinte estrutura:

```
docs/
   └── postman
   └── xmlLti
server/
   └── ssl
src/
├── app
    └── controller
    └── middleware
    └── models
    └── services
      └── canvas
      └── contents
├── config
├── database
    └── migrations
    └── seeders
├── log
    └── logfiles
├── routes
├── tests
    └── integration
    └── unit
    └── utils

```

## Configurar e instalar o EditorConfig

_editorconfig_

### Auth

Endpoints

```
/api/auth/login
```

Send

```
{
    "user" : "canvas",
    "password" : "123456"
}
```

Response esperado

```
{
    "auth": true,
    "token": "eyJhbGcidasdasiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWFosksdas312HAPjal"
}
```

# Install SSL local

```
$ openssl req -newkey rsa:2048 -new -nodes -keyout key.pem -out csr.pem

$ openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out server.crt
```

Altere o inicio do index.js

```

const httpsOptions = {
    key: fs.readFileSync('key.pem', 'utf8'),
    cert: fs.readFileSync('server.crt', 'utf8')
};

const PORT = process.env.PORT || 3000;

var https = require('https');
var https_options = {
  key: fs.readFileSync('key.pem', 'utf8'),
  cert: fs.readFileSync('server.crt', 'utf8')
};

https.createServer(httpsOptions, app)
    .listen(PORT, function() {
        console.log(`Server started https://localhost:${PORT}`)
    });
```

### Para o chrome reconhecer o certificado autoassinado em Localhost

Acesso chrome, na url coloque o seguinte _chrome://flags/_, busque por: _certificates_ habilite a opção para permitir os certificados locais.

Escrevendo logs

```
log.info("Database connected...");

log.error("Error: " error);
```

## Adicionando Jest

```
npm install jest --save
```

## Executar os Tests

Configurar no package.json no pretest e posttest

```
"pretest": "NODE_ENV=test sequelize db:migrate",
"test": "NODE_ENV=test jest",
"posttest": "NODE_ENV=test sequelize db:migrate:undo:all"
```

Para executar os testes utilizar

```
yarn test
```

# Exemplo post LTI Launch

```
{
  oauth_consumer_key: 'chave-do-cliente',
  oauth_signature_method: 'HMAC-SHA1',
  oauth_timestamp: '1622828108',
  oauth_nonce: 'o9uvbhWhySLa63kPoDk77sTlDHihIEKuQi7gsEd8U',
  oauth_version: '1.0',
  context_id: '623d0fdac2e714011034262a4984cb95382dd384',
  context_title: 'bravi',
  custom_canvas_account_id: '1',
  custom_canvas_account_sis_id: '',
  custom_canvas_api_domain: 'bravi.instructure.com',
  custom_canvas_enrollment_state: '$Canvas.enrollment.enrollmentState',
  custom_canvas_user_id: '178',
  custom_canvas_user_login_id: 'gabriel.goncalves@bravi.com.br',
  ext_roles: 'urn:lti:instrole:ims/lis/Administrator,urn:lti:sysrole:ims/lis/User',
  launch_presentation_document_target: 'iframe',
  launch_presentation_height: '400',
  launch_presentation_locale: 'pt-BR',
  launch_presentation_return_url: 'https://bravi.instructure.com/users/178/external_content/success/external_tool_redirect',
  launch_presentation_width: '800',
  lis_person_contact_email_primary: 'gabriel.goncalves@bravi.com.br',
  lis_person_name_family: 'Gonçalves',
  lis_person_name_full: 'Gabriel Gonçalves',
  lis_person_name_given: 'Gabriel',
  lti_message_type: 'basic-lti-launch-request',
  lti_version: 'LTI-1p0',
  oauth_callback: 'about:blank',
  resource_link_id: '81e1edf52dccd58bcaac846c72669ba18af28ddb',
  resource_link_title: 'Relatorios-DEV',
  roles: 'urn:lti:instrole:ims/lis/Administrator',
  tool_consumer_info_product_family_code: 'canvas',
  tool_consumer_info_version: 'cloud',
  tool_consumer_instance_contact_email: 'notifications@instructure.com',
  tool_consumer_instance_guid: 'pIfW51AGW8BY8tZHw17Wni08oIcYEAo6jAFg9AWy:canvas-lms',
  tool_consumer_instance_name: 'bravi',
  user_id: '81e1edf52dccd58bcaac846c72669ba18af28ddb',
  user_image: 'https://bravi.instructure.com/images/messages/avatar-50.png',
  oauth_signature: 'Mga7iMvQtDwb5vTtaGlW0N0Vnrg='
}
```

# LTI - XML

### Referência dos arquivos para configuração do Canvas

Local - [AQUI](./docs/xmlLti/local.xml)

DEV - [AQUI](./docs/xmlLti/dev.xml)

HML - [AQUI](./docs/xmlLti/hml.xml)

PRD - [AQUI](./docs/xmlLti/prd.xml)

# URL's de acesso

Local

```
https://localhost:8085/smowl/api/
https://localhost:8085/smowl/ready/
```

DEV
```
https://api.homolog-bravi.tk/smowl-bff/api
https://homolog-bravi.tk
```

HML
```
https://api.homolog-bravi.tk/smowl-bff/api
https://homolog-bravi.tk
```

PRD
```
https://api.prd-bravi.tk/smowl-bff/api
https://prd-bravi.tk
```

# DOCKER

Acesse a raiz do projeto

Execute o comando:

```
$ docker-compose up -d
```

Certifique-se que todos os containers estão `UP`

Mysql

```
user: root
password: root
port: 3311
schema: smowl_bff
```

Adminer

```
http://localhost:8089/
```

Dados de acesso
```
servidor: smowl_db <<nome do container do mysql>>
user: root
password: root
```


###

```
$ docker-compose up -d --build
```