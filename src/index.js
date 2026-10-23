
const asJson = (value, status=200) => new Response(JSON.stringify(value),{
  status,
  headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'}
});
const configured = env => Boolean(
  env.BREVO_API_KEY &&
  /^\d+$/.test(String(env.BREVO_LIST_ID||'')) &&
  /^\d+$/.test(String(env.BREVO_DOI_TEMPLATE_ID||''))
);
export default {
  async fetch(request, env) {
    const url=new URL(request.url);
    if(url.pathname==='/api/newsletter/status' && request.method==='GET') {
      return asJson({ready:configured(env)});
    }
    if(url.pathname==='/api/newsletter/subscribe') {
      if(request.method!=='POST') return asJson({message:'Método não permitido'},405);
      const origin=request.headers.get('Origin');
      if(origin && origin!==url.origin) return asJson({message:'Origem não autorizada'},403);
      if(!configured(env)) return asJson({message:'As inscrições ainda não estão disponíveis.'},503);
      const len=Number(request.headers.get('content-length')||0);
      if(len>2048) return asJson({message:'Solicitação inválida.'},413);
      let data;
      try{data=await request.json();}catch{return asJson({message:'Dados inválidos.'},400);}
      if(!data || typeof data!=='object') return asJson({message:'Dados inválidos.'},400);
      if(data.trap) return asJson({message:'Confira sua caixa de entrada para confirmar o cadastro.'},200);
      const email=typeof data.email==='string'?data.email.trim():'';
      if(!/^[^@\s]{1,64}@[^@\s]{1,253}\.[^@\s]{2,}$/.test(email) || email.length>254 || data.consent!==true) {
        return asJson({message:'E-mail válido e consentimento explícito são obrigatórios.'},400);
      }
      if(typeof data.elapsed!=='number'||data.elapsed<2500||data.elapsed>86400000) return asJson({message:'Atualize a página antes de enviar.'},400);
      const payload={
        email,
        includeListIds:[Number(env.BREVO_LIST_ID)],
        templateId:Number(env.BREVO_DOI_TEMPLATE_ID),
        redirectionUrl:'https://dimensoesinfinitas.com/inscricao-confirmada/',
        contactPixelTrackingConsent:false
      };
      let upstream;
      try{
        upstream=await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation',{
          method:'POST',
          headers:{'api-key':env.BREVO_API_KEY,'accept':'application/json','content-type':'application/json'},
          body:JSON.stringify(payload)
        });
      }catch{return asJson({message:'Serviço de inscrições indisponível. Tente mais tarde.'},502);}
      if(!upstream.ok){
        console.log('Newsletter provider refused request:',upstream.status);
        return asJson({message:'Não foi possível solicitar a confirmação. Tente novamente mais tarde.'},502);
      }
      return asJson({message:'Confirmação solicitada.'});
    }
    return env.ASSETS.fetch(request);
  }
};
