	yarn install
	git checkout develop
	git pull origin develop
	git checkout master
	git pull origin master
	git merge develop
	standard-version -r minor
	git push origin master -f
	git push origin develop -f
	git push --follow-tags origin master -f
	git checkout develop
	git rebase master
	git push --follow-tags origin develop -f
