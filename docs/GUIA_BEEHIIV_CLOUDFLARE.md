# Ativar newsletter gratuita: beehiiv Free + Dimensões Infinitas + Cloudflare

Data de verificação: 23/10/2026.
Fontes oficiais foram consultadas em outubro de 2026. O painel da beehiiv pode apresentar pequenas diferenças entre contas, idiomas e tamanho de tela. **O site já está preparado no GitHub para beehiiv, mas o formulário NÃO coletará e-mails até a conexão real e o teste com conta própria. Não inserir tokens no chat ou GitHub.**

## 0. Qual plano escolher, sem pagar
A beehiiv renomeou seus planos em outubro de 2026:
- **Free** (antigo **Launch**) = **US$ 0/mês, permanente, até 2.500 assinantes e envios ilimitados de newsletters**.
- **Lite** (antigo Scale) e **Pro** (antigo Max) são pagos. O teste grátis de **14 dias** é uma degustação dos recursos Pro. A documentação oficial informa que **não exige cartão** e, sem upgrade, a conta permanece no **Free**, com as funções pagas desativadas.
- **Free inclui:** formulário, newsletter, confirmação (double opt-in), e **um único e-mail de boas-vindas automático**.
- **Free NÃO inclui:** fluxos avançados de automação com várias mensagens, envios transacionais livres por Send API, campanhas segmentadas em muitos grupos ou assinatura >2.500 sem mudar o plano.
- Se a sua conta mostra "14-day free trial": **não é obrigação de pagar após 14 dias**. Para conferir o plano, no painel esquerdo role até **Settings > Billing & Plan**, veja **Your Current Plan**. Escolha **Free** se disponível. Não clique em "Upgrade" nem insira cartão para essa configuração.
Fonte: https://www.beehiiv.com/pricing ; https://www.beehiiv.com/support/article/22101553752471 ; https://www.beehiiv.com/blog/beehiiv-pricing-2026

## 1. Criar a publicação (a base de assinantes)
1. Abra https://app.beehiiv.com e entre na sua conta.
2. Conclua o cadastro básico, criando **uma publicação chamada Dimensões Infinitas**. Não precisa conectar ou apontar `dimensoesinfinitas.com` à beehiiv. **O site comercial continuará hospedado no Cloudflare!** Usar inicialmente o endereço gratuito da beehiiv para a página pública da newsletter, se solicitado.
3. Em celular, abra o **menu lateral** e role até o fim para encontrar **Settings**. Na nova navegação (2026) há seções Publish, Audience, Monetize e Grow, e no grupo Audience o item **Subscribers**; os rótulos podem variar. Não procure uma engrenagem no topo, que não é a orientação do painel.
4. Confira **Settings > Billing & Plan > Your Current Plan**: Free. A avaliação Pro não significa que você contratou Pro.
Referência atual de navegação: https://www.beehiiv.com/support/article/39454763210903

## 2. Configurar o remetente, sem pagar
1. No menu da esquerda, role até **Settings** e clique **Emails**.
2. Em **Email Sending Details**, defina **Sender Name = Guilherme S. L. Anjos | Dimensões Infinitas**.
3. Defina um **Reply-to address** real que você tenha acesso e possa ler. Não presumir que o domínio do site cria uma caixa de e-mail.
4. A publicação pode usar o **subdomínio/infraestrutura de envio** da beehiiv enquanto estiver no plano Free. Não altere os registros DNS da raiz `dimensoesinfinitas.com`, pois já hospeda o site no Cloudflare. A personalização completa do domínio de envio pode exigir um plano pago; confirme a disponibilidade da conta antes de mudar DNS.
Documentação: https://www.beehiiv.com/support/article/12293357892503

## 3. Confirmar os e-mails antes de adicioná-los definitivamente
1. Na mesma tela **Settings > Emails**, role até **Preset Emails**.
2. Ative **Double Opt-in Email**. O contato entrará como **Pending** até clicar no botão de confirmação recebido.
3. Em **Opt-in Redirect URL**, coloque **https://dimensoesinfinitas.com/inscricao-confirmada/**.
4. Se estiver disponível, ative **Smart Nudge** (lembrete após 48 h aos pendentes), sem automações pagas.
5. Clique **View Opt in Email**, depois **Edit Email**. Atualize assunto: **Confirme sua inscrição para acompanhar Ruínas dos Céus**, prévia: **Só falta confirmar que este e-mail é seu.** Mantenha o botão **Confirm Subscription** (pode mudar o texto para "Confirmar minha inscrição"). No editor: **Details** para assunto, **Write** para corpo, **Style** para estilo, **Preview** e **Save** para salvar.
6. Em **Welcome Email**, clique **View Welcome Email > Edit Email** e use a mensagem do arquivo `docs/EMAILS_AUTOMATICOS_RUINAS.md`. Ative a opção de envio de welcome email. Com DOI ligado, boas-vindas só vão após a confirmação.
Documentação oficial: https://www.beehiiv.com/support/article/13081072798743 ; https://www.beehiiv.com/support/article/38813477234071-welcome-email-vs-welcome-automation-which-should-you-use

## 4. Ligar o formulário atual ao banco da beehiiv
O site mantém seu próprio formulário, com consentimento separado e sem pedir dados para ler o capítulo. A API **normal** de criação de assinatura é gratuita; a **Send API** para envios arbitrários NÃO é necessária.
1. Na beehiiv, no menu lateral vá a **Settings**, role ao grupo **Workspace Settings**, entre em **API**.
2. **Importante:** a beehiiv exige **Stripe Identity Verification** antes de liberar criação de API keys. Isso é uma verificação de identidade, não compra de plano ou ativação de pagamentos. Faça dentro do fluxo oficial da plataforma; não envie documentos aqui.
3. Em **API Keys**, clique **Create New API Key**, nomeie `dimensoesinfinitas-cloudflare`; copie a chave na única ocasião em que aparece. Não a envie por mensagem ou commit.
4. Logo abaixo, em **Publication ID**, selecione **Dimensões Infinitas** e copie o identificador completo, iniciando em `pub_`.
5. Na Cloudflare abra seu Worker do domínio (**Workers & Pages > dimensoesinfinitas-web > Settings > Variables and Secrets > Add**; nomes de menus podem variar conforme painel). No ambiente de produção, adicione:
   - `BEEHIIV_API_KEY`: **Secret**, valor é a chave API que só você vê.
   - `BEEHIIV_PUBLICATION_ID`: variável/Secret, valor `pub_...` copiado.
6. Salve/deploy no painel Cloudflare. **Não é preciso alterar o GitHub**: o Worker foi preparado para essas 2 variáveis.
7. Abra https://dimensoesinfinitas.com/api/newsletter/status e confira se retorna `{"ready":true,"provider":"beehiiv"}`. Isso indica apenas que as variáveis foram encontradas, **não prova que os contatos já entram**.
8. Abra https://dimensoesinfinitas.com/ciclo-de-jesed/ruinas-dos-ceus/#newsletter num navegador novo. Insira um e-mail seu **que ainda não esteja inscrito**, marque a caixa de consentimento e envie. Receba o e-mail, clique no botão de confirmação, confira o redirecionamento, aguarde o e-mail de boas-vindas e cheque o contato no painel.
9. Teste o descadastro no rodapé de uma newsletter e evite envio excessivo. Para anti-spam em produção, adicionar Cloudflare rate limiting/Turnstile antes de campanha de tráfego grande (o formulário tem honeypot e tempo mínimo, mas não são suficientes em ataque direcionado).
Fontes: https://www.beehiiv.com/support/article/13091918395799-how-to-access-your-publication-id-or-api-keys ; https://developers.beehiiv.com/api-reference/subscriptions/create ; https://developers.cloudflare.com/workers/configuration/secrets/

### Se não quiser a verificação de identidade Stripe
A alternativa gratuita é **criar um formulário incorporável** em beehiiv. Abra o menu **Subscribers > Subscribe forms** (na navegação antiga: Audience > Subscribers > Subscribe forms). Crie/publice um formulário embedded **Inline**, ative **Require double opt-in** se necessário, copie o código embed e disponibilize-o para integrar ao HTML atual. Esse caminho pode dispensar a API key e o Stripe Identity, mas altera o visual/comportamento do formulário; será necessária atualização posterior do site com o código real gerado pela sua conta, nunca inventado.
Fonte: https://www.beehiiv.com/support/article/12977090590487

## 5. Onde está a base de dados (os e-mails coletados)?
No **painel beehiiv > Subscribers > Subscribers** (ou **Audience > Subscribers** na navegação anterior). Clique numa linha para abrir o perfil:
- **Pending**: enviou formulário mas ainda não confirmou e-mail.
- **Active**: confirmou; pode receber notícias.
- **Inactive**: cancelou/foi desinscrito.
- Veja endereço, origem, status e data; a lista mora **na beehiiv**, não no GitHub, não na Cloudflare e não nos e-mails pessoais do autor.
- Para salvar uma cópia CSV: **Settings > Export Data > Export Subscribers > Export All Basic Subscribers** ou **Export All Subscribers**. A beehiiv envia um link e disponibiliza o arquivo na página de exports. Trate o CSV com cuidado (dados pessoais).
Fontes: https://www.beehiiv.com/support/article/12428610562327-managing-your-subscribers-on-beehiiv ; https://www.beehiiv.com/support/article/12258595483543-exporting-post-content-or-subscriber-data-from-beehiiv

## 6. O que acontece com os envios?
- Depois de assinado e confirmado, a pessoa recebe o **único Welcome Email gratuito**, se habilitado.
- Futuras mensagens de lançamento/notícias podem ser enviadas como **Newsletter > Posts**, pela plataforma; envios de newsletters são ilimitados no Free, respeitadas políticas anti-spam e teto de 2.500 assinantes.
- Automações com séries temporizadas de vários e-mails pertencem a planos pagos. **Não criar fluxos pagos durante teste de 14 dias** para depender deles depois.
- Não mover e-mails sem consentimento, não prometer que inscrição funciona enquanto o status não está ativo, não afirmar que clique = cadastro confirmado.

## Diagnóstico rápido
| Sintoma | O que verificar |
|---|---|
| 14 dias no painel | É o teste dos recursos Pro. Free permanece grátis depois sem upgrade. |
| Não consigo gerar API key | Concluir Stripe Identity Verification ou optar por formulário incorporado. |
| `ready:false` no site | As duas variáveis da beehiiv não estão no Worker/ambiente de produção, ou ID `pub_` inválido. |
| `ready:true`, mas envio falha | Conferir logs sem dados pessoais; a API key, permissões, API quotas e publicação; testar com endereço novo. |
| Aparece Pending no painel | Correto para double opt-in; pessoa ainda precisa clicar confirmação. |
| Não aparece e-mail de boas-vindas | Habilitar Welcome Email; DOI deve ter sido confirmado; considerar atraso de entrega. |

A documentação antiga `docs/GUIA_BREVO_CLOUDFLARE.md` não deve mais ser seguida.
