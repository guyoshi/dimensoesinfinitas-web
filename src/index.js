// Inscrições gratuitas via beehiiv API. Nunca expor o token no navegador.
const json = (data, status=200) => new Response(JSON.stringify(data), {
 status, headers: {'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}
});
const ready = env => Boolean(
 env.BEEHIIV_API_KEY &&
 /^pub_[0-9a-fA-F-]+$/.test(String(env.BEEHIIV_PUBLICATION_ID || ''))
);
const validEmail = email => typeof email === 'string' && email.length <= 254 &&
 /^[^@\s]{1,64}@[^@\s]{1,253}\.[^@\s]{2,}$/.test(email);
export default {
 async fetch(request, env) {
  const url = new URL(request.url);
  if (url.pathname === '/api/newsletter/status' && request.method === 'GET') {
   return json({ready: ready(env), provider:'beehiiv'});
  }
  if (url.pathname === '/api/newsletter/subscribe') {
   if (request.method !== 'POST') return json({message:'Método não permitido.'},405);
   const origin = request.headers.get('Origin');
   if (origin && origin !== url.origin) return json({message:'Origem não autorizada.'},403);
   if (!ready(env)) return json({message:'As inscrições estão sendo configuradas. Tente mais tarde.'},503);
   if (Number(request.headers.get('Content-Length')||0) > 2048) return json({message:'Dados inválidos.'},413);
   let body;
   try {const raw=await request.text();if(raw.length>2048) return json({message:'Dados inválidos.'},413);body=JSON.parse(raw);}
   catch {return json({message:'Dados inválidos.'},400);}
   if (!body || typeof body!=='object') return json({message:'Dados inválidos.'},400);
   if (body.trap) return json({message:'Confira seu e-mail para confirmar.'});
   const email=typeof body.email==='string'?body.email.trim():'';
   if (!validEmail(email)||body.consent!==true) return json({message:'Informe um e-mail válido e aceite receber as mensagens.'},400);
   if (typeof body.elapsed!=='number'||body.elapsed<2500||body.elapsed>86400000) return json({message:'Atualize a página e tente novamente.'},400);
   // Guardar apenas a origem geral, sem informações pessoais nem query strings.
   const source = body.source==='/ciclo-de-jesed/ruinas-dos-ceus/'?'pagina_do_livro':'pagina_inicial';
   const payload={
    email, reactivate_existing:false, send_welcome_email:true,
    double_opt_override:'on',
    utm_source:'dimensoesinfinitas.com',
    utm_medium:'site_proprio',
    utm_campaign:'ruinas_dos_ceus_pre_lancamento',
    utm_content:source,
    referring_site:'https://dimensoesinfinitas.com/'
   };
   let result;
   try {
    result=await fetch('https://api.beehiiv.com/v2/publications/'+encodeURIComponent(env.BEEHIIV_PUBLICATION_ID)+'/subscriptions',{
     method:'POST',
     headers:{Authorization:'Bearer '+env.BEEHIIV_API_KEY,'Content-Type':'application/json','Accept':'application/json'},
     body:JSON.stringify(payload)
    });
   } catch {return json({message:'Serviço de inscrições temporariamente indisponível.'},502);}
   if (!result.ok) {
    // Não registrar token, e-mail nem dados pessoais nos logs.
    console.log('Newsletter provider returned HTTP '+result.status);
    if (result.status===429) return json({message:'Muitas solicitações. Tente novamente em alguns minutos.'},429);
    return json({message:'Não foi possível cadastrar o e-mail neste momento. Tente novamente mais tarde.'},502);
   }
   return json({message:'Pedido recebido. Confira sua caixa de entrada para confirmar o cadastro.'});
  }
  return env.ASSETS.fetch(request);
 }
};
