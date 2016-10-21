deploy - https://gist.github.com/cobyism/4730490
touch dist/.static!
git push dokku `git subtree split --prefix dist master`:master --force
