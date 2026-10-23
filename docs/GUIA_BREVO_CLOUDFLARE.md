# Guia operacional: ativar newsletter Brevo + Cloudflare

Atualizado em 23/10/2026. **A infraestrutura do formulário existe no código, mas a conta e as chaves não estão configuradas/validadas pelo assistente.** Nunca cole sua API key em chats, issues ou arquivos públicos.

## Objetivo do formulário
A página coleta **somente e-mails com consentimento específico** para avisos de lançamento e notícias literárias de Guilherme S. L. Anjos / Dimensões Infinitas. A amostra é gratuita sem fornecer e-mail. A assinatura precisa de **double opt-in**: envio do e-mail de confirmação + clique real.

## Primeiro: conta e domínio Brevo
1. Entre na sua conta em https://www.brevo.com/ e conclua a configuração inicial.
2. Acesse **Settings > Senders, Domains, IPs > Domains**. Adicione **dimensoesinfinitas.com**.
3. Use autenticação automática com provedor DNS, se disponível e autorizada; caso contrário, copie os registros de autenticação exibidos pela Brevo para **Cloudflare > domínio > DNS > Records**. A Brevo fornece registros DKIM/DMARC específicos; **não inventar entradas DNS** nem criar um segundo DMARC se já existir um.
4. Em **Settings > Senders, Domains, IPs > Senders**, configure um remetente real e verificado, por exemplo um endereço da sua propriedade *se ele já existir*. Nome sugerido: **Guilherme S. L. Anjos | Dimensões Infinitas**. A autenticação do domínio **não cria uma caixa postal**; configure uma caixa ou encaminhamento funcional para respostas e solicitações LGPD/RGPD.
5. Confirme no painel Brevo status autenticado e capacidade de envio de e-mail transacional.

Referência: https://help.brevo.com/hc/en-us/articles/12163873383186-Authenticate-your-domain-with-Brevo-Brevo-code-DKIM-DMARC

## Lista
1. Vá a **CRM > Contacts > Lists**.
2. Crie a lista **Ruínas dos Céus | Aviso de lançamento** (se desejar, pasta Dimensões Infinitas).
3. Guarde o **ID numérico** dessa lista, não apenas seu nome. Pode ser obtido na interface/URL/detalhes, conforme visualização da conta, ou por API.
4. Não importe contatos antigos sem consentimento para esse fim.
Referência: https://help.brevo.com/hc/en-us/articles/5526943347858-Create-folders-and-lists-to-organize-your-contacts

## Modelo de confirmação DOI
1. No menu **Marketing > Templates > Email**, crie um modelo de **double opt-in** para verificação de inscrição. O template precisa ser compatível com envio transacional pela API DOI.
2. Assunto proposto: **Confirme sua inscrição para acompanhar Ruínas dos Céus**.
3. No conteúdo, explique que a inscrição foi solicitada e vincule o botão de confirmação à variável oficial **`{{ params.DOIurl }}`**, não a uma URL manual.
4. Use o remetente verificado; crie e salve o template e anote o **ID numérico** de template.
5. Teste no fluxo real. Nem todos os testes manuais de templates preenchem o link DOI, pois o link é gerado na criação de contato de confirmação.
Referência: https://developers.brevo.com/reference/create-doi-contact

## Chave API e Cloudflare
1. Na Brevo, vá a **Settings > SMTP & API > API Keys & MCP > Generate a new API key**. Nomeie, por exemplo, `dimensoesinfinitas-worker`. **Use chave API, não chave SMTP**; copie e guarde com segurança, pois ela só é exibida na criação. Não ative a opção específica de chave para MCP sem necessidade.
2. No dashboard Cloudflare, acesse **Workers & Pages > Workers > dimensoesinfinitas-web > Settings > Variables and Secrets > Add**.
3. Crie:
   - **`BREVO_API_KEY`** = chave API, tipo **Secret**;
   - **`BREVO_LIST_ID`** = número ID da lista; pode usar Secret;
   - **`BREVO_DOI_TEMPLATE_ID`** = número ID do template; pode usar Secret.
4. Escolha a implantação de produção e clique em **Deploy** ao salvar. Não adicione essas chaves no GitHub, `wrangler.jsonc`, HTML, CSS ou JavaScript do cliente. Se o serviço for publicado por Workers Builds, o código no GitHub continua sendo a fonte.
5. Confira `https://dimensoesinfinitas.com/api/newsletter/status`. Com todas as três variáveis presentes e o Worker rodando, deve retornar **`{"ready":true}`**. Isso sinaliza configuração básica, não garante que o template/entrega funcione.
6. Teste com endereço seu: enviar formulário + aceitar consentimento -> receber confirmação -> clicar -> chegar à `/inscricao-confirmada/` -> ver contato na lista Brevo -> receber boas-vindas conforme automação criada -> clicar em descadastro e confirmar remoção.
7. Antes da divulgação ampla, implemente proteção antispam (Cloudflare Rate Limiting/Turnstile) e um endereço funcional de privacidade. Nenhum registro de marketing deve surgir sem consentimento confirmado.

Referências: https://help.brevo.com/hc/en-us/articles/209467485-Create-and-manage-your-API-keys e https://developers.cloudflare.com/workers/configuration/secrets/

## Sequência de e-mails
As cópias estão em `docs/EMAILS_AUTOMATICOS_RUINAS.md`:
- **Confirmação:** modelo transacional DOI acionado pela API.
- **Boas-vindas:** criar automação Brevo para quando o contato for **efetivamente adicionado à lista confirmada**. Ela não é enviada pelo Worker do site.
- **Lançamento:** campanha manual para contatos confirmados somente quando Amazon/Bok2 estiverem ativos.
- **Descadastro:** exige link real em cada e-mail de marketing, conforme editor/rodapé Brevo.

## Diagnóstico: se não funcionar
- Status API `ready:false`: segredos não foram adicionados no **mesmo Worker e ambiente** usado pelo domínio, deploy ainda antigo, ou ID numérico inválido/ausente.
- Status `ready:true`, envio falha: verificar **Workers > Observability / Logs** (sem imprimir API key) e template DOI, domínio e quotas no painel Brevo.
- E-mail não chega: verificar spam, status do remetente e autenticação DNS, formulário bloqueado, template DOI, e contato já existente.
- Se o domínio mostra HTML novo mas a API retorna 404: verificar `wrangler.jsonc` e implantação atual com `main:"src/index.js"`, `assets.binding:"ASSETS"` e `run_worker_first:["/api/*"]`.

## Arquitetura atual
- `public/app.js` valida e envia o formulário, sem expor a API key.
- `src/index.js` recebe a requisição e chama Brevo DOI no servidor.
- `public/inscricao-confirmada/index.html` é apenas a mensagem de confirmação final.
- O sistema **não envia automaticamente** boas-vindas/campanhas até que a automação seja criada no painel Brevo.
