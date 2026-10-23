# Auditoria de conversão — Dimensões Infinitas / Ruínas dos Céus
Atualização: 23/10/2026. Implementação da home, landing dedicada, leitor completo e infraestrutura opcional de newsletter.

## Objetivo confirmado
- **Pré-lançamento:** transformar tráfego qualificado de leitores brasileiros de fantasia épica adulta em **leitura real do primeiro capítulo** e, secundariamente, em **inscrições consentidas e confirmadas** para aviso de lançamento.
- **Após publicação:** priorizar cliques de compra e **vendas efetivas** KDP/Bok2, mantendo o capítulo gratuito e captação.
- **Longo prazo:** reforçar a marca literária Dimensões Infinitas e apresentar os demais universos, só depois do interesse no livro.
- Conversão primária imediata da home: **abrir capítulo gratuito**, pois não existe compra ativa e a lista depende da ativação segura do provedor.
- Conversão secundária da landing: **pedido de confirmação de e-mail** e posterior confirmação real no Brevo. Não confundir envio de formulário com cadastro confirmado.

## Revisão da estrutura anterior (home V1)
| Bloco antigo | Diagnóstico | Mudança |
|---|---|---|
| Cabeçalho com cinco destinos | Distrai antes do livro; símbolo provisório não é marca | Marca original (selo + logo), navegação reduzida, CTA de leitura |
| Hero “Há mundos...” + botão para âncora | Boa atmosfera, mas CTA exige outra etapa e não entrega capítulo | Gancho explícito com Jokara, **ler capítulo grátis** na primeira dobra |
| Fita com quatro gêneros | Promove catálogo antes do compromisso com Ruínas | Trocar por três atributos narrativos da obra |
| Sinopse longa | Correta e sem spoiler, mas excesso de leitura antes da amostra | Na home: premissa breve + primeira linha original; sinopse aprovada integral na landing |
| Explicação da pentalogia | Diferencial real, mas conceito complicado para tráfego frio | Descer após o primeiro convite à lista; explicar sem antecipar conexões |
| Outros universos | Dispersão enquanto visita ainda não assumiu interesse | Descer para perto do rodapé, sem botões de saída |
| Acompanhe no Instagram | Sai do funil principal | Trocar por cadastro consentido **quando configurado**; Instagram só no bloco autor/rodapé |
| Autor | Boa credencial, aparecia tarde | Manter breve, com assinatura artística oficial, sem inventar prêmios ou números |
| Rodapé | Faltava privacidade / páginas claras | Adicionar links da obra, autor, Instagram e política de privacidade |

## Ordem atual: home
1. Marca editorial oficial + CTA único de leitura no topo.
2. Hero: categoria, premissa, Jokara, capa, **ler grátis** e conhecer o livro.
3. Elementos de identificação do gênero e conflito.
4. Microtrecho **literal do capítulo 1**, CTA direto.
5. Inscrição consentida, com promessa explícita e sem bloquear amostra.
6. Ciclo de Jesed contextualizado como diferencial, sem exigir outras leituras.
7. Outras séries em texto curto e sem fuga da jornada.
8. Autor com assinatura gráfica oficial.
9. CTA final repetindo leitura / newsletter.

## Ordem atual: landing do livro
1. Cabeçalho enxuto: capítulo gratuito, livro e inscrição.
2. Capa, gancho oficial, Jokara, CTA principal **Ler Capítulo 1** + inscrição opcional.
3. Sinopse **oficial aprovada** de 23/10/2026, sem spoiler da sobrevivência ou superfície.
4. Três argumentos de encaixe da leitura (mundo, conflito, experiência), sem inventar elogios.
5. Trecho literal e segundo convite à leitura sem cadastro.
6. Explicação breve do Ciclo de Jesed.
7. Captura opt-in com consentimento destacado e double opt-in.
8. Perguntas objetivas de fricção (grátis, data de venda, texto provisório, frequência).
9. CTA final de baixa fricção: ler / aviso.

## Ordem atual: página do capítulo
1. Ferramentas: voltar, tema escuro/sépia/claro, fonte +/- e tela cheia (fallback foco quando a API de tela cheia não está disponível).
2. Capítulo 1 **integral**, 3.254 palavras / 89 parágrafos, importado diretamente do MD canônico no GitHub, sem alterações no texto.
3. Progresso visual, preferências persistidas no navegador; sem paywall, sem modal interrompendo leitura.
4. Convite pequeno e dispensável somente quando avançar ~73%; CTA principal no final da experiência, com acesso à lista.
5. O texto é uma **prévia sujeita a ajustes editoriais**. Recomenda-se atualizar o espelho após estabilização da edição.

## Decisão da amostra após avaliação dos betas
**Capítulo 1 — O Sopro de Etérea**, e NÃO o Capítulo 9 — O Cataclisma.
- Registro de conversa da análise anterior: Augusto reagiu ao capítulo 1 com “Um bom começo!” e descreveu o início como leve/imersivo; ao capítulo 2 como acessível; ao capítulo 3 manifestou confusão pelo volume de descrição/nomes. O capítulo 9 foi descrito como “O melhor até aqui”, com tensão e emoção.
- Registro de leitura de Nanda: abertura elogiada visualmente, porém por vezes percebida como densa/lenta; tensão cresceu em direção à nuvem e ao cataclisma. Felipe criticou lentidão, excesso de descrição e terminologia inicial, apesar do engajamento posterior.
- Comentários **não foram relidos diretamente do Firestore/Lityra nesta execução**. Não há exportação autenticada de eventos de leitor no repositório comercial. Os juízos acima vêm de discussões anteriores, NÃO são medição nova ou prova social publicável.
- Critério: o capítulo mais emocionante não é necessariamente a melhor **porta de entrada**. O Capítulo 9 antecipa um grande acontecimento e viola a progressão da narrativa; o Capítulo 2 exigiria contexto do primeiro. A leitura do Capítulo 1 preserva a ordem, o mundo e o vínculo inicial com Jokara.
- **Risco de conversão:** primeiros parágrafos contemplativos podem criar abandono em tráfego frio. Testar qualitativamente a abertura com 8–12 leitores-alvo e comparar indicadores de avanço/abandono, sem trocar a ordem do livro por ranking de emoções.
- Alternativa de teste futuro: um microtrecho do Capítulo 1 como prévia na landing, sem substituir a página integral.

## Newsletter: o que está e não está ativo
- Formulários e rota do Worker: `/api/newsletter/status`, `/api/newsletter/subscribe`.
- Provedor projetado: Brevo API v3, fluxo double opt-in oficial `/contacts/doubleOptinConfirmation`. A confirmação depende de template DOI verdadeiro e remetente verificado.
- **PENDENTE DE CONFIGURAÇÃO REAL:** Brevo account, lista, template DOI, domínio/remetente, DNS de e-mail, 3 segredos no Cloudflare Worker (`BREVO_API_KEY`, `BREVO_LIST_ID`, `BREVO_DOI_TEMPLATE_ID`), teste ponta a ponta, canal de contato de privacidade, mitigação de bots. Nenhum segredo deve entrar no GitHub.
- Frontend consulta status; sem configuração, botão fica desativado e exibe indisponibilidade com honestidade. Não cria lead fictício, não confirma inscrição sem e-mail.
- Formulário com consentimento não pré-marcado. O envio de confirmação é `newsletter_request`; `newsletter_signup` exige confirmação na Brevo e não é disparado prematuramente.
- Página pública de privacidade é um rascunho implementável, requer validação jurídica/operacional antes de ativar a lista.

## Eventos e avaliação de resultado
- Medir sem misturar eventos: `book_view` (visitas à landing), `sample_open`, `newsletter_request`, `newsletter_signup` (inscrito **confirmado no provedor**), `kindle_click`, `bok2_click` e vendas reais KDP/Bok2.
- Ainda **não instalados** GA4, Search Console e consentimento para tracking; nenhum evento implica monitoramento ativo.
- Estabelecer linha de base semanal por campanha UTM: visitantes qualificados → início do capítulo → avanço até o final → pedidos de confirmação → confirmados → vendas reais.
- Comparar CTAs em testes controlados após volume suficiente, nunca afirmar que determinado layout garante conversão máxima.
- Prioridade: reduzir ruído, manter promessa verdadeira e oferecer o capítulo grátis, não multiplicar CTAs diferentes sem propósito.

## Checklist de publicação pendente
- Verificar deploy Cloudflare Worker, HTML e assets, renderização visual mobile/desktop e links.
- Revisar capa atual versus a capa oficial mais recente aprovada.
- Revalidar capítulo 1 contra o manuscrito editorial final antes de promover massivamente.
- Ativar e testar double opt-in e link de descadastro, autenticação DNS e canal para direitos do titular.
- Testar rate limiting/anti-spam no formulário; honeypot e tempo mínimo não são proteção suficiente contra ataques direcionados.
- Associar e verificar GA4/Search Console conforme consentimento e política aplicável.
- Conferir que não haja spoilers posteriores à queda na página pública.
