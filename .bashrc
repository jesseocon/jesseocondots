#Git tab completion
source ~/git-completion.bash
# Show branch in status line
PS1='[\W$(__git_ps1 " (%s)")]\$ '
export PROMPT_COMMAND='echo -ne "\033]0;${PWD/#$HOME/~}\007"'

export PATH="/usr/local/bin":$PATH
export PATH="/usr/local/sbin":$PATH
export PATH="$HOME/.rbenv/bin:$PATH"
export PATH=$PATH:/usr/local/mysql/bin

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
eval "$(rbenv init -)"
### Added by the Heroku Toolbelt
#export PATH="/usr/local/heroku/bin:$PATH"
