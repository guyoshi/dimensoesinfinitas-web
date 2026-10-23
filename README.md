# Dimensões Infinitas — site comercial oficial

**Atualizado 23/10/2026:** home reposicionada para conversão em leitura, landing de *Ruínas dos Céus*, leitor gratuito do Capítulo 1 com modo imersivo e infraestrutura preparada para newsletter double opt-in. **A publicação real do código no Cloudflare e a integração Brevo não foram verificadas.**

## Objetivo
Pré-lançamento: atrair leitores brasileiros de fantasia épica adulta, oferecer leitura gratuita do Capítulo 1 sem cadastro e, opcionalmente, formar uma lista de e-mails consentida e confirmada para o anúncio da publicação. No lançamento, transformar o funil em cliques e **vendas reais** Kindle/KDP e Bok2, sem prometer compra antes de links ativos. Longo prazo: marca Dimensões Infinitas e demais séries.

## Repositórios
- `guyoshi/dimensoesinfinitas` (privado): manuscritos, cânone e plano editorial;
- `guyoshi/dimensoesinfinitassite`: portal de exploração e lore (não é a landing comercial);
- `guyoshi/dimensoesinfinitas-web` (este): site leve, público e orientado à descoberta/leitura.

## Rotas
- `/`: marca + livro em destaque + conversão.
- `/ciclo-de-jesed/ruinas-dos-ceus/`: landing específica para divulgação por criadores, redes e campanhas.
- `/ciclo-de-jesed/ruinas-dos-ceus/ler/`: **texto integral atual** do Capítulo 1, “O Sopro de Etérea”, com tamanho de fonte, temas, progresso e tela cheia/foco.
- `/privacidade/`: transparência sobre dados e lista.
- `/inscricao-confirmada/`: destino do double opt-in caso ativado.

## Assets e direitos
Capa existente em `public/assets/ruinas-dos-ceus-capa.webp`. Logos, selo N e assinatura originais copiados do repositório canônico `98 - Assets Gerais/Logos/Dimensões Infinitas/` para `public/assets/`, sem refazer tipografia. Nome de autoria oficial: **Guilherme S. L. Anjos**.

## Técnica
Cloudflare Workers com static assets em `./public`, Worker `src/index.js` exclusivo para `/api/*`. `wrangler.jsonc` configura binding `ASSETS` e `run_worker_first: ["/api/*"]`. A newsletter usa a API Brevo DOI, se configurada; o Worker nunca publica tokens ao browser. Frontend informa indisponibilidade enquanto não estiver configurado.

### Configuração de inscrições (não concluída)
1. Criar/validar conta Brevo, identidade de remetente e autenticação do domínio de e-mail.
2. Criar lista e template de confirmação DOI com link `{{ params.DOIurl }}`, link de descadastro nos envios e uma campanha de boas-vindas/avisos; validar o fluxo escolhido.
3. No painel Cloudflare Worker, adicionar `BREVO_API_KEY` como **Secret** e `BREVO_LIST_ID`, `BREVO_DOI_TEMPLATE_ID` como secrets ou variáveis internas. Nunca commitar segredos.
4. Publicar/republicar o Worker, testar `GET /api/newsletter/status` (ready true), enviar inscrição de teste, confirmar link, verificar presença na lista e descadastrar.
5. Confirmar contato de privacidade, política final e limitação de abuso (rate limiting/Turnstile) antes de divulgação ampla.

## SEO/medição
`robots.txt` e `sitemap.xml` cobrem somente páginas públicas. OG/canonical disponíveis. GA4/Search Console ainda não configurados; nenhum contador de conversões foi inventado. Em etapa futura, ativar métricas condicionadas a consentimento válido e mensurar inscrição **confirmada**, não apenas clique.

## Pesquisa, decisões e pendências
Auditoria detalhada de blocos, critérios de amostra, comparações e backlog: [docs/AUDITORIA_CONVERSAO_RUINAS_2026-10-23.md](docs/AUDITORIA_CONVERSAO_RUINAS_2026-10-23.md).

Documentos anteriores mantidos: `docs/BENCHMARK_10_AUTORES_INDEPENDENTES_E_CROWDFUNDING.md`, `docs/BENCHMARK_10_HOMES_AUTORES_E_WIREFRAME.md`, `docs/IMPLEMENTACAO.md`, `docs/ARQUITETURA.md`. As pesquisas documentam modelos e não comprovam taxas de conversão dos concorrentes.
