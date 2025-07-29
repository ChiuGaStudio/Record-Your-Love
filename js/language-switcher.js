(function(){
    function applyLang(lang){
     if(typeof pageTranslations === 'undefined') return;
        var trans = pageTranslations[lang];
        if(!trans) return;
        document.querySelectorAll('[data-i18n]').forEach(function(el){
            var key = el.getAttribute('data-i18n');
            if(trans[key]) el.innerHTML = trans[key];
        });
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('lang', lang);
    }

    document.addEventListener('DOMContentLoaded', function(){
        var selector = document.getElementById('language-switcher');
        if(!selector) return;
        var saved = localStorage.getItem('lang') || document.documentElement.lang || 'zh-Hant';
        if(!pageTranslations[saved]) saved = 'zh-Hant';
        selector.value = saved;
        applyLang(saved);
        selector.addEventListener('change', function(){
            applyLang(this.value);
        });
    });
})();
