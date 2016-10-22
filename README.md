deploy - https://gist.github.com/cobyism/4730490
npm run deploy:prod
git push dokku `git subtree split --prefix dist master`:master --force
