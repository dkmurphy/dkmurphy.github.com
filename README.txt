dkmurphy.github.io

to reset git, cd to directory and run:

rm -rf .git
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/dkmurphy/dkmurphy.github.com.git
git push -u --force origin master

for updates, can do:
git add -A; git commit -m "updated README with instructions"; git push --all


also

appcfg.py update ~/d-k-murphy