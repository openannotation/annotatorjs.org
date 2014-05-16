# annotatorjs.org documentation
===============

Pull requests to this site are welcome.  

If you are going to submit a news post, here is the quick guide:

```
$ git checkout master
$ cd _news
$ jekyll build
```
```
$ rake post title="<your post title>"
```
Your post is created in /\_posts with the title you specified.  Once you've finished editing it, run `jekyll build` from the \_news/ directory.  See [jekyll docs](http://jekyllbootstrap.com/usage/jekyll-quick-start.html) and our [JEKYLL_README](https://github.com/openannotation/annotatorjs.org/blob/master/_news/JEKYLL_README) for more information.
```
$ rake ghp
$ git push origin gh-pages:gh-pages
```
