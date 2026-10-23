# Dimensões Infinitas — site comercial oficial

**Atualizado 23/10/2026 (revisão mobile/contraste):** home e landing comercial agora usam fundo creme editorial, tipografia escura e azul profundo nas chamadas; reorganizadas para uma razão diferente por bloco, com até dois CTAs de leitura por página, além do formulário. Capa centralizada e enquadrada no celular. Selo dourado oficial como favicon. Leitor gratuito do Capítulo 1 agora inicia em sépia, com opções claro/escuro. **A publicação das páginas foi verificada no domínio; a integração de inscritos beehiiv ainda precisa das credenciais e de um teste ponta a ponta.**

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
Foto de autor: `public/assets/guilherme-s-l-anjos-autor.webp`, derivada da **metade direita** da imagem pessoal de apresentação enviada anteriormente pelo autor (retratro separado com estante de livros desfocada), otimizada para WebP. Integrada à home e ao bloco de apresentação autoral da landing. Assinatura oficial continua como elemento gráfico separado.

Capa existente em `public/assets/ruinas-dos-ceus-capa.webp`. Logos, selo N e assinatura originais copiados do repositório canônico `98 - Assets Gerais/Logos/Dimensões Infinitas/` para `public/assets/`, sem refazer tipografia. Nome de autoria oficial: **Guilherme S. L. Anjos**.

## Técnica
Cloudflare Workers com static assets em `./public`, Worker `src/index.js` exclusivo para `/api/*`. `wrangler.jsonc` configura binding `ASSETS` e `run_worker_first: ["/api/*"]`. A newsletter usa a API beehiiv v2 para criar inscritos com double opt-in obrigatório e boas-vindas (plano Free), se configurada; o Worker nunca publica tokens ao browser. Frontend informa indisponibilidade enquanto não estiver configurado.

### Configuração de inscrições (não concluída)
**Plataforma: beehiiv Free ($0/mês permanente, até 2.500 assinantes, newsletters ilimitadas).** Os 14 dias são avaliação opcional de recursos pagos e não são obrigatórios para usar o Free. Não depender de automações premium.

1. Criar publicação **Dimensões Infinitas** na beehiiv e verificar em **Settings > Billing & Plan** se o plano é Free.
2. Habilitar DOI e Welcome Email gratuitos em **Settings > Emails > Preset Emails**. Colocar link de redirecionamento pós-confirmação para `/inscricao-confirmada/`.
3. Criar API key em **Settings > Workspace Settings > API** (requer Stripe Identity Verification, que não equivale a assinar plano pago). Copiar Publication ID `pub_...`.
4. Em Cloudflare > Worker > Settings > Variables and Secrets: adicionar `BEEHIIV_API_KEY` (Secret) e `BEEHIIV_PUBLICATION_ID` (Secret/variável), **nunca commitar segredos**.
5. Verificar GET `/api/newsletter/status` `ready:true` e testar formulário, confirmação, boas-vindas, descadastro e contato em **Subscribers > Subscribers**.
6. Alternativa sem API: formulário incorporável da beehiiv (depende de gerar e integrar o snippet real no site).
7. Rever política de privacidade, dados de contato e antispam antes de campanhas grandes.

**Guia completo com menus conferidos em outubro de 2026:** [GUIA_BEEHIIV_CLOUDFLARE.md](docs/GUIA_BEEHIIV_CLOUDFLARE.md).

## SEO/medição
`robots.txt` e `sitemap.xml` cobrem somente páginas públicas. OG/canonical disponíveis. GA4/Search Console ainda não configurados; nenhum contador de conversões foi inventado. Em etapa futura, ativar métricas condicionadas a consentimento válido e mensurar inscrição **confirmada**, não apenas clique.

## Pesquisa, decisões e pendências
Auditoria detalhada de blocos, critérios de amostra, comparações e backlog: [docs/AUDITORIA_CONVERSAO_RUINAS_2026-10-23.md](docs/AUDITORIA_CONVERSAO_RUINAS_2026-10-23.md).

Documentos anteriores mantidos: `docs/BENCHMARK_10_AUTORES_INDEPENDENTES_E_CROWDFUNDING.md`, `docs/BENCHMARK_10_HOMES_AUTORES_E_WIREFRAME.md`, `docs/IMPLEMENTACAO.md`, `docs/ARQUITETURA.md`. As pesquisas documentam modelos e não comprovam taxas de conversão dos concorrentes.

## Revisão de layout e integração
- [Auditoria estratégica + mobile](docs/AUDITORIA_DESIGN_CONVERSAO_MOBILE_20261023.md): motivos para blocos, cor clara, correção da capa e testes pendentes.
- [Ativação beehiiv Free + Cloudflare passo a passo](docs/GUIA_BEEHIIV_CLOUDFLARE.md): conta, domínio, remetente, lista, template DOI, API key, segredos, testes e automação de boas-vindas.
- A publicação Cloudflare requer verificar o deploy efetivo; atualização no GitHub não garante publicação por si só. Se o usuário observa as alterações no domínio, o deploy ocorreu para esses arquivos específicos, mas isso não comprova a API da newsletter ou alterações posteriores.
