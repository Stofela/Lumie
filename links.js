// Aponta os links "data-repo" para o repositório certo, sem precisar editar o endereço à mão.
// Em https://USUARIO.github.io/REPO/ o repositório é https://github.com/USUARIO/REPO
(function () {
  var host = location.hostname;
  if (!/\.github\.io$/.test(host)) return;
  var usuario = host.split('.')[0];
  var repo = location.pathname.split('/')[1];
  if (!repo) return;
  var base = 'https://github.com/' + usuario + '/' + repo;
  document.querySelectorAll('[data-repo]').forEach(function (a) {
    var caminho = a.getAttribute('data-repo');
    a.href = caminho ? base + '/blob/main/' + caminho : base;
  });
})();
