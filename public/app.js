(() => {
  'use strict';
  const $all = (q, root=document) => [...root.querySelectorAll(q)];
  const forms = $all('.newsletter-form');
  if (!forms.length) return;
  let available = false;
  const setState = (form, message, isError=false) => {
    const status = form.querySelector('.form-status');
    if (!status) return;
    status.textContent = message;
    if (isError) status.setAttribute('role','alert');
    else status.setAttribute('role','status');
  };
  Promise.resolve().then(async () => {
    try {
      const response = await fetch('/api/newsletter/status', {cache:'no-store'});
      if(!response.ok) throw Error('status');
      const state = await response.json();
      available = state.ready === true;
    } catch (_) { available = false; }
    forms.forEach(form => {
      const submit = form.querySelector('button[type=submit]');
      if(!available) {
        submit.disabled = true;
        submit.title = 'Inscrições ainda em configuração (beehiiv)';
        setState(form,'O cadastro por e-mail será habilitado após a configuração segura do envio. Enquanto isso, a leitura gratuita está disponível.');
      }
    });
  });
  forms.forEach(form => {
    form.dataset.started = String(Date.now());
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if(!available) return;
      const submit = form.querySelector('button[type=submit]');
      const address = form.querySelector('input[type=email]');
      const consent = form.querySelector('input[name=consent]');
      if(!address?.validity.valid || !consent?.checked) {
        setState(form,'Informe um e-mail válido e marque o consentimento para prosseguir.',true);
        return;
      }
      submit.disabled=true;
      setState(form,'Solicitando e-mail de confirmação...');
      try {
        const resp = await fetch('/api/newsletter/subscribe',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            email:address.value.trim(),
            consent:consent.checked,
            trap:form.querySelector('[name=website]')?.value||'',
            elapsed:Math.max(0,Date.now()-Number(form.dataset.started || Date.now())),
            source:window.location.pathname
          })
        });
        const result=await resp.json().catch(()=>({}));
        if(!resp.ok) throw Error(result.message||'Não foi possível enviar. Tente novamente mais tarde.');
        address.value='';consent.checked=false;
        setState(form,'Confira sua caixa de entrada e confirme o cadastro pelo link enviado. Você só entrará na lista após confirmar.');
        window.dataLayer?.push({event:'newsletter_request',page_path:location.pathname});
      }catch(error){
        setState(form,error.message || 'Falha temporária no envio. Tente novamente.',true);
      }finally{submit.disabled=false;form.dataset.started=String(Date.now());}
    });
  });
})();