#Git tab completion
source ~/git-completion.bash
# Show branch in status line
PS1='[\W$(__git_ps1 " (%s)")]\$ '
export PROMPT_COMMAND='echo -ne "\033]0;${PWD/#$HOME/~}\007"'

# Heroku push code
#export PATH="/Library/PostgreSQL/9.1/bin/":$PATH OR
#PATH=$PATH:$HOME/.rvm/bin # Add RVM to PATH for scripting

export PATH="/usr/local/bin":$PATH
export PATH="/usr/local/sbin":$PATH
export PATH="$HOME/.rbenv/bin:$PATH"
#export PATH="$HOME/usr/local/mysql/bin:"$PATH
export PATH=$PATH:/usr/local/mysql/bin
#export PATH=$PATH:/Users/jesseocon/Development/adt-bundle-mac-x86_64-20130917/sdk/tools/
#export PATH=$PATH:/Users/jesseocon/Development/adt-bundle-mac-x86_64-20130917/sdk/platform-tools/



#export PUBLISHABLE_KEY='pk_test_or7s6io2hRIhSyMnws8vwHzF'
#export NODE_PATH="/usr/local/lib/node"
export SECRET_KEY='sk_test_clqX6lFFPoGnAMwAHHSvAj1I'
export MANDRILL_USERNAME='app15115987@heroku.com'
export MANDRILL_APIKEY='QdefnbUe5I5o3YoDJUeJdg'
export FOLIOSHINE_MANDRILL_USERNAME='app17188114@heroku.com'
export FOLIOSHINE_MANDRILL_APIKEY='8MfeJTq9VE1JXVEROsHUoQ'
export ORDRIN_API_KEY='SjE6Cr_VPo7bgT52TTk6bXggEjVT_8W9qw0Dw2iu_I8'
export ORDRIN_SECRET='FTkPKbuvr9xjwZ0rh4tN8Ak9PMk_xqdzYnCrtJ24v6Q'

# AMAZON EC2 SECTION
#alias ec='cd ~/.ec2'
#export EC2_HOME=~/.ec2
#export PATH=$PATH:$EC2_HOME/bin
#export EC2_PRIVATE_KEY=~/.ec2/pk-5SW4TFOFC5CUNPLIVP5EGNGYJI2NUITC.pem
#export EC2_CERT=~/.ec2/cert-5SW4TFOFC5CUNPLIVP5EGNGYJI2NUITC.pem
#export JAVA_HOME=/System/Library/Frameworks/JavaVM.framework/Home/

# GENERAL ALIAS SECTION
alias ll='ls -la'
alias home='cd ~'
alias up='cd ..'
alias h='history'
alias ir='irb --simple-prompt'

# SAFETYIZING DESTRUCTIVE COMMANDS
alias mv='mv -i'
alias cp='cp -i'
alias rm='rm -i'
alias df='df -h'
alias du='du -h'
alias mkdir='mkdir -p'

# Rails ALIAS SECTION FOR PRINT PARLOR
#alias mi='bundle exec rake db:migrate'
#alias gitapp='cd ~/printparlor/print-parlor && mate .'
#alias rc='cd ~/printparlor/print-parlor && rails c'
#alias rs='cd ~/printparlor/print-parlor && rails s'

# Rails ALIAS SECTION FOR AUTH FROM SCRATCH

#alias auth='cd ~/Development/authentication_from_scratch'

eval "$(rbenv init -)"
### Added by the Heroku Toolbelt
#export PATH="/usr/local/heroku/bin:$PATH"
