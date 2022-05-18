export default function (ism,fam,gr,js,sana) {
    let tr = document.createElement('tr')

    let th = document.createElement('th')
    th.setAttribute('scope', 'row')
    th.textContent = sana
    let tism = document.createElement('td')
    tism.textContent = ism;
    let tfam = document.createElement('td')
    tfam.textContent = fam;
    let tgr = document.createElement('td')
    tgr.textContent = gr
    let tjns = document.createElement('td')
    tjns.textContent = js
  
    tr.append(th)
    tr.append(tism)
    tr.append(tfam)
    tr.append(tgr)
    tr.append(tjns)

    return tr
}

export let kattaHarf = function(soz) {
   return soz.replace(soz.charAt(0), soz.charAt(0).toUpperCase())
}