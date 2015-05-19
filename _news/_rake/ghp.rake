MESSAGE = "Update gh-pages"


desc "Update gh-pages branch"
task :ghp do
  `git update-index -q --refresh`

  if `git ls-files --others --exclude-standard ..`.chomp.length > 0
    abort("Working tree has untracked files... refusing to continue.")
  end

  verbose(false) do
    sh "git diff-index --quiet HEAD" do |ok, res|
      if ! ok
        abort("Working tree or index is dirty... refusing to continue.")
      end
    end
  end

  `git add ..`
  `git add -f ../news`
  `git rm -rfq --cached .`

  verbose(false) do
    sh "git diff-index --quiet --cached gh-pages" do |ok, res|
      if ok
        `git reset HEAD`
        abort("Already up to date. There is nothing to do!")
      end
    end
  end

  tsha = `git write-tree`.chomp

  csha = `echo #{MESSAGE} | git commit-tree -p gh-pages #{tsha}`.chomp

  sh "git update-ref refs/heads/gh-pages #{csha}"

  `git reset HEAD`
end
