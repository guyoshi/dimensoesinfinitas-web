# Sequência de e-mails — Ruínas dos Céus
Preparado em 23/10/2026. **Modelos para implementação na Brevo, não e-mails disparados.**
 
## Remetente
Nome público: **Guilherme S. L. Anjos | Dimensões Infinitas**.
Configurar endereço real no domínio verificado (não inventar endereço antes da criação da caixa). Autenticar SPF/DKIM conforme instruções reais do provedor. Todos os e-mails de marketing devem oferecer descadastro.

## E-mail 1 — Confirmação de inscrição (obrigatório)
Gatilho: formulário público -> Brevo API /contacts/doubleOptinConfirmation.
Assunto: **Confirme seu interesse em Ruínas dos Céus**
Pré-cabeçalho: **Um clique para receber o aviso quando o livro chegar.**

Olá!

Você pediu para receber notícias sobre *Ruínas dos Céus*, meu romance de fantasia épica ambientado em Etérea.

Para confirmar que foi você quem fez o cadastro, clique no botão abaixo:

**[Confirmar minha inscrição]**

Se não fez esse pedido, é só ignorar este e-mail. Você não será incluído na lista.

Até breve,
**Guilherme S. L. Anjos**
Dimensões Infinitas

**Implementação:** no botão de template Double Opt-In da Brevo utilizar a variável oficial de link DOI, conforme documentação do provedor; no template API pode usar `{{ params.DOIurl }}` onde aplicável. O template deve ser criado/validado no painel. NÃO substituir o link de confirmação por um link direto à home.

## E-mail 2 — Boas-vindas após confirmação (automatização opcional)
Gatilho: novo inscrito **confirmado** adicionado à lista de lançamento. Enviar **somente após o consentimento confirmado**.

Assunto: **Bem-vindo a Etérea**
Pré-cabeçalho: **Uma civilização acima do mundo. Uma história prestes a cair.**

Olá!

Sou Guilherme S. L. Anjos, autor de *Ruínas dos Céus*. Obrigado por querer acompanhar o lançamento.

Imagine um povo que sempre viveu entre ilhas suspensas e aprendeu a acreditar que jamais tocaria o chão. Agora, pequenas mudanças no vento começam a desafiar tudo o que ele conhece.

É nesse mundo que você vai conhecer Jokara.

Enquanto preparo a publicação, vou compartilhar novidades pontuais e avisar quando as edições digital e impressa estiverem disponíveis.

Se ainda não começou a leitura gratuita, o primeiro capítulo está aqui:

**[Ler gratuitamente “O Sopro de Etérea”](https://dimensoesinfinitas.com/ciclo-de-jesed/ruinas-dos-ceus/ler/)**

Boa leitura,
**Guilherme S. L. Anjos**
Dimensões Infinitas

Rodapé: informação de tratamento de dados + link de descadastro fornecido pelo provedor.

## E-mail 3 — Aviso quando a obra estiver disponível (manual)
Gatilho: **somente quando os links Kindle/KDP e Bok2 estiverem publicados e testados**.
Assunto sugerido: **Ruínas dos Céus chegou: a história de Etérea já pode ser lida**
Corpo: gancho sem spoilers, mensagem do autor, formatos disponíveis, botões reais das lojas, link para capítulo gratuito e descadastro.

## Restrições editoriais e regulatórias
- Não revelar a sobrevivência de Jokara, a superfície, desfechos ou conexões secretas.
- Não usar falsa urgência/escassez, depoimentos não autorizados ou promessa de lançamento em data não confirmada.
- Não disparar e-mails para os contatos não confirmados.
- Não medir e-mail “enviado” como “lido”, nem clique como venda.
- Antes de ativar: DNS do remetente, política de privacidade revisada, canal de direitos, teste de confirmação e descadastro, prevenção de spam e conexão Brevo.
