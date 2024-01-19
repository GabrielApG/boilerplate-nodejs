# Use a imagem oficial do Node.js como base
FROM node:14 AS app-builder

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Instale o pacote 'mysql' para suporte ao MySQL
RUN npm install mysql

# Copie o restante do código fonte para o diretório de trabalho
COPY . .

# Exponha a porta em que o aplicativo Express irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
