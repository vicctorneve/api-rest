# 📄 Ficha-Resumo: Padrões de Projeto para API REST em Node.js

## Introdução

Os padrões de projetos têm como objetivo organizar o código, evitando misturar regras de negócio, requisições, acesso ao banco. Além de facilitar na manutenção de bugs ou adicionar novas funcionalidades.
Existem diversos tipos de padrões de projetos, alguns deles são:

## 1. MVC (Model-View-Controller)

Objetivo: Separar responsabilidades

- Model – Dados e regras de negócio.
- View – Resultado retornado
- Controller – Lida com entrada HTTP e chama a lógica apropriada

Quando usar sempre que quiser criar uma API limpa, modular e fácil de manter, principalmente para projetos de pequeno a médio porte.

## 2. Repository Pattern
Objetivo: Abstrair o acesso aos dados (banco de dados) em uma camada separada.
Permite um encapsulamento da lógica de acesso a dados, impulsionando o uso da injeção de dependência (DI) e proporcionando uma visão mais orientada a objetos das interações com a DAL.

Os grandes benefícios ao utilizar esse pattern são:
- Permitir a troca do banco de dados utilizado sem afetar o sistema como um todo.
- Código centralizado em um único ponto, evitando duplicidade.
- Facilita a implementação de testes unitários.
- Diminui o acoplamento entre classes.
- Padronização de códigos e serviços.

Utilizado em projetos médio ou grande, facilitar testes unitários, e quando quiser flexibilidade para mudar de banco

## 3. DTO (Data Transfer Object) - Padrão de Transferência de Dados

O DTO é um padrão de design que tem como objetivo transportar dados entre diferentes camadas ou sistemas, sem carregar lógica de negócio.

-  Encapsular dados: Para não expor diretamente objetos complexos.
-  Controlar dados trafegados: Garantir que apenas os dados necessários sejam transferidos, sem incluir atributos desnecessários.
-  Evitar sobrecarga: Reduzir o tráfego de dados ao enviar apenas as informações necessárias.
-  Garantir segurança: Impedir que informações sensíveis (como senhas) ou não autorizadas sejam enviadas ao cliente.

Use o DTO quando:

- Precisa validar dados de entrada ou saída
- garantir um formato de dados consistente
- proteger dados sensíveis
- Separação de camadas


## ✅ Padrão Escolhido para Exemplo: MVC (Model-View-Controller)
